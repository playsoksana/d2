import { SET_LANG } from "./types.js";

const setLang = (lang) => ({
    type: SET_LANG,
    payload: {
        lang,
    },
});

export { setLang };
