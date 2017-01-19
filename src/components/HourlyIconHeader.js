import React, { PropTypes } from 'react'

import WeatherIcons from '_icons/WeatherIcons'
import TemperatureIcon from '_icons/TemperatureIcon'
import ApparentTemperatureIcon from '_icons/ApparentTemperatureIcon'
import WindArrowIcon from '_icons/WindArrowIcon'
import DropIcon from '_icons/DropIcon'
import PrecipProbabilityIcon from '_icons/PrecipProbabilityIcon'
import TimeIcon from '_icons/TimeIcon'

export default function HourlyIconHeader () {

    return(
      <div className='hourly_icon_header'>
        <div className='clock'>
          <TimeIcon/>
        </div>
        <div className='tmprtr'>
          <TemperatureIcon/>
        </div>
        <div className='app_tmprtr'>
          <ApparentTemperatureIcon/>
        </div>
        <div className='wind'>
          <WeatherIcons iconName={'wind'} />
        </div>
        <div className='cloudness'>
          <WeatherIcons iconName={'cloudy'} />
        </div>
        <div className='precip'>
          <DropIcon/>
        </div>
        <div className='precip_probab'>
          <PrecipProbabilityIcon/>
        </div>
      </div>
    )

}
