import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
const TIMEOUT = Number(process.env.REACT_APP_TIMEOUT)

const apiConfig = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

export default apiConfig
