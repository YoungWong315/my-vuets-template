import axios from '@/modules/axios'

class Year {
  /**
   * 获取年休统计
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
  yearGetCount = (bodyData = {}) => axios.post('/year/getCount', bodyData)
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
  yearGetHomeList = (bodyData) => axios.post('/year/getHomeList', bodyData)
  /**
   * 年休列表
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
  yearGetList = (bodyData) => axios.post('/year/getList', bodyData)
  /**
   * 创建年休
   * @param {Object} bodyData = {
   *  "auditPersonId": "string",
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
      "steelMillCode": "string",
      "steelMillName": "string",
      "stopTime": "2022-06-30T07:41:56.064Z",
      "submitPersonId": "string",
      "submitPersonName": "string",
      "submitTime": "string",
      "workerNum": 0
   * }
   * @returns 
   */
  yearAdd = (bodyData) => axios.post('/year/add', bodyData)
}

export default Year