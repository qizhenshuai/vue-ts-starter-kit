<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary" @click="handleUpdateVersion">关于版本</van-button>
    <div>测试</div>
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
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

<style lang="scss">
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3,minmax(0,1fr));
  }
}

@media (min-width: 768px) {
  .container {
    grid-template-rows: repeat(2, minmax(0,1fr));
    grid-template-columns: repeat(2,minmax(0,1fr));
  }
}

.container {
  width: 500px;
  height: 500px;
  display: grid;
  gap: 1rem;
  background: red;
  .item {
    background: green;
  }
}
</style>
