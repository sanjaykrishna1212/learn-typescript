"use strict";
// import { Chicken } from "./chicken";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
// let chicken: Chicken = new Chicken();
// chicken.name = "sanjay";
// chicken.age = 23;
// chicken.city = "chennai";
// console.log(chicken, "1");
// let chicken1: Chicken 
// chicken1 = chicken 
// console.log(chicken1, "1");
// chicken1.name = " vaishnav";
// chicken1.age = 20;
// chicken1.city = "bangalore";
// console.log(chicken1, "2");
// console.log(chicken, "2");
var employee = new Employee_1.Employee();
employee.employeeName = "Sanjay";
employee.employeeId = 233;
employee.area = "Kovilpatti";
employee.person.age = 23;
employee.person.id = 1211;
employee.person.name = "krish";
// console.log(employee.employeeName);
// console.log(employee.area);
// console.log(employee.employeeId);
// console.log(employee.person);
console.log(employee);
