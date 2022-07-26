<template>
  <el-container class="container-box">
    <common-header></common-header>
    <el-container>
      <common-Aside></common-Aside>
      <el-main class="main">
        <common-tag></common-tag>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script setup>
import '../components/CommonAside.vue'
import '../components/CommonHeader.vue'
import { ref } from 'vue'
import '../components/commonTag.vue'


</script>

<style lang="scss" scoped>
.container-box {
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  flex-direction: column
  ;

  

  .main {
    background-color: #F3F4F6;
    padding-top: 5px;
  }
}


.el-header {
  padding: 0
}


</style>