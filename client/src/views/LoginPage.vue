<template lang="html">
  <div class="container">
    <div class="card text-white bg-primary mb-3" style="width:60%;margin:auto;margin-top:8%;">
      <div class="card-header">
        <h2 v-if="register">Register</h2>
        <h2 v-else >Login</h2>
      </div>
      <div class="card-body">
        <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" style="" v-model="form.username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style="" v-model="form.password">
    </div>
    <div class="">
      <button type="button" class="btn btn-secondary" style="" v-if="register" @click="registeredUser">Register</button>
      <button type="button" class="btn btn-secondary" style="float:left;" v-else  @click="logSwitch">New User</button>
      <button type="button" class="btn btn-secondary" style="float:right;" v-if="!register" >Sign In</button>
      <h4 v-if="registered">Please sign in with your credential</h4>
    </div>
    
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data: function () {
    return {
      register: false,
      registered: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'registerUser'
    ]),
    logSwitch () {
      this.register = !this.register
    },
    setNull () {
      this.form.username = ''
      this.form.password = ''
    },
    registeredMsg () {
      this.logSwitch()
      this.registered = true
      // this.setNull()
      setTimeout( () => {
        this.registered = false
      }, 5000)
    },
    registeredUser () {
      this.registerUser(this.form)
      this.registeredMsg()
    },
    loginUser () {
      
    }
  }
}
</script>

<style lang="css">
</style>
