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
            <div class="app-main flex-column flex-row-fluid achacha-back-light-gray" id="kt_app_main">
                <RouterView id="bodyPart" class="flex-grow-1 p-0" />



                <!--begin:: 프로필사진, 소속, 이름-->
                <div class="d-flex flex-row vh-30 olive">

                    <!--begin::프로필사진-->
                    <div class="col-6 tomato">

                        <div class="card ms-10 mt-5" style="width: 10rem;">
                            <img src="@\assets\사람사진.png" class="card-img-top" style="width: 10rem;" alt="...">

                        </div>


                    </div>
                    <!--end::프로필사진-->

                    <!--begin::소속, 이름-->
                    <div class="col-6 tomato">

                        <div class="h-60px fw-bold mt-10 ms-5 fs-4x olive">
                            <p>xx물류</p>
                        </div>

                        <div class="h-60px fw-bold mt-10 ms-5 fs-4x olive">
                            <p>김배달</p>
                        </div>

                    </div>
                    <!--end::소속, 이름-->

                </div>
                <!--end:: 프로필사진, 소속, 이름-->

                <!--begin::전체기록 버튼-->
                <div class="d-flex flex-row justify-content-end">
                    <button type="button" class="btn btn-achacha btn-sm me-5">전체기록</button>
                </div>
                <!--end::전체기록 버튼-->

                <!--begin::아래 스크롤 운행기록 -->
                <div class="tomato" style="height: 360px; overflow-y: auto;">

                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
                        data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2"
                        tabindex="0">

                        <!--begin::운행기록 카드-->

                        <div class="card achacha-back-light-gray" style="width: 28rem;">

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 ">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 ">

                                        <div class="flex-row fw-bold ">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x ">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x ">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row ">

                                            <div class="col-6 ">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 ">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="card-body mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 olive">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 olive">

                                        <div class="flex-row fw-bold tomato">
                                            2024-10-02
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            청주 물류센터
                                        </div>

                                        <div class="flex-row fw-bold fs-3x tomato">
                                            부산 물류센터
                                        </div>

                                        <div class="d-flex flex-row tomato">

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행시간</div>
                                                <div>15시간 32분</div>
                                            </div>

                                            <div class="col-6 olive">
                                                <div class="fw-bold">운행거리</div>
                                                <div>1004km</div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

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