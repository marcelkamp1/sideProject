<template>
  <div>
    <form @submit.prevent="addElement">
      <label for="weaponInput">Enter your weapon:</label>
      <input id="weaponInput" v-model="weapon" placeholder="" />
      <p></p>
      <button class="button--green">Submit!</button>
    </form>

    <p class="mt-2 mb-2">Searched: {{ counter }} times</p>

    <div class="mt-3">
      <ul>
        <li v-for="element in lists" :key="element">{{ element }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weapons: this.weapon,
      counter: this.counter,
      lists: [],
    }
  },
  methods: {
    addElement(weapon) {
      if (this.weapon === undefined) {
        alert('Weapon name is required! Please try again.')
        return
      } else if (this.counter >= 1) this.counter += 1
      else {
        this.counter = 1
      }

      this.lists.push(this.weapon)
      this.weapon = undefined
    },
  },
}
</script>

<style></style>
