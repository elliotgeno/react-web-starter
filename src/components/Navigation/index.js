import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './styles.scss';

const Navigation = () => {
    const { t } = useTranslation();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">{t("home.title")}</Link>
                </li>
                <li>
                    <Link to="/create">{t("create.title")}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;