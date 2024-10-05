<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router/index.js';

const titleText = ref('홈 화면');

function goToHome() {
    router.replace({ path: '/' });
}

function goToAbout() {
    router.replace({ path: '/about' });
}

// 하단 내비게이션 메뉴 버튼 선택 인덱스
const navItemSelected = ref(0);

// 하단 내비게이션 메뉴 버튼 선택
function selectNavItem(index) {
    console.log(`selectNavItem called -> ${index}`);
    navItemSelected.value = index;
    if (index == 0) {
        titleText.value = '홈 화면';
        goToHome();
    } else if (index == 1) {
        titleText.value = '정보 화면';
        goToAbout();
    }

    // 드로어 닫기
    // const drawerElem = document.querySelector('#kt_app_sidebar');
    // const drawer = KTDrawer.getInstance(drawerElem);
    // if (drawer.isShown()) {
    //     drawer.hide();
    // }
}

onMounted(() => {
    console.log(`onMounted called.`);
})
</script>

<template>
    <!--begin::사이드바-->
    <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px"
        data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">

        <!--begin::로고이미지(PC)-->
        <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
            <a href="#">
                <img alt="Logo" src="/assets/media/framework-logos/go.png" class="h-25px app-sidebar-logo-default" />
                <img alt="Logo" src="/assets/media/framework-logos/go.png" class="h-20px app-sidebar-logo-minimize" />
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
                                <span class="menu-title fs-2">대시보드</span>
                                <span class="menu-arrow"></span>
                            </span>
                            <!--end:메뉴링크-->
                            <!--begin:서브메뉴-->
                            <div class="menu-sub menu-sub-accordion">
                                <!--begin:서브메뉴 아이템 1-->
                                <div class="menu-item">
                                    <div class="menu-link" @click="selectNavItem(0)">
                                        <span class="menu-bullet">
                                            <span class="bullet bullet-dot fs-1"></span>
                                        </span>
                                        <span class="menu-title fs-2">홈</span>
                                    </div>
                                </div>
                                <!--begin:서브메뉴 아이템 2-->
                                <div class="menu-item">
                                    <div class="menu-link" @click="selectNavItem(1)">
                                        <span class="menu-bullet">
                                            <span class="bullet bullet-dot fs-1"></span>
                                        </span>
                                        <span class="menu-title fs-2">프로필</span>
                                    </div>
                                </div>
                            </div>
                            <!--end::서브메뉴-->
                        </div>
                        <!--end:메뉴 아이템-->

                        <!--begin:메뉴 아이템-->
                        <div class="menu-item pt-5">

                            <!--begin:메뉴 내용-->
                            <div class="menu-content">
                                <span class="menu-heading fw-bold text-uppercase fs-5">사용자</span>
                            </div>
                            <!--end:메뉴 내용-->

                        </div>
                        <!--end:메뉴 아이템-->

                        <!--begin:메뉴 아이템-->
                        <div class="menu-item">

                            <div class="menu-link" @click="selectNavItem(1)">
                                <span class="menu-icon">
                                    <i class="ki-duotone ki-code fs-1">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                        <span class="path3"></span>
                                        <span class="path4"></span>
                                    </i>
                                </span>
                                <span class="menu-title fs-2">설정</span>
                            </div>

                        </div>
                        <!--end:메뉴 아이템-->

                    </div>
                    <!--end::메뉴-->

                </div>
            </div>

        </div>
        <!--end::사이드바 메뉴-->

    </div>
    <!--end::사이드바-->
</template>