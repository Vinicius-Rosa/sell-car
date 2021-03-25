export default value => {
    const strVal = value.toString();

    return strVal.replace(/\D/g, "") /* Apenas dígitos */
        .replace(/(\d{3})(\d)/, "$1.$2") /* Add ponto */
        .replace(/(\d{3})(\d)/, "$1.$2") /* Add segundo ponto */
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2") /* Add hífen */
}