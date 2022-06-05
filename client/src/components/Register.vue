<template>
  <v-app>
    <div>
      <v-layout column>
        <v-flex>
          <panel title="Register">
          <form
            name = "tab-tracker-form"
            autocomplete="off">
                <h1>Register</h1>
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
              <v-btn class="light-green" @click="register">Register</v-btn>
          </panel>
        </v-flex>
      </v-layout>
    </div>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.stateMessage = 'Welcome!'
      } catch (error) {
        this.stateMessage = error.response.data.error
      }
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
