<script>
  import DisasterGlobal from "./components/widgets/disaster-global/disaster-global.component.svelte";
  import DisasterLocal from "./components/widgets/disaster-local/disaster-local.component.svelte";
  import Footer from "./components/partials/footer/footer.component.svelte";
  import Header from "./components/partials/header/header.component.svelte";
  import UserInfo from "./components/partials/user-info/user-info.component.svelte";
  import UserMessages from "./components/partials/user-messages/user-messages.component.svelte";
  import PanicButton from "./components/partials/panic-button/panic-button.component.svelte";

  import { appModeService } from "./services/app-mode/app-mode.service.js";

  import { AppMode } from "./domain/models/app-mode.js";

  export let widgetName = "Vakula";
  export let myLocation = {
    coords: {}
  };

  export let test;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        myLocation.coords = position.coords;
      });
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  getLocation();

  const stores = appModeService.getAppMode();
</script>

<style>
  h1 {
    color: purple;
  }

  :global(.section:not(.header-section)) {
    margin-top: 30px;
  }

  :global(body, html) {
    padding: 0;
    height: 100%;
    margin: 0;
  }

  :global(body) {
    background-color: #f5f5f5 !important;
    color: #ffffff;
    transition: background-color 0.3s;
    padding: 0;
  }

  :global(.block:not(:first-child)) {
    margin-top: 15px;
  }
</style>

<Header />

<section class="section main-section" />

{#if $stores.state === AppMode.MODE_PANIC}
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <p>{$stores.state}</p>
        Your are now in panic mode!!! Is your lady maybe near by?
      </div>
    </div>
  </div>
{/if}

{#if $stores.state === AppMode.MODE_NORMAL}
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <DisasterLocal />
        <DisasterGlobal />
      </div>
      <div class="col-md-6">
        <PanicButton />
        <UserMessages />
        <UserInfo />
        <ul>
          <li>{myLocation.coords.latitude}</li>
          <li>{myLocation.coords.longitude}</li>
        </ul>
      </div>
    </div>
  </div>
{/if}

<Footer />
