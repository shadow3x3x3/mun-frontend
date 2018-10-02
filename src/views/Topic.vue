<template>
  <v-container grid-list-md>
    <div class="d-flex justify-between align-center mb-3">
      <v-btn @click="all">all</v-btn>
      <v-btn @click="none">none</v-btn>
    </div>

    <v-expansion-panel v-model="panel" expand>
      <v-expansion-panel-content
        v-for="(topic, i) in topics"
        :key="i"
      >
        <div slot="header"> {{ topic.title }} </div>
        <v-card>
          <v-card-text> {{ topic.content }} </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      panel: [],
      topics: [
        {
          title: 'Topic 1',
          content: 'This is the content of topic 1.',
        },
        {
          title: 'Topic 2',
          content: 'This is the content of topic 2.',
        },
        {
          title: 'Topic 3',
          content: 'This is the content of topic 3.',
        },
        {
          title: 'Topic 4',
          content: 'This is the content of topic 4.',
        },
      ],
    };
  },
  methods: {
    all() {
      this.panel = Array(this.topics.length).fill(true);
    },
    none() {
      this.panel = [];
    },
  },
};
</script>
