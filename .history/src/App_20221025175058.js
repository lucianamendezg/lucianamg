import { useTranslation, changeLanguage } from 'react-i18next';
import { Header } from 'react-fullpage';
import LanguageHeader from './components/languageHeader';

export default function App() {
  const { t } = useTranslation();  
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    changeLanguage(languageValue);
  }

  return (
    <div>
      <Header>
        <LanguageHeader
        changeLanguageHandler={changeLanguageHandler}/>
      </Header>
      <div>{t('test')}</div>
    </div>
  );
}