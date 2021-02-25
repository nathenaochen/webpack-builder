"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aa = exports.formatmoney1 = exports.formatmoney = void 0;
var package_json_1 = require("../package.json");
console.log(package_json_1.version);
function formatmoney(money) {
    var a = [1, 2, 3];
    var obj = { a: 1 };
    console.log('formatmoney', __spreadArrays(a), a.includes(3), new Set(a), obj === null || obj === void 0 ? void 0 : obj.a, Array.from({ length: 3 }));
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var v = a_1[_i];
        console.log(v, 'of');
    }
    return 'money';
}
exports.formatmoney = formatmoney;
function formatmoney1(money) {
    console.log('formatmoney1');
    return 'money1';
}
exports.formatmoney1 = formatmoney1;
function aa(money) {
    console.log('aa');
    return 'aa';
}
exports.aa = aa;
function bb() { }
