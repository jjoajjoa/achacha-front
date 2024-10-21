<template>
    <div>
      <h2>마커 객체 해쉬맵</h2>
      
      <!-- Display all key-value pairs -->
      <ul>
        <li v-for="(value, key) in dynamicMap" :key="key">
          {{ key }}: {{ value }}
        </li> 
      </ul>
  
      <!-- Input fields to add a new key-value pair -->
      <input v-model="newKey" placeholder="Enter key" />
      <input v-model="newValue" placeholder="Enter value" />
      <button @click="addKeyValuePair">Add Key-Value Pair</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Define the dynamic HashMap
        dynamicMap: {},
        
        // Define inputs for adding new key-value pairs
        newKey: "",
        newValue: ""
      };
    },
    methods: {
      // Method to add key-value pair dynamically
      addKeyValuePair() {
        if (this.newKey && this.newValue) {
          // Dynamically add the new key-value pair to the HashMap
          this.$set(this.dynamicMap, this.newKey, this.newValue);
          
          // Clear the input fields
          this.newKey = "";
          this.newValue = "";
        }
      }
    }
  };
  </script>
  