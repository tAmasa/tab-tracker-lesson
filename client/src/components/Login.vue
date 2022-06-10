<template>
<v-app>
    <v-layout column>
        <v-flex>
    <panel title = "Login">
<form
            name = "tab-tracker-form"
            autocomplete="off">
                <h1>Login</h1>
                <v-text-field
                  type="email"
                  v-model="email"
                  label="email"
                  placeholder="johnny@appleseed.com"
                ></v-text-field>
                <br />
                <v-text-field
                  type="password"
                  v-model="password"
                  label="password"
                  placeholder="8 characters or more"
                ></v-text-field>
<!--
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Normal with hint text"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field> -->

                <v-text-field
                  label="label"
                  v-model="value"
                  :rules="[() => !!value || 'This field is required']"
                  required
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
    </panel>
    </v-flex>
  </v-layout>
  </v-app>
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  components: {
    Panel
  },
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

.v-alert {
  color: black
}

</style>
