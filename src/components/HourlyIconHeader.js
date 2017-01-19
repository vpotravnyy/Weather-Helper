import React from 'react'

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
        <div className='block clock'>
          <TimeIcon/>
        </div>
        <div className='block tmprtr'>
          <TemperatureIcon/>
        </div>
        <div className='block app_tmprtr'>
          <ApparentTemperatureIcon/>
        </div>
        <div className='block wind'>
          <WeatherIcons iconName={'wind'} />
        </div>
        <div className='block cloudness'>
          <WeatherIcons iconName={'cloudy'} />
        </div>
        <div className='block precip'>
          <DropIcon/>
        </div>
        <div className='block precip_probab'>
          <PrecipProbabilityIcon/>
        </div>
      </div>
    )

}
