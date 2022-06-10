<template>

  <v-app-bar color="light-blue" app>

 <!-- class="mr-3">
    <span
    class="home"
    @click="navigateTo({name:'root'})">
    Tab tracker
    </span>
  > -->

  <v-btn
      @click="navigateTo({name: 'root'})"
      icon>
              <v-icon>mdi-home</v-icon>
      </v-btn>
    <!-- <v-btn
      @click="navigateTo({name: 'songs'})">
      Browse
      </v-btn> -->
      <v-btn
      @click="navigateTo({name: 'songs'})"
      icon>
              <v-icon>mdi-folder-music-outline</v-icon>
      </v-btn>

      <!-- <v-btn
      @click="navigateTo({name: 'songs-create'})">Create a Song</v-btn> -->

      <v-btn
      @click="navigateTo({name: 'songs-create'})"
      icon>
              <v-icon>mdi-music-note-plus</v-icon>
      </v-btn>

      <v-btn
      @click="navigateTo({name: 'versions'})"
      icon>
              <v-icon>mdi-alpha-v-circle</v-icon>
      </v-btn>

    <v-spacer></v-spacer>
      <v-btn
      dark
       v-if="$store.state.isUserLoggedIn"
      @click="logout">
      Logout
      </v-btn>

      <v-btn
      dark
       v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({name: 'login'})" >
      Login
      </v-btn>

      <v-btn
      v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({name: 'register'})"> Sign Up
      </v-btn>
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

.v-btn{
  padding: 20px;
  border-radius:4px;
  color: rgb(95, 167, 212);
  background: rgb(84, 152, 174);
  background-color: transparent;
}

.btn__content {
  color: blue
}
</style>
