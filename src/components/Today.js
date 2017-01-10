import React, { PropTypes } from 'react'
import { dateToDDMM } from '_utils/dateConvertor'
import IconWeather from '_components/IconWeather'

export default function Today (props) {
  const day = props.day
  const date = dateToDDMM(day.time)
  console.log('Today: ', day, 'date: ', date)

  return(
    <div className="day_wrapper">
      <p className="day_summary"> {day.summary} </p>
      <div className="day clearfix">
        <p>Today<br/>{date}</p>
        <IconWeather iconName={day.icon} />
        <p>
          t: <span>{Math.round(day.temperature) + 'C°'}</span><br/>
          (t): <span>{Math.round(day.apparentTemperature) + 'C°'}</span><br/>
        </p>
        <p>
          wind: <span>{Math.round(day.windSpeed) + 'm/s'}</span><br/>
          dir: <span>{Math.round(day.windBearing) + '°'}</span><br/>
        </p>
        <p>
          perc: <span>{Math.round(day.precipIntensity) + 'mm'}</span><br/>
          prob: <span>{Math.round(day.precipProbability * 100) + '%'}</span><br/>
        </p>
      </div>
    </div>
  )
}

Today.propTypes = {
  day: PropTypes.object.isRequired
}
