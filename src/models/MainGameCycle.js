import GGS from './GlobalGameState';

export default class MainGameCycle {
  static drawSwordArcOnHero() {
    GGS.ctx.drawImage(
      GGS.monster.attackImg, GGS.monster.spriteAttackLength, 0, 120, 174,
      10, 50,
      430, 504,
    );
    GGS.monster.spriteAttackLength += 150;
    if (GGS.monster.spriteAttackLength >= 890) {
      GGS.monster.spriteAttackLength = 10;
      GGS.swordArcOnHero = false;
    }
  }

  static drawMonsterBlood() {
    // (img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    GGS.ctx.drawImage(
      GGS.monster.bloodImg, GGS.bloodSpriteX, 4, 120, 101,
      930, 180,
      260, 241,
    );
    GGS.bloodSpriteX += 120;
    if (GGS.bloodSpriteX >= 475) {
      GGS.bloodSpriteX = 10;
      GGS.monsterBlood = false;
    }
  }

  static monsterHurts() {
    GGS.monsterHurtLength += 1;
    if (GGS.monsterHurtLength >= 2) {
      if (GGS.monsterActTimes === 1) {
        GGS.monsterBreathe = true;
        GGS.monsterActTimes = 0;
        GGS.monsterActDir = -1;
        GGS.monsterHurtLength = 0;
        return;
      }
      GGS.monsterHurtLength = 0;
      GGS.monsterActDir *= -1;
      GGS.monsterActTimes += 1;
    }
    if (GGS.monsterActDir === -1) {
      GGS.monster.rightArmX += 5;
      GGS.monster.leftArmX += 5;
      GGS.monster.headX += 5;
      GGS.monster.bodyX += 5;
      GGS.monster.legsX += 5;
    } else if (GGS.monsterActDir === 1) {
      GGS.monster.rightArmX -= 5;
      GGS.monster.leftArmX -= 5;
      GGS.monster.headX -= 5;
      GGS.monster.bodyX -= 5;
      GGS.monster.legsX -= 5;
    }
  }

  static monsterBreathe() {
    GGS.monsterBreatheLength += 0.5;
    if (GGS.monsterBreatheLength >= 4) {
      GGS.monsterBreatheLength = 0;
      GGS.monsterBreatheDir *= -1;
    }
    if (GGS.monsterBreatheDir === -1) {
      GGS.monster.rightArmY += 0.5;
      GGS.monster.leftArmY += 0.5;
      GGS.monster.headY += 0.5;
    } else if (GGS.monsterBreatheDir === 1) {
      GGS.monster.rightArmY -= 0.5;
      GGS.monster.leftArmY -= 0.5;
      GGS.monster.headY -= 0.5;
    }
  }

  static monsterHitTheGround() {
    GGS.ctx.save();
    GGS.ctx.translate(1082, 502);
    GGS.ctx.rotate((GGS.legsAngleRotate -= 10) * (Math.PI / 180));
    GGS.ctx.translate(-1082, -502);

    if (GGS.legsAngleRotate <= -90) {
      GGS.legsAngleRotate = 0;
      GGS.monsterHitTheGround = false;
    }

    GGS.ctx.drawImage(
      GGS.monster.armImgs[GGS.monster.armsNum], 90, 0, 206, 168,
      GGS.monster.rightArmX, GGS.monster.rightArmY,
      256, 218,
    );
    GGS.ctx.drawImage(
      GGS.monster.legImgs[GGS.monster.legsNum], 0, 0, 105, 80,
      GGS.monster.legsX, 420,
      135, 110,
    );
    GGS.ctx.drawImage(
      GGS.monster.bodyImgs[GGS.monster.bodyNum], 0, 0, 162, 208,
      GGS.monster.bodyX, 225,
      212, 258,
    );
    GGS.ctx.drawImage(
      GGS.monster.headImgs[GGS.monster.headNum], 0, 0, 131, 113,
      GGS.monster.headX, GGS.monster.headY,
      221, 203,
    );
    GGS.ctx.drawImage( // left arm
      GGS.monster.armImgs[GGS.monster.armsNum], 0, 0, 90, 168,
      GGS.monster.leftArmX, GGS.monster.leftArmY,
      140, 218,
    );
    GGS.ctx.restore();
  }

  static monsterHandAttack() {
    GGS.ctx.save();
    GGS.ctx.translate(1045, 267);

    if (GGS.monsterActDir === -1) {
      GGS.ctx.rotate((GGS.handAngleRotate += 20) * (Math.PI / 180));
      if (GGS.handAngleRotate >= 140) {
        GGS.monsterActDir *= -1;
        GGS.monsterActTimes += 1;
      }
    } else if (GGS.monsterActDir === 1) {
      GGS.ctx.rotate((GGS.handAngleRotate -= 70) * (Math.PI / 180));
      if (GGS.handAngleRotate <= 0) {
        if (GGS.monsterActTimes === 1) {
          GGS.monsterActDir = -1;
          GGS.monsterActTimes = 0;
          GGS.handAngleRotate = 0;
          GGS.monster.monsterAttack = false;
          GGS.hero.hurts();
          GGS.swordArcOnHero = true;
        }
      }
    }
    GGS.ctx.translate(-1045, -267);
    GGS.ctx.drawImage(
      GGS.monster.armImgs[GGS.monster.armsNum], 90, 0, 206, 168,
      GGS.monster.rightArmX, GGS.monster.rightArmY,
      256, 218,
    );
    GGS.ctx.restore();
  }

  static drawMonster() {
    if (GGS.monster.monsterAttack) { // right arm attack
      MainGameCycle.monsterHandAttack();
    } else { // regular right arm behavior
      GGS.ctx.drawImage(
        GGS.monster.armImgs[GGS.monster.armsNum], 90, 0, 206, 168,
        GGS.monster.rightArmX, GGS.monster.rightArmY,
        256, 218,
      );
    }
    GGS.ctx.drawImage(
      GGS.monster.legImgs[GGS.monster.legsNum], 0, 0, 105, 80,
      GGS.monster.legsX, 420,
      135, 110,
    );
    GGS.ctx.drawImage(
      GGS.monster.bodyImgs[GGS.monster.bodyNum], 0, 0, 162, 208,
      GGS.monster.bodyX, 225,
      212, 258,
    );
    GGS.ctx.drawImage(
      GGS.monster.headImgs[GGS.monster.headNum], 0, 0, 131, 113,
      GGS.monster.headX, GGS.monster.headY,
      221, 203,
    );
    GGS.ctx.drawImage( // left arm
      GGS.monster.armImgs[GGS.monster.armsNum], 0, 0, 90, 168,
      GGS.monster.leftArmX, GGS.monster.leftArmY,
      140, 218,
    );
  }

  static auxSpell() {
    GGS.spellX = 350;
    GGS.spellDelay = 30;
    GGS.monster.hurts();
    GGS.monsterBreathe = false;
    GGS.monsterBlood = true;
  }

  static drawSpear() {
    GGS.ctx.drawImage(
      GGS.hero.spellImgs[1], GGS.fireballSpriteX, 0, 330, 41,
      GGS.spellX, 295,
      330, 41,
    );
    GGS.spellX += 50;
    if (GGS.spellX >= 750) {
      GGS.spearAttack = false;
      MainGameCycle.auxSpell();
    }
  }

  static drawFireball() {
    GGS.ctx.drawImage(
      GGS.hero.spellImgs[0], GGS.fireballSpriteX, 0, 99, 50,
      GGS.spellX, 290,
      99, 50,
    );
    GGS.fireballSpriteX += 99;
    GGS.spellX += 50;
    if (GGS.fireballSpriteX >= 395) {
      GGS.fireballSpriteX = 0;
    }
    if (GGS.spellX >= 950) {
      GGS.fireballAttack = false;
      MainGameCycle.auxSpell();
    }
  }

  static async drawHero() {
    GGS.ctx.drawImage(
      GGS.hero.heroImg,
      GGS.heroSX,
      GGS.heroSY,
      470, 300, 0, 140, 550, 380,
    );
    GGS.heroSX += 557.3;
    if (GGS.heroSX >= GGS.heroSpriteLength) {
      GGS.heroSX = 30;
      GGS.heroSY = 30;
      GGS.heroSpriteLength = 3930;
    }
  }

  static redraw() {
    if (GGS.mainGameCycleInProgress) {
      GGS.ctx.clearRect(0, 0, 1300, 600);
      MainGameCycle.drawHero();

      if (GGS.monsterHitTheGround) {
        MainGameCycle.monsterHitTheGround();
      } else {
        MainGameCycle.drawMonster();
      }

      if (GGS.monsterBreathe) {
        MainGameCycle.monsterBreathe();
      } else {
        MainGameCycle.monsterHurts();
      }

      if (GGS.monsterBlood) {
        MainGameCycle.drawMonsterBlood();
      }
      if (GGS.swordArcOnHero) {
        MainGameCycle.drawSwordArcOnHero();
      }

      if (GGS.fireballAttack) {
        if (GGS.spellDelay <= 0) {
          MainGameCycle.drawFireball();
        } else {
          GGS.spellDelay -= 5;
        }
      } else if (GGS.spearAttack) {
        if (GGS.spellDelay <= 0) {
          MainGameCycle.drawSpear();
        } else {
          GGS.spellDelay -= 5;
        }
      }
    }
    setTimeout(() => requestAnimationFrame(MainGameCycle.redraw), 1000 / GGS.fps);
  }

  static start() {
    MainGameCycle.redraw();
  }
}
