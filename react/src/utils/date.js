export function getLocalTime(timeStamp) {
  return new Date(Number(timeStamp)).toLocaleTimeString()
}
