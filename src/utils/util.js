const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const formatDate = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${[ month, day].map(DateformatNumber).join('/')}`
}
const DateformatNumber = n => {
  n = n.toString()
  return `${n}`
}
module.exports = {
  formatTime,formatDate
}