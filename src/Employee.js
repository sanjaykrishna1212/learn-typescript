"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Person_1 = require("./Person");
var Employee = /** @class */ (function () {
    function Employee() {
        this.person = new Person_1.Person();
    }
    Employee.prototype.getName = function () {
        return this.employeeName;
    };
    Employee.prototype.getID = function () {
        return this.employeeId;
    };
    Employee.prototype.getArea = function () {
        return this.area;
    };
    Employee.prototype.getPerson = function () {
        return this.person;
    };
    return Employee;
}());
exports.Employee = Employee;
