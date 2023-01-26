"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberExample;
(function (numberExample) {
    function isNumber(value) {
        return !isNaN(value);
    }
    ;
    function isOddOrEven(value) {
        if (!isNumber(value)) {
            return "Not a Number";
        }
        if (value % 2 === 0) {
            return "Even Number";
        }
        else {
            return "Odd Number";
        }
    }
    numberExample.isOddOrEven = isOddOrEven;
    ;
})(numberExample || (numberExample = {}));
exports.default = numberExample;
