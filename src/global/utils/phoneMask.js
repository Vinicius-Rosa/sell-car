export default value => {
    const strVal = value.toString();

    return strVal.replace(/\D/g, "") /* Apenas dígitos */
        .replace(/^(\d\d)(\d)/g, "($1) $2") /* Add parênteses no DDD */
        .replace(/(\d{4})(\d)/, "$1-$2") /* Add hífen */
}