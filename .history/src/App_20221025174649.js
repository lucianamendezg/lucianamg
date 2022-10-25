import { useTranslation } from 'react-i18next';

export default function App() {
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  const { t, i18n } = useTranslation();
  return (
    <div>
      <div>{t('test')}</div>
    </div>
  );
}