<template>
  <header>
    <input type="checkbox" id="checkBox" />
    <div class="toggle" @click="handleEvent">
      <span class="top_line common"></span>
      <span class="middle_line common"></span>
      <span class="bottom_line common"></span>
    </div>

    <div>
      <div class="slide">
        <div id="background">
          <h1 id="Menu">CYBER LOOX</h1>  <button type="button" @click="logOut">Log out</button>
        </div>
        <ul>
          <li class="navs-links first-link">
            <router-link to="/"
              ><span><i class="fa-solid fa-house-chimney"></i></span>
              HOME</router-link
            >
          </li>
        <li class="navs-links">
            <router-link to="/products"
              ><i class="fa-solid fa-mobile-screen"></i>ITEMS</router-link
            >
          </li>
          <li class="navs-links">
            <router-link to="/about"
              ><i class="fa-solid fa-circle-info"></i> ABOUT</router-link
            >
          </li>
          <li class="navs-links">
            <router-link to="/contact"
              ><i class="fa-solid fa-phone-flip"></i> CONTACT</router-link
            >
          </li>
          <li class="navs-links">
            <router-link to="/users/register"
              ><i class="fa-solid fa-circle-plus"></i> REGISTER</router-link
            >
          </li>
          <li class="navs-links">
            <router-link to="/users/login"
              ><i class="fa-solid fa-user"></i>LOGIN</router-link
            >
          </li>
          <li v-if="user" class="navs-links">
            <router-link to="/cart"
              ><i class="fa-solid fa-cart-shopping"></i> CART</router-link
            >
          </li>
              <li v-if="user" class="navs-links">
            <router-link v-if="user.user_role == 'admin'" to="/admin"
              ><i class="fa-solid fa-screwdriver-wrench"></i> ADMIN</router-link
            >
          </li>
        </ul>
             <div class="loader">
    <div id="first">
        <div id="second">
            <div id="third">
            </div>
        </div>
      </div>
 
    </div>
</div>
    </div>
  </header>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Dosis:300,400,500");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Dosis", sans-serif;
  color: #fff;
}
body {
  background-color: #f2f2f2;
}

#background{
   box-shadow: 0px 0px 10px #3ec5ffdf ;
   background-color:#3ec5ffdf;
   padding: 20px;
   display: flex;
   justify-content: center;
}

button {
  position: absolute;
  border-radius: 20px;
  border: 1px solid #3ec5ffdf;
  background-color: white;
  color: #3ec5ffdf;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0px 0px 10px #3ec5ffdf ;
  right: 40px;
  /* transition: transform 80ms ease-in; */
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}
.slide {
  height: 100%;
  width: 500px;
  position: fixed;
  background-color: #252020;
  transform: translateX(-510px);
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  top: 0%;
  z-index: 5;
}

#Menu {
  font-weight: 800;
  text-align: center;
  /* padding: 10px 0;
    padding-right: 90px; */
  display: flex;
  justify-content: center;
  pointer-events: none;
  text-decoration: line-through;
  padding-right: 50px;
}

.first-link {
  margin-top: 10%;
}

.navs-links {
  list-style: none;
  text-align: center;
  display: flex;
  /* justify-content: center; */
  padding: 1em 1em 1em 11em;
  margin-right: 2em;
}

.navs-links a {
  font-weight: 500;
  padding: 5px 0;
  display: block;
  text-transform: capitalize;
  text-decoration: none;
}

.navs-links a i {
  width: 40px;
  text-align: center;
}

.navs-links > a {
  padding-left: 0;
  text-align: start;
}

#checkBox {
  display: none;
  visibility: hidden;
  -webkit-appearance: none;
}

.toggle {
  position: fixed;
  height: 30px;
  width: 30px;
  top: 15px;
  left: 11px;
  z-index: 1;
  cursor: pointer;
  border-radius: 2px;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 99;
}

.toggle .common {
  position: absolute;
  height: 2px;
  width: 20px;
  background-color: #fff;
  border-radius: 50px;
  transition: 0.3s ease;
  left: 0;
}

.toggle .top_line {
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.toggle .middle_line {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.toggle .bottom_line {
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input:checked ~ .toggle .top_line {
  left: 2px;
  top: 14px;
  width: 25px;
  transform: rotate(45deg);
}

input:checked ~ .toggle .bottom_line {
  left: 2px;
  top: 14px;
  width: 25px;
  transform: rotate(-45deg);
}

input:checked ~ .toggle .middle_line {
  opacity: 0;
  transform: translateX(20px);
}

input:checked ~ .slide {
  transform: translateX(0);
}
.navs-links > a:hover {
  color: white;
}
.navs-links:hover {
  color: white;
  background-color: #3ec6ff;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  transition: all 1.5s ease;
  width: 100%;
  box-shadow: 0px 0px 10px #3ec5ffdf;
}
.loader {
  background-color: white;
  position: absolute;
  width: 2em;
  height: 2em;
  transform-origin: center;
  transition: 1s;
  border-radius: 50px;
  box-shadow: inset 0px 0px 10px white,
  inset 5px 5px 12px #3ec5ffdf,
  inset 8px 8px 1px #3ec5ffdf,
  0px 0px 1px #3ec5ffdf;
  animation: 1.2s linear infinite 0s running first682;
  z-index: 50;
  bottom:14%;
  left:40%;
}

.loader div {
  width: inherit;
  height: inherit;
  position: absolute;
}

#first {
  transform: rotate(90deg)
}

#first::before {
  --width: 1em;
  --height: 1em;
  content: "";
  position: absolute;
  top: 100%;
  left: calc(50% - var(--width)/2);
  width: 1em;
  height: 1em;
  background-color: white;
  box-shadow: inset 5px 5px 10px #3ec5ffdf,
  0px 0px 2px white;
  border-radius: 50px;
  animation: 0.8s ease-in 0s infinite running jump2;
}

#second {
  transform: rotate(90deg);
}

#second::before {
  --width: 1em;
  --height: 1em;
  content: "";
  position: absolute;
  top: 100%;
  left: calc(50% - var(--width)/2);
  width: 1em;
  height: 1em;
  background-color: white;
  box-shadow: inset 5px 5px 10px #3ec5ffdf,
  0px 0px 2px white;
  border-radius: 50px;
  animation: 1.5s ease-in 0s infinite running jump2;
}

#third {
  transform: rotate(90deg)
}

#third::before {
  --width: 1em;
  --height: 1em;
  content: "";
  position: absolute;
  top: 100%;
  left: calc(50% - var(--width)/2);
  width: 1em;
  height: 1em;
  background-color: white;
  box-shadow: inset 5px 5px 10px #3ec5ffdf,
  0px 0px 2px white;
  border-radius: 50px;
  animation: 1.6s ease-in 0s infinite running jump2;
}

.loader::after {
  --width: 1em;
  --height: 1em;
  content: "";
  position: absolute;
  top: 100%;
  left: calc(50% - var(--width)/2);
  width: 1em;
  height: 1em;
  background-color: white;
  box-shadow: inset 5px 5px 10px #3ec5ffdf,
  0px 0px 2px white;
  border-radius: 50px;
  animation: 1.2s ease-in 1s alternate infinite running jump2;
}

@keyframes first682 {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(0deg);
    transform: rotate(90deg)
  }

  50% {
    transform: rotate(90deg);
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(180deg);
    transform: rotate(270deg)
  }

  100% {
    transform: rotate(270deg);
    transform: rotate(360deg);
  }
}

@keyframes jump2 {
  0% {
    top: 100%;
  }

  25% {
    top: 230%
  }

  50% {
    top: 100%;
  }

  75% {
    height: 0.6em
  }

  100% {
    height: 1em
  }
}
</style>
<script>
export default {
  data() {
    return {
      isChecked: false
    };
  },
  methods: {
    handleEvent() {
      this.isChecked = !this.isChecked;
      console.log(this.isChecked);
      if (this.isChecked == true) {
        document.querySelector("#checkBox").checked = true;
        document.querySelector(".slide").style.transform = "translateX(-0px)";
        document.querySelector(".slide").style.transition = "all 0.8s ease";
      }
      if (this.isChecked == false) {
        document.querySelector("#checkBox").checked = false;
        document.querySelector(".slide").style.transform = "translateX(-510px)";
      }
    },
    logOut(){
   return (this.$store.state.user= null )
    }
    
  },
   computed:{
   user(){
    return this.$store.state.user
   }
 }
};
</script>
