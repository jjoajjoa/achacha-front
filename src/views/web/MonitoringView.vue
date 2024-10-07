<script setup>
import { ref, onMounted } from 'vue';
import MainSidebar from '@/components/main/MainSidebar.vue';

// 트럭의 경로: 좌표 점들의 배열
const linePath = ref([]);

// 지도 및 선 초기화
var polyline = null;
var map = null;

// 카카오맵 스크립트 로드
const loadScript = () => {
  return new Promise((resolve) => {
    // 카카오맵이 로드되었는지 확인함
    if (window.kakao && window.kakao.maps) {
      resolve();
    } else {
      // 카카오맵이 로드되지 않은 경우 새로운 스크립트 생성
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a4128381b093c4d13c6d256b2bd39303&autoload=false`;
      script.onload = () => {
        window.kakao.maps.load(() => {
          resolve();
        });
      };
      document.head.appendChild(script);
    }
  });
};

// 카카오 맵, 마커, 폴리라인을 초기화하는 함수
const initializeMap = () => {
  // 지도 컨테이너와 옵션 정의
  const mapContainer = document.getElementById('map'); // 지도를 표시할 div 요소
  const mapOption = {
    center: new window.kakao.maps.LatLng(37.515732, 127.033695), // 지도 중심 좌표
    level: 13, // 지도 확대 레벨
  };

  // 맵 인스턴스를 생성하고 전역 맵 변수에 할당
  map = new window.kakao.maps.Map(mapContainer, mapOption);

  var imageSrc = require('@/assets/truck.png'), // 마커이미지의 주소입니다    
    imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.


  var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

  // 마커 위치 생성
  var markerPosition = [
    {
      title: '김세헌',
      latlng: new window.kakao.maps.LatLng(37, 127.1)
    },
    {
      title: '김수현',
      latlng: new window.kakao.maps.LatLng(37.1, 127.4)
    },
    {
      title: '김아름',
      latlng: new window.kakao.maps.LatLng(37.2, 127.2)
    },
    {
      title: '김영욱',
      latlng: new window.kakao.maps.LatLng(37.3, 127.3)
    },
    {
      title: '이찬영',
      latlng: new window.kakao.maps.LatLng(37.4, 127.2)
    },
    {
      title: '최준호',
      latlng: new window.kakao.maps.LatLng(37.5, 127.1)
    },

  ]

  // 마커들을 담아둘 배열
  var markers = [];

  // 마커 생성
  for (var i = 0; i < markerPosition.length; i++) {
    var marker = new window.kakao.maps.Marker({
      position: markerPosition[i].latlng,
      title: markerPosition[i].title,
      image: markerImage
    });
    markers.push(marker);
  }

  // 마커를 지도에 표시
  for (var j = 0; j < markers.length; j++) {
    markers[j].setMap(map);
  }

  // 마커 위에 표시될 안내창
  var iwContent = '<div style="padding:5px;">현재 졸음점수: 30</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true;

  // 인포윈도우를 생성합니다
  var infowindow = new window.kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable
  });

  // 마커에 클릭이벤트를 등록합니다
  window.kakao.maps.event.addListener(marker, 'click', function () {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);
  });


  // 폴리라인 생성 및 초기화
  polyline = new window.kakao.maps.Polyline({
    path: linePath.value,
    strokeWeight: 5, // 선의 두께
    strokeColor: '#FFAE00', // 선의 색깔
    strokeOpacity: 0.7, // 선의 불투명도
    strokeStyle: 'solid', // 선의 스타일
  });

  // 폴리라인을 지도에 표시
  polyline.setMap(map);
};

// 새로운 GPS 데이터를 사용하여 폴리라인을 동적으로 업데이트하는 함수
const updatePolyline = (lat, lng) => {
  if (!polyline) {
    console.warn('Polyline not initialized yet.');
    return;
  }

  // 새로운 좌표를 경로에 추가
  linePath.value.push(new window.kakao.maps.LatLng(lat, lng));
  polyline.setPath(linePath.value); // 지도에서 폴리라인 경로 업데이트
};

// GPS 데이터 업데이트를 시뮬레이션하는 함수 (테스트용)
const simulateGpsData = () => {
  let initLat = 37.515732;
  let initLong = 127.033695;
  setInterval(() => {
    const newLat = Math.random() * 0.01 - 0.005; // 랜덤 위도 변화량
    const newLng = Math.random() * 0.01 - 0.005; // 랜덤 경도 변화량
    initLat += newLat;
    initLong += newLng;
    updatePolyline(initLat, initLong); // 새로운 좌표로 폴리라인 업데이트
  }, 1000); // 1초마다 업데이트
};

// Vue 컴포넌트가 마운트된 후 지도를 초기화하는 라이프사이클 훅
onMounted(async () => {
  try {
    await loadScript(); // 카카오맵 스크립트 불러오기
    initializeMap(); // 지도, 마커, 폴리라인 초기화
    simulateGpsData(); // GPS 데이터 시뮬레이션 시작 (추적용)
  } catch (error) {
    console.error('Error loading Kakao Maps script or initializing map:', error);
  }
});
</script>

<template>
  <div id="mainPage" class="d-flex flex-column">
    <div class="flex-column flex-row-fluid" id="kt_app_wrapper">
      <!-- 사이드바 컴포넌트 -->
      <MainSidebar />

      <!-- 메인 콘텐츠 -->
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <!-- Begin::Kakao Map -->
        <div>
          <div id="map"></div> <!-- 지도 컨테이너 -->
        </div>
        <!-- end::Kakao Map -->
      </div>
    </div>
  </div>
</template>