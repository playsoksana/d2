import { SET_LANG } from "./types.js";

const initialState = {
    lang: null,
};

export default (state, action) => {
    switch (action.type) {
        case SET_LANG: {
            return {
                ...state,
                lang: action.payload.lang,
            };
        }

        default: {
            return state || { ...initialState };
        }
    }
};
