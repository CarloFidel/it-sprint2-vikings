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
      this.saxonArmy = this.saxonArmy.filter((saxonSoldier) => saxonSoldier !== saxon);
    }
    let saxonPowerful: Saxon
    this.saxonArmy.forEach((saxon) => {
        if (saxon.strength === viking.strength){
            saxonPowerful = saxon
        }
    });
    return battleResult;
  }

  saxonAttack() {}

  showStatus() {}
}
