'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function HercegNoviStepsGardens() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogSteps.title')}
      subtitle={t('blogSteps.subtitle')}
      description={t('blogSteps.description')}
      image="/img/blog-herceg-novi-steps-gardens.webp"
    >
      <h2>{t('blogSteps.h2Why')}</h2>
      <p>{t('blogSteps.whyP1')}</p>
      <p>{t('blogSteps.whyP2')}</p>

      <h2>{t('blogSteps.h2Routes')}</h2>
      <p>{t('blogSteps.routesP')}</p>

      <h2>{t('blogSteps.h2Gardens')}</h2>
      <p>{t('blogSteps.gardensP')}</p>

      <img src="/img/blog-herceg-novi-steps-gardens-inline.webp" alt={t('blogSteps.altInline')} loading="lazy" />

      <h2>{t('blogSteps.h2Old')}</h2>
      <p>{t('blogSteps.oldP')} <a href={localePath('/blog/herceg-novi-fortress-trail')}>{t('blogSteps.fortressLink')}</a>.</p>

      <h2>{t('blogSteps.h2When')}</h2>
      <p>{t('blogSteps.whenP')} <a href={localePath('/blog/herceg-novi-mimosa-festival')}>{t('blogSteps.mimosaLink')}</a>.</p>

      <h2>{t('blogSteps.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogSteps.tipShoesLabel')}</strong> {t('blogSteps.tipShoesVal')}</li>
        <li><strong>{t('blogSteps.tipWaterLabel')}</strong> {t('blogSteps.tipWaterVal')}</li>
        <li><strong>{t('blogSteps.tipCameraLabel')}</strong> {t('blogSteps.tipCameraVal')}</li>
        <li><strong>{t('blogSteps.tipPaceLabel')}</strong> {t('blogSteps.tipPaceVal')}</li>
      </ul>
    </ContentPage>
  );
}
