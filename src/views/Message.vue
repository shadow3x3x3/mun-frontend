<template>
  <v-container fluid grid-list-md class="full-block">
    <v-layout row wrap>

      <v-toolbar flat height="55%" color="grey lighten-1">
        <v-btn icon>
          <v-icon>create</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>delete</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          hide-details
          prepend-icon="search"
          single-line
          color="black"
        ></v-text-field>
      </v-toolbar>

      <v-flex xs3 class="selector">
        <v-list two-line class="full-block">
          <template v-for="(object, index) in objects">
            <v-list-tile
              :key="index"
              avatar
              @click="selectedObject = object.id"
            >
              <v-list-tile-content>
                <v-list-tile-title> {{ object.country }} </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ leastMesg(index).topic }}
                </v-list-tile-sub-title>
                <v-list-tile-sub-title class="content-text">
                  {{ leastMesg(index).content }}
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-list-tile-action-text> 12:12 </v-list-tile-action-text>
                <div class="__placeholder"></div>
                <v-icon color="grey darken-0" v-html="leastMesg(index).status"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider :key="index"></v-divider>
          </template>
        </v-list>
      </v-flex>

      <v-flex xs9 class="messager">
        <v-flex
          v-for="(message, index) in objects[selectedObject].messages"
          :key="index"
        >
          <v-card class="white--text message-card" flat>
            <v-card-title primary-title class="message-title">
              <div class="headline" v-if="isTX(message.direction)">
                {{ objects[selectedObject].country }}
              </div>
              <div class="headline" v-else>Me</div>
              <v-spacer></v-spacer>
              <div>{{ message.date }}</div>
              <div>
                <v-icon color="grey darken-0" v-html="message.status"></v-icon>
              </div>
            </v-card-title>
            <v-card-text class="message-text">
              <div class="message-topic">{{ message.topic }}</div>
              <div>{{ message.content }}</div>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MessageCard from '@/components/MessageCard.vue';

const _ = require('lodash');

const TX = 0;
const RX = 1;

export default {
  components: {
    MessageCard,
  },
  data() {
    return {
      selectedObject: 0,
      objects: [
        {
          id: 0,
          country: 'Taiwan',
          messages: [
            {
              date: '11:54',
              topic: 'Topic 1',
              content: 'Hey Taiwan',
              status: 'fiber_manual_record',
              direction: TX,
            },
            {
              date: '11:58',
              topic: 'Topic 2',
              content: 'Whats up',
              status: 'fiber_manual_record',
              direction: RX,
            },
            {
              date: '12:54',
              topic: 'Topic 3',
              content: 'Just test =)',
              status: 'fiber_manual_record',
              direction: TX,
            },
          ],
        },
        {
          id: 1,
          country: 'USA',
          messages: [
            {
              date: '10:54',
              topic: 'Topic 1',
              content: 'Lorem ipsum dolor sit amet, potenti arcu nec rhoncus malesuada vitae velit. Quis id quis, metus sed nisl, suspendisse a posuere at nunc a, morbi quisque, nulla metus in leo. Ut tellus nam sapien. Platea molestie odio ridiculus. A nec quis magnis mattis donec massa, class lacinia praesent urna purus condimentum amet, mauris pellentesque. Sem morbi in. Pede commodo tellus ornare dignissim sed, nam et ultrices eu est magna, id pellentesque, nec et. Massa dui luctus turpis ut adipiscing quis, pellentesque molestie neque, convallis dictum justo pretium mattis pellentesque. Purus suspendisse sit tincidunt, faucibus erat bibendum. Vestibulum tincidunt sollicitudin arcu etiam egestas. Mauris dignissim consectetuer suspendisse tincidunt, felis vel lacus sit, eros purus condimentum lectus duis molestie.',
              status: 'fiber_manual_record',
              direction: TX,
            },
            {
              date: '10:58',
              topic: 'Topic 2',
              content: 'Whats up',
              status: 'fiber_manual_record',
              direction: RX,
            },
            {
              date: '11:54',
              topic: 'Topic 3',
              content: 'Be quite.',
              status: 'access_time',
              direction: TX,
            },
          ],
        },
        {
          id: 2,
          country: 'Japan',
          messages: [
            {
              date: '13:54',
              topic: 'Topic 1',
              content: 'Hey Japan',
              status: 'fiber_manual_record',
              direction: TX,
            },
            {
              date: '13:58',
              topic: 'Topic 2',
              content: 'Whats up',
              status: 'fiber_manual_record',
              direction: RX,
            },
            {
              date: '14:54',
              topic: 'Topic 3',
              content: 'Nice weather.',
              status: 'forward',
              direction: TX,
            },
          ],
        },
      ],
    };
  },
  methods: {
    leastMesg(objectID) {
      return _.last(this.objects[objectID].messages);
    },
    isTX(direction) {
      return direction === TX;
    },
  },
  created() {
    // TODO: Fetch latest messages
  },
};
</script>

<style lang="scss" scoped>

.content-text {
  font-size: 75%;
}

.full-block {
  padding: 0px;
}

.element-block {
  overflow: auto;
  padding: 0px;
  height: calc(100vh - 12vh);
  border: solid #E0E0E0;
  border-width: 0px 1px 0px 1px;
}

.selector {
  @extend .element-block;
}

.messager {
  @extend .element-block;
}

.message-title {
  padding-bottom: 0px;
}

.message-topic {
  font-size: 120%;
  font-weight: 600;
  border: solid #E0E0E0;
  border-width: 0px 0px 1px 0px;
}

.message-card {
  background-color: rgba(123, 124, 127, 0.35);
}

.message-text {
  padding-top: 12px;
}


</style>

