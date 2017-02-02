import getCoordsApiInit from '_listeners/getCoordsApi'
import getWeatherApiInit from '_listeners/getWeatherAPI'
import windowOnresizeListenerInit from '_listeners/onresize'
import onLangChangeListener from '_listeners/onLangChange'
import setLocalStorage from '_listeners/setLocalStorage'

export default function (store) {
  getCoordsApiInit( store )
  getWeatherApiInit( store )
  windowOnresizeListenerInit( store )
  onLangChangeListener( store )
  setLocalStorage( store )
}
