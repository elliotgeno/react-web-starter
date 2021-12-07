import { useTranslation } from 'react-i18next';
import './styles.scss';

const Home = () => {
    const { t } = useTranslation("home");

    return (
        <div className="container">
            <h1>{t('title')}</h1>
        </div>
    );
}

export default Home;
