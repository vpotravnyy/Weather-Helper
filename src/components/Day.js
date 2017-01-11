import React, { PropTypes } from 'react'
import { dateToDDMM, dateToWeekDay } from '_utils/dateConvertor'
import IconWeather from '_components/IconWeather'
import WindArrow from '_components/WindArrow'

export default function Day (props) {
  const day = props.day
  const date = dateToDDMM(day.time)
  // dir: <span>{Math.round(day.windBearing) + '°'}</span><br/>

  return(
    <div className="day_wrapper">
      <p className="day_summary"> {day.summary} </p>
      <div className="day clearfix">
        <div>
          <p>{dateToWeekDay(day.time)}<br/>{date}</p>
        </div>
        <IconWeather iconName={day.icon} />
        <div>
          <p>
            <span>{Math.round(day.temperatureMax) + ' C°'}</span><br/>
            <span>{Math.round(day.temperatureMin) + ' C°'}</span><br/>
          </p>
        </div>
        <div>
          <p>
            <WindArrow angle={ Math.round(day.windBearing) } />
            <span> {Math.round(day.windSpeed) + 'm/s'}</span>
          </p>
        </div>
        <div>
          <p>
            perc: <span>{Math.round(day.precipIntensity) + 'mm'}</span><br/>
            prob: <span>{Math.round(day.precipProbability * 100) + '%'}</span><br/>
          </p>
        </div>
      </div>
    </div>
  )
}

Day.propTypes = {
  day: PropTypes.object.isRequired
}