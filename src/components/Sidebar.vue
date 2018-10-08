<template>
  <v-navigation-drawer
    app
    fixed
    floating
    clipped
    :value="isCollapse"
    mobile-break-point="740"
    width="250"
    class="grey lighten-2"
  >
      <v-toolbar flat class="transparent" height="350px">
        <v-list class="pa-0">
          <v-list-tile>
            <v-flex
              align-center
              justify-center
              text-xs-center
            >
              <v-avatar size="150px">
                <img src="https://sj.xiaopi.com/uploadfile/2014/0209/20140209045444189.jpg">
              </v-avatar>
              <h1 class="user-name">User Name</h1>
              <v-flex text-xs-left class="information">
                <p>Hist # PAS</p>
                <p>User # DE-31</p>
                <p>Conference # C-A21</p>
                <p>Country # KR</p>
              </v-flex>
            </v-flex>

          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="{ name: item.link }"
          active-class="white"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" class="grey--text text--darken-2 link">
            </v-list-tile-title>
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
        { title: 'Topic', link: 'topic', icon: 'book' },
      ],
      right: null,
    };
  },
};
</script>

<style lang="scss" scoped>

p {
  margin-bottom: 5px;
}

.user-name {
  margin: 10px;
}

.link {
  font-size: 120%;
}

.information {
  margin-left: 40px;
}

</style>
