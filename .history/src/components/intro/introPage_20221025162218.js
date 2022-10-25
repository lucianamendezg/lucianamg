import Placeholder from '../../images/Placeholder.jpg';
const { t, i18n } = useTranslation();

export default function IntroPage() {
    return (
      <div className="bg-lavander">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/*Introduction Card*/}
          <div>
          <h1>{t('test')}</h1>

          </div>

          {/*Picture*/}
          <div style={{backgroundImage: `url('${Placeholder})`}}>
            wefwer
          </div>
        </div>
      </div>
    );
  }