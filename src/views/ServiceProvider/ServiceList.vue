<template>
  <v-card>
    <v-toolbar
      flat
      color="primary"
      dark
    >
      <v-toolbar-title>WORLDWIDE SERIVCE PROVIDER</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab v-for="(country, index) in counteries" :key="index"> 
        <v-icon left>
          {{ icons[index] }}
        </v-icon>
          {{ country }}
      </v-tab>
      <v-tab-item v-for="countryDetail in countryDetails" :key="countryDetail">
        <v-card flat>
          <v-card-text >
            <p>
                {{ countryDetail }}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
  export default {
    name : 'ServivceList',
    data() {
      return  {
        counteries : ['Pakistan',' China', 'Russia','Turkey'],
        countryDetails : ['Lahore' , 'Xiany' , 'Massco','Tokyo'],
        icons : ['mdi-access-point' , 'mdi-account' , 'mdi-format-annotation-plus','mdi-checkbox-multiple-blank-circle']
      }
    }

  }
</script>
