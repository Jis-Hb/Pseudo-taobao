import { requestLogin } from './request'
import qs from 'qs'
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
