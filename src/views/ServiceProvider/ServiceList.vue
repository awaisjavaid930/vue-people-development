<template>
  <div>
    <v-tabs>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
        <v-tabs-items>
      <v-tab-item>
        <h1>dfsd</h1>
      </v-tab-item>
      <v-tab-item>
        dfsd
      </v-tab-item>
      <v-tab-item>
        dfsd
      </v-tab-item>
      <v-tab-item>
        dfsd
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  name: "TabService",
  data() {
    return {
      items: ["awas", "awas2", "awas3", "awas4"],
      contents: ["asdfasdwas", "awasdfasds2", "awas3", "awas4"],
    };
  },
};
</script>