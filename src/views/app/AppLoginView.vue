<script setup>
import MainBottomNavBar from '@/components/main/MainBottomNavBar.vue';
import MainSidebar from '@/components/main/MainSidebar.vue';
</script>

<template>
    <div id="mainPage" class="d-flex flex-column achacha-back-light-gray">

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

                <!--begin::로고 & 회사이름-->
                <div class="d-flex flex-column  vh-40 tomato">

                    <!--begin::로고사진-->
                    <div class="card align-self-center mt-40 " style="width: 10rem;">
                        <img src="@\assets\logo1.png" class="card-img-top" alt="...">

                    </div>
                    <!--end::로고사진-->

                    <div class="align-self-center" style="font-size: 25px;">
                        <p>아차차</p>
                    </div>

                </div>
                <!--end::로고 & 회사이름-->

                <!--begin::로고&회사이름 아래부분-->
                <div class="d-flex flex-column vh-40 tomato">
                    <!--begin::회사 select-->
                    <div>
                        <select class="form-select w-300px ms-10" aria-label="Default select example">
                            <option selected>소속선택</option>
                            <option value="1">A물류</option>
                            <option value="2">B물류</option>
                            <option value="3">C물류</option>
                        </select>
                    </div>
                    <!--end::회사 select-->


                    <!--begin::사원번호 input-->
                    <div><input type="text" class="mt-5 ms-10 w-300px vh-6 input" placeholder="사원번호"></div>

                    <!--end::사원번호 input-->

                    <!--begin::비밀번호 input-->
                    <div><input type="text" class="mt-5 ms-10 w-300px vh-6 input" placeholder="비밀번호"></div>
                    <!--end::비밀번호 input-->

                    <!--begin::자동로그인 체크-->
                    <div class="form-check ms-10 mt-5">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            자동로그인
                        </label>
                    </div>
                    <!--end::자동로그인 체크-->

                    <!--begin::로그인 버튼-->
                    <button type="button" class="btn btn-achacha w-100px align-self-center ">로그인</button>
                    <!--end::로그인 버튼-->

                </div>
                <!--end::로고&회사이름 아래부분-->















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