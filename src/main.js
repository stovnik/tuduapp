import App from "./App.svelte"

//localStorage
Storage.prototype.setStuff = function (key, value) {
  this.setItem(key, JSON.stringify(value))
}

Storage.prototype.getStuff = function (key) {
  var value = this.getItem(key)
  return value && JSON.parse(value)
}
if (!localStorage.getStuff("Ukoly")) {
  localStorage.setStuff("Ukoly", [])
}

const app = new App({
  target: document.body,
  props: {},
})

export default app
