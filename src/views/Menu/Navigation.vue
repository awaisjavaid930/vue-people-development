<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row class="mb-6" no-gutters>
        <v-col v-for="item in items" :key="item.value">
            {{ item.value }} 
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
        items: [
            { value: "Home" },
            { value: "Service" },
            { value: "Service Provider" },
            { value: "Contact us" },
        ],
    };
  },
};
</script>