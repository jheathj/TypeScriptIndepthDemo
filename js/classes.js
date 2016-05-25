"use strict";
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = (function () {
    //constructor using parameter properties 
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new reference item...');
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    //plain method in a class
    ReferenceItem.prototype.printItem = function () {
        //console.log('Book ' + this.title + ' written in ' + this.year);
        console.log(this.title + " published in " + this.year + ".");
        //use of static property
        console.log("Department: " + ReferenceItem.department + ".");
    };
    //use of static property
    ReferenceItem.department = 'Research Software Engineering';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map