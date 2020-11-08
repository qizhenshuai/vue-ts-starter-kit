<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <van-button type="primary">测试</van-button>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'

interface Config {
  version: string;
}

export default {
  name: 'Home',
  setup() {
    const config = reactive<Config>({
      version: '2.x'
    })
    return { config }
  }
}
</script>
