export function getLocalTime(timeStamp) {
  return new Date(Number(timeStamp)).toLocaleTimeString()
}

export function formatDate(date) {
  const locale =
    window.navigator.language || window.navigator.userLanguage || 'en-us'
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date)
}
