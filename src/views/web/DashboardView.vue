<script setup>
import MainSidebar from '@/components/main/MainSidebar.vue';
</script>

<template>
    <div id="mainPage" class="d-flex flex-column">

        <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <!--begin::사이드바-->
            <MainSidebar />
            <!--end::사이드바-->

            <!--begin::메인화면-->
            <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                <RouterView id="bodyPart" class="flex-grow-1 p-0" />
                <h1>대쉬보드 테스트중입니당</h1>
            </div>
            <!--end::메인화면-->
        </div>

    </div>

</template>