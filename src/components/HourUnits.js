import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'

const windMsg = {
  id: "WIND_SPEED_UNIT",
  description: "WindSpeed unit is m/s",
  defaultMessage: "m/s"
}
const precipMsg = {
  id: "PRECIP_INTENSITY_UNIT",
  description: "Precipitation intensity unit is mm",
  defaultMessage: "mm"
}

const Units = (props) => {
  const { formatMessage } = props.intl

    return(
      <div className='hourly__hour units'>
        <div className='hourly__cell clock'>
          { ' ' }
        </div>
        <div className='hourly__cell tmprtr'>
          { '°C' }
        </div>
        <div className='hourly__cell app_tmprtr'>
          { '°C' }
        </div>
        <div className='hourly__cell wind_bearing'>
          { ' ' }
        </div>
        <div className='hourly__cell wind_speed'>
          { formatMessage( windMsg ) }
        </div>
        <div className='hourly__cell cloudness'>
          { '%' }
        </div>
        <div className='hourly__cell precip'>
          { formatMessage( precipMsg ) }
        </div>
        <div className='hourly__cell precip_probab'>
          { '%' }
        </div>
      </div>
    )

}

export default injectIntl( Units )