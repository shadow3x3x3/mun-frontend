<template>
  <v-toolbar light app color="blue">
    <v-toolbar-side-icon @click="toggleSidebar"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


