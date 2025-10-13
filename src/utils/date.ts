export function getRelativeTime(startDate: Date, endDate = new Date()) {
  const diffSeconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000)
  if (diffSeconds < 0) {
    return null
  }
  const diffMinutes = Math.floor(diffSeconds / 60)
  if (diffMinutes < 10) {
    return 'just now'
  }
  if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`
  }
  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
  }
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 10) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
  }
  return null
}

export function getFormattedDate(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month}/${day}/${year}`
}

// 数字前补 0
function padZero(number: number, len = 2) {
  return number.toString().padStart(len, '0')
}

export function getFormattedDateTime(date: Date) {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  let hours = date.getHours()
  const minutes = padZero(date.getMinutes())

  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  const formattedHours = padZero(hours)

  return `${month}/${day}/${year} ${formattedHours}:${minutes} ${ampm}`
}

// 获取两个日期的相差的天数
export function getDiffInDays(startDate: Date, endDate = new Date()) {
  return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 86400))
}

// 获取一个短的日期，格式为：04-20
export function getShortDate(date: Date) {
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())

  return `${month}-${day}`
}

// 获取日期所在的年一共多少天
export function getDaysInYear(date: Date) {
  const year = date.getFullYear()
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366
  }
  return 365
}

// 获取日期所在的年的开始日期
export function getStartOfYear(date: Date) {
  const year = date.getFullYear()
  return new Date(year, 0, 1)
}

// 获取日期所在的天的开始日期
export function getStartOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
