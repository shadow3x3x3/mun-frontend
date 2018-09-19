<template>
  <v-container grid-list-md>
    <v-layout column wrap justify-center>

      <v-flex v-for="message in messages" :key="message.id">
        <MessageCard v-bind="message"></MessageCard>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import MessageCard from '@/components/MessageCard.vue';

export default {
  components: {
    MessageCard,
  },
  data() {
    return {
      messages: [
        {
          id: 1,
          object: 'Taiwan',
          date: 'Now',
          content: 'This is Taiwan message',
        },
        {
          id: 2,
          object: 'USA',
          date: 'Now',
          content: 'This is USA message',
        },
        {
          id: 3,
          object: 'Japan',
          date: 'Now',
          content: 'This is Japan message',
        },
      ],
    };
  },
  created() {
    // TODO: Fetch latest messages
  },
};
</script>

