import React, { PropTypes } from 'react'

export default function WindArrowIcon (props){
  const rotation = "rotate(" + props.angle + " 50 50)"
  return (
    <svg className='icon wind_arrow' version="1.1" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
      <path transform={rotation} d="m50,0 -20,30 16,-3 -3,63 14,0 -3,-63 16,3 -20,-30z"/>
    </svg>
  )
}

WindArrowIcon.propTypes = {
  angle: PropTypes.number.isRequired
}
