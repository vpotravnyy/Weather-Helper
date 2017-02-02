import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { WIND_SPEED_UNIT, PRECIP_INTENSITY_UNIT } from '_intl/defaultMessages.json'

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
          { formatMessage( WIND_SPEED_UNIT ) }
        </div>
        <div className='hourly__cell cloudness'>
          { '%' }
        </div>
        <div className='hourly__cell precip'>
          { formatMessage( PRECIP_INTENSITY_UNIT ) }
        </div>
        <div className='hourly__cell precip_probab'>
          { '%' }
        </div>
      </div>
    )
}

export default injectIntl( Units )