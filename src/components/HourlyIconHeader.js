import React from 'react'

import WeatherIcons from '_icons/WeatherIcons'
import TemperatureIcon from '_icons/TemperatureIcon'
import ApparentTemperatureIcon from '_icons/ApparentTemperatureIcon'
import WindArrowIcon from '_icons/WindArrowIcon'
import DropIcon from '_icons/DropIcon'
import SnowIcon from '_icons/SnowIcon'
import PrecipProbabilityIcon from '_icons/PrecipProbabilityIcon'
import TimeIcon from '_icons/TimeIcon'

export default function HourlyIconHeader (props) {

    return(
      <div className='hourly__icon-header'>
        <div className='hourly__cell clock'>
          <TimeIcon/>
        </div>
        <div className='hourly__cell tmprtr'>
          <TemperatureIcon/>
        </div>
        <div className='hourly__cell app_tmprtr'>
          <ApparentTemperatureIcon/>
        </div>
        <div className='hourly__cell wind'>
          <WeatherIcons iconName={'wind'} />
        </div>
        <div className='hourly__cell cloudness'>
          <WeatherIcons iconName={'cloudy'} />
        </div>
        <div className='hourly__cell precip'>
          { props.precipType === "snow" ? <SnowIcon /> : <DropIcon /> }
        </div>
        <div className='hourly__cell precip_probab'>
          <PrecipProbabilityIcon/>
        </div>
      </div>
    )

}
