import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { expandPlace, collapsePlace } from '_actions/expandPlace'
import { expandDay, collapseDay } from '_actions/expandDay'

import Day from '_components/Day'
import Hourly from '_components/Hourly'

import CurrentPlaceTxt from '_translation/CurrentPlaceTxt'

import CollapseIcon from '_icons/CollapseIcon'
import ExpandIcon from '_icons/ExpandIcon'

import areHoursRenderingWithinDay from '_utils/areHoursRenderingWithinDay'
import { MINIMAL_WIDTH, WIDE_MAX_WIDTH } from '_constants/viewportWidths'

const Place = (props) => {
  const viewport = props.viewport
  const placeName = props.place.placeName === "Current position"
    ? <CurrentPlaceTxt /> : <span>{props.place.placeName}</span>

  let expandIcon, expandHandler, addClass
  if( props.place.isExpanded ){
    expandIcon = <CollapseIcon/>
    expandHandler = props.collapsePlace
    addClass = ' place_expanded'
  } else {
    expandIcon = <ExpandIcon/>
    expandHandler = props.expandPlace.bind(null, props.place.placeID)
    addClass = ' collapsed_place'
  }
  const expandPlaceName = props.place.isExpanded && !viewport.isVeryNarrow && !viewport.isNarrow
    ? props.place.weather.daily.summary
    : null

  let children = null, hourlyView = null, width = null

  if(props.place.weather){
    if( props.place.isExpanded ) {
      children = props.place.weather.daily.data.map((day, i) => {
        let expanded, clickHandler
        if( i < 2 ){
          if( props.expandedDay === i ){
            expanded = true
            clickHandler = props.collapseDay
            if ( !areHoursRenderingWithinDay(viewport) ){
              hourlyView = (
                <Hourly
                  day={day.time}
                  hourly={props.place.weather.hourly}
                  summary={day.summary}
                  viewport={viewport}
                  precipType={day.precipType}
                />
              )
            }
          } else {
            const data = {
              placeID: props.place.placeID,
              dayIndex: i
            }
            expanded = false
            clickHandler = props.expandDay.bind(null, data)
          }
        } else {
          expanded = false
          clickHandler = null
        }
        return <Day key={day.time} day={day} expanded={expanded} daily hourly={props.place.weather.hourly} onClick={clickHandler} />
      })
      width = style().expanded
    } else {
      const curr = props.place.weather.currently
      children = <Day key={curr.time} day={curr} onClick={expandHandler} />
      width = style().collapsed
    }
  }

  return (
    <article className={'place' + addClass} style={width} >
      
      <div className='place__title' onClick={expandHandler}>
        { placeName }
        <br/>
        { !areHoursRenderingWithinDay(viewport) && <i> { expandPlaceName } </i> }
        <div className='place__expand-icon place__expand-icon--place'>
          { expandIcon }
        </div>
      </div>
      
      <div className='place__dayslist clearfix'>
        {children}
      </div>

      {hourlyView}

    </article>
  )
  function style(){
    let width = viewport.width
    width = width < MINIMAL_WIDTH ? MINIMAL_WIDTH : width
    width = width > WIDE_MAX_WIDTH ? WIDE_MAX_WIDTH : width
    let expanded = null, collapsed = null
    if ( viewport.isVeryNarrow ){
      expanded = collapsed = { width: width - 4 }
    } else if ( viewport.isNarrow ) {
      expanded = collapsed = { width: width - 8 }
    } else if ( viewport.isMiddle ) {
      expanded = { width: width - 16 }
      collapsed = { width: (width - 24) / 2 }
    } else if ( viewport.isWide ) {
      expanded = { width: width * 0.7 - 16 }
      collapsed = { width: width * 0.3 - 16 }
    } else if ( viewport.isUltrawide ) {
      expanded = { width: width * 0.7 - 16 }
      collapsed = { width: width * 0.3 - 16 }
    }
    return {
      expanded,
      collapsed
    }
  }
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  expandedDay: PropTypes.number.isRequired,
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
    expandPlace: (placeID) => dispatch(expandPlace(placeID)),
    collapsePlace: () => dispatch(collapsePlace()),
    expandDay: (data) => dispatch(expandDay(data)),
    collapseDay: () => dispatch(collapseDay())
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Place )