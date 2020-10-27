<script>
  // Imports
  import DMbutton from "./components/darkmode_button.svelte"

  // Variables
  let akt_ukol = ""
  let todo_polozky = localStorage.getStuff("Ukoly")
  // Functions
  function addToDo() {
    /* if (!akt_ukol) return */
    let uloz_ukol = { obsah: akt_ukol, id: Date.now() }
    todo_polozky = [...todo_polozky, uloz_ukol]
    localStorage.setStuff("Ukoly", todo_polozky)
    console.log(todo_polozky)
    akt_ukol = ""
  }
  function removeDo(id) {
    todo_polozky = todo_polozky.filter((polozka) => polozka.id != id)
    localStorage.setStuff("Ukoly", todo_polozky)
  }
</script>

<style>
  .apka {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
  }

  label {
    font-size: 25px;
    text-align: center;
  }
  ::-webkit-input-placeholder {
    text-align: center;
  }
  ul {
    padding: 0 0;
    margin: 20px;
    text-align: center;
  }
  li {
    list-style-type: none;
  }

  li:hover {
    font-weight: bold;
  }
  .polozky {
    overflow-y: scroll;
    max-height: 40vh;
    margin-left: 15px;
  }
  :global(body) {
    background-color: #fff;
    color: #2c2c2c;
    transition: background-color 0.8s;
  }
  :global(body.dark-mode) {
    background-color: #222;
    color: #ddd;
    transition: background-color 0.8s;
  }
</style>

<DMbutton />
<div class="apka">
  <form on:submit|preventDefault={addToDo}>
    <label for="ukol"><h3>Úkoly</h3></label>
    <input
      type="text"
      name="ukol"
      placeholder="Co budeš dělat?"
      autocomplete="off"
      bind:value={akt_ukol} />
  </form>
  <div class="polozky">
    <ul>
      {#each todo_polozky as polozka}
        <li on:click={removeDo(polozka.id)}>{polozka.obsah}</li>
      {/each}
    </ul>
  </div>
</div>
