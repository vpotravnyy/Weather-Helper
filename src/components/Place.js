import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { removePlace } from '_actions/actions'
import { expandPlace, collapsePlace } from '_actions/expandPlace'
import { expandDay, collapseDay } from '_actions/expandDay'

import Day from '_components/Day'
import Hourly from '_components/Hourly'

import CurrentPlaceTxt from '_translation/CurrentPlaceTxt'
import BtnDeleteTxt from '_translation/BtnDeleteTxt'

import CollapseIcon from '_icons/CollapseIcon'
import ExpandIcon from '_icons/ExpandIcon'

import areHoursRenderingWithinDay from '_utils/areHoursRenderingWithinDay'

const Place = (props) => {
  const removePlace = props.removePlace.bind(null, props.place.placeID)
  const btnDel = (
    <button onClick={removePlace} className='place__btn-remove'>
      <BtnDeleteTxt />
    </button>
  )
  const placeName = props.place.placeName === "Current position"
    ? <CurrentPlaceTxt /> : props.place.placeName

  let expandIcon, expandHandler, addClass
  if( props.place.isExpanded ){
    expandIcon = <CollapseIcon/>
    expandHandler = props.collapsePlace
    addClass = ''
  } else {
    expandIcon = <ExpandIcon/>
    expandHandler = props.expandPlace.bind(null, props.place.placeID)
    addClass = ' collapsed_place'
  }
  
  let children = null, hourlyView = null
  if(props.place.weather){
    if( props.place.isExpanded ) {
      children = props.place.weather.daily.data.map((day, i) => {
        let expanded, clickHandler
        if( i === 0 || i === 1 ){
          if( props.expandedDay === i ){
            expanded = true
            clickHandler = props.collapseDay
            if ( !areHoursRenderingWithinDay(expanded, props.viewport) ){
              hourlyView = <Hourly day={day.time} hourly={props.place.weather.hourly} summary={day.summary} viewport={props.viewport} />              
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
    } else {
      const curr = props.place.weather.currently
      children = <Day key={curr.time} day={curr} onClick={expandHandler} />
    }
  }

  return (
    <article className={'place' + addClass}>
      
      <div className='place__title' onClick={expandHandler}>
        { placeName }
        <div className='place__expand-icon place__expand-icon--place'>
          { expandIcon }
        </div>
      </div>

      {props.place.placeID === 0 ? null : btnDel}
      
      <div className='place__dayslist clearfix'>
        {children}
      </div>

      {hourlyView}

    </article>
  )
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  expandedDay: PropTypes.number.isRequired,
  viewport: PropTypes.object.isRequired,
  removePlace: PropTypes.func.isRequired,
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
    removePlace: (place) => dispatch(removePlace(place)),
    expandPlace: (placeID) => dispatch(expandPlace(placeID)),
    collapsePlace: () => dispatch(collapsePlace()),
    expandDay: (data) => dispatch(expandDay(data)),
    collapseDay: () => dispatch(collapseDay())
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Place )