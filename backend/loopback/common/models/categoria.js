'use strict';

module.exports = function(Categoria) {

    Categoria.validatesUniquenessOf('categoria', { message: 'categoria já cadastrada'});

};
