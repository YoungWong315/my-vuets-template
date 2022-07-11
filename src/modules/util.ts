const phoneValidate = (phone: string) => /^[1][3-9][0-9]{9}$/.test(phone)

function renderFileSize(value: string) {
  if (!value) return '0 Bytes'
  var unitArr = new Array(
    'Bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB',
    'EB',
    'ZB',
    'YB'
  )
  var index = 0
  var srcsize = parseFloat(value)
  index = Math.floor(Math.log(srcsize) / Math.log(1024))
  var size = srcsize / Math.pow(1024, index)
  size = Number(size.toFixed(2)) //保留的小数位数
  return size + unitArr[index]
}

function fullScreen() {
  const element = document.documentElement
  if (element.requestFullscreen) {
    element.requestFullscreen()
  }
}
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  }
}

/**
 * 加载js
 */
const loadJs = (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = () => resolve(true)
    script.onerror = () => reject(false)
    script.src = url
    document.head.appendChild(script)
  })
}

const randomNumber = (start: number, end: number) => {
  if (end < start) {
    return false
  }
  return Math.round(Math.random() * (end - start) + start)
}

export default {
  phoneValidate,
  renderFileSize,
  fullScreen,
  exitFullscreen,
  loadJs,
  randomNumber,
}
