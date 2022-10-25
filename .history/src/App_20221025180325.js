import { useTranslation, Header } from 'react-i18next';
import LanguageHeader from './components/languageHeader';
import 
export default function App() {

  const { t } = useTranslation();
  return (
    <div>
      <Header>
        <LanguageHeader/>
      </Header>
      <div>{t('test')}</div>
    </div>
  );
}