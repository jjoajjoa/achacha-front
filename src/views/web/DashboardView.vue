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
                    <div class="card achacha-back-yellow w-800px" style="border: 2px solid black;">
                        <div class="card-body d-flex flex-row">

                            <div class="col-5">
                                <h1>지금시간 : 24.10.04 20:10</h1>
                            </div>

                            <div class="col-5">
                                <h1>| 업로드 : </h1>
                            </div>

                            <div class="col-2">
                                <h1>| 30 초</h1>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- end::현재시간, 업로드 영역 -->

                <!-- begin::통계카드 8개 영역 -->
                <div class="d-flex flex-row mt-10">
                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow"
                            style="width: 22rem; height: 22rem; border: 2px solid black;">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 class="mb-5">전체차량대수</h1>
                                <h1>9명</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow"
                            style="width: 22rem; height: 22rem; border: 2px solid black;">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 class="mb-5">차량운행률</h1>
                                <h1>9명</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow"
                            style="width: 22rem; height: 22rem; border: 2px solid black;">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 class="mb-5">운전부적합직원</h1>
                                <h1>9명</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow"
                            style="width: 22rem; height: 22rem; border: 2px solid black;">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 class="mb-5">졸음상황통계</h1>
                                <h1>9명</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-row mt-10">
                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow"
                            style="width: 22rem; height: 22rem; border: 2px solid black;">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 class="mb-5">평균운행거리</h1>
                                <h1>9명</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow"
                            style="width: 22rem; height: 22rem; border: 2px solid black;">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 class="mb-5">평균운행시간</h1>
                                <h1>9명</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow"
                            style="width: 22rem; height: 22rem; border: 2px solid black;">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 class="mb-5">운행중 차량 대수</h1>
                                <h1>9명</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <div class="card achacha-back-yellow"
                            style="width: 22rem; height: 22rem; border: 2px solid black;">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <h1 class="mb-5">대기 중 운전자 수</h1>
                                <h1>9명</h1>
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