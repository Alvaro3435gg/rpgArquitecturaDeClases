import { King } from './MallardDuck.js';
import { Queen } from './FlyWithWings.js';
import { knight } from './Quack.js';
import { Troll } from './FlyWithBalloon.js';
import { MuteQuack } from './MuteQuack.js';

const mallard = new MallardDuck(new FlyWithWings(), new Quack());
console.log(mallard.display());
console.log(mallard.performFly());
console.log(mallard.performQuack());

mallard.setFlyBehavior(new FlyWithBalloon());
mallard.setQuackBehavior(new MuteQuack());

console.log("\nDespués de cambiar comportamientos:");
console.log(mallard.performFly());
console.log(mallard.performQuack());
