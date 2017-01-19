import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { removePlace } from '_actions/actions'
import { expandPlace, collapsePlace } from '_actions/expandPlace'
import { expandDay, collapseDay } from '_actions/expandDay'

import Day from '_components/Day'

import CurrentPlaceTxt from '_translation/CurrentPlaceTxt'
import BtnDeleteTxt from '_translation/BtnDeleteTxt'

import CollapseIcon from '_icons/CollapseIcon'
import ExpandIcon from '_icons/ExpandIcon'

const Place = (props) => {
  const removePlace = props.removePlace.bind(null, props.place.placeID)
  const btnDel = <button onClick={removePlace}> <BtnDeleteTxt /> </button>
  const placeName = props.place.placeName === "Current position"
    ? <CurrentPlaceTxt /> : props.place.placeName

  let expandIcon, expandHanler
  if( props.place.isExpanded ){
    expandIcon = <CollapseIcon/>
    expandHanler = props.collapsePlace
  } else {
    expandIcon = <ExpandIcon/>
    expandHanler = props.expandPlace.bind(null, props.place.placeID)
  }
  
  let children = null
  if(props.place.weather){
    if( props.place.isExpanded ) {
      children = props.place.weather.daily.data.map((day, i) => {
        let expanded, clickHandler
        if( i === 0 || i === 1 ){
          if( props.expandedDay === i ){
            expanded = true
            clickHandler = props.collapseDay
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
        return <Day key={day.time} day={day} expanded={expanded} daily onClick={clickHandler} />
      })
    } else {
      const curr = props.place.weather.currently
      children = <Day key={curr.time} day={curr} onClick={expandHanler} />
    }
  }

  return (
    <article>
      
      <div className='place' onClick={expandHanler}>
        { placeName }
        { expandIcon }
      </div>

      {props.place.placeID === 0 ? null : btnDel}
      
      <div className='dayslist'>
        {children}
      </div>

    </article>
  )
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  expandedDay: PropTypes.number.isRequired,
  removePlace: PropTypes.func.isRequired,
  expandPlace: PropTypes.func.isRequired,
  collapsePlace: PropTypes.func.isRequired,
  expandDay: PropTypes.func.isRequired,
  collapseDay: PropTypes.func.isRequired
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

export default connect( null, mapDispatchToProps )( Place )