import axios from '@/modules/axios'

class Role {
  /* 查询审核人 */
  userRoleGetAuditList = () => axios.post('/userRole/getAuditList')
}



export default Role