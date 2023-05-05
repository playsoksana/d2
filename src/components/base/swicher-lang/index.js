import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { setLang } from "core/store/lang/actions";

//import styles from "./styles.module.css";

const SwicherLang = () => {
    const dispatch = useDispatch();

    const store = useSelector((state) => ({
        lang: state.lang.lang,
    }));

    const chageLang = () => {
        const newLang = store.lang === "UA" ? "TUR" : "UA";
        dispatch(setLang(newLang));
    };

    const lang = store.lang ? store.lang : "UA";
    return <div onClick={chageLang}>{lang}</div>;
};

export default SwicherLang;
