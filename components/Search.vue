<template>
  <div class="flex-initial flex-col justify-center bg-gray-800 p-10 w-1/3">
    <SearchMask @searchWeapon="addElement" />
    <SearchResult :results="list" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

import SearchMask from './SearchMask'
import SearchResult from './SearchResult'

export default {
  name: 'Search',
  components: {
    SearchMask,
    SearchResult,
  },
  computed: {
    ...mapGetters({
      list: 'weapons/getFilteredWeapons',
    }),
  },
  methods: {
    ...mapMutations({
      addElement: 'weapons/setSearchedWeapon',
    }),
  },
}
</script>

<style></style>
