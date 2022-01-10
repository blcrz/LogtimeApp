<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">

        <!-- Menu Buttons -->
        <v-btn class="mr-2" to="/" text>
          <v-icon
            color="blue darken-2"
            class="mr-2"
          >
            mdi-account-circle-outline
          </v-icon>
          Users
        </v-btn>
        <v-btn
          v-if="isUserSelected"
          to="/logtime"
          text
        >
          <v-icon
            color="blue darken-2"
            class="mr-2"
          >
            mdi-clipboard-text-clock-outline
          </v-icon>
          Logtime
        </v-btn>

        <v-responsive max-width="260"> </v-responsive>
      </v-container>
    </v-app-bar>

<!-- Main content -->
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import eventBus from "./eventBus"

export default{
  name: "App",

  data() {
    return {
      userSelected: false
    }
  },

  computed: {
    isUserSelected() {
      return this.userSelected || !!localStorage.getItem('userId')
    }
  },

  mounted() {
    eventBus.$on('user-selected', (value) => {
      this.userSelected = value
    })
  },
};
</script>
<style>
</style>
