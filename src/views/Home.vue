<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12>
        <div class="resultContainer">
          <v-layout v-bind="layoutAttributes">
            <div class="item elevation-5"></div>
            <div class="item elevation-5"></div>
            <div class="item elevation-5"></div>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-layout row xs12 wrap>
          <v-flex xs12 md4>
            <h1>123</h1>
          </v-flex>
          <v-flex xs12 md4>
            <h2>234</h2>
          </v-flex>
          <v-flex xs12 md4>
            <v-layout column>
              <h3>123456</h3>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <h5>Output:</h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

</script>
