
export default (minutes) => {
  const h = parseInt(Math.abs(minutes) / 60),
        m = Math.abs(minutes) % 60
  const HH = h < 10 ? '0'+ h : h.toString()
  const MM = m < 10 ? '0'+ m : m.toString()
  const res = minutes > 0 ? '+' + HH +':'+ MM
            : minutes < 0 ? '-' + HH +':'+ MM
                          : ' ' + HH +':'+ MM
  return res
}