<template>
  <v-app>
    <sidebar/>
    <navbar/>
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view class="flex-center"></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default {
  components: {
    Navbar,
    Sidebar,
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#app {
  color: #2c3e50;
  font-family: 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
