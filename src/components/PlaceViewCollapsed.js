import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import moment from 'moment'

import Day from '_components/Day'
import ExpandIcon from '_icons/ExpandIcon'

import { CURRENT_POSITION } from '_intl/defaultMessages.json'

import formatMinutesToHhMm from '_utils/formatMinutesToHhMm'
import getArticleWidth from '_utils/getArticleWidth'

const PlaceViewCollapsed = (props) => {
  const {
    onPlaceClick,
    place,
    timezone,
    viewport
  } = props

  const gmtOffset = timezone
    ? ' GMT' + formatMinutesToHhMm(-moment.tz.zone(timezone).offset(Date.now()))
    : ''
  const placeName = place.placeName === 'Current position'
    ? <FormattedMessage {...CURRENT_POSITION} />
    : <span>{place.placeName}</span>

  return (
    <article
      className={'place collapsed_place' + (place.hasExpandedView ? ' hasExpandedView' : '')}
      style={{width: place.weather ? getArticleWidth(viewport).forCollapsedPlace : 'auto'}}
    >
      <div
        className='place__title'
        onClick={() => { onPlaceClick(place.placeID) }}
      >
        {placeName}
        <span className='gmt-offset' >{gmtOffset}</span>
        <div className='place__expand-icon place__expand-icon--place'>
          <ExpandIcon />
        </div>
      </div>

      <div className='place__dayslist clearfix'>
        {place.weather && (
          <Day
            day={place.weather.currently}
            key={place.weather.currently.time}
            onClick={() => { onPlaceClick(place.placeID) }}
            timezone={timezone}
            viewport={viewport}
          />
        )}
      </div>
    </article>
  )
}

PlaceViewCollapsed.propTypes = {
  onPlaceClick: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired
}

export default PlaceViewCollapsed
