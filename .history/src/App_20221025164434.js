import {resolvedLanguage} from 'i18n';
import { useTranslation } from 'react-i18next';

export default function App() {
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  const { t, i18n } = useTranslation();
  return (
    <div>
      <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
        <option value="en" >English</option>
        <option value="hn" >Hindi</option>
      </select>
          <div>{t('test')}</div>
    </div>
  );
}