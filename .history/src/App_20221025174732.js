import { useTranslation } from 'react-i18next';
import LanguageHeader from './components/languageHeader';

export default function App() {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t('test')}</div>
    </div>
  );
}