<template>
  <div>
    <div style="background-color: #0d2d3e">
      <v-container>
        <v-row>
          <v-col> MON - SAT: 6.00 AM - 10.00 PM SUN: CLOSED </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-icon meduim color="orange darken-2"> mdi-facebook </v-icon>
            <v-icon meduim color="orange darken-2"> mdi-skype </v-icon>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <Menu />
      </v-container>
    </div>
    <div class="backgroundImage">
        <v-container>
            <Service />
        </v-container>
    </div>
  </div>
</template>

<script>
import Menu from "./views/Menu/Menu.vue";
import Service from './views/Service/Service.vue';
export default {
  name: "App",
  components: {
    Menu,
    Service,
  },
  data: () => ({
    //
  }),
};
</script>
