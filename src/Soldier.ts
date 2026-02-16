export class Soldier {
  health: number;
  strength: number;

  constructor(health: number, strength: number) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage: Soldiers["damage"]) {
    this.health = this.health - damage;
  }
}

type Soldiers = {
  health: number;
  strenght: number;
  attack: Attack;
  damage: number;
};

type Attack = () => Soldiers["strenght"];
