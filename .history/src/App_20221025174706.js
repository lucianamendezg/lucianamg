import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div>{t('test')}</div>
    </div>
  );
}