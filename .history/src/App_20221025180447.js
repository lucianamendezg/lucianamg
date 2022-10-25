import { useTranslation } from 'react-i18next';
import { Header } from 'react-fullpage';
import LanguageHeader from './components/languageHeader';

export default function App() {
  const { t } = useTranslation();
  return (
    <div>
      <Header>
        <LanguageHeader
          changeLanguageHandler={changeLanguageHandler}
        />
      </Header>
      <div>{t('test')}</div>
    </div>
  );
}