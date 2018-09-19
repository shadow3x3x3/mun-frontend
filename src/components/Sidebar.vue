<template>
  <v-navigation-drawer
    app
    fixed
    :value="isCollapse"
    mobile-break-point="740"
    width="250"
  >
    <v-list class="pt-0">
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <router-link :to="{ name: item.link }">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
    isCollapse() {
      return this.sidebar;
    },
  },
  data() {
    return {
      items: [
        { title: 'Dashboard', link: 'dashboard', icon: 'dashboard' },
        { title: 'Main', link: 'main', icon: 'pets' },
        { title: 'Home', link: 'home', icon: 'home' },
        { title: 'Message', link: 'message', icon: 'message' },
      ],
      right: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  font-size: 20px;
}
</style>
