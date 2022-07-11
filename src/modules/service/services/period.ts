import axios from '@/modules/axios'

class Period {
  /**
   * 新增定修
   * @param {Object} bodyData = {
   *  
      "auditPersonId": "string",
      "auditPersonName": "string",
      "auditState": "string",
      "costTime": 0,
      "departName": "string",
      "describe": "string",
      "endPercent": 0,
      "endState": "string",
      "id": 0,
      "newStart": "string",
      "orgCode": "string",
      "peopleNum": 0,
      "projectNum": 0,
      "steelMill": "string",
      "stopTime": "2022-06-28T01:36:54.227Z",
      "submitPersonId": "string",
      "submitPersonName": "string",
      "submitTime": "string",
      "workerNum": 0
   * }
   * @returns 
   */
  periodAdd = (bodyData) => axios.post('/period/add', bodyData)
  /**
   * 定修删除
   * @param {Object} bodyData = {
   *   "key": {}
   * }
   * @returns 
   */
  periodDel = (bodyData) => axios.post('/period/del', bodyData)
  /**
   * 查询定修
   * @param {Object} bodyData = {
   *  "auditPersonId": "string",
      "auditState": "string",
      "endTime": "string",
      "id": 0,
      "keyWord": "string",
      "orgCode": "string",
      "pageDto": {
        "order": "string",
        "page": 0,
        "records": 0,
        "rows": 0,
        "sort": "string",
        "total": 0
      },
      "startTime": "string",
      "submitPersonId": "string"
   * } 
   * @returns 
   */
  periodGetList = (bodyData) => axios.post('/period/getList', bodyData)
  /**
   * 获取定修统计
   * @param {Object} bodyData = {
   *  {
        "auditPersonId": "string",
        "auditState": "string",
        "endTime": "string",
        "id": 0,
        "keyWord": "string",
        "orgCode": "string",
        "pageDto": {
          "order": "string",
          "page": 0,
          "records": 0,
          "rows": 0,
          "sort": "string",
          "total": 0
        },
        "startTime": "string",
        "submitPersonId": "string"
      }
   * }
   * @returns 
   */
  periodGetCount = (bodyData = {}) => axios.post('/period/getCount', bodyData)
  /**
   * 查询首页定修
   * @param {Object} bodyData = {
   *  "auditPersonId": "string",
      "auditState": "string",
      "endTime": "string",
      "id": 0,
      "keyWord": "string",
      "orgCode": "string",
      "pageDto": {
        "order": "string",
        "page": 0,
        "records": 0,
        "rows": 0,
        "sort": "string",
        "total": 0
      },
      "startTime": "string",
      "submitPersonId": "string"
   * } 
   * @returns 
   */
  periodGetHomeList = (bodyData) => axios.post('/period/getHomeList', bodyData)
}

export default Period