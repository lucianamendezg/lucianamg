export default function IntroPage() {
  const { t, i18n } = useTranslation();
    return (
      <div className="bg-lavander">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/*Introduction Card*/}
          <div className="bg-lavander">
            <h1>{t('test')}</h1>
          </div>

          {/*Picture*/}
          <div>
            
          </div>
        </div>
      </div>
    );
  }