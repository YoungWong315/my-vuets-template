import axios from '@/modules/axios'

class Org {
  /* 获取公司树 */
  orgGetCompanyTree = () => axios.post('/org/getCompanyTree')
 /**
  * 获取部门树
  * @param {Object} bodydata = {
  *   "key": f_CompanyId
  * }
  * @returns 
  */
  orgGetDeptTree = (companyId) => axios.post('/org/getDeptTree', { key: companyId })
  /**
   * 获取钢厂树
   * @returns 
   */
  orgGetMillTree = () => axios.post('/org/getMillTree')
}



export default Org