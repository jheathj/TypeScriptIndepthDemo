"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var classes_ts_1 = require('./classes.ts');
var Encyclapedia = (function (_super) {
    __extends(Encyclapedia, _super);
    //no longer need this because we implemented a constructor with the use
    //of a paramter property
    //edition: number; 
    function Encyclapedia(newTitle, newYear, edition) {
        _super.call(this, newTitle, newYear);
        this.edition = edition;
    }
    Encyclapedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this); //not required
        console.log("Edition: " + this.edition + " (" + this.year + ")");
    };
    Encyclapedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclapedia;
}(classes_ts_1.ReferenceItem));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Encyclapedia;
//# sourceMappingURL=encyclopedia.js.map