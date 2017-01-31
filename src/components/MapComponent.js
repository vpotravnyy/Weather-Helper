import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { GoogleMapLoader, GoogleMap, Marker, SearchBox, InfoWindow} from "react-google-maps/lib";
import {triggerEvent} from "react-google-maps/lib/utils"

import getNewPlaceId from '_utils/getNewPlaceId'

class MapComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      markers: props.places.map(p => {
        return {
          key: p.placeID,
          placeName: p.placeName,
          placeID: p.placeID,
          position: {
            lat: p.lat,
            lng: p.lng
          },
          title: p.placeName,
          defaultAnimation: 2,
          isStored: true,
          onClick: () => console.log('Marker ' + p.placeID + ' clicked')
        }
      }),
      center: {
        lat: this.props.places[0].lat,
        lng: this.props.places[0].lng
      }
    }
    this.getNewPlaceId = getNewPlaceId
  }

  componentDidUpdate(){
    setTimeout(() => {
      if ( window.innerWidth !== this.props.viewport.width
      || window.innerHeight !== this.props.viewport.height ) {
        window.dispatchEvent(new Event('resize'))
      }
    }, 100)
  }

  handleMapClick(event) {
    const name = prompt("Enter new place name:")
    if( name ){
      const placeID = this.getNewPlaceId(this.state.markers)
      const nextMarkers = [
        ...this.state.markers,
        {
          key: placeID,
          placeName: name,
          placeID: placeID,
          position: {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          },
          title: name,
          defaultAnimation: 2,
          isStored: false
        },
      ];
      this.setState({
        markers: nextMarkers,
      });
    }
  }
  handleMapClick = this.handleMapClick.bind(this);

  render(){
    const mapStyle = {
      width: this.props.viewport.width,
      height: this.props.viewport.height
    }
    return (
      <section className="map" style={ mapStyle }>
        <GoogleMapLoader
          containerElement={
            <div className="map_container" style={{ height: "100%", width: "100%" }} />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => {
                this.map = map
                console.log(map)
              }}
              defaultZoom={6}
              defaultCenter={this.state.center}
              onClick={this.handleMapClick}
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