import axios from 'axios'
import { parseCookies } from 'nookies'

const { '@Portfolio:user': token } = parseCookies()

const URL = process.env.NEXTAUTH_URL

export const api = axios.create({
  baseURL: `${URL}/api`
})

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}
