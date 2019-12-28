import reduce from 'lodash/reduce';
import findIndex from 'lodash/findIndex';
import get from 'lodash/get';


export const validateRequiredFields = (requiredFields, values) =>
    reduce(requiredFields, (errors, key) => ({
        ...errors,
        ...getFieldError(key, get(values, key))
    }), {});

export const getFieldError = (key, value) => ({
    [key]: value ? undefined : `Please, insert ${key}.`
});

export const isRequired = (requiredFields, key) =>
    findIndex(requiredFields, fieldKey => fieldKey === key) > -1;

export const isValidEmail = email => email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
