import { MINIMAL_WIDTH, WIDE_MAX_WIDTH } from '_constants/viewportWidths'

export default (viewport) => {
  const width = width < MINIMAL_WIDTH ? MINIMAL_WIDTH
              : width > WIDE_MAX_WIDTH ? WIDE_MAX_WIDTH
              : viewport.width
  let forExpandedPlace = null, forCollapsedPlace = null
  if ( viewport.isVeryNarrow ){
    forExpandedPlace = forCollapsedPlace = width - 4
  } else if ( viewport.isNarrow ) {
    forExpandedPlace = forCollapsedPlace = width - 8
  } else if ( viewport.isMiddle ) {
    forExpandedPlace = width - 16
    forCollapsedPlace = (width - 24) / 2
  } else if ( viewport.isWide || viewport.isUltrawide ) {
    forExpandedPlace = width * 0.7 - 16
    forCollapsedPlace = width * 0.3 - 16
  }
  return {
    forExpandedPlace,
    forCollapsedPlace
  }
}