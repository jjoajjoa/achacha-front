<script setup>
import { onMounted } from 'vue';
import MainSidebar from '@/components/main/MainSidebar.vue';

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

// 카카오맵 지도 로드
const loadMap = () => {
  const container = document.getElementById('map'); // 지도 객체
  const options = {
    center: new window.kakao.maps.LatLng(36.5, 127.5), // 지도 첫 화면 좌표
    level: 12, // 지도 줌 배율
  };

  // 지도 만들기
  new window.kakao.maps.Map(container, options);
};

// 페이지가 로드될 때 스크립트와 지도 초기화
onMounted(async () => {
  await loadScript(); // 카카오맵 스크립트 불러오기
  loadMap(); // 카카오맵 초기화
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
