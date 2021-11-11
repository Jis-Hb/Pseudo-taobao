import { request } from './request.js'

export function CateLeftList() {
  return request({
    url: '/category'
  })
}
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
