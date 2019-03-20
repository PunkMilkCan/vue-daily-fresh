import axios from 'axios'

const baseUrl = '/api'

export function api (call, params, method) {
  if (method === 'post') {
    return axios.post(baseUrl + call, params)
  } else {
    return axios.get(baseUrl + call, params)
  }
}
