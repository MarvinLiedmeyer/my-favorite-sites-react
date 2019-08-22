/* eslint-disable no-useless-escape */
export const nameRegex = /^[A-Za-z0-9]+/;

export const emailRegex = /\S+@\S+\.\S+/;

export const addressRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export const checkValidation = (name, email, address) => (nameRegex.test(name)
    && emailRegex.test(email)
    && addressRegex.test(address));
