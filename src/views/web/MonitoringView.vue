<script setup>

import { ref, onMounted } from 'vue';
import MainSidebar from '@/components/main/MainSidebar.vue';
import truckImage from '@/assets/truck.png'; // Import image properly

const apiKey = process.env.VUE_APP_KAKAOMAP_KEY;


// 트럭의 경로: 좌표 점들의 배열
const linePath = ref([]);



// 마커들을 담아둘 배열
const markers = ref([]);

// 서버에서 받아온 마커들의 배열
// const importedMarkers = ref([]);

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
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
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

  const imageSize = new window.kakao.maps.Size(64, 69) // 마커이미지의 크기
  const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커 이미지 안의 좌표
  const markerImage = new window.kakao.maps.MarkerImage(truckImage, imageSize, imageOption)




  // // 마커 위치를 저장하는 배열
  // const markerPosition = ref([]);
  // markerPosition.value = null;

  // // markerPosition 배열에 새로운 좌표를 집어넣는 함수(새로운 차량이 운행을 시작했을 경우 실행하면 됨)
  // const addMarkerToMP = ((name,lat,lng) => {

  //   markerPosition.value.push({
  //     title: name,
  //     latlng: new window.kakao.maps.LatLng(lat, lng)
  //   })
  // })

  // 마커 위치를 저장하는 배열
  var markerPosition = [
    {
      title: '김세헌',
      latlng: new window.kakao.maps.LatLng(37, 127.1)
    },
    {
      title: '김수현',
      latlng: new window.kakao.maps.LatLng(38, 127.4)
    },
    {
      title: '김아름',
      latlng: new window.kakao.maps.LatLng(40, 127.2)
    },
    {
      title: '김영욱',
      latlng: new window.kakao.maps.LatLng(36, 127.3)
    },
    {
      title: '이찬영',
      latlng: new window.kakao.maps.LatLng(39, 127.2)
    },
    {
      title: '최준호',
      latlng: new window.kakao.maps.LatLng(37.5, 127.1)
    },

  ]


  // 마커 생성
  for (let i = 0; i < markerPosition.length; i++) {
    let marker = new window.kakao.maps.Marker({
      position: markerPosition[i].latlng,
      title: markerPosition[i].title,
      image: markerImage
    });
    markers.value.push(marker);

    // 마커 클릭 이벤트 등록
    window.kakao.maps.event.addListener(marker, 'click', function () {
      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">현재 졸음점수: \${score}</div>`,
        removable: true,
      });
      infowindow.open(map, marker);
    });

    // 마커를 지도에 표시
    marker.setMap(map);
  }

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

// 새로운 GPS 데이터를 사용하여 폴리라인을 업데이트하는 함수
const updatePolyline = (lat, lng) => {
  if (!polyline) {
    console.warn('Polyline not initialized yet.');
    return;
  }

  // 새로운 좌표를 경로에 추가
  linePath.value.push(new window.kakao.maps.LatLng(lat, lng));
  polyline.setPath(linePath.value); // 지도에서 폴리라인 경로 업데이트
};

// 새로운 GPS 데이터를 사용하여 마커의 위치를 업데이트하는 함수
const updateMarker = () => {


  // if (length(importedMarkers.value)!=length(markerPosition.value)) {

  // } else {

  // }
  
  markers.value.forEach((marker) => {
      marker.setPosition(new window.kakao.maps.LatLng(marker.getPosition().getLat() + (vecGen().latVec), marker.getPosition().getLng() + (vecGen().lngVec)));
    });


};

// 무작위 벡터 생성기
const vecGen = () => {
  const newLat = Math.random() * 0.01 - 0.005; // 랜덤 위도 변화량
  const newLng = Math.random() * 0.01 - 0.005; // 랜덤 경도 변화량
  const coord = { latVec: newLat, lngVec: newLng };
  return coord;
}


// GPS 데이터 업데이트를 시뮬레이션하는 함수 (테스트용)
const simulateGpsData = () => {
  vecGen();
  let initLat = 37.515732;
  let initLong = 127.033695;
  setInterval(() => {
    initLat += vecGen().latVec;
    initLong += vecGen().lngVec;
    updatePolyline(initLat, initLong); // 새로운 좌표로 폴리라인 업데이트
    updateMarker(); // 새로운 좌표로 마커 업데이트
  }, 1000); // 1초마다 업데이트
};

// 대시보드 표시 상태를 제어하는 변수
const showDashboard = ref(false);  // 스위치가 꺼져있으면 false, 켜져있으면 true


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
      <div style="position: relative; z-index: 1000;">
        <MainSidebar />
      </div>

      <!-- 메인 콘텐츠 -->
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <!-- Begin::Kakao Map -->
        <div>
          <div id="map" class="mt-0" style="position: relative; height: 100vh; width: 100%;"></div>

          <!-- Begin::지도 위에 표시하는 영역 -->
          <div style="position: absolute; top: 20px; z-index: 999;">

            <!-- begin::대시보드 영역 -->
            <div style="margin-left: 22em;">

              <!-- Begin::대시보드 스위치 버튼 영역 -->
              <div class="achacha-back-light-gray p-4 rounded" style="width: 14rem; border: 2px solid black;">
                <div class="form-check form-switch">
                  <input v-model="showDashboard" class="form-check-input" type="checkbox" role="switch"
                    id="flexSwitchCheckDefault">
                  <label class="form-check-label fw-bold text-dark" for="flexSwitchCheckDefault">대시보드 보기</label>
                </div>
              </div>
              <!-- end::대시보드 스위치 버튼 영역 -->

              <!-- begin::대시보드 스위치 눌렀을 때의 대시보드 영역  -->
              <div v-if="showDashboard">

                <div class="card mt-5 achacha-back-light-gray"
                  style="width: 14rem; height: 14rem; border: 2px solid black;">
                  <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
                    <h2 class="mb-5">전체차량대수</h2>
                    <h2>26대</h2>
                  </div>
                </div>

                <div class="card mt-5 achacha-back-light-gray"
                  style="width: 14rem; height: 14rem; border: 2px solid black;">
                  <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
                    <h4 class="mb-5">운전부적합직원</h4>
                    <h2>9명</h2>
                  </div>
                </div>

                <div class="card mt-5 achacha-back-light-gray"
                  style="width: 14rem; height: 14rem; border: 2px solid black;">
                  <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
                    <h4 class="mb-5">운행중차량대수</h4>
                    <h2>12대</h2>
                  </div>
                </div>

              </div>
              <!-- begin::대시보드 스위치 눌렀을 때의 대시보드 영역  -->
            </div>
            <!-- end::대시보드 영역 -->



          </div>
          <!-- End::지도 위에 표시하는 영역 -->

          <div style="position: absolute; top: 46em; left: 80%; z-index: 999;">
            <div class="card mt-5" style="width: 21rem; height: 15rem; border: 2px solid black;">
              <div class="card-body">

                <div class="d-flex flex-column">

                  <div class="d-flex flex-row">
                    <img src="@/assets/truck.png" style="width: 3em;">
                    <h1 class="ms-5">정상 운전</h1>
                  </div>

                  <div class="d-flex flex-row">
                    <img src="@/assets/bluetruck.png" style="width: 3em;">
                    <h1 class="ms-5">휴식중</h1>
                  </div>

                  <div class="d-flex flex-row">
                    <img src="@/assets/redtruck.png" style="width: 3em;">
                    <h1 class="ms-5">졸음운전 주의</h1>
                  </div>

                  <div class="d-flex flex-row">
                    <img src="@/assets/redredtruck.png" style="width: 3em;">
                    <h1 class="ms-5">과로운전 주의</h1>
                  </div>

                </div>

              </div>
            </div>
          </div>


        </div>
        <!-- end::Kakao Map -->

      </div>

      <!-- Begin::Kakao Map -->
      <div>
        <KakaoMap />
        <div id="map" class="mt-0"></div>
      </div>
      <!-- end::Kakao Map -->
    </div>

  </div>
</template>
