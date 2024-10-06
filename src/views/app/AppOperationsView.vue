<script setup>
import MainBottomNavBar from '@/components/main/MainBottomNavBar.vue';
import MainSidebar from '@/components/main/MainSidebar.vue';
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
                <h1>앱 전체기록 테스트중입니당</h1>
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