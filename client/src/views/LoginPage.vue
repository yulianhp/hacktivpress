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
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" style="" v-model="username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style="" v-model="password">
    </div>
    <div class="">
      <button type="button" class="btn btn-secondary" style="" v-if="register" @click="registerUser">Register</button>
      <button type="button" class="btn btn-secondary" style="float:left;" v-else  @click="logSwitch">Register</button>
      <button type="button" class="btn btn-secondary" style="float:right;" v-if="!register" >Sign In</button>
      <h4 v-if="registered">Please sign in with your credential</h4>
    </div>
    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      register: false,
      registered: false,
      username: '',
      password: ''
    }
  },
  methods: {
    logSwitch () {
      this.register = !this.register
    },
    setNull () {
      this.username = ''
      this.password = ''
    },
    registeredMsg () {
      this.logSwitch()
      this.registered = true
      setTimeout( () => {
        this.registered = false
      }, 5000)
    },
    registerUser () {
      let input = {
        username: this.username,
        password: this.password
      }
      this.$axios.post(`users/signUp`, input)
        .then(result => {
          console.log(result)
          this.setNull()
          this.registeredMsg()
          this.logSwitcher()
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="css">
</style>
