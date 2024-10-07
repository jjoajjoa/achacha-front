<script setup>
import { ref, onMounted } from 'vue';
import MainSidebar from '@/components/main/MainSidebar.vue';

// 트럭의 경로: 좌표 점들의 배열
const linePath = ref([]);

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

// 지도 및 선 초기화
let polyline = null;

// 카카오맵 지도 로드
const loadMap = () => {
  const container = document.getElementById('map'); // 지도 객체
  const options = {
    center: new window.kakao.maps.LatLng(36.5, 127.5), // 지도 첫 화면 좌표
    level: 12, // 지도 줌 배율
  };

  // 지도 만들기
  const map = new window.kakao.maps.Map(container, options);

  // 지도에 표시할 선을 생성합니다
  polyline = new window.kakao.maps.Polyline({
    path: linePath.value, // 선을 구성하는 좌표배열
    strokeWeight: 5, // 선의 두께
    strokeColor: '#FFAE00', // 선의 색깔
    strokeOpacity: 0.7, // 선의 불투명도. 1에서 0 사이의 값이며 0에 가까울수록 투명
    strokeStyle: 'solid', // 선의 스타일
  });

  // 지도에 선을 표시합니다
  polyline.setMap(map);
};

// gps정보가 업데이트될 때마다 linePath에 좌표정보를 추가
const updatePolyline = (lat, lng) => {
  if (!polyline) {
    console.warn('Polyline not initialized yet.');
    return;
  }

  linePath.value.push(new window.kakao.maps.LatLng(lat, lng)); // 좌표정보 추가
  polyline.setPath(linePath.value); // polyLine 경로를 업데이트함
};

// 테스트용 gps 더미데이터 생성기
const simulateGpsData = () => {
  setInterval(() => {
    const newLat = 36.5 + Math.random() * 0.01; // 랜덤 위도 시뮬레이션
    const newLng = 127.5 + Math.random() * 0.01; // 랜덤 경도 시뮬레이션
    updatePolyline(newLat, newLng);
  }, 3000); // 3초마다 업데이트
};

// 페이지가 로드될 때 스크립트와 지도 초기화
onMounted(async () => {
  try {
    loadMap(); // 카카오맵 초기화
    await loadScript(); // 카카오맵 스크립트 불러오기
    simulateGpsData(); // GPS 더미데이터 집어넣기 (테스트)
  } catch (error) {
    console.error('Error loading Kakao Maps script:', error);
  }
});


</script>



<template>
  <div id="mainPage" class="d-flex flex-column">
    <div class="flex-column flex-row-fluid" id="kt_app_wrapper">
      <!-- Sidebar Component -->
      <MainSidebar />

      <!-- Main Content -->
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">

        <!-- Begin::Kakao Map -->
        <div>
          <div id="map" class="mt-0"></div>
        </div>
        <!-- end::Kakao Map -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
