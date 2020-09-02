"use strict";
// clases
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BuscadorLibro = exports.BuscadorBase = void 0;
//abstract
var BuscadorBase = /** @class */ (function () {
    // contructor
    function BuscadorBase(clave) {
        this.clave = clave;
    }
    BuscadorBase.prototype.ordernar = function () {
        console.log('ordenando...');
    };
    // métodos
    BuscadorBase.prototype.getClave = function () {
        return this.clave;
    };
    BuscadorBase.prototype.buscar = function () {
        var res = {
            id: 1,
            titulo: 'hp y la pp..'
        };
        var array = [];
        array.push(res);
        return array;
    };
    return BuscadorBase;
}());
exports.BuscadorBase = BuscadorBase;
// herencia de clases
var BuscadorLibro = /** @class */ (function (_super) {
    __extends(BuscadorLibro, _super);
    function BuscadorLibro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuscadorLibro.prototype.getName = function () {
        return 'buscador de libros';
    };
    return BuscadorLibro;
}(BuscadorBase));
exports.BuscadorLibro = BuscadorLibro;
var buscador = new BuscadorLibro('harry potter');
var resultados = buscador.buscar();
resultados.forEach(function (element) {
    console.log(element);
});
