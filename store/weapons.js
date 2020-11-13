import weaponList from './ammoGuide.json'

export const state = () => ({
  weapons: weaponList,
  searchedWeapon: 'MP7A1,MP7A2',
})

export const mutations = {
  setSearchedWeapon(state, weapon) {
    state.searchedWeapon = weapon
  },
}

export const getters = {
  getFilteredWeapons(state) {
    const foundWeapons = []
    state.weapons.forEach((weapon) => {
      for (const prop in weapon) {
        if (weapon[prop] === state.searchedWeapon) {
          foundWeapons.push({
            name: weapon[prop],
            damage: weapon['Damage Value'],
          })
        }
      }
    })
    return foundWeapons.sort((a, b) => (a.damage < b.damage ? 1 : -1))
  },
}
