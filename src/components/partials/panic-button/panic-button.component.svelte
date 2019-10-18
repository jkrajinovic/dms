<script>
  import {appModeService} from "./../../../services/app-mode/app-mode.service.js";

  function panic() {
    appModeService.panic();
  }
</script>

<style>
  .panic {
    padding: 10px 10px 15px 10px;
    width: 100%;
    font-size: 3rem;
  }
</style>

<div class="block pannic-blok">
  <button
    type="button"
    class="panic btn btn-danger"
    on:click={panic}>
    Panic
  </button>
</div>
