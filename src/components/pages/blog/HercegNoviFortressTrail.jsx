'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function HercegNoviFortressTrail() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogFortress.title')}
      subtitle={t('blogFortress.subtitle')}
      description={t('blogFortress.description')}
      image="/img/blog-herceg-novi-fortress-trail.webp"
    >
      <h2>{t('blogFortress.h2Why')}</h2>
      <p>{t('blogFortress.whyP1')}</p>
      <p>{t('blogFortress.whyP2')}</p>

      <h2>{t('blogFortress.h2ForteMare')}</h2>
      <p>{t('blogFortress.forteMareP')}</p>

      <h2>{t('blogFortress.h2KanliKula')}</h2>
      <p>{t('blogFortress.kanliKulaP')}</p>

      <img src="/img/blog-herceg-novi-fortress-trail-inline.webp" alt={t('blogFortress.altInline')} loading="lazy" />

      <h2>{t('blogFortress.h2Spanjola')}</h2>
      <p>{t('blogFortress.spanjolaP')} <a href={localePath('/blog/herceg-novi-steps-gardens')}>{t('blogFortress.stepsLink')}</a>.</p>

      <h2>{t('blogFortress.h2Route')}</h2>
      <p>{t('blogFortress.routeP')}</p>

      <h2>{t('blogFortress.h2Parking')}</h2>
      <p>{t('blogFortress.parkingP')} <a href={localePath('/blog/savina-monastery-drive')}>{t('blogFortress.savinaLink')}</a>.</p>

      <h2>{t('blogFortress.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogFortress.tipTimeLabel')}</strong> {t('blogFortress.tipTimeVal')}</li>
        <li><strong>{t('blogFortress.tipShoesLabel')}</strong> {t('blogFortress.tipShoesVal')}</li>
        <li><strong>{t('blogFortress.tipWaterLabel')}</strong> {t('blogFortress.tipWaterVal')}</li>
        <li><strong>{t('blogFortress.tipSunLabel')}</strong> {t('blogFortress.tipSunVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogFortress.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogFortress.glanceDistance')}</strong>
            {t('blogFortress.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogFortress.glanceDuration')}</strong>
            {t('blogFortress.glanceDurationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogFortress.glanceEntry')}</strong>
            {t('blogFortress.glanceEntryVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogFortress.glanceBest')}</strong>
            {t('blogFortress.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
