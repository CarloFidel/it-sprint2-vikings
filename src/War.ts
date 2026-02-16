import { Saxon } from "./Saxon";
import { Viking } from "./Viking";

export class War {
  public vikingArmy: Viking[] = [];
  public saxonArmy: Saxon[] = [];
  constructor() {}

  addViking(viking: Viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon: Saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const damage = viking.attack();
    const battleResult = saxon.receiveDamage(damage);

    if (saxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter(
        (saxonSoldier) => saxonSoldier !== saxon,
      );
    }
    return battleResult;
  }

  saxonAttack() {
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const damage = saxon.attack();
    const battleResult = viking.receiveDamage(damage);

    if (viking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter(
        (vikingSoldier) => vikingSoldier !== viking,
      );
    }
    return battleResult;
  }

  showStatus() {
    if(this.saxonArmy.length === 0) return 'Vikings have won the war of the century!'
  }
}
