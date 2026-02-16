import { Soldier } from "./Soldier";

export class Saxon extends Soldier {
  constructor(health: number, strength: number) {
    super(health, strength);
  }

  override receiveDamage(damage: number): string {
    let message = ''
    super.receiveDamage(damage);
    this.health > 0
      ? (message = `A Saxon has received ${damage} points of damage`)
      : (message = "A Saxon has died in combat");
      
    return message;
  }
}
