import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import PlaceViewExpanded from '_components/PlaceViewExpanded'
import PlaceViewCollapsed from '_components/PlaceViewCollapsed'

import { expandPlace, collapsePlace } from '_actions/expandPlace'
import { expandDay, collapseDay } from '_actions/expandDay'

import areHoursRenderingWithinDay from '_utils/areHoursRenderingWithinDay'
import scrollToTop from '_utils/scrollToTop'

const PlaceContainer = (props) => {
  const {
    place,
    viewport,
    expandDay,
    collapseDay
  } = props
  const isDataPresent = !!place.weather
  const timezone = isDataPresent ? place.weather.timezone : null
  const weeklySummary = isDataPresent && !viewport.isVeryNarrow
    ? place.weather.daily.summary
    : ''
  const isHourlyViewVisible = !areHoursRenderingWithinDay(viewport)
  const onPlaceClick = place.isExpanded
    ? props.collapsePlace
    : props.expandPlace

  if (place.isExpanded) {
    return (
      <PlaceViewExpanded
        collapseDay={collapseDay}
        expandDay={expandDay}
        isHourlyViewVisible={isHourlyViewVisible}
        onPlaceClick={onPlaceClick}
        place={place}
        timezone={timezone}
        viewport={viewport}
        weeklySummary={weeklySummary}
      />
    )
  } else {
    return (
      <PlaceViewCollapsed
        onPlaceClick={onPlaceClick}
        place={place}
        timezone={timezone}
        viewport={viewport}
        weeklySummary={weeklySummary}
      />
    )
  }
}

PlaceContainer.propTypes = {
  place: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired,
  expandPlace: PropTypes.func.isRequired,
  collapsePlace: PropTypes.func.isRequired,
  expandDay: PropTypes.func.isRequired,
  collapseDay: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    viewport: state.viewport
  }
}

function mapDispatchToProps (dispatch) {
  return {
    expandPlace: (placeID) => {
      dispatch(expandPlace(placeID))
      scrollToTop()
    },
    collapsePlace: (placeID) => dispatch(collapsePlace(placeID)),
    expandDay: (data) => dispatch(expandDay(data)),
    collapseDay: () => dispatch(collapseDay())
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( PlaceContainer )
