<template>
  <div class="text-xs-center">
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ object }}</h3>
          <div>{{ date }}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn color="red lighten-2" dark @click="dialog = true">
          Detail
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          From {{ object }}
        </v-card-title>

        <v-card-text>
          {{ content }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['object', 'date', 'content'],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
