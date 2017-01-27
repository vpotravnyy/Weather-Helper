export default (vieport) => {
  if ( vieport.isVeryNarrow ) return true
  if ( vieport.isNormal ) return true
  return false
}