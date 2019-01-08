// noinspection HtmlUnknownTarget
export default `
  <!--Registration screen-->
  <div id="registration" class="container-fluid bg-registration">
    <div class="d-flex justify-content-center">
      <form id="regForm" class="form-container">
        <h1>Как твое имя, Рыцарь?</h1>
        <div class="form-group">
          <input value="Victor" class="form-control" id="playerName" required autofocus placeholder="Введите ваше имя..." type="text" >
        </div>
        <div class="row align-items-center">
          <div class="col-6">
            <a href="/" class="btn btn-block btn-secondary">На стартовую</a>
          </div>
          <div class="col-6">
            <button id="playButton" class="btn btn-block btn-danger" type="submit">Играть</button>
          </div>
        </div>
        <button type="button" id="btnShowScoreboard" class="btn-block btn btn-dark">Таблица героев</button>
      </form>
    </div>
  </div>
`;
