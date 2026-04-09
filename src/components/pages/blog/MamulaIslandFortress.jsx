'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function MamulaIslandFortress() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogMamula.title')}
      subtitle={t('blogMamula.subtitle')}
      description={t('blogMamula.description')}
      image="/img/blog-mamula-island-fortress.webp"
    >
      <h2>{t('blogMamula.h2History')}</h2>
      <p>{t('blogMamula.historyP1')}</p>
      <p>{t('blogMamula.historyP2')}</p>

      <h2>{t('blogMamula.h2Drive')}</h2>
      <p>{t('blogMamula.driveP')}</p>

      <h2>{t('blogMamula.h2Mirista')}</h2>
      <p>{t('blogMamula.miristaP')}</p>

      <img src="/img/blog-mamula-island-fortress-inline.webp" alt={t('blogMamula.altInline')} loading="lazy" />

      <h2>{t('blogMamula.h2Island')}</h2>
      <p>{t('blogMamula.islandP')} <a href={localePath('/blog/herceg-novi-to-blue-cave')}>{t('blogMamula.blueCaveLink')}</a>.</p>

      <h2>{t('blogMamula.h2Hotel')}</h2>
      <p>{t('blogMamula.hotelP')}</p>

      <h2>{t('blogMamula.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogMamula.tipBoatLabel')}</strong> {t('blogMamula.tipBoatVal')}</li>
        <li><strong>{t('blogMamula.tipSwimLabel')}</strong> {t('blogMamula.tipSwimVal')}</li>
        <li><strong>{t('blogMamula.tipParkLabel')}</strong> {t('blogMamula.tipParkVal')}</li>
        <li><strong>{t('blogMamula.tipComboLabel')}</strong> {t('blogMamula.tipComboVal')}</li>
      </ul>
    </ContentPage>
  );
}
