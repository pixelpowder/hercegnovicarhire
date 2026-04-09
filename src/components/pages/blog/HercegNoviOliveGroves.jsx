'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function HercegNoviOliveGroves() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogOlive.title')}
      subtitle={t('blogOlive.subtitle')}
      description={t('blogOlive.description')}
      image="/img/blog-herceg-novi-olive-groves.webp"
    >
      <h2>{t('blogOlive.h2Tradition')}</h2>
      <p>{t('blogOlive.traditionP1')}</p>
      <p>{t('blogOlive.traditionP2')}</p>

      <h2>{t('blogOlive.h2Where')}</h2>
      <p>{t('blogOlive.whereP')}</p>

      <h2>{t('blogOlive.h2Tasting')}</h2>
      <p>{t('blogOlive.tastingP')}</p>

      <img src="/img/blog-herceg-novi-olive-groves-inline.webp" alt={t('blogOlive.altInline')} loading="lazy" />

      <h2>{t('blogOlive.h2Drive')}</h2>
      <p>{t('blogOlive.driveP')} <a href={localePath('/blog/savina-monastery-drive')}>{t('blogOlive.savinaLink')}</a>.</p>

      <h2>{t('blogOlive.h2Buy')}</h2>
      <p>{t('blogOlive.buyP')} <a href={localePath('/blog/igalo-spa-tradition')}>{t('blogOlive.igaloLink')}</a>.</p>

      <h2>{t('blogOlive.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogOlive.tipSeasonLabel')}</strong> {t('blogOlive.tipSeasonVal')}</li>
        <li><strong>{t('blogOlive.tipBookLabel')}</strong> {t('blogOlive.tipBookVal')}</li>
        <li><strong>{t('blogOlive.tipBreadLabel')}</strong> {t('blogOlive.tipBreadVal')}</li>
        <li><strong>{t('blogOlive.tipRoadLabel')}</strong> {t('blogOlive.tipRoadVal')}</li>
      </ul>
    </ContentPage>
  );
}
