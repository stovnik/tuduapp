<script>
  let tma
  if (!localStorage.getStuff("tmavka")) {
    localStorage.setStuff("tmavka", false)
    tma = localStorage.getStuff("tmavka")
  } else {
    tma = localStorage.getStuff("tmavka")
  }
  $: localStorage.setStuff("tmavka", tma)
  $: {
    if (tma) {
      window.document.body.classList.add("dark-mode")
    } else {
      window.document.body.classList.remove("dark-mode")
    }
  }
</script>

<style>
  /* input {
    position: absolute;
    right: 2vw;
  } */

  .switch {
    position: absolute;
    right: 3vw;
    top: 3vh;
    height: calc(13px + 6 * ((100vw - 320px) / 680));
    width: calc(2 * (13px + 6 * ((100vw - 320px) / 680)));
  }
  .switch-input {
    display: none;
  }
  .switch-label {
    display: block;
    width: 100%;
    height: 100%;
    user-select: none;
  }
  .switch-label::before,
  .switch-label::after {
    content: "";
    display: block;
    position: absolute;
    cursor: pointer;
  }
  .switch-label::before {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 0;
    border-style: solid;
    border-width: 1px;
    border-color: #bbb;
    transition: background-color 1s ease;
  }
  .switch-label::after {
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: 0%;
    border-style: solid;
    border-width: 1px;
    border-color: #bbb;
    background-color: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    transition: left 0.2s ease;
  }
  .switch-input:checked + .switch-label::before {
    background-color: #222;
    border-color: #555;
  }
  .switch-input:checked + .switch-label::after {
    left: 50%;
    background-color: none;
  }
</style>

<div class="switch">
  <input
    id="switch-1"
    type="checkbox"
    class="switch-input"
    bind:checked={tma} />
  <label for="switch-1" class="switch-label" />
</div>
