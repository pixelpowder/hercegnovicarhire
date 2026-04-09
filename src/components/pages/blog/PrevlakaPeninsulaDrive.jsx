'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PrevlakaPeninsulaDrive() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogPrevlaka.title')}
      subtitle={t('blogPrevlaka.subtitle')}
      description={t('blogPrevlaka.description')}
      image="/img/blog-prevlaka-peninsula-drive.webp"
    >
      <h2>{t('blogPrevlaka.h2What')}</h2>
      <p>{t('blogPrevlaka.whatP1')}</p>
      <p>{t('blogPrevlaka.whatP2')}</p>

      <h2>{t('blogPrevlaka.h2Route')}</h2>
      <p>{t('blogPrevlaka.routeP')}</p>

      <h2>{t('blogPrevlaka.h2Border')}</h2>
      <p>{t('blogPrevlaka.borderP')}</p>

      <img src="/img/blog-prevlaka-peninsula-drive-inline.webp" alt={t('blogPrevlaka.altInline')} loading="lazy" />

      <h2>{t('blogPrevlaka.h2Fort')}</h2>
      <p>{t('blogPrevlaka.fortP')} <a href={localePath('/blog/herceg-novi-fortress-trail')}>{t('blogPrevlaka.fortressLink')}</a>.</p>

      <h2>{t('blogPrevlaka.h2Beaches')}</h2>
      <p>{t('blogPrevlaka.beachesP')} <a href={localePath('/blog/herceg-novi-to-blue-cave')}>{t('blogPrevlaka.blueCaveLink')}</a>.</p>

      <h2>{t('blogPrevlaka.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogPrevlaka.tipDocsLabel')}</strong> {t('blogPrevlaka.tipDocsVal')}</li>
        <li><strong>{t('blogPrevlaka.tipFuelLabel')}</strong> {t('blogPrevlaka.tipFuelVal')}</li>
        <li><strong>{t('blogPrevlaka.tipTimeLabel')}</strong> {t('blogPrevlaka.tipTimeVal')}</li>
        <li><strong>{t('blogPrevlaka.tipComboLabel')}</strong> {t('blogPrevlaka.tipComboVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogPrevlaka.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogPrevlaka.glanceDistance')}</strong>
            {t('blogPrevlaka.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogPrevlaka.glanceDuration')}</strong>
            {t('blogPrevlaka.glanceDurationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogPrevlaka.glanceBorder')}</strong>
            {t('blogPrevlaka.glanceBorderVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogPrevlaka.glanceBest')}</strong>
            {t('blogPrevlaka.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
