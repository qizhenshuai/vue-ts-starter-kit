declare namespace Ajax {
  // axios 返回数据
  export interface AxiosResponse {
    data: AjaxResponse
  }
  // 请求数据接口
  export interface AjaxResponse {
    code: number,
    data: any,
    message: string
  }
}
