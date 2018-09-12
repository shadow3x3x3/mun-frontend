<template>
  <v-navigation-drawer
    v-model="drawer"
    permanent
    absolute
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
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Item 1", link: "dashboard" },
        { title: "Item 2", link: "main" }
      ],
      right: null
    };
  }
};
</script>

<style lang="scss" scoped>
.item {
  font-size: 20px;
}
</style>
