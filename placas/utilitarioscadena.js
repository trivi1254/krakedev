esmayusculas = function (caracter) {
    let mayuscula;
    mayuscula = caracter.charCodeAt(0);
    if (mayuscula >= 65 && mayuscula <= 90) {
        return true;

    } else {
        return false;
    }
}
esdigito = function (caracter) {
    let digito = caracter.charCodeAt(0);
    if (!isNaN(digito)) {
        return true;
    } else {
        return false;
    }
}
esguion = function (caracter) {
    let guion = caracter.charCodeAt(0);
    if (guion == 45) {
        return true;
    } else {
        return false;
    }
}
