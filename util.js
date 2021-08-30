module.exports = {
    isNullOrEmpty: function(value) {
        if (!value) {
            return true;
        }
        return typeof value === 'undefined'
    },
    primeraMaiuscula: function(palavra) {
        if (!palavra) {
            return '';
        }
        return palavra[0].toUpperCase() + palavra.substr(1, palavra.length);
    }
}