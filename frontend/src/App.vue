<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">

        <!-- Menu Buttons -->

        <v-btn  to="/" text>
          <v-icon
            color="blue darken-2"
            class="mr-2"
          >
            mdi-clipboard-text-clock-outline
          </v-icon>
          Logtime
        </v-btn>
        <v-spacer></v-spacer>

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
export default{
  name: "App",

  components: {
  },

  data: () => ({
  }),
};
</script>
<style>
</style>
