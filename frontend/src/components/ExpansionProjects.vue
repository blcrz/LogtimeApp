<template>
  <v-expansion-panels
    multiple
  >
    <v-expansion-panel
      v-for="project in projects"
    >
      <v-expansion-panel-header>{{ project.projectKey }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-data-table
          dense
          :headers="headers"
          :items="project.tasks"
          item-key="name"
          class="elevation-1"
          hide-default-footer
        >
          <template v-slot:items="item">
            <v-chip small color="green" class="white--text">{{ item.type }}</v-chip>
          </template>
        </v-data-table>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "ExpansionProject",

  props: {
    projects: {
      required: true,
      default: [],
      type: Array
    }
  },

  data() {
    return {
      headers: [
        { text: 'Task', value: 'subject' },
        { text: 'Time', value: 'total_time' },
        { text: 'Description', value: 'description' },
        { text: 'Type', value: 'type' },
      ],
    };
  },
};
</script>