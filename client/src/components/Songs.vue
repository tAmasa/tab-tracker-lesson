<template>
<!-- <v-layout column>
        <v-flex>
          <div class="white elevation-1">
            <v-toolbar flat dense class="light-green" dark>
              <v-toolbar-title>Songs</v-toolbar-title>
            </v-toolbar>
            <div class="pl-6 pr-6 pt-2 pb-2">
            </div>
          </div>
        </v-flex>
      </v-layout> -->
       <v-card
    class="pa-4"
    flat
    height="300px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
  >
    <v-toolbar
      dense
      floating
    >
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
</script>

<style scoped>
</style>
