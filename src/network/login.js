import { requestLogin } from './request'

export function getLoginUser() {
  return requestLogin({
    url: '/supermall'
  })
}
