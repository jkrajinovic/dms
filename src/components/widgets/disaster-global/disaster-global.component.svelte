<script>
  let disasters = "";
  async function getWeather() {
    return await fetch(
      "https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&slim=1&limit=6"
    ).then(res => {
      return res.json();
    });
  }

  getWeather().then(result => {
    console.log("result", result);
    disasters = result.data;
  });
</script>

<div class="widget global-disaster-widget block">
  <div class="block-title">
    <h3>Global disasters</h3>
  </div>

  <div class="card">
    {#each disasters as disaster}
      <div>
        {#if disaster.fields}
          <p>{disaster.fields.name}</p>
        {/if}

      </div>
    {/each}
  </div>
</div>
