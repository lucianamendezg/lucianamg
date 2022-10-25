import { useTranslation } from 'react-i18next';

export default function LanguageHeader(props) {
    const changeLanguageHandler = (e) => {
        const languageValue = e.target.value;
        return (languageValue);
    }
    return (
        <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
            <option value="en" >English</option>
            <option value="es" >Espanol</option>
        </select>
    )
}