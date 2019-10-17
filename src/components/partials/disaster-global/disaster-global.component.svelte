<script>
  let disasters = "";
  async function getWeather() {
    return await fetch(
      "https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&slim=1"
    ).then(res => {
      return res.json();
    });
  }

  getWeather().then(result => {
    console.log("result", result);
    disasters = result.data;
  });
</script>

<div class="card weather-widget">
  <h3>Globalne katastrofe</h3>
  <p>Weather component</p>

  {#each disasters as disaster}
    <div>
      {#if disaster.fields}
        <p>{disaster.fields.name}</p>
      {/if}

    </div>
  {/each}
</div>
