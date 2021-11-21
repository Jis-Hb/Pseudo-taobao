import { requestLogin } from './request'
import qs from 'qs'
// 请求相关内容需传入token值
const Username = localStorage.getItem('username')
export function postLoginUser(username, password) {
  const data = qs.stringify({
    username,
    password
  })

  return requestLogin({
    method: 'post',
    url: '/login',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data
  })
}
export function registered(username, password) {
  const data = qs.stringify({
    username,
    password
  })

  return requestLogin({
    method: 'post',
    url: '/register',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data
  })
}
export function getInfo(username, info, token1) {
  const data = qs.stringify({
    username,
    info,
    Username
  })
  return requestLogin({
    method: 'post',
    url: '/info',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      Authorization: token1

    },
    data
  })
}
export function getName(username, name, token1) {
  const data = qs.stringify({
    username,
    name,
    Username
  })
  return requestLogin({
    method: 'post',
    url: '/name',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      Authorization: token1
    },
    data
  })
}
