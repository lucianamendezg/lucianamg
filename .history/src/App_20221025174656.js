import { useTranslation } from 'react-i18next';

  const { t, i18n } = useTranslation();
  return (
    <div>
      <div>{t('test')}</div>
    </div>
  );
}