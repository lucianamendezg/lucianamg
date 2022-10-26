import { useTranslation } from 'react-i18next';
import LanguageHeader from './components/languageHeader';
import { Controller, Scene } from 'react-scrollmagic';

export default function App() {
  const { t, i18n } = useTranslation();

  function changeLanguage (languageValue) {
    i18n.changeLanguage(languageValue);
  }
  return (
    <div className="overflow-hidden">
      {/*
        <LanguageHeader
          changeLanguage={changeLanguage}
        />
      <div>{t('test')}</div>
  */}
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div className="block bg-lavander h-screen w-screen overflow-visible relative text-9xl"><span>Panel</span></div>
      </Scene>
      <Scene pin>
        <div className="block bg-yellow h-screen w-screen overflow-visible relative text-9xl"><span>Panel</span></div>
      </Scene>
      <Scene pin>
        <div className="block bg-black h-screen w-screen overflow-visible relative text-9xl"><span>Panel</span></div>
      </Scene>
      <Scene pin>
        <div className=" block bg-cream h-screen w-screen overflow-visible relative text-9xl"><span>Panel</span></div>
      </Scene>
    </Controller>
    </div>
  );
}