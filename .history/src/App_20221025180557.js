import { useTranslation } from 'react-i18next';
import { Header } from 'react-fullpage';
import LanguageHeader from './components/languageHeader';

export default function App() {
  const { t } = useTranslation();
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
      <div>{t('test')}</div>
    </div>
  );
}