<template>
  <div>
    <div class="mt-3">
      <table class="table-fixed">
        <tr>
          <th class="w-1/2">Weapon</th>
          <th class="w-1/2">Best Ammo</th>
        </tr>
        <tr v-for="element in results" :key="element">
          <td class="border px-8">{{ element.name }}</td>
          <td class="border px-8">{{ element.damage }}</td>
          <!--  TODO: Fill in ammo based on JSON-File  -->
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    results: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
