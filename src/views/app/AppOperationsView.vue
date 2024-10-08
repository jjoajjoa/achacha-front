<script setup>
import MainBottomNavBar from '@/components/main/MainBottomNavBar.vue';
import MainSidebar from '@/components/main/MainSidebar.vue';
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';
</script>

<script>
export default {
    components: {
        Calendar,
    },
    data() {
        return {
            date: new Date(),
        };
    },
}
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
            <div class="app-main flex-column flex-row-fluid achacha-back-light-gray" id="kt_app_main">
                <RouterView id="bodyPart" class="flex-grow-1 p-0" />


                <div class="d-flex justify-content-center vh-40">
                    <!--캘린더-->
                    <div class="mt-3">
                        <Calendar style="width: 350px;" />
                    </div>

                    <!--캘린더-->

                </div>

                <div class="d-flex flex-row justify-content-center vh-15">

                    <div class="fw-bold fs-2x mt-3">
                        <div>9월 총 운행거리 : 1004KM</div>
                        <div>9월 총 운행시간 : 32시간 29분</div>
                        <div>9월 총 운행건수 : 32건</div>

                    </div>

                </div>

                <!--begin::운행정보 카드-->

                <div class="d-flex flex-row vh-25" style="height: 360px; overflow-y: auto;">

                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
                        data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2"
                        tabindex="0">


                        <div class="card achacha-back-light-gray" style="width: 28rem;">

                            <div class="card-body ms-2 mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 ms-5 mt-3">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 ms-5">

                                        <div class="flex-row fw-bold ms-1 ">
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

                            <div class="card-body ms-2 mb-5 border-30 achacha-back-yellow">

                                <div class="d-flex flex-colum">

                                    <div class="col-2 ms-5 mt-3">
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                        <div class="fw-bold ms-2">↓</div>
                                        <div class="fw-bold fs-2x">12</div>
                                        <div class="fw-bold ms-1">30</div>
                                    </div>

                                    <div class="col-10 ms-5">

                                        <div class="flex-row fw-bold ms-1 ">
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
                        </div>



                    </div>

                </div>
                <!--end::운행정보 카드-->







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