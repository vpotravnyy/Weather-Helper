import getCoordsApiInit from '_listeners/getCoordsApi'
import getWeatherApiInit from '_listeners/getWeatherAPI'
import windowOnresizeListenerInit from '_listeners/onresize'
import onLangChangeListener from '_listeners/onLangChange'


export default function (store) {
  getCoordsApiInit( store )
  getWeatherApiInit( store )
  windowOnresizeListenerInit( store )
  onLangChangeListener( store )
}
