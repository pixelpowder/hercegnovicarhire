'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function SavinaMonasteryDrive() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogSavina.title')}
      subtitle={t('blogSavina.subtitle')}
      description={t('blogSavina.description')}
      image="/img/blog-savina-monastery-drive.webp"
    >
      <h2>{t('blogSavina.h2History')}</h2>
      <p>{t('blogSavina.historyP1')}</p>
      <p>{t('blogSavina.historyP2')}</p>

      <h2>{t('blogSavina.h2Getting')}</h2>
      <p>{t('blogSavina.gettingP')}</p>

      <h2>{t('blogSavina.h2Grounds')}</h2>
      <p>{t('blogSavina.groundsP')}</p>

      <img src="/img/blog-savina-monastery-drive-inline.webp" alt={t('blogSavina.altInline')} loading="lazy" />

      <h2>{t('blogSavina.h2Backroads')}</h2>
      <p>{t('blogSavina.backroadsP')} <a href={localePath('/blog/herceg-novi-olive-groves')}>{t('blogSavina.oliveLink')}</a>.</p>

      <h2>{t('blogSavina.h2Views')}</h2>
      <p>{t('blogSavina.viewsP')} <a href={localePath('/blog/herceg-novi-fortress-trail')}>{t('blogSavina.fortressLink')}</a>.</p>

      <h2>{t('blogSavina.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogSavina.tipDressLabel')}</strong> {t('blogSavina.tipDressVal')}</li>
        <li><strong>{t('blogSavina.tipTimeLabel')}</strong> {t('blogSavina.tipTimeVal')}</li>
        <li><strong>{t('blogSavina.tipParkLabel')}</strong> {t('blogSavina.tipParkVal')}</li>
        <li><strong>{t('blogSavina.tipComboLabel')}</strong> {t('blogSavina.tipComboVal')}</li>
      </ul>
    </ContentPage>
  );
}
