import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEN from "./en.json";
import homeEN from "pages/Home/en.json";
import createEN from "pages/Create/en.json";

const resources = {
    en: {
        common: commonEN,
        home: homeEN,
        create: createEN
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        defaultNS: "common",
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;