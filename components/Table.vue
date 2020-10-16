<template>
  <div>
    <form @submit.prevent="addElement">
      <input v-model="weapon" placeholder="Weapon name" />
      <!-- p-tag just for testing purposes -->
      <p>Weapon name is: {{ weapon }}</p>
      <button class="button--green">
        Submit
      </button>
    </form>
    <!--    <listitem v-for="(element, index) in elements" :text="element" :key="index">
    </listitem> -->
  </div>
</template>

<script>
export default {
  props: {
    weapon: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    addElement() {
      console.log(this.weapon)
    },
  },
}
</script>

<style lang="scss" scoped></style>
