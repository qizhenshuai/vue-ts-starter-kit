import request from '../utils/request'

interface JuHeApi {
  key: string;
}

export function fetchHomeList(payload: any) {
  return request({
    url: '/home',
    method: 'POST',
    data: { ...payload }
  })
}

interface WeatherParams extends JuHeApi {
  city: string;
}

export function fetchTest(params: WeatherParams) {
  request({
    url: '/api/simpleWeather/query',
    method: 'GET',
    params
  })
}

export function fetchWeather(params: WeatherParams) {
  request({
    url: '/api/simpleWeather/query',
    method: 'GET',
    params
  })
}
