<template>
  <v-container>
    <div class="header">
      <h1>Users</h1>
    </div>

    <v-data-table
      dense
      :headers="headers"
      :items="users"
      item-key="name"
      class="elevation-1 cursor-pointer"
      hide-default-footer
      @click:row="setUser"
    />
  </v-container>
</template>
<script>

import api from "@/service/apiService";
import eventBus from "@/eventBus"

export default {
  name: "User",

  data() {
    return {
      users: [],
      overlay: false,
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Username', value: 'username' },
        { text: 'Profile', value: 'profile' }
      ],
    };
  },

  methods: {
    async getUsers() {
      this.overlay = true
      const data = await api.getUsers();
      this.users = data;
      this.overlay = false
    },

    setUser(item) {
      localStorage.setItem('userId', item.id)
      localStorage.setItem('username', item.username)
      eventBus.$emit('user-selected', true)
      this.$router.push('/logtime')
    }
  },

  mounted() {
    this.getUsers();
  },
};
</script>

<style lang="css">
  .header {
    display: flex;
    justify-content: space-between;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
