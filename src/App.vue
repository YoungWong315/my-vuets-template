<script setup lang="ts">
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <router-view v-slot="{ Component }">
    <!-- 需要使用 include 优化 缓存策略 -->
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.path"></component>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.path"></component>
  </router-view>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>


