export default `
  <!-- Modal Type of Attack-->
  <div class="modal fade" id="modalTypeAttack" tabindex="-1" role="dialog" aria-labelledby="modalTypeAttackTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTypeAttackTitle">Выберите тип атаки</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div id="spearAttack" class="spear-attack" data-dismiss="modal"></div>
          <div id="fbAttack" class="fireball-attack" data-dismiss="modal"></div>
        </div>
      </div>
    </div>
  </div>
`;
