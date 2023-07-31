import { useTranslation } from 'react-i18next';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  //Translation
  const { t } = useTranslation()

  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">{t('errors.notFoundPage')}</p>
      <Link to="/" className="not-found__link">
        {t('header.mainPage')}
      </Link>
    </main>
  );
}

export default NotFound;