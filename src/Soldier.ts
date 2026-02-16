export class Soldier implements Soldiers {
  health: number;
  strength: number;

  constructor(health: number, strength: number) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage: number) {
    this.health = this.health - damage;
  }
}

interface Soldiers {
  health: number;
  strength: number;
  attack: Attack;
};

type Attack = () => Soldiers["strength"];
