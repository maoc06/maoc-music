function convertNumber(number) {
    return new Intl.NumberFormat().format(number);
}

export default convertNumber;