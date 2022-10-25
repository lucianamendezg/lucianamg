import IntroPage from "./components/intro/introPage";
import { useTranslation, Trans } from 'react-i18next';

const languages = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' }
};

export default function App() {
  return (
    <div>
      <IntroPage/>
    </div>
  );
}