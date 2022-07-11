const phoneValidate = (phone) => /^[1][3-9][0-9]{9}$/.test(phone)

function renderFileSize(value) {
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
  size = size.toFixed(2) //保留的小数位数
  return size + unitArr[index]
}

function fullScreen() {
  const element = document.documentElement
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  }
}
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

/**
 * 加载js
 */
const loadJs = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = () => resolve(true)
    script.onerror = () => reject(false)
    script.src = url
    document.head.appendChild(script)
  })
}

const randomNumber = (start, end) => {
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
