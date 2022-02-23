<template>
  <div>
    <v-card max-width="400" tile>
      <v-card-title> People Developments </v-card-title>
    </v-card>

    <vue-typed-js
      :fadeOut="true"
      :loop="true"
      :strings="['Services Provider', 'OutSource', 'Trainer', 'Tax Agent']"
    >
      <h2>I'm People <span class="typing"></span></h2>
    </vue-typed-js>
  </div>
</template>
<script>
export default {
  name: "Service",
};
</script>