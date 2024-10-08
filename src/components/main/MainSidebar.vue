<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router/index.js';

const titleText = ref('홈 화면');

const selectedMenuIndex = ref(null); // 선택된 메뉴 인덱스를 저장할 ref

function goToProfile() {
    router.replace({ path: '/' });
}

function goToDashboard() {
    router.replace({ path: '/dashboard' });
}

function goToMonitoring() {
    router.replace({ path: '/monitoring' });
}

// 하단 내비게이션 메뉴 버튼 선택
function selectNavItem(index) {
    console.log(`selectNavItem called -> ${index}`);
    selectedMenuIndex.value = index; // 선택된 메뉴 인덱스 업데이트
    if (index === 0) {
        titleText.value = '프로필 화면';
        goToProfile();
    } else if (index === 1) {
        titleText.value = '대쉬보드 화면';
        goToDashboard();
    } else if (index === 2) {
        titleText.value = '전체현황 화면';
        goToMonitoring();
    }

    // 드로어 닫기
    // const drawerElem = document.querySelector('#kt_app_sidebar');
    // const drawer = KTDrawer.getInstance(drawerElem);
    // if (drawer.isShown()) {
    //     drawer.hide();
    // }
}

const showCard = ref(false); // 카드 표시 상태를 제어하는 ref

function toggleCard() {
    showCard.value = !showCard.value; // 카드 표시 상태 토글
}

onMounted(() => {
    console.log(`onMounted called.`);
})
</script>

<template>
   
        <!--begin::사이드바-->
        <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar"
            data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
            data-kt-drawer-width="225px" data-kt-drawer-direction="start"
            data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle" style="background-color: #F6F6F6;">

            <!--begin::로고이미지(PC)-->
            <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                <a href="#">
                    <img alt="Logo" src="@/assets/achachalogo.png"
                        class="h-50px app-sidebar-logo-default" />
                    <img alt="Logo" src="/assets/media/framework-logos/go.png"
                        class="h-20px app-sidebar-logo-minimize" />
                </a>
                <div id="kt_app_sidebar_toggle"
                    class="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
                    data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
                    data-kt-toggle-name="app-sidebar-minimize">
                    <i class="ki-duotone ki-black-left-line fs-3 rotate-180">
                        <span class="path1"></span>
                        <span class="path2"></span>
                    </i>
                </div>
            </div>
            <!--end::로고이미지-->

            <!--begin::사이드바 메뉴-->
            <div class="app-sidebar-menu overflow-hidden flex-column-fluid">
                <div id="kt_app_sidebar_menu_wrapper" class="app-sidebar-wrapper">
                    <div id="kt_app_sidebar_menu_scroll" class="scroll-y my-5 mx-3" data-kt-scroll="true"
                        data-kt-scroll-activate="true" data-kt-scroll-height="auto"
                        data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
                        data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px"
                        data-kt-scroll-save-state="true">
                        <!--begin:메뉴-->
                        <div class="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6"
                            id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">

                            <!--begin:메뉴 아이템-->
                            <div data-kt-menu-trigger="click" class="menu-item here show menu-accordion">
                                <!--begin:메뉴링크-->
                                <span class="menu-link">
                                    <span class="menu-icon">
                                        <i class="ki-duotone ki-element-11 fs-1 text-primary">
                                            <span class="path1"></span>
                                            <span class="path2"></span>
                                            <span class="path3"></span>
                                            <span class="path4"></span>
                                        </i>
                                    </span>
                                    <span class="menu-title fs-2 fw-bold text-dark">프로필</span>
                                    <span class="menu-arrow"></span>
                                </span>
                                <!--end:메뉴링크-->
                                <!--begin:서브메뉴-->
                                <div class="menu-sub menu-sub-accordion">
                                    <!--begin:서브메뉴 아이템 1-->
                                    <div class="menu-item rounded" :class="{ 'gg-active': selectedMenuIndex === 1 }">
                                        <div class="menu-link" @click="selectNavItem(1)">
                                            <span class="menu-bullet">
                                                <span class="bullet bullet-dot fs-1"></span>
                                            </span>
                                            <span class="menu-title fs-2 fw-bold text-dark">대시보드</span>
                                        </div>
                                    </div>
                                    <!--begin:서브메뉴 아이템 2-->
                                    <div class="menu-item rounded" :class="{ 'gg-active': selectedMenuIndex === 2 }">
                                        <div class="menu-link" @click="selectNavItem(2)">
                                            <span class="menu-bullet">
                                                <span class="bullet bullet-dot fs-1"></span>
                                            </span>
                                            <span class="menu-title fs-2 fw-bold text-dark">전체현황</span>
                                        </div>
                                    </div>
                                    <!--begin:서브메뉴 아이템 3-->
                                    <div class="menu-item rounded" :class="{ 'gg-active': selectedMenuIndex === 3 }">
                                        <div class="menu-link" @click="selectNavItem(3)">
                                            <span class="menu-bullet">
                                                <span class="bullet bullet-dot fs-1"></span>
                                            </span>
                                            <span class="menu-title fs-2 fw-bold text-dark">실시간운행리스트</span>
                                        </div>
                                    </div>
                                    <!--begin:서브메뉴 아이템 4-->
                                    <div class="menu-item rounded" :class="{ 'gg-active': selectedMenuIndex === 4 }">
                                        <div class="menu-link" @click="selectNavItem(4)">
                                            <span class="menu-bullet">
                                                <span class="bullet bullet-dot fs-1"></span>
                                            </span>
                                            <span class="menu-title fs-2 fw-bold text-dark">전체운행리스트</span>
                                        </div>
                                    </div>
                                    <!--begin:서브메뉴 아이템 5-->
                                    <div class="menu-item rounded" :class="{ 'gg-active': selectedMenuIndex === 5 }">
                                        <div class="menu-link" @click="selectNavItem(5)">
                                            <span class="menu-bullet">
                                                <span class="bullet bullet-dot fs-1"></span>
                                            </span>
                                            <span class="menu-title fs-2 fw-bold text-dark">직원목록</span>
                                        </div>
                                    </div>
                                </div>
                                <!--end::서브메뉴-->
                            </div>
                            <!--end:메뉴 아이템-->

                            <!-- begin::사이드바 하단 아이콘 -->
                            <div class="d-flex flex-row" style="margin-top: 30em; border-top: 2px solid black;">

                                <div class="col-3"></div>

                                <div class="col-3"></div>

                                <div class="col-3 mt-3">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                            fill="currentColor" class="bi bi-gear text-dark" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                            <path
                                                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                        </svg>
                                    </a>
                                </div>

                                <!-- begin::졸음 알림 모달 -->
                                <div class="col-3 mt-3">
                                    <a href="#" @click="toggleCard">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                            fill="currentColor" class="bi bi-exclamation-triangle text-danger"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
                                            <path
                                                d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                                        </svg>
                                    </a>
                                </div>
                                <!-- end::졸음 알림 모달 -->

                                <!-- <div v-if="showCard" style="position: absolute; top: 1em; left: 80%; z-index: 1500;">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">졸음 경보</h5>
                                            <p class="card-text">졸음 상태가 감지되었습니다. 주의하세요!</p>
                                            <button class="btn btn-danger" @click="toggleCard">닫기</button>
                                        </div>
                                    </div>
                                </div> -->



                            </div>
                            <!-- begin::사이드바 하단 아이콘 -->


                        </div>
                        <!--end::메뉴-->

                    </div>
                </div>

            </div>
            <!--end::사이드바 메뉴-->

        </div>
        <!--end::사이드바-->
    
</template>

<style scoped>
.gg-active {
    background-color: #D3E1FC;
    /* 빨간색으로 강조 */
    font-weight: bold;
}
</style>
