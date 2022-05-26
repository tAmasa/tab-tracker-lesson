<template>
  <v-app>
    <div>
      <v-layout column>
        <v-flex>
          <div class="white elevation-2">
            <v-toolbar flat dense class="light-green" dark>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <div class="pl-2 pr-5 pt-4 pb-2">
              <h1>Register</h1>
              <v-text-field
                type="email"
                name="email"
                v-model="email"
                placeholder="email"
              ></v-text-field>
              <br />

              <v-text-field
                type="password"
                name="password"
                v-model="password"
                placeholder="password"
              ></v-text-field>
              <br />
              <v-alert type="error"  v-html="error"/>
              <v-btn class="light-green" @click="register">Register</v-btn>
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
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.toolbar__title{
  color: white
}
.btn__contnet {
  color:white
}

</style>
