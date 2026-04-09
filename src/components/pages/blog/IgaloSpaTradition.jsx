'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function IgaloSpaTradition() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogIgalo.title')}
      subtitle={t('blogIgalo.subtitle')}
      description={t('blogIgalo.description')}
      image="/img/blog-igalo-spa-tradition.webp"
    >
      <h2>{t('blogIgalo.h2History')}</h2>
      <p>{t('blogIgalo.historyP1')}</p>
      <p>{t('blogIgalo.historyP2')}</p>

      <h2>{t('blogIgalo.h2Institute')}</h2>
      <p>{t('blogIgalo.instituteP')}</p>

      <img src="/img/blog-igalo-spa-tradition-inline.webp" alt={t('blogIgalo.altInline')} loading="lazy" />

      <h2>{t('blogIgalo.h2Treatments')}</h2>
      <p>{t('blogIgalo.treatmentsP')}</p>

      <h2>{t('blogIgalo.h2Beach')}</h2>
      <p>{t('blogIgalo.beachP')} <a href={localePath('/blog/herceg-novi-to-blue-cave')}>{t('blogIgalo.blueCaveLink')}</a>.</p>

      <h2>{t('blogIgalo.h2Getting')}</h2>
      <p>{t('blogIgalo.gettingP')} <a href={localePath('/blog/herceg-novi-olive-groves')}>{t('blogIgalo.oliveLink')}</a>.</p>

      <h2>{t('blogIgalo.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogIgalo.tipBookLabel')}</strong> {t('blogIgalo.tipBookVal')}</li>
        <li><strong>{t('blogIgalo.tipSeasonLabel')}</strong> {t('blogIgalo.tipSeasonVal')}</li>
        <li><strong>{t('blogIgalo.tipParkLabel')}</strong> {t('blogIgalo.tipParkVal')}</li>
        <li><strong>{t('blogIgalo.tipCombineLabel')}</strong> {t('blogIgalo.tipCombineVal')}</li>
      </ul>
    </ContentPage>
  );
}
