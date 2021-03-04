import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'

// axios.defaults.baseURL = '/'
axios.defaults.timeout = 5000

type IOptions = AxiosRequestConfig

export default function request(options: IOptions) {
  if (options.method?.toLocaleUpperCase() === 'POST') {
    options.data = qs.stringify(options.data)
  }
  // AxiosInstance
  const axiosInstance = axios.create()
  axiosInstance.interceptors.request.use((config) => {
    return config
  }, (err) => {
    return Promise.reject(err)
  })
  axiosInstance.interceptors.response.use((res) => {
    return res
  }, (err) => {
    return Promise.reject(err)
  })
  console.log(axiosInstance)
  return axiosInstance(options)
}
