import { King } from './King.js';
import { Run } from './Run.js';
import { Walk } from './Walk.js';
import { BowAndArrow } from './BowAndArrow.js';
import { Knife } from './Knife.js';


const rey = new King(new Run(), new  BowAndArrow());
console.log(rey.display());
console.log(rey.performMove());
console.log(rey.performAttack());

rey.setMoveBehavior(new Walk());
rey.setWeaponBehavior(new Knife());

console.log("\nDespués de cambiar comportamientos:");
console.log(rey.performMove());
console.log(rey.performAttack());
