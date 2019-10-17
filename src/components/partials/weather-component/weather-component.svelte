<script>
  let disasters = "test";
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

<style>
  .weather-widget {
    max-width: 500px;
    border-radius: 4px;
  }
</style>

<div class="card weather-widget">
  <h3>Here is going to be showed weather information.</h3>
  <p>Weather component</p>

  {#each disasters as disaster}
    <div>
      <p>{disaster.id}</p>

      {#if disaster.fields}
        <p>{disaster.fields.name}</p>
      {/if}

    </div>
  {/each}
</div>
