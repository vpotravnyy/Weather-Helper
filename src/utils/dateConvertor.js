export const dateToDDMM = (timestamp) => {
  const date = new Date(timestamp * 1000)
  return date.getDate() +'.'+ date.getMonth()
}

export const dateToHHMM = (timestamp) => {
  const date = new Date(timestamp * 1000)
  return date.getHours() +':'+ date.getMinutes()
}

export const dateToWeekDay = (timestamp) => {
  const date = new Date(timestamp * 1000)
  return date.getDay()
}