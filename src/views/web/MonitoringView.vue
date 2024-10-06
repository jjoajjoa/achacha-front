<script setup>
import { onMounted } from 'vue';
import MainSidebar from '@/components/main/MainSidebar.vue';

const loadScript = () => {
  return new Promise((resolve) => {
    if (window.kakao && window.kakao.maps) {
      // If Kakao Maps is already loaded, resolve immediately
      resolve();
    } else {
      // Dynamically create a script element for Kakao Maps
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a4128381b093c4d13c6d256b2bd39303&autoload=false`;
      script.onload = () => {
        window.kakao.maps.load(() => {
          resolve(); // Resolve the promise once Kakao Maps is loaded
        });
      };
      document.head.appendChild(script);
    }
  });
};

const loadMap = () => {
  const container = document.getElementById('map'); // The map container
  const options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // Map's center coordinates
    level: 3, // Map's zoom level
  };

  // Create and display the map
  new window.kakao.maps.Map(container, options);
};

onMounted(async () => {
  await loadScript(); // Load the Kakao Map script
  loadMap(); // Initialize the map
});
</script>

<template>
  <KakaoMap />
  <div id="mainPage" class="d-flex flex-column">
    <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
      <!-- Sidebar Component -->
      <MainSidebar />

      <!-- Main Content -->
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <RouterView id="bodyPart" class="flex-grow-1 p-0" />
        <h1>전체현황 테스트중입니당</h1>

        <!-- Kakao Map Container -->
        <div>
          <h2>카카오 맵 보기</h2>
          <div id="map"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
