export default `
  <!-- Modal Win -->
  <div class="modal fade" id="modalWin" tabindex="-1" role="dialog" aria-labelledby="modalWinTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content win-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalWinTitle">Победа!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="modalWinBody">
          <!-- Message here -->          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Продолжить Игру (ESC)</button>
        </div>
      </div>
    </div>
  </div>
`;
