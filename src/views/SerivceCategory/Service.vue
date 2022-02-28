<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="(title, key) in titles"
        :key="title"
        cols="12"
        sm="4" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ title }} <v-spacer></v-spacer> {{ contents[key] }}
           <v-img max-height="150" max-width="250" src="../../assets/logo.png" ></v-img> <!-- fine -->
           <!-- <v-img max-height="150" max-width="250" src="@/assets/logo.png" ></v-img> fine -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
    export default {
        name : 'Service',
        data () {
            return {
                images : ['logo.png','pakistan.jph','pakistan.jph'],
                titles : ['Pakistan','China','Turkey'],
                contents : ['Lahore','Xiang','Istanbul']
            }
        }
    }
</script>
