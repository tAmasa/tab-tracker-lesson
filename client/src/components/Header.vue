<template>

  <v-app-bar color="light-green" dark app >

    <v-toolbar-title class="mr-4">
    <span
    class="home"
    @click="navigateTo({name:'root'})">
    Tab tracker
    </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat light
      @click="navigateTo({name: 'login'})">
      Login
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn flat light
      @click="navigateTo({name: 'register'})"> Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.home {
  cursor: pointer
}

.home:hover {
  color: #e9e
}
.btn__content {
  color: blue
}
</style>
