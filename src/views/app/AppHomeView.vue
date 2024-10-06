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


        <div class="app-wrapper flex-column flex-row-fluid " id="kt_app_wrapper">
            <!--begin::사이드바-->
            <MainSidebar />
            <!--end::사이드바-->

            <!--begin::메인화면-->
            <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                <RouterView id="bodyPart" class="flex-grow-1 p-0" />



                <!--begin:: 프로필사진, 소속, 이름-->
                <div class="d-flex flex-row vh-30 olive">

                    <!--begin::프로필사진-->
                    <div class="col-6 tomato">
                        이미지 추가할 곳
                    </div>
                    <!--end::프로필사진-->

                    <!--begin::소속, 이름-->
                    <div class="col-6 tomato">

                        <div class="h-60px mt-10 olive">
                            <p>xx물류</p>
                        </div>

                        <div class="h-60px mt-10 olive">
                            <p>김배달</p>
                        </div>

                    </div>
                    <!--end::소속, 이름-->

                </div>
                <!--end:: 프로필사진, 소속, 이름-->

                <!--begin::전체기록 버튼-->
                <div class="d-flex flex-row justify-content-end">
                    <button type="button" class="btn btn-primary btn-sm me-5">전체보기</button>
                </div>
                <!--end::전체기록 버튼-->

                <!--begin::아래 스크롤 운행기록 -->
                <div class="tomato">

                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
                        data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2"
                        tabindex="0">

                        <!--begin::운행기록 카드-->

                        <div class="card" style="width: 28rem;">

                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>

                            </div>


                            <div class="card-body ">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>

                            </div>

                            <div class="card-body ">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>

                            </div>

                            <div class="card-body ">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>

                            </div>
                        </div>

                        <!--end::운행기록 카드-->


                    </div>


                </div>
                <!--begin::아래 스크롤 운행기록 -->












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