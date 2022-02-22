<template>
  <v-row>
    <v-col>
      <Logo />
    </v-col>

    <v-spacer></v-spacer>

    <v-col>
      <Navigation />
    </v-col>
  </v-row>
</template>
<script>
import Logo from "./Logo.vue";
import Navigation from "./Navigation.vue";
export default {
  name: "Menu",
  components: {
    Logo,
    Navigation,
  },
};
</script>