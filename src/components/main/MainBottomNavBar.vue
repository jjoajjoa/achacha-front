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
}

onMounted(() => {
    console.log(`onMounted called.`);
})
</script>

<template>
    <!--begin::하단내비게이션-->
    <div class="nav-box">
        <ul class="nav-container p-0">
            <li class="nav__item" :class="(navItemSelected == 0) ? 'active' : ''" @click="selectNavItem(0)">
                <div class="nav__item-link text-center">
                    <div class="nav__item-icon">
                        <i class="ki-duotone ki-home fs-3x">
                        </i>
                    </div>
                    <span class="nav__item-text">홈</span>
                </div>
            </li>
            <li class="nav__item" :class="(navItemSelected == 1) ? 'active' : ''" @click="selectNavItem(1)">
                <div href="#Profile" class="nav__item-link text-center">
                    <div class="nav__item-icon">
                        <i class="ki-duotone ki-user-square fs-3x">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                        </i>
                    </div>
                    <span class="nav__item-text">전체통계</span>
                </div>
            </li>
            <li class="nav__item" :class="(navItemSelected == 2) ? 'active' : ''" @click="selectNavItem(2)">
                <div href="#Messages" class="nav__item-link text-center">
                    <div class="nav__item-icon">
                        <i class="ki-duotone ki-profile-user fs-3x">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                        </i>
                    </div>
                    <span class="nav__item-text">마이페이지</span>
                </div>
            </li>
        </ul>
    </div>
    <!--end::하단내비게이션-->
</template>