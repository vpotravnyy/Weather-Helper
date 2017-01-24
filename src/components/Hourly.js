import React, { PropTypes } from 'react'
import moment from 'moment'

import HourlyIconHeader from '_components/HourlyIconHeader'
import Hour from '_components/Hour'

export default function Hourly (props) {
  const time = moment(props.day * 1000)
  const hours = props.hourly.data.reduce((memo, item) => {
    const hour = moment(item.time * 1000 - 1)
    if( time.isSame(hour, 'day') ) memo.push( <Hour key={item.time} hour={item} /> )
    return memo
  }, [])


  return(
    <div className='hourly'>
      <HourlyIconHeader/>
      {hours}
    </div>
  )

}

Hourly.propTypes = {
  hourly: PropTypes.object.isRequired,
  day: PropTypes.number.isRequired
}