// 防抖函数
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

// 封装Cookie
// 设置cookie
export function setCookie(json, time) {
  var date = new Date(new Date().getTime() + time * 24 * 60 * 60 * 1000).toUTCString()
  for (var key in json) {
    document.cookie = key + '=' + json[key] + '; expires=' + date
  }
}

// 获取cookie
export function getCookie(attr) {
  return document.cookie.match(new RegExp('(^|\\s)' + attr + '=([^;]+)(;|$)'))[2]
}

// 清除cookie
export function removeCookie(attr) {
  var json = {}
  json[attr] = ''
  setCookie(json, -1)
  return true
}
