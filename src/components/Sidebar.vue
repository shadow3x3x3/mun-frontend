<template>
  <v-navigation-drawer
    app
    fixed
    :value="isCollapse"
    mobile-break-point="740"
    width="250"
  >
    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
      >
        <v-list-tile-content>
          <router-link :to="{ path: item.link }">
            <v-list-tile-title class="item">{{ item.title }}</v-list-tile-title>
          </router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return this.sidebar;
    },
  },
  data() {
    return {
      items: [
        { title: 'Item 1', link: 'dashboard' },
        { title: 'Item 2', link: 'main' },
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
