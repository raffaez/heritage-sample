import { Duck } from "./Duck";
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwim";
import { ICanWalk } from "./ICanWalk";

const duck = new Duck('Tio Patinhas', 6, 70, 5, false, 'brown');

function takeOff(animal: ICanFly){
    animal.fly();
}
function takeAWalk(animal: ICanWalk){
    animal.walk();
}
function haveASwim(animal: ICanSwim){
    animal.swim();
}

takeOff(duck);
takeAWalk(duck);
haveASwim(duck);