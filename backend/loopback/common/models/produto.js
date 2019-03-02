'use strict';

module.exports = function(Produto) {

    Produto.validatesUniquenessOf('nome', {message: 'Produto já cadastrado'});
};
