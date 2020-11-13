<template>
  <div>
    <form @submit.prevent="searchWeapon">
      <label for="weaponInput">Enter your weapon:</label>
      <input id="weaponInput" v-model="weapon" />
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <button class="button--white mt-2">Submit!</button>
    </form>

    <p class="mt-2 mb-10">Searched: {{ counter }} times</p>
  </div>
</template>

<script>
export default {
  name: 'SearchMask',
  data() {
    return {
      weapon: '',
      counter: 0,
      errorMessage: '',
    }
  },
  methods: {
    searchWeapon() {
      if (!this.weapon) {
        this.errorMessage = 'Weapon is required!'
        return
      }
      this.counter += 1
      this.errorMessage = ''
      this.$emit('searchWeapon', this.weapon)
      this.weapon = ''
    },
  },
}
</script>

<style></style>
