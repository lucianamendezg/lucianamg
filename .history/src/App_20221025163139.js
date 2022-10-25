import IntroPage from "./components/intro/introPage";
import { useTranslation, Trans } from 'react-i18next';

const languages = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' }
};

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {languages[lng].nativeName}
            </button>
          ))}
    </div>
  );
}