<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary" @click="handleUpdateVersion">关于版本</van-button>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
export default {
  name: 'about',
  setup() {
    const store = useStore()
    const handleUpdateVersion = () => {
      store.dispatch('app/UPDATE_VERSION_SYNC', { version: '2.x' })
    }
    return {
      handleUpdateVersion
    }
  }
}
</script>
