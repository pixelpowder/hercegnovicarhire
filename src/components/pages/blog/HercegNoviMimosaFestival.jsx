'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function HercegNoviMimosaFestival() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogMimosa.title')}
      subtitle={t('blogMimosa.subtitle')}
      description={t('blogMimosa.description')}
      image="/img/blog-herceg-novi-mimosa-festival.webp"
    >
      <h2>{t('blogMimosa.h2What')}</h2>
      <p>{t('blogMimosa.whatP1')}</p>
      <p>{t('blogMimosa.whatP2')}</p>

      <h2>{t('blogMimosa.h2History')}</h2>
      <p>{t('blogMimosa.historyP')}</p>

      <h2>{t('blogMimosa.h2Events')}</h2>
      <p>{t('blogMimosa.eventsP')}</p>

      <img src="/img/blog-herceg-novi-mimosa-festival-inline.webp" alt={t('blogMimosa.altInline')} loading="lazy" />

      <h2>{t('blogMimosa.h2Parade')}</h2>
      <p>{t('blogMimosa.paradeP')} <a href={localePath('/blog/herceg-novi-steps-gardens')}>{t('blogMimosa.stepsLink')}</a>.</p>

      <h2>{t('blogMimosa.h2Drive')}</h2>
      <p>{t('blogMimosa.driveP')} <a href={localePath('/blog/igalo-spa-tradition')}>{t('blogMimosa.igaloLink')}</a>.</p>

      <h2>{t('blogMimosa.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogMimosa.tipDatesLabel')}</strong> {t('blogMimosa.tipDatesVal')}</li>
        <li><strong>{t('blogMimosa.tipBookLabel')}</strong> {t('blogMimosa.tipBookVal')}</li>
        <li><strong>{t('blogMimosa.tipWeatherLabel')}</strong> {t('blogMimosa.tipWeatherVal')}</li>
        <li><strong>{t('blogMimosa.tipCarLabel')}</strong> {t('blogMimosa.tipCarVal')}</li>
      </ul>
    </ContentPage>
  );
}
