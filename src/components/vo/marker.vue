<template>
    <div>
      <h2>UserInfoVO 해쉬맵</h2>
      
      <!-- Display all key-value pairs -->
      <ul>
        <li v-for="(value, key) in dynamicMap" :key="key">
          {{ key }}: {{ value }}
        </li> 
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // UserInfoVO가 들어갈 해쉬맵
        userInfoVOMap: {},
        
        // key-value 정의하기
        userId: "", // userid?
        userInfoVO: {} // UserInfoVo
      };
    },
    methods: {
      // 새로운 객체를 추가하는 함수
      addUserInfoVOtoMap() {
        if (this.userId && this.userInfoVO) {
          // Dynamically add the new key-value pair to the HashMap
          this.$set(this.dynamicMap, this.userId, this.userInfoVO);
          
          // Clear the input fields
          this.userId = "";
          this.userInfoVO = {};
        }
      }
    }
  };
  </script>
  