function Warrior(name, attack, life) {
  this.name = name;
  this.attack = attack;
  this.life = life;
  this.fight = function(lifeEnemy) {
    lifeEnemy.life = lifeEnemy.life - attack;
    if (lifeEnemy.life <= 0) {
      alert(this.name + " attaque " + lifeEnemy.name + ". " + lifeEnemy.name + " est KO !");
    } else {
      alert(this.name + " attaque " + lifeEnemy.name + " il lui reste " + lifeEnemy.life + " de point de vie !");
    }
  };
}

function Magician(name, attack, mana, life) {
  this.name = name;
  this.attack = attack;
  this.mana = mana;
  this.life = life;
  this.fight = function(lifeEnemy) {
    lifeEnemy.life = lifeEnemy.life - attack;
    if (lifeEnemy.life <= 0) {
      alert(this.name + " attaque " + lifeEnemy.name + ". " + lifeEnemy.name + " est KO !");
    } else {
      alert(this.name + " attaque " + lifeEnemy.name + " il lui reste " + lifeEnemy.life + " de point de vie !");
    }
  };
  this.heal = function() {
    if (this.mana >= 20) {
      this.life = this.life + 10;
      this.mana = this.mana - 20;
      alert(this.name + " utilise sa magie de soin ! Sa vie a augmenter de 10, il a donc " + this.life + " de vie.");
    } else {
      alert('Le sort de soin a échoué mana insuffisante !');
    }
  }
}

var warrior1 = new Warrior('Bili', 50, 200);
var warrior2 = new Warrior('Steeve', 20, 150);
var magician = new Magician('Kyle', 30, 40, 300);
while (warrior1.life > 0 && warrior2.life > 0 && magician.life > 0) {
  if (magician.life <= 0 || warrior1.life <= 0 || warrior2.life <= 0) {
    break;}
    warrior1.fight(magician);
    if (magician.life <= 0) {
      break;}
    warrior2.fight(magician);
  if (warrior1.life <= 0 && warrior2.life <= 0 && magician.life <= 0) {
    break;
  }

    magician.heal();
    magician.fight(warrior2);
}

if (warrior1.life < 0) {
  alert(warrior1.name + " a perdu !");
} else if (warrior2.life < 0) {
  alert(warrior2.name + " a perdu !");
} else {
  alert(magician.name + ' a perdu !');
}
