import axios from 'axios'

export function request(config) {
  // 1·创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66/',
    timeout: 5000
  })

  return instance(config)
}
export function requestLogin(config) {
  // 1·创建axios实例
  const instance = axios.create({
    baseURL: 'http://121.40.249.176:3001/api/',
    timeout: 5000
  })

  // 3·发送真正的网络请求
  return instance(config)
}
