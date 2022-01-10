<template>
  <v-container>
    <div class="header">
      <h1>User Name Report</h1>
      <DialogLogtime/>
    </div>

    <ExpansionProject
      :projects="projects"
    />
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
    };
  },

  components: {
    ExpansionProject,
    DialogLogtime
  },

  methods: {
    async getProjects() {
      const data = await api.getProjects(11231);
      this.projects = data;
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
