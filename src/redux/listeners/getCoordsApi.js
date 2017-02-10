import { getCoords } from '_actions/getCoords'

export default function getCoordsApiInit ( store ) {
  getCoordsApiData( store )
  return store.subscribe(() => { getCoordsApiData( store ) })
}

function getCoordsApiData (store) {
  const { places } = store.getState()

  if(!places[0].lat && !places[0].isFetching){
    store.dispatch( getCoords(0) )
  }

}
