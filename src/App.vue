<template>
  <div id="app" class="single-page">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/main">Main</router-link>
    </div>
    <router-view class="flex-center"></router-view>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#app {
  color: #2c3e50;
  text-align: center;
  font-family: 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.single-page {
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.flex-container {
  display: flex;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
