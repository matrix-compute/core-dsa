"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var string_hash_1 = __importDefault(require("string-hash"));
// Source: https://medium.com/free-code-camp/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997
var HashMap = /** @class */ (function () {
    function HashMap() {
        this.list = [];
        this.list = [];
    }
    HashMap.prototype.get = function (x) {
        var i = (0, string_hash_1.default)(x);
        if (!this.list[i])
            return undefined;
        var result;
        this.list[i].forEach(function (pairs) {
            if (pairs[0] === x) {
                result = pairs[1];
            }
        });
        return result;
    };
    //
    HashMap.prototype.set = function (x, y) {
        var i = (0, string_hash_1.default)(x);
        if (!this.list[i])
            this.list[i] = [];
        this.list[i].push([x, y]);
    };
    return HashMap;
}());
var myMap = new HashMap();
myMap.set("Joe", 26);
myMap.set("Joe", 1);
myMap.set("Jared", 5);
console.log(myMap.get("Joe"));
console.log(myMap.get('Jared'));
console.log(myMap.list);
