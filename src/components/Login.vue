<template>
  <div class="login">
    <!-- <div class="container"> -->
    <div class="login__content">
      <div class="login__content-left">
        <img src="../assets/images/png/Illustration-min.png" alt="user-png" />
        <img src="../assets/images/png/Vector-min.png" alt="vector" />
      </div>
      <div class="login__content-right">
        <h1>Sign in</h1>
        <form @submit.prevent="user">
          <span>
            <input type="text" placeholder="Username"  v-model="username"/>
            <!-- <label for="">Email</label> -->
            <hr />
          </span>
          <span>
            <input type="password" placeholder="Password" v-model="password"/>
            <!-- <label for="">Password</label> -->
            <hr />
            <span class="remember_parent">
              <div class="remember">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p class="p">Forgot password?</p>
            </span>
          </span>
          <button>Sent</button>
        </form >
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import axios from 'axios'
var form = new FormData()
export default {
  name: 'CreatPost',
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        user() {
          // console.log(this.username);
          // console.log(this.password);
            form.append('username', this.username)
            form.append('password', this.password)
            axios.post('http://10.20.12.227:8000/user/login/', form)
            .then((response)=>{
              console.log(response);
                let status = response.status
                localStorage.setItem('token', response.data.token)
                if (status == 200) {
                    this.$router.push('/home')
                }
            })
            .catch(error => console.log(error))

        }
    },
};
</script>
<style></style>
