import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import uk from 'react-intl/locale-data/uk';
import ru from 'react-intl/locale-data/ru';
import enMessages from '_intl/langs/en';
import ukMessages from '_intl/langs/uk';
import ruMessages from '_intl/langs/ru';

addLocaleData([...en, ...uk, ...ru])

const allMessages = {
  en: enMessages,
  uk: ukMessages,
  ru: ruMessages  
}

function mapStateToProps(state) {
  const { lang } = state;
  return {
    key: lang,
    locale: lang,
    messages: allMessages[lang],
    defaultLocale: 'en'
  }
}

export default connect(mapStateToProps)(IntlProvider);