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
    <div>
      <v-spacer></v-spacer>
      <v-app-bar
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <Service />
      </v-app-bar>
    </div>
    <ServiceProvider></ServiceProvider>
  </div>
</template>

<script>
import Menu from "./views/Menu/Menu.vue";
import Service from "./views/Service/Service.vue";
import ServiceProvider from './views/ServiceProvider/ServiceProvider.vue';
export default {
  name: "App",
  components: {
    Menu,
    Service,
    ServiceProvider,
  },
  data: () => ({}),
};
</script>
