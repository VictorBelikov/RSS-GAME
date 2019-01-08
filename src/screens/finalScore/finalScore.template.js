export default `
  <!--Scoreboard screen-->
  <div class="scoreboard-bg" id="scoreboard">
    <div class="container-fluid my-container">
      <div class="d-flex justify-content-center">
        <button id="btnNewGame" class="btn btn-danger btn-lg btn-newgame">Новая игра (Enter)</button>
      </div>
      <div class="d-flex justify-content-center">
        <table class="table scoreboard-table">
          <thead>
            <tr class="tr-head">
              <th colspan="3">Рекорды:</th>
            </tr>
            <tr class="tr-head">
              <th>№</th>
              <th>Имя</th>
              <th>Монстров убито</th>
            </tr>
          </thead>
          <tbody id="scoreboardTableBody">
            <!--Content here-->
          </tbody>
        </table>
      </div>
    </div>
  </div>
`;
