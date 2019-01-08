import GGS from './GlobalGameState';

import heroImgPath from '../assets/images/Hero/hero.png';
import fireballImgPath from '../assets/images/spells/fireball.png';
import spearImgPath from '../assets/images/spells/spear.png';

import monsterBloodImgPath from '../assets/images/spells/blood.png';
import monsterAttackImgPath from '../assets/images/spells/orc-attack.png';

import monsterImgArmPath1 from '../assets/images/Monster/arms1.png';
import monsterImgArmPath2 from '../assets/images/Monster/arms2.png';
import monsterImgArmPath3 from '../assets/images/Monster/arms3.png';
import monsterImgArmPath4 from '../assets/images/Monster/arms4.png';
import monsterImgArmPath5 from '../assets/images/Monster/arms5.png';
import monsterImgArmPath6 from '../assets/images/Monster/arms6.png';

import monsterImgLegPath1 from '../assets/images/Monster/legs1.png';
import monsterImgLegPath2 from '../assets/images/Monster/legs2.png';
import monsterImgLegPath3 from '../assets/images/Monster/legs3.png';
import monsterImgLegPath4 from '../assets/images/Monster/legs4.png';
import monsterImgLegPath5 from '../assets/images/Monster/legs5.png';
import monsterImgLegPath6 from '../assets/images/Monster/legs6.png';

import monsterImgHeadPath1 from '../assets/images/Monster/head1.png';
import monsterImgHeadPath2 from '../assets/images/Monster/head2.png';
import monsterImgHeadPath3 from '../assets/images/Monster/head3.png';
import monsterImgHeadPath4 from '../assets/images/Monster/head4.png';
import monsterImgHeadPath5 from '../assets/images/Monster/head5.png';
import monsterImgHeadPath6 from '../assets/images/Monster/head6.png';

import monsterImgBodyPath1 from '../assets/images/Monster/body1.png';
import monsterImgBodyPath2 from '../assets/images/Monster/body2.png';
import monsterImgBodyPath3 from '../assets/images/Monster/body3.png';
import monsterImgBodyPath4 from '../assets/images/Monster/body4.png';
import monsterImgBodyPath5 from '../assets/images/Monster/body5.png';
import monsterImgBodyPath6 from '../assets/images/Monster/body6.png';

export default class ImageLoader {
  static load() {
    return new Promise((resolve) => {
      const monsterArmsImg1 = new Image();
      const monsterArmsImg2 = new Image();
      const monsterArmsImg3 = new Image();
      const monsterArmsImg4 = new Image();
      const monsterArmsImg5 = new Image();
      const monsterArmsImg6 = new Image();

      const monsterLegsImg1 = new Image();
      const monsterLegsImg2 = new Image();
      const monsterLegsImg3 = new Image();
      const monsterLegsImg4 = new Image();
      const monsterLegsImg5 = new Image();
      const monsterLegsImg6 = new Image();

      const monsterHeadImg1 = new Image();
      const monsterHeadImg2 = new Image();
      const monsterHeadImg3 = new Image();
      const monsterHeadImg4 = new Image();
      const monsterHeadImg5 = new Image();
      const monsterHeadImg6 = new Image();

      const monsterBodyImg1 = new Image();
      const monsterBodyImg2 = new Image();
      const monsterBodyImg3 = new Image();
      const monsterBodyImg4 = new Image();
      const monsterBodyImg5 = new Image();
      const monsterBodyImg6 = new Image();

      const monsterBloodImg = new Image();
      const monsterAttackImg = new Image();

      const heroImg = new Image();
      const fireballImg = new Image();
      const spearImg = new Image();

      monsterArmsImg1.src = monsterImgArmPath1;
      monsterArmsImg2.src = monsterImgArmPath2;
      monsterArmsImg3.src = monsterImgArmPath3;
      monsterArmsImg4.src = monsterImgArmPath4;
      monsterArmsImg5.src = monsterImgArmPath5;
      monsterArmsImg6.src = monsterImgArmPath6;

      monsterLegsImg1.src = monsterImgLegPath1;
      monsterLegsImg2.src = monsterImgLegPath2;
      monsterLegsImg3.src = monsterImgLegPath3;
      monsterLegsImg4.src = monsterImgLegPath4;
      monsterLegsImg5.src = monsterImgLegPath5;
      monsterLegsImg6.src = monsterImgLegPath6;

      monsterHeadImg1.src = monsterImgHeadPath1;
      monsterHeadImg2.src = monsterImgHeadPath2;
      monsterHeadImg3.src = monsterImgHeadPath3;
      monsterHeadImg4.src = monsterImgHeadPath4;
      monsterHeadImg5.src = monsterImgHeadPath5;
      monsterHeadImg6.src = monsterImgHeadPath6;

      monsterBodyImg1.src = monsterImgBodyPath1;
      monsterBodyImg2.src = monsterImgBodyPath2;
      monsterBodyImg3.src = monsterImgBodyPath3;
      monsterBodyImg4.src = monsterImgBodyPath4;
      monsterBodyImg5.src = monsterImgBodyPath5;
      monsterBodyImg6.src = monsterImgBodyPath6;

      monsterBloodImg.src = monsterBloodImgPath;
      monsterAttackImg.src = monsterAttackImgPath;

      fireballImg.src = fireballImgPath;
      spearImg.src = spearImgPath;
      heroImg.src = heroImgPath;

      heroImg.onload = () => {
        GGS.hero.heroImg = heroImg;
        GGS.hero.spellImgs.push(fireballImg, spearImg);
        GGS.monster.bloodImg = monsterBloodImg;
        GGS.monster.attackImg = monsterAttackImg;

        GGS.monster.armImgs.push(
          monsterArmsImg1, monsterArmsImg2, monsterArmsImg3,
          monsterArmsImg4, monsterArmsImg5, monsterArmsImg6,
        );
        GGS.monster.legImgs.push(
          monsterLegsImg1, monsterLegsImg2, monsterLegsImg3,
          monsterLegsImg4, monsterLegsImg5, monsterLegsImg6,
        );
        GGS.monster.headImgs.push(
          monsterHeadImg1, monsterHeadImg2, monsterHeadImg3,
          monsterHeadImg4, monsterHeadImg5, monsterHeadImg6,
        );
        GGS.monster.bodyImgs.push(
          monsterBodyImg1, monsterBodyImg2, monsterBodyImg3,
          monsterBodyImg4, monsterBodyImg5, monsterBodyImg6,
        );
        resolve();
      };
    });
  }
}
