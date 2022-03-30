import axios from 'axios'
import { BASE_URL } from './apiPaths'

export const instance = axios.create({
  baseURL: BASE_URL 
})
