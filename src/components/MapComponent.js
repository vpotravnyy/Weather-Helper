import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps/lib";
import { injectIntl, intlShape } from 'react-intl'

import CloseIcon from '_icons/CloseIcon'
import mapSearchInit from '_utils/mapSearchInit'
import infoWindow from '_utils/infoWindow'
import defaultMapOptions from '_utils/defaultMapOptions'

import { addPlace, removePlace } from '_actions/actions'
import { hideMap } from '_actions/changePlaces'
import {
  BTN_REMOVE,
  CURRENT_POSITION,
  ENTER_NEW_PLACE_NAME,
  WHAT_ARE_YOU_LOOKING_FOR
} from '_intl/defaultMessages.json'

const propsToLocalState = props => {
  return {
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
        defaultAnimation: 2
      }
    }),
    center: {
      lat: props.places[0].lat,
      lng: props.places[0].lng
    }
  }
}

class MapComponent extends Component {
  constructor(props){
    super(props)
    this.state = propsToLocalState(props)
    this.formatMessage = props.intl.formatMessage
    this.searchInput = null
    this.map = null
  }
  componentWillReceiveProps(newProps){
    this.setState( propsToLocalState(newProps) )
    infoWindow({ close: true })
  }
  componentDidUpdate(){
    this.setMapBounds()
    setTimeout(() => {
      if ( window.innerWidth !== this.props.viewport.width || window.innerHeight !== this.props.viewport.height ) {
        window.dispatchEvent(new Event('resize'))
      }
    }, 100)
  }
  componentWillUnmount(){
    this.removeSearchListeners()
  }
  handleMapMounted(map) {
    this.map = map ? map.props.map : null
    this.initSearch()
    if( this.closeBtn ) this.initCloseBtn()
  }
  handleSearchMounted(input) {
    this.searchInput = input;
    this.initSearch()
  }
  handleCloseBtnMounted(btn){
    this.closeBtn = btn
    if( this.map ) this.initCloseBtn()
  }
  initCloseBtn(){
    if( this.map && this.closeBtn ) {
      this.map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(this.closeBtn)
    }
  }
  setMapBounds(){
    if( this.state.markers.length > 1 ){
      const bounds = new google.maps.LatLngBounds()
      this.state.markers.forEach((marker) => {
        bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng))
      })
      this.map.fitBounds(bounds)
    } else {
      this.map.panTo(this.state.center)
    }
  }
  handleMapClick(event) {
    const name = prompt( this.formatMessage( ENTER_NEW_PLACE_NAME ) )
    if( name ){
      this.props.addPlace({
        name: name,
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      })
    }
  }
  initSearch(){
    if ( this.map && this.searchInput ) {
      const props = {
        map: this.map,
        input: this.searchInput,
        markers: this.state.markers,
        searchPlaceholder: this.formatMessage( ENTER_NEW_PLACE_NAME ),
        addPlace: this.props.addPlace
      }
      this.removeSearchListeners = mapSearchInit(props)
      this.setMapBounds()
    }
  }
  handleMarkerClick(targetMarker){
    infoWindow({
      placeName: targetMarker.placeID === 0 ? this.formatMessage( CURRENT_POSITION ) : targetMarker.placeName  ,
      placeID: targetMarker.placeID,
      position: targetMarker.position,
      btnRemoveTxt: this.formatMessage( BTN_REMOVE ),
      removePlace: this.props.removePlace.bind(this, targetMarker.placeID)
    })
    .open(this.map)
  }
  handleMapClick = this.handleMapClick.bind(this);
  handleSearchMounted = this.handleSearchMounted.bind(this);
  handleMapMounted = this.handleMapMounted.bind(this)
  handleCloseBtnMounted = this.handleCloseBtnMounted.bind(this)
  hideMap = this.props.hideMap.bind(this)

  render(){
    const mapStyle = {
      width: this.props.viewport.width,
      height: this.props.viewport.height
    }
    const searchInputWidth = this.props.viewport.width < 362
      ? { width: this.props.viewport.width - 62 }
      : null
    const markers =  this.state.markers.map(marker => {
      return <Marker { ...marker } onClick={this.handleMarkerClick.bind(this, marker)} />
    })

    return (
      <section className="map" style={ mapStyle }>
        <GoogleMapLoader
          containerElement={
            <div className="map_container" style={{ height: "100%", width: "100%" }} />
          }
          googleMapElement={
            <GoogleMap
              ref={this.handleMapMounted}
              defaultZoom={6}
              defaultCenter={this.state.center}
              defaultOptions={defaultMapOptions}
              onClick={this.handleMapClick}
            >
              { markers }
            </GoogleMap>
          }
        />
        <input
          id="pac-input"
          className="controls search"
          type="text"
          placeholder={this.formatMessage( WHAT_ARE_YOU_LOOKING_FOR )}
          ref={this.handleSearchMounted}
          style={searchInputWidth}
        />
        <div
          className='controls close-control'
          ref={this.handleCloseBtnMounted}
          onClick={this.hideMap}
        >
          <CloseIcon/>
        </div>
      </section>
    );
  }
}

MapComponent.propTypes = {
  intl: PropTypes.object.isRequired,
  places: PropTypes.array.isRequired,
  viewport: PropTypes.object.isRequired,
  addPlace: PropTypes.func.isRequired,
  removePlace: PropTypes.func.isRequired,
  hideMap: PropTypes.func.isRequired
}
function mapStateToProps (state) {
  return {
    places: state.places,
    viewport: state.viewport
  }
}
function mapDispatchToProps (dispatch) {
  return {
    addPlace: (place) => dispatch( addPlace(place) ),
    removePlace: (id) => dispatch( removePlace(id) ),
    hideMap: () => dispatch( hideMap() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl( MapComponent ))