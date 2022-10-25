import { useTranslation } from 'react-i18next';
import ReactFullpage from "@fullpage/react-fullpage";

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
        <option value="es" >Espanol</option>
      </select>
          <div>{t('test')}</div>
    </div>
  );
}