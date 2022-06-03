<template>

  <v-app-bar color="light-green" dark app >

    <v-toolbar-title class="mr-4">
    <span
    class="home"
    @click="navigateTo({name:'root'})">
    Tab tracker
    </span>
    </v-toolbar-title>

     <v-toolbar-items>
      <v-btn
      flat
      light
      @click="navigateTo({name: 'songs'})">
      Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
      flat
      dark
       v-if="$store.state.isUserLoggedIn"
      @click="logout">
      Logout
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn flat light
       v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({name: 'login'})">
      Login
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn flat light
      v-if="!$store.state.isUserLoggedIn"
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
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
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
