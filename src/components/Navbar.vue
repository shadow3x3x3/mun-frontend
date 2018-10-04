<template>
  <v-toolbar dark app color="blue">
    <v-toolbar-side-icon @click="toggleSidebar"></v-toolbar-side-icon>
    <v-toolbar-title @click="toggleSidebar">Title</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

