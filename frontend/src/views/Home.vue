<template>
  <v-container>
    <div class="header">
      <h1>User Name Report</h1>
      <DialogLogtime @load-projects="getProjects"/>
    </div>

    <ExpansionProject
      :projects="projects"
    />

    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-container>
</template>
<script>

import api from "@/service/apiService";
import ExpansionProject from "@/components/ExpansionProjects";
import DialogLogtime from "@/components/DialogLogtime";

export default {
  name: "Dashboard",
  data() {
    return {
      projects: [],
      overlay: false
    };
  },

  components: {
    ExpansionProject,
    DialogLogtime
  },

  methods: {
    async getProjects() {
      this.overlay = true
      const data = await api.getProjects(11231);
      this.projects = data;
      this.overlay = false
    }
  },

  mounted() {
    this.getProjects();
  },
};
</script>

<style lang="css">
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>
