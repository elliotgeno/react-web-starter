import { useTranslation } from 'react-i18next';
import './styles.scss';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1>{t('home.title')}</h1>
        </div>
    );
}

export default Home;
