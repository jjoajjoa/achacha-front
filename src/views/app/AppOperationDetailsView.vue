<script setup>
import MainBottomNavBar from '@/components/main/MainBottomNavBar.vue';
import MainSidebar from '@/components/main/MainSidebar.vue';
import { ref, onMounted } from 'vue';

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
var polyline = null;

// 카카오맵 지도 로드
const loadMap = () => {
    const container = document.getElementById('map'); // 지도 객체
    const options = {
        center: new window.kakao.maps.LatLng(36.5, 127.5), // 지도 첫 화면 좌표
        level: 12, // 지도 줌 배율
    };

    // 지도 만들기
    const map = new window.kakao.maps.Map(container, options);

    // 지도에 표시할 선을 생성
    polyline = new window.kakao.maps.Polyline({
        path: linePath.value, // 선을 구성하는 좌표배열
        strokeWeight: 5, // 선의 두께
        strokeColor: '#FFAE00', // 선의 색깔
        strokeOpacity: 0.7, // 선의 불투명도. 1에서 0 사이의 값이며 0에 가까울수록 투명
        strokeStyle: 'solid', // 선의 스타일
    });

    // 지도에 선을 표시
    polyline.setMap(map);
};

// gps정보가 업데이트될 때마다 linePath에 좌표정보를 추가
const updatePolyline = (lat, lng) => {
    if (!polyline) {
        console.warn('Polyline not initialized yet.');
        return;
    }

    const newLinePath = linePath.value.slice();
    newLinePath.push({
        lat: lat, lng: lng
    })

    linePath.value.push(new window.kakao.maps.LatLng(lat, lng)); // 좌표정보 추가
    polyline.setPath(linePath.value); // polyLine 경로를 업데이트함
};

// 테스트용 gps 더미데이터 생성기
const simulateGpsData = () => {
    // 시작 좌표
    let initLat = 37.515732;
    let initLong = 127.033695;
    setInterval(() => {
        const newLat = Math.random() * 0.01 - 0.005; // 랜덤 위도 시뮬레이션
        const newLng = Math.random() * 0.01 - 0.005; // 랜덤 경도 시뮬레이션
        initLat += newLat;
        initLong += newLng;
        updatePolyline(initLat, initLong); // 폴리라인 업데이트
    }, 1000); // 3초마다 업데이트
};

// 페이지가 로드될 때 스크립트와 지도 초기화
onMounted(async () => {
    try {
        await loadScript(); // 카카오맵 스크립트 불러오기
        loadMap(); // 카카오맵 초기화
        simulateGpsData(); // GPS 더미데이터 집어넣기 (테스트)
    } catch (error) {
        console.error('Error loading Kakao Maps script:', error);
    }
});
</script>

<template>
    <div id="mainPage" class="d-flex flex-column">

        <div id="headerPart" class="d-flex flex-stack flex-shrink-0 px-4 py-2">

            <!--begin::햄버거 메뉴-->
            <div class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
                <div class="btn btn-icon btn-active-color-primary" id="kt_app_sidebar_mobile_toggle">
                    <i class="ki-solid ki-abstract-14 fs-2x text-white">
                    </i>
                </div>
                <span class="fs-1 text-white">홈</span>
            </div>
            <!--end::햄버거 메뉴-->

            <!--begin::설정 아이콘-->
            <span class="menu-icon">
                <i class="ki-solid ki-setting-2 fs-3x text-white">
                </i>
            </span>
            <!--begin::설정 아이콘-->

        </div>


        <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <!--begin::사이드바-->
            <MainSidebar />
            <!--end::사이드바-->

            <!--begin::메인화면-->
            <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                <RouterView id="bodyPart" class="flex-grow-1 p-0" />
                <!-- Begin::Kakao Map -->
                <div>
                    <div id="map" class="mt-10"></div>
                </div>
                <!-- end::Kakao Map -->
                <!--start::상세페이지 내용정보-->
                <div style="display: flex; justify-content: center;">
                    <table border="1" style="border-collapse: collapse; width: 80%; border: none">
                        <tr>
                            <td colspan="3" rowspan="2">운행일자</td>
                            <td colspan="3">2024-10-02</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td colspan="3">운행거리</td>
                            <td colspan="3">평균속도</td>
                        </tr>
                        <tr>
                            <td colspan="3">1015KM</td>
                            <td colspan="3">100KM/H</td>
                        </tr>
                        <tr>
                            <td colspan="3">총운행시간</td>
                            <td colspan="3">14:14:24</td>
                        </tr>
                        <tr>
                            <td colspan="3">졸음감지 횟수</td>
                            <td colspan="3">3회
                                <button style="border: none; background-color: white;" type="button"
                                    data-bs-toggle="modal" data-bs-target="#kt_modal_stacked_1">
                                    <img src="@/assets/heart.png" style="width: 20px;">
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>최저</td>
                            <td><img src="@/assets/heart.png" style="width: 20px;">62</td>
                            <td>평균</td>
                            <td><img src="@/assets/heart.png" style="width: 20px;">82</td>
                            <td>최고</td>
                            <td><img src="@/assets/heart.png" style="width: 20px;">112</td>
                        </tr>
                    </table>
                </div>
                <!--end::상세페이지 내용정보-->
                <!--start:: 졸음감지횟수 모달 시작-->
                <div class="modal fade" tabindex="-1" id="kt_modal_stacked_1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title">졸음감지 횟수 결과</h3>

                                <!--begin::Close-->
                                <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                                    aria-label="Close">
                                    <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                            class="path2"></span></i>
                                </div>
                                <!--end::Close-->
                            </div>

                            <div class="modal-body">
                                <table border="1" style="border-collapse: collapse; width: 100%; border: none">
                                    <tr>
                                        <td colspan="3">운행일자</td>
                                        <td colspan="3">2024-10-02</td>
                                    </tr>
                                    <tr>
                                    </tr>
                                    <tr>
                                        <td colspan="1">운행시간</td>
                                        <td colspan="2">장소</td>
                                        <td colspan="1"><img src="@/assets/heart.png" style="width: 20px;">심박수</td>
                                    </tr>
                                    <tr>
                                        <td colspan="1">12:34</td>
                                        <td colspan="2">언주로 703</td>
                                        <td colspan="1"><img src="@/assets/heart.png" style="width: 20px;">74</td>
                                    </tr>
                                    <tr>
                                        <td colspan="1">15:34</td>
                                        <td colspan="2">언주로 902</td>
                                        <td colspan="1"><img src="@/assets/heart.png" style="width: 20px;">71</td>
                                    </tr>
                                    <tr>
                                        <td colspan="1">16:54</td>
                                        <td colspan="2">언주로 10-2</td>
                                        <td colspan="1"><img src="@/assets/heart.png" style="width: 20px;">68</td>
                                    </tr>
                                </table>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">닫기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end:: 졸음감지횟수 모달 시작-->
            </div>
            <!--end::메인화면-->
        </div>

        <!--begin::하단내비게이션-->
        <div id="footerPart" class="flex-shrink-0 p-0 bg-danger">
            <MainBottomNavBar />
        </div>
        <!--end::하단내비게이션-->

    </div>

</template>
<style>
/*===== begin::지도 api =====*/
#map {
    width: 80vw;
    height: 40vh;
    margin: 0 auto;
    /* 수평 중앙 정렬 및 여백 */
}

td {
    padding-top: 20px;
    /* 상단에 여백을 추가 */
    text-align: center;
}

/*===== end::지도 api =====*/
</style>
