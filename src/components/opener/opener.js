import LanguageHeader from "./languageHeader";

export default function Opener(props) {
    return (
        <div className="bg-lavander h-full w-full">
            <LanguageHeader 
                changeLanguage={props.changeLanguage}
            />
        </div>
    )
}
