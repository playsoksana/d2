const head = (arr) => {
    if (arr && arr.length > 0) {
        return arr[0];
    }

    return null;
};

const last = (arr) => {
    if (arr && arr.length > 0) {
        return arr[arr.length - 1];
    }

    return null;
};

const findByFieldName = (arr, fieldName, value) => {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i += 1) {
            const obj = arr[i] || {};

            if (obj[fieldName] === value) {
                return obj;
            }
        }
    }

    return null;
};

const findOneById = (arr, objId) => {
    if (arr) {
        for (let i = 0; i < arr.length; i += 1) {
            const obj = arr[i];

            if (obj.id === objId) {
                return obj;
            }
        }
    }

    return null;
};

const isEqual = (a, b) => {
    if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!isEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    return a === b;
};

export default {
    head,
    last,
    findByFieldName,
    findOneById,
    isEqual,
};
