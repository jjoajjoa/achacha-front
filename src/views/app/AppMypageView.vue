<script setup>
import MainBottomNavBar from '@/components/main/MainBottomNavBar.vue';
import MainSidebar from '@/components/main/MainSidebar.vue';
</script>

<template>
    <div id="mainPage" class="d-flex flex-column">

        <div id="headerPart" class="d-flex flex-stack flex-shrink-0 px-4 py-2" style="background-color:#029EBE;">

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
                <!--begin:: 프로필사진, 소속, 이름-->
                <div class="d-flex flex-row vh-30">

                    <!--begin::프로필사진-->
                    <div class="col-6">

                        <div class="card ms-10 mt-5" style="width: 10rem;">
                            <img src="@\assets\사람사진.png" class="card-img-top" style="width: 10rem;" alt="...">

                        </div>


                    </div>
                    <!--end::프로필사진-->

                    <!--begin::소속, 이름-->
                    <div class="col-6">

                        <div class="h-60px fw-bold mt-10 ms-5 fs-4x">
                            <p>xx물류</p>
                        </div>

                        <div class="h-60px fw-bold mt-10 ms-5 fs-4x">
                            <p>김배달</p>
                        </div>

                    </div>
                    <!--end::소속, 이름-->

                </div>
                <!--end:: 프로필사진, 소속, 이름-->
                <!--begin::비밀번호 변경 start-->
                <div style="text-align: center; margin-top: 20px;">
                    <h2>비밀번호 변경</h2>
                    <div>
                        <input type="password" class="mt-5 mx-10 w-300px vh-6 input" placeholder="현재 비밀번호"
                            style="text-align: center;">
                    </div>
                    <div>
                        <input type="password" class="mt-5 mx-10 w-300px vh-6 input" placeholder="새 비밀번호"
                            style="text-align: center;">
                    </div>
                    <div>
                        <input type="password" class="mt-5 mx-10 w-300px vh-6 input" placeholder="새 비밀번호 확인"
                            style="text-align: center;">
                    </div>
                    
                    <button class="btn btn-achacha" style="margin-top: 20px;">비밀번호 변경</button>
                </div>
                <!--end::비밀번호 변경 end-->
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