import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import moment from 'moment'

import Day from '_components/Day'
import Hourly from '_components/Hourly'

import { CURRENT_POSITION } from '_intl/defaultMessages.json'

import CollapseIcon from '_icons/CollapseIcon'

import formatMinutesToHhMm from '_utils/formatMinutesToHhMm'
import getArticleWidth from '_utils/getArticleWidth'

const isDayExpandable = dayIndex => dayIndex < 2

const PlaceView = (props) => {
  const {
    collapseDay,
    expandDay,
    isHourlyViewVisible,
    onPlaceClick,
    place,
    timezone,
    viewport,
    weeklySummary
  } = props

  const gmtOffset = timezone
    ? ' GMT' + formatMinutesToHhMm(-moment.tz.zone(timezone).offset(Date.now()))
    : ''
  const placeName = place.placeName === 'Current position'
    ? <FormattedMessage {...CURRENT_POSITION} />
    : <span>{place.placeName}</span>

  return (
    <article
      className={'place place_expanded'}
      style={{width: place.weather ? getArticleWidth(viewport).forExpandedPlace : 'auto'}}
    >
      <div
        className='place__title'
        onClick={() => onPlaceClick(place.placeID)}
      >
        {placeName}
        <span className='gmt-offset' >{gmtOffset}</span>
        <br />
        <i>{weeklySummary}</i>
        <div className='place__expand-icon place__expand-icon--place'>
          <CollapseIcon />
        </div>
      </div>

      <div className='place__dayslist clearfix'>
        {place.weather.daily.data.map((day, i) => {
          const isExpanded = isDayExpandable(i) && place.expandedDay === i
          const clickHandler = () => {
            isExpanded && collapseDay()
            !isExpanded && isDayExpandable(i) && expandDay({
              placeID: place.placeID,
              dayIndex: i
            })
          }

          return (
            <Day
              daily
              day={day}
              expanded={isExpanded}
              hourly={place.weather.hourly}
              key={day.time}
              onClick={clickHandler}
              timezone={timezone}
              viewport={viewport}
            />
          )
        })}
      </div>

      {isHourlyViewVisible && place.weather.daily.data
        .filter((day, i) => place.expandedDay === i)
        .map(day => (
          <Hourly
            key={day.time}
            day={day.time}
            hourly={place.weather.hourly}
            precipType={day.precipType}
            summary={day.summary}
            timezone={timezone}
            viewport={viewport}
          />
        ))}

    </article>
  )
}

PlaceView.propTypes = {
  collapseDay: PropTypes.func.isRequired,
  expandDay: PropTypes.func.isRequired,
  isHourlyViewVisible: PropTypes.bool.isRequired,
  onPlaceClick: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired,
  weeklySummary: PropTypes.string.isRequired
}

export default PlaceView
