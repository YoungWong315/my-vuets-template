// 引入service类
import Auth from './services/auth'
import Period from './services/period'
import Org from './services/org'
import Year from './services/year'
import Role from './services/role'
const services = [Auth, Period, Org, Year, Role]

import axios from '@/modules/axios'

import { config } from './config'
import mixinClass from './serviceUtil'

class MixedService extends mixinClass(...services) {
  constructor() {
    super()
    // 后端接口错误码配置
    Object.assign(this, config)
  }
  getAxiosInstance = () => axios
  /**
   * 修改header默认值的方法
   */
  updateToken = (token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}
const service = new MixedService()

export default service
