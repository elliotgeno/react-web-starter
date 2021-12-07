import { useTranslation } from 'react-i18next';
import './styles.scss';

const Create = () => {
    const { t } = useTranslation("create");

    return (
        <div className="container">
            <h1>{t("title")}</h1>
        </div>
    );
}

export default Create;