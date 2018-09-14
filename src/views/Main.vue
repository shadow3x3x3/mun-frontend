<template>
  <div class="flex-container">
    <div class="flex-column">
      <h1>This is a main page.</h1>

      <h2>Committees</h2>
      <div class="center-table">
        <table>
          <thead>
            <tr>
              <th>Committee Name</th>
              <th>Abbreviation</th>
              <th>Attached Conference</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cInfo, index) in cInfos" :key="cInfo.id">
              <td>{{ cInfo.name }}</td>
              <td>{{ cInfo.abr }}</td>
              <td>{{ cInfo.ac }}</td>
              <td>{{ cInfo.status }}</td>
              <td>
                <a class="button">{{ index }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cInfos: [
        {
          id: 123, name: 'A', abr: 'B', ac: 'B', status: 'None',
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
