<template>
 <main>
  <div class="container" id="container">
    <div class="form-container sign-in-container">
      <form onSubmit="{this.handleSubmitLogin}">
        <h1>Sign in</h1>
        <span>or use your account</span>
        <input
          type="email"
          id="signInEmail"
          placeholder="Email"
          name="email"
          v-model="email"
        />
        <input
          type="password"
          placeholder="Password"
          name="user_password"
          v-model="user_password"
        />
        <button type="button" @click="login">Sign In</button>
      </form>
    </div>

    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-right">
          <h1>Hello, fellow space cadet!</h1>
          <p>Enter your personal details and start journey with us</p>
          <router-link to="/users/update">
          <button v-if="user" class="ghost" id="signUp">
            Edit Profile
          </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      user_password: "",
    };
  },
 methods:{
    login(){
        const payload = {
           email: this.email,
           user_password: this.user_password
        }
    this.$store.dispatch("login",payload)
    }
 },
    computed:{
   user(){
    return this.$store.state.user
   }
 }
};
</script>
<style scoped>
* {
  font-family: "Dosis", sans-serif;
}

main{
  height: 90vh;
  margin-bottom: -1%;
}


/* body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
} */

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}
i {
  position: relative;
 left: 20%;
}
span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #3ec5ffdf;
  background-color: #3ec5ffdf;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
    box-shadow: 0px 0px 10px #3ec5ffdf ;
  /* transition: transform 80ms ease-in; */
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  width: 150%;
  position: relative;
  top: 14%;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 14px 2px 28px #3ec5ffdf;
  position: relative;
  overflow: hidden;
  width: 850px;
  height: 650px;
  max-width: 100%;
  min-height: 480px;
  margin-bottom: 8%;
  margin-top: 6%;
  margin-left: 27%;
  position: relative;
  left: 0%;
}

.form-container {
  position: absolute;
  top: 17%;
  height: 100%;
  /* transition: all 0.6s ease-in-out; */
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 5;
}

.container.right-panel-active .sign-up-container {
  /* transform: translateX(100%); */
  opacity: 1;
  z-index: 0;
  animation: show 0.6s;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 0;
  box-shadow: 0px 0vw 10px #3ec5ffdf;
}

.overlay {
  background: #3ec5ffdf;
  background: linear-gradient(to right, #3ec5ffdf);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}

@media (max-width:425px) {

  body{
    overflow-x: hidden;
  }
  .container{
    right:20%;
    margin-left: 0%;
    z-index: 0;
    height: 900px;
  }

  .overlay{   
  top: 50%;
   height: 50%;
  width: 200%;
  right:100%;
  }
  .overlay-container{
    left: 0%;
    width: 100%;
  }
  
  main{
    height: 120vh;
  }

  .form-container {
  position: absolute;
  top: 5%;
  height: 100%;
  /* transition: all 0.6s ease-in-out; */
}
}

@media (width:768px) {

  body{
    overflow-x: hidden;
  }
  .container{
    right:20%;
    margin-left: 0%;
    z-index: 0;

  }
  
  main{
    height: 100vh;
  }

  .form-container {
  position: absolute;
  top: 15%;
  left:-1%;
  height: 100%;
  /* transition: all 0.6s ease-in-out; */
}
}

@media (width:1024px) {

  body{
    overflow-x: hidden;
  }
  .container{
    right:10%;
    margin-left: 10%;
    z-index: 0;

  }
  
  main{
    height: 100vh;
  }

  .form-container {
  position: absolute;
  top: 15%;
  left:-1%;
  height: 100%;
  /* transition: all 0.6s ease-in-out; */
}
}
</style>
