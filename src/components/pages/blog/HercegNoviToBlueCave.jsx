'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function HercegNoviToBlueCave() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogBlueCave.title')}
      subtitle={t('blogBlueCave.subtitle')}
      description={t('blogBlueCave.description')}
      image="/img/blog-herceg-novi-to-blue-cave.webp"
    >
      <h2>{t('blogBlueCave.h2What')}</h2>
      <p>{t('blogBlueCave.whatP1')}</p>
      <p>{t('blogBlueCave.whatP2')}</p>

      <h2>{t('blogBlueCave.h2Drive')}</h2>
      <p>{t('blogBlueCave.driveP')}</p>

      <h2>{t('blogBlueCave.h2Zanjice')}</h2>
      <p>{t('blogBlueCave.zanjiceP')}</p>

      <img src="/img/blog-herceg-novi-to-blue-cave-inline.webp" alt={t('blogBlueCave.altInline')} loading="lazy" />

      <h2>{t('blogBlueCave.h2Boat')}</h2>
      <p>{t('blogBlueCave.boatP')} <a href={localePath('/blog/mamula-island-fortress')}>{t('blogBlueCave.mamulaLink')}</a>.</p>

      <h2>{t('blogBlueCave.h2Inside')}</h2>
      <p>{t('blogBlueCave.insideP')}</p>

      <h2>{t('blogBlueCave.h2After')}</h2>
      <p>{t('blogBlueCave.afterP')} <a href={localePath('/blog/prevlaka-peninsula-drive')}>{t('blogBlueCave.prevlakaLink')}</a>.</p>

      <h2>{t('blogBlueCave.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogBlueCave.tipTimeLabel')}</strong> {t('blogBlueCave.tipTimeVal')}</li>
        <li><strong>{t('blogBlueCave.tipSwimLabel')}</strong> {t('blogBlueCave.tipSwimVal')}</li>
        <li><strong>{t('blogBlueCave.tipParkLabel')}</strong> {t('blogBlueCave.tipParkVal')}</li>
        <li><strong>{t('blogBlueCave.tipCashLabel')}</strong> {t('blogBlueCave.tipCashVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogBlueCave.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogBlueCave.glanceDrive')}</strong>
            {t('blogBlueCave.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBlueCave.glanceBoat')}</strong>
            {t('blogBlueCave.glanceBoatVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBlueCave.glanceCost')}</strong>
            {t('blogBlueCave.glanceCostVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBlueCave.glanceSeason')}</strong>
            {t('blogBlueCave.glanceSeasonVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
