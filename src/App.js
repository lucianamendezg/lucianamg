import { useTranslation } from 'react-i18next';
import { Controller, Scene } from 'react-scrollmagic';
import Opener from './components/opener/opener';
import AboutMe from './components/aboutMe/aboutMe';
import ProfessionalExperience from './components/professionalExperience/professionalExperience';
import SampleWork from './components/sampleWork/sampleWork';
import SkillsAndAwards from './components/skillsAndAwards.js/skillsAndAwards';

export default function App() {
  const { i18n } = useTranslation();

  function changeLanguage (languageValue) {
    i18n.changeLanguage(languageValue);
  }

  const informationSections = [
    {id: "opener", component: <Opener changeLanguage={changeLanguage}/>},
    {id: "aboutMe", component: <AboutMe/>},
    {id: "professionalExperience", component: <ProfessionalExperience/>},
    {id: "sampleWork", component: <SampleWork/>},
    {id: "skillsAndAwards", component: <SkillsAndAwards/>},
  ]

  return (
    <div className="overflow-hidden">
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        {
          informationSections.map((section) =>
          <Scene pin>
            <div id={section.id} className="block h-screen w-screen overflow-visible relative">
              {section.component}
            </div>
          </Scene>
        )}
    </Controller>
    </div>
  );
}