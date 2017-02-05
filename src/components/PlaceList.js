import React, { PropTypes } from 'react'
import Place from '_components/Place'
import { connect } from 'react-redux'

const PlaceList = (props) => {
  let expandedPlace = null, collapsedPlace = null
  const places = props.places.map(p => {
    if (p.isExpanded) {
      expandedPlace = <Place key={p.placeID} place={p} />
      if ( props.viewport.isWide || props.viewport.isUltrawide ){
        const place = {
          ...p,
          isExpanded: false,
          hasExpandedView: true
        }
        collapsedPlace = <Place key={p.placeID} place={place} />
      }
      return collapsedPlace
    } else {
      return <Place key={p.placeID} place={p} />
    }
  })

  return (
    <main className='main clearfix'>
      {
        <section className="expanded-place">
          {expandedPlace}
        </section>
      }
      {
        places.length > 0 && 
        <section className="collapsed-places clearfix">
          {places}
        </section>
      }
    </main>
  )
}

PlaceList.propTypes = {
  places: PropTypes.array.isRequired,
  viewport: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    places: state.places,
    viewport: state.viewport
  }
}

export default connect(mapStateToProps)(PlaceList)