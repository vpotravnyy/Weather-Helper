import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { GoogleMapLoader, GoogleMap, Marker, SearchBox, InfoWindow} from "react-google-maps/lib";

class MapComponent extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.state.markers = props.places.map(p => {
      return {
        key: p.placeID,
        position: {
          lat: p.lat,
          lng: p.lng
        },
        placeName: p.placeName,
        isStored: true,
        onClick: () => console.log('Marker ' + p.placeID + ' clicked')
      }
    })
    this.mapStyle = {
      height: props.viewport.height,
      width: props.viewport.width
    }
  }
  
  render(){
    return (
      <section className="map" style={ this.mapStyle }>
        <GoogleMapLoader
          containerElement={
            <div className="map_container" style={{ height: "100%", width: "100%" }} />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={6}
              defaultCenter={{
                lat: this.props.places[0].lat,
                lng: this.props.places[0].lng
              }}
              // onClick={props.onMapClick}
            >
              {
                this.state.markers.map(marker => {
                  return <Marker { ...marker } />
                })
              }
            </GoogleMap>
          }
        />
      </section>
    );
  }
}
MapComponent.propTypes = {
  places: PropTypes.array.isRequired,
  viewport: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    places: state.places,
    viewport: state.viewport
  }
}

export default connect(mapStateToProps)(MapComponent)