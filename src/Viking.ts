import { Soldier } from "./Soldier";

export class Viking extends Soldier {
  constructor(
    public name: string,
    health: number,
    strength: number,
  ) {
    super(health, strength);
  }

  override receiveDamage(damage: number): string {
    let message = "";
    super.receiveDamage(damage);
    this.health != 0
      ? (message = `${this.name} has received ${damage} points of damage`)
      : (message = `${this.name} has died in act of combat`);

    return message;
  }
  
  battleCry(): string {
    return "Odin Owns You All!";
  }
}

