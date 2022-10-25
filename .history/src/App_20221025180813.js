import { useTranslation } from 'react-i18next';
import { Header } from 'react-fullpage';
import LanguageHeader from './components/languageHeader';

export default function App() {
  const { t, i18n } = useTranslation();

  function changeLanguage (languageValue) {
    i18n.changeLanguage(languageValue);
  }

  return (
    <div>
      <Header>
        <LanguageHeader
          changeLanguage={changeLanguage}
        />
      </Header>
      Hello
      <div>{t('test')}</div>
    </div>
  );
}