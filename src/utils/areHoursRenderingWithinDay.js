export default (isDayExpanded, vieport) => {
  if ( !isDayExpanded ) return false
  if ( vieport.isNormal ) return false
  return true
}