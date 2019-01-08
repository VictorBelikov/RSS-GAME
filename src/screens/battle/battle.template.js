export default `
  <!--Game content-->
  <div class="fade-bg"></div>
  <div id="globaGameWrapper" class="display-off">
    <div id="gameInfo" class="row align-items-center game-info">
    
      <div class="col-5">
        <h3 class="text-center" id="heroName">Some Hero Name</h3>
        <div class="progress">
          <div id="heroHp" class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
        </div>
      </div>
      
      <div class="col-2">
        <h3 class="text-center">VS</h3>
      </div>
      
      <div class="col-5">
        <h3 class="text-center" id="monsterName">Some Monster Name</h3>
        <div class="progress">
          <div id="monsterHp" class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 30%;"></div>
        </div>
      </div>
      
      <div class="col-11 hero-level">
        <span>Hero level: </span>
        <span id="heroLevel" class="hero-level__value">100</span>
      </div>
  
      <div class="col justify-content-center d-flex">
        <div id="btnChooseCast" class="spell-book btn"></div>
      </div>
    </div>
  
    <main>
      <div id="canvasWrapper" class="canvas_wrapper">
        <canvas width="1300" height="600"></canvas>
      </div>
    </main>
  </div>
  
`;
