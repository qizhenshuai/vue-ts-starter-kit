import dayJs from 'dayjs'

/**
 * 格式化时间戳（秒|毫秒）
 * @param {timestamp} value
 */
const timeFilter = (value: string) => {
  if (value) {
    if (value.length === 13) {
      return dayJs(Number(value)).format('YYYY-MM-DD HH:mm:ss')
    }
    return dayJs.unix(Number(value)).format('YYYY-MM-DD HH:mm:ss')
  } else {
    return '-'
  }
}

/**
 * 手机号格式化
 * @param {String} phone
 */
const formatPhone = (phone: string) => {
  return phone.substr(0, 3) + '****' + phone.substr(7, 11)
}

/**
 * 4位一空格（格式化银行卡）
 * @param {String} val
 */
const formatBank = (val: string) => {
  if (!val) return
  return val.toString().replace(/\s/g, '').replace(/(.{4})/g, '$1 ')
}

/**
 * 千分位格式化
 * @param {数字} val
 */
const toThousands = (val: string | number) => {
  let num = (val || 0).toString()
  let result = ''
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return result
}

/**
 * 格式化小数位
 * @param val 传入的值
 * @param pos 保留的小数位
 * @returns {*}
 */
const formatFloat = (val: number, pos: number = 2) => {
  let f = parseFloat(val.toString())
  if (isNaN(f)) {
    return false
  }
  f = Math.round(val * Math.pow(10, pos)) / Math.pow(10, pos) // pow 幂
  let s = f.toString()
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + pos) {
    s += '0'
  }
  return s
}

/**
 * 金额
 * @param {*} val
 */
const formatMoney = (val: number) => {
  if (!val || val <= 0) return val
  const showVal = val / 100
  return formatFloat(showVal)
}

/**
 * 格式化时长
 * @param second
 * @returns {string}
 */
const realFormatSecond = (second: string | number) => {
  let secondType = typeof second
  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second.toString())
    let hours = Math.floor(second / 3600)
    second = second - hours * 3600
    let mimute = Math.floor(second / 60)
    second = second - mimute * 60
    return hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
  } else {
    return '0:00:00'
  }
}

export default {
  timeFilter,
  formatPhone,
  formatBank,
  toThousands,
  formatFloat,
  realFormatSecond,
  formatMoney
}
