export default (viewport) => {
  if ( viewport.isNarrow || viewport.isVeryNarrow ) return true
  return false
}