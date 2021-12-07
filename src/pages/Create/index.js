import { useTranslation } from 'react-i18next';
import './styles.scss';

const Create = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1>{t("create.title")}</h1>
        </div>
    );
}

export default Create;