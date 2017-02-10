import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'

import PlaceContainer from '_containers/PlaceContainer'

import { TIPS } from '_intl/defaultMessages.json'

const isViewportWide = viewport => viewport.isWide || viewport.isUltrawide

const PlaceList = (props) => {
  const expandedPlace = props.places.filter(p => p.isExpanded)[0]
  const collapsedPlaces = props.places
    .filter(p => (
      isViewportWide() ? true : !p.isExpanded
    ))
    .map(p => !p.isExpanded ? p : {
      ...p,
      isExpanded: false,
      hasExpandedView: true
    })

  return (
    <main className='main clearfix'>
      {expandedPlace && (
        <section className='expanded-place'>
          <PlaceContainer place={expandedPlace} />
        </section>
      )}

      {collapsedPlaces.length && (
        <section className='collapsed-places clearfix'>
          {collapsedPlaces.map(p => (
            <PlaceContainer key={p.placeID} place={p} />
          ))}
        </section>
      )}

      {collapsedPlaces.length === 1 && ( // I've broke nesting - fix ur styles
        <div className='tips'>
          <FormattedMessage {...TIPS} />
        </div>
      )}
    </main>
  )
}

PlaceList.propTypes = {
  places: PropTypes.array.isRequired,
  viewport: PropTypes.object.isRequired
}

export default PlaceList
