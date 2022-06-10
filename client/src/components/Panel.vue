<template>
  <v-layout column>
        <v-flex>
          <div class="white elevation-1">
            <v-toolbar flat dense class="light-blue" dark>
              <v-toolbar-title dark>{{title}}</v-toolbar-title>
            </v-toolbar>

            <div class="pl-6 pr-6 pt-2 pb-2">
            <slot>
            </slot>
            </div>
          </div>
        </v-flex>
      </v-layout>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
.v-toolbar__title{
  color: black
}
</style>
