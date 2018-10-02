<template>
  <v-container grid-list-md>
    <v-layout column wrap justify-center>
      <v-flex>
        <h2>Committees</h2>
      </v-flex>
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="committees"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.abbr }}</td>
            <td class="text-xs-left">{{ props.item.conference }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left"> Button Placeholder </td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">
              Sorry, nothing to display here :(
            </v-alert>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Committee Name',
          align: 'left',
          value: 'name',
        },
        {
          text: 'Abbreviation',
          align: 'left',
          value: 'abbr',
        },
        {
          text: 'Attached Conference',
          align: 'left',
          value: 'conference',
        },
        {
          text: 'Status',
          align: 'left',
          value: 'status',
          width: '10%',
        },
        {
          text: ' Edit',
          align: 'left',
          value: 'edit',
          width: '10%',
        },
      ],
      committees: [
        {
          name: 'MUN Club Trial',
          abbr: 'MUN Club Trial abbr',
          conference: 'PAWNU',
          status: 'true',
        },
        {
          name: 'A Club Trial',
          abbr: 'A Trial abbr',
          conference: 'ANU',
          status: 'true',
        },
        {
          name: 'B Club Trial',
          abbr: 'B Club Trial abbr',
          conference: 'BNU',
          status: 'true',
        },
      ],
    };
  },
};
</script>
