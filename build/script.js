"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('Tio Patinhas', 6, 70, 5, false, 'brown');
function takeOff(animal) {
    animal.fly();
}
function takeAWalk(animal) {
    animal.walk();
}
function takeASwim(animal) {
    animal.swim();
}
takeOff(duck);
takeAWalk(duck);
takeASwim(duck);
