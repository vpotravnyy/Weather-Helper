import React, { PropTypes } from 'react'
import { dateToDDMM, dateToWeekDay } from '_utils/dateConvertor'
import IconWeather from '_components/IconWeather'

export default (props) => {
  const day = props.day
  const date = dateToDDMM(day.time)
  console.log('Day: ', day)

  return(
    <div className="day_wrapper">
      <p className="day_summary"> {day.summary} </p>
      <div className="day clearfix">
        <p>{dateToWeekDay(day.time)}<br/>{date}</p>
        <IconWeather iconName={day.icon} />
        <p>
          <span>{Math.round(day.temperatureMax) + 'C°'}</span><br/>
          <span>{Math.round(day.temperatureMin) + 'C°'}</span><br/>
        </p>
        <p>
          (t): <span>{Math.round(day.apparentTemperatureMax) + 'C°'}</span><br/>
          (t): <span>{Math.round(day.apparentTemperatureMin) + 'C°'}</span><br/>
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

    // <div className="day clearfix">
    //   <p>temperatureMin: {day.temperatureMin}</p>
    //   <p>temperatureMax: {day.temperatureMax}</p>
    //   <p>apparentTemperatureMin: {day.apparentTemperatureMin}</p>
    //   <p>apparentTemperatureMax: {day.apparentTemperatureMax}</p>
    //   <p>summary: {day.summary}</p>
    //   <p>time: {date}</p>
    //   <p>icon: {day.icon}</p>
    //   <p>windSpeed: {day.windSpeed}</p>
    //   <p>windBearing: {day.windBearing}</p>
    //   <p>precipIntensity: {day.precipIntensity}</p>
    //   <p>precipIntensityMax: {day.precipIntensityMax}</p>
    //   <p>precipProbability: {day.precipProbability}</p>
    //   <p>precipType: {day.precipType}</p>
    // </div>
  )
}