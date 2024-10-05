<script setup>
import axios from 'axios';
import router from '@/router/index.js';
import { ref, onMounted } from 'vue';

// API로부터 가져온 데이터를 저장할 변수
const helloMessage = ref('');
const inputMessage = ref('');  // 사용자가 입력한 메시지를 저장할 변수

// Spring Boot API 호출 함수
const springVueConnectTest = async () => {
    try {
        const response = await axios.get('/test/hello');  // Spring Boot에서 설정한 GET API
        helloMessage.value = response.data;  // 응답받은 데이터를 변수에 저장
    } catch (error) {
        console.error('>>>> TestView 데이터 가져오는 중 에러:', error);
    }
};

// 사용자가 입력한 메시지를 Spring Boot로 전송하는 함수
const sendMessageToSpring = async () => {
    try {
        const response = await axios.post('/test/from-vue', inputMessage.value, {
            headers: {
                'Content-Type': 'application/json'  // JSON 형식으로 전송
            }
        });
        console.log('Response from Spring:', response.data);
    } catch (error) {
        console.error('>>>> 메시지 보내는 중 에러:', error);
    }
};

// 홈화면으로 이동하는 함수
function goToHome() {
    router.replace({ path: '/', query: {} });
}

// 페이지 로드 시 API 호출
onMounted(() => {
    springVueConnectTest();
});
</script>

<template>
    <div class="olive">
        <h1>TestView</h1>
        <button class="btn btn-primary btn-sm" @click="goToHome()">홈으로 가기</button>
        <h4>SpringBoot(9000)</h4>

        <!-- 가져온 메시지를 화면에 표시 -->
        <p>{{ helloMessage }}</p>

        <!-- 메세지를 스프링부트쪽으로 보내주기 -->
        <input v-model="inputMessage" placeholder="뭐라고 써볼까" />
        <button @click="sendMessageToSpring">보내기!</button>
    </div>
</template>
