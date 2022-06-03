<template>
  <v-app>
    <div>
      <v-layout column>
        <v-flex>
          <div class="white elevation-1">
            <v-toolbar flat dense class="light-green" dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <div class="pl-6 pr-6 pt-2 pb-2">
            <form
            name = "tab-tracker-form"
            autocomplete="off">
                <h1>Login</h1>
                <v-text-field
                  type="email"
                  name="email"
                  v-model="email"
                  placeholder="johnny@appleseed.com"
                ></v-text-field>
                <br />
                <v-text-field
                  type="password"
                  name="password"
                  v-model="password"
                  placeholder="8 characters or more"
                ></v-text-field>
            </form>
              <br />
              <v-alert v-html="stateMessage"/>
              <!-- <v-btn class="light-green" @click="login">Login</v-btn> -->
              <v-btn class="light-green"
              v-if="!$store.state.isUserLoggedIn"
              @click="login"
              >Login</v-btn>
               <br />

              <v-btn class="gray"
              v-if="$store.state.isUserLoggedIn"
              @click="logout">
              Log Out</v-btn>

            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      stateMessage: null
    }
  },
  methods: {
    async login () {
      try {
        console.log('login pressed')
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.stateMessage = 'Successfully logged in!'
      } catch (error) {
        this.stateMessage = error.response.data.error
      }
    },
    async logout () {
      console.log('logout pressed')
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.stateMessage = 'Successfully logged out.'
      this.email = ''
      this.password = ''
      this.$router.push({
        name: 'root'
      })
    }
  }

}
</script>

<style scoped>
.toolbar__title{
  color: white
}
.btn__content {
  color:white
}
.v-alert {
  color: black
}

</style>
