<template>
  <div class="home">
    <p>{{ count }}</p>
    <div class="my-btn__wrap">
      <van-button @click="INCREMENT(2)">+</van-button>
      <van-button @click="DECREMENT(1)">-</van-button>
    </div>
    <van-button @click="getCityWeather(city)">查看天气</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import { Toast } from 'vant'

@Component
export default class Home extends Vue {
  city: string = '上海'

  @Getter('count') count: number
  @Mutation('INCREMENT') INCREMENT: Function
  @Mutation('DECREMENT') DECREMENT: Function
  @Action('getTodayWeather') getTodayWeather: Function

  getCityWeather(city: string) {
    this.getTodayWeather({ city: city }).then((res: Ajax.AjaxResponse) => {
      const { low, high, type } = res.data.data.forecast[0]
      console.log(`${city}今日：${type} ${low} - ${high}`)
      Toast(`${city}今日：${type} ${low} - ${high}`)
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  text-align: center;
  background: #4382FF;
  .my-btn__wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
