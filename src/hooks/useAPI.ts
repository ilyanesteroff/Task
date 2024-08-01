import axios from 'axios'
import { HOSTNAME } from '../constants'

export const useAPI = () => {
  const API = async (data: { path: string, method: 'GET', params: URLSearchParams }): Promise<{ data: any, headers: any, success: boolean }> => {
    try {
      let search = ''
      data.params.forEach((v, k) => {
        const val = `${k}=${v}`

        search = search.length === 0 ? val : `${search}&${val}` 
      })
      const url = `${HOSTNAME}${data.path}?${search}`
      const res = await axios({ url, method: data.method })

      return { data: res.data, success: true, headers: res.headers }
    } catch (err) {
      return { data: null, headers: null, success: false }
    }
  }

  return { API }
}