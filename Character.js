export class Character {
    constructor(moveBehavior, weaponBehavior) {
      this.moveBehavior = moveBehavior;
      this.weaponBehavior = weaponBehavior;
    }
  
    performMove() {
      return this.moveBehavior.move();
    }
  
    performAttack() {
      return this.weaponBehavior.attack();
    }
  
    setMoveBehavior(m) {
      this.moveBehavior = m;
    }
  
    setWeaponBehavior(w) {
      this.weaponBehavior = w;
    }
  
    showCharacter() {
      return "";
    }
  
    display() {
      return "Soy un character genérico.";
    }
  }
  