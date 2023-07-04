import axios from 'axios'
import { APP_MODE, domain } from '../utils/urls'

const Axios = axios.create({
  baseURL: `${domain}${APP_MODE}`,
})

export default Axios
