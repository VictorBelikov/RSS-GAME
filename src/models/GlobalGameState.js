const GlobalGameState = {
  // Game params
  ctx: null, // Canvas context
  mainGameCycleInProgress: true, // stop/start game
  fps: 15, // Fps game
  scoreboardTable: null, // DOM elem
  scoreboardScr: null, // DOM elem
  taskScr: null, // DOM elem
  taskScrContent: null, // DOM elem
  taskBtnAnswer: null, // DOM elem
  battleScreenShow: false,
  modalTypeAttackShow: false,
  finalScoreShow: false,
  answerScrShow: false,
  taskAnswer: '',

  // Monster params
  monster: null,
  monsterBreatheLength: 0,
  monsterBreatheDir: -1,
  monsterBreathe: true,
  monsterBlood: false,
  monsterHitTheGround: false,
  swordArcOnHero: false,
  handAngleRotate: 0,
  legsAngleRotate: 0,
  monsterHurtLength: 0,
  monsterActDir: -1,
  monsterActTimes: 0,
  bloodSpriteX: 10,
  monsterHealth: null, // DOM elem
  monsterName: null, // DOM elem

  // Hero params
  hero: null,
  heroSY: 30,
  heroSX: 30,
  heroSpriteLength: 3930, // Attack move
  spellX: 360,
  fireballSpriteX: 0,
  spellDelay: 30,
  fireballAttack: false,
  spearAttack: false,
  heroHealth: null, // DOM elem
  heroLevel: null, // DOM elem

  // User actions
  typeOfAttack: '', // What type of attack was chosen
};

export default GlobalGameState;
