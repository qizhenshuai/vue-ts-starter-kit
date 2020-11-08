<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>版本号: {{ version }}</p>
    <van-button
      type="primary"
      @click="handleTest"
    >测试</van-button>
  </div>
</template>

<script lang="ts">
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

interface Config {
  version: string;
}

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    const config = reactive<Config>({
      version: '2.x'
    })
    const version = computed(() => store.state.app.version)
    const handleTest = () => {
      store.dispatch('app/UPDATE_VERSION_SYNC', {
        version: '3.x'
      })
    }
    return { config, handleTest, version }
  }
}
</script>
