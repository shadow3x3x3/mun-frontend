<template>
  <v-toolbar dark app clipped-left color="grey darken-2">
    <v-toolbar-side-icon @click="toggleSidebar"></v-toolbar-side-icon>
    <router-link to="/dashboard">
      <v-img src="https://picsum.photos/110/100?random"></v-img>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>add_alert</v-icon>
    </v-btn>

    <v-avatar size="30px">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
    </v-avatar>

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

