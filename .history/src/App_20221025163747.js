import {resolvedLanguage} from 'il8n';
import { useTranslation } from 'react-i18next';

const languages = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' }
};

export default function App() {
  const { t } = useTranslation();
  return (
    <div>
      {Object.keys(languages).map((lng) => (
            <button key={lng} style={{ fontWeight: resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {languages[lng].nativeName}
            </button>
          ))}
          <div>{t('test')}</div>
    </div>
  );
}