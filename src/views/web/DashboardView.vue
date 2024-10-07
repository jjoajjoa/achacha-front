<script setup>
import MainSidebar from '@/components/main/MainSidebar.vue';
</script>

<template>
    <div id="mainPage" class="d-flex flex-column bg-white">

        <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <!--begin::사이드바-->
            <MainSidebar />
            <!--end::사이드바-->

            <!--begin::메인화면-->
            <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                <RouterView id="bodyPart" class="flex-grow-1 p-0" />

                <!-- begin::현재시간, 업로드 영역 -->
                <div class="d-flex flex-row justify-content-end me-20">
                    <div class="card achacha-back-yellow w-800px">
                        <div class="card-body">
                            지금 시간
                        </div>
                    </div>
                </div>
                <!-- end::현재시간, 업로드 영역 -->

                <!-- begin::통계카드 8개 영역 -->
                <div class="d-flex flex-row mt-10">
                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow" style="width: 22rem; height: 22rem;">
                            <div class="card-body d-flex justify-content-center align-items-center">
                                전체 차량대수
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow" style="width: 22rem; height: 22rem;">
                            <div class="card-body d-flex justify-content-center align-items-center">
                                차량 운행률
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow" style="width: 22rem; height: 22rem;">
                            <div class="card-body d-flex justify-content-center align-items-center">
                                운전부적합직원
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow" style="width: 22rem; height: 22rem;">
                            <div class="card-body d-flex justify-content-center align-items-center">
                                졸음상황 통계
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-row mt-10">
                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow" style="width: 22rem; height: 22rem;">
                            <div class="card-body d-flex justify-content-center align-items-center">
                                평균 운행거리
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow" style="width: 22rem; height: 22rem;">
                            <div class="card-body d-flex justify-content-center align-items-center">
                                평균 운행시간
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow" style="width: 22rem; height: 22rem;">
                            <div class="card-body d-flex justify-content-center align-items-center">
                                운행중 차량 대수
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow" style="width: 22rem; height: 22rem;">
                            <div class="card-body d-flex justify-content-center align-items-center">
                                대기중 운전자 수
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end::통계카드 8개 영역 -->


            </div>
            <!--end::메인화면-->
        </div>

    </div>

</template>