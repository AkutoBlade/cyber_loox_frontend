<template>
<h1 id="main_title">CYBER LOOX</h1>
<div v-if="products" class="container">
  <div class="card" v-for="product in products" :key="product.id">
	<img :src="product.img" :alt="product.img" class="images" />
	<div class="intro">
		<h1>{{product.title}}</h1>
    <router-link :to="{name: 'single', params: {id: product.product_id}}">
      <button id="view" type="button" @click=""><i class="fa-solid fa-eye"></i> VIEW</button>
    </router-link>
    <button id="cart" type="button" @click=""><i class="fa-solid fa-cart-plus"></i> CART</button>
	</div>
   </div>
   <img class="image_icon" src="../assets/Mascot_1.png" alt="">
</div>
<div v-else class="loader">
    <div id="first">
        <div id="second">
            <div id="third">
            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
 mounted(){
  this.$store.dispatch('getProducts')
 },
 computed:{
   products(){
    return this.$store.state.products
   }
 }
  }
</script>
<style scoped>

 *{
	margin:  0px;
	padding:  0px;
	font-family: "Dosis", sans-serif;
 }

 body{
	display: flex;
	justify-content: center;
	align-items: center;
 }

.container{
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
 margin-left:15%;
width:100%;
margin-top: 5%;
}

#view {
  position: absolute;
  border-radius: 20px;
  border: 1px solid #3ec5ffdf;
  background-color: white;
  color: #3ec5ffdf;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0px 0px 10px #3ec5ffdf ;
  top:45%;
  left: 17%;
  /* transition: transform 80ms ease-in; */
}

#cart{
  position: absolute;
  border-radius: 20px;
  border: 1px solid #3ec5ffdf;
  background-color: white;
  color: #3ec5ffdf;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0px 0px 10px #3ec5ffdf ;
  top:45%;
  left:55%;
}

#main_title{
 position: absolute;
 text-decoration: line-through;
 left: 36%;
 top:0%;
 font-size: 100px;
 /* transform: rotate(90deg); */
  text-shadow: 0px 0px 10px;
  font-family: 'Dosis', sans-serif;
  color: white;
} 

p{
 font-size: 15px;
}

.images{
	border-radius: 30px;
	width:70%;
	top:10%;
	left: 15%;
	position: absolute;
	transition: all 1.5s;
}

.images:hover{
	transform: scale(1.3);
}

.image_icon{
  position: absolute;
  bottom:84%;
  left: 29.1%;
  width:180px;
  z-index: 2;
}

.intro{
  display: flex;
	border-bottom-left-radius:30px ;
	border-bottom-right-radius:30px;
	position: absolute;
	top: 70%;
	width: 100%;
  background-color: #3ec5ffdf;
	height:150px;
	padding:10px;
  justify-content: center;
}

h1{
	font-size: 20px;
  text-align: center;
  color: white;
}
.card{
	width:350px;
	height: 500px;
	margin-top: 5%;
	margin-bottom: 4%;
	box-shadow: 5px 5px 20px #3ec5ffdf;
    border-radius: 30px;
	position: relative;
}

.loader {
  background-color: white;
  position: relative;
  width: 4em;
  height: 4em;
  transform-origin: center;
  transition: 1s;
  border-radius: 50px;
  box-shadow: inset 0px 0px 10px white,
  inset 5px 5px 12px #3ec5ffdf,
  inset 8px 8px 1px #3ec5ffdf,
  0px 0px 1px #3ec5ffdf;
  animation: 1.2s linear infinite 0s running first682;
  margin-top: 20%;
  margin-bottom: 20%;
  margin-left:48%;
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
  --width: 2em;
  --height: 2em;
  content: "";
  position: absolute;
  top: 100%;
  left: calc(50% - var(--width)/2);
  width: 2em;
  height: 2em;
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
  --width: 2em;
  --height: 2em;
  content: "";
  position: absolute;
  top: 100%;
  left: calc(50% - var(--width)/2);
  width: 2em;
  height: 2em;
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
  --width: 2em;
  --height: 2em;
  content: "";
  position: absolute;
  top: 100%;
  left: calc(50% - var(--width)/2);
  width: 2em;
  height: 2em;
  background-color: white;
  box-shadow: inset 5px 5px 10px #3ec5ffdf,
  0px 0px 2px white;
  border-radius: 50px;
  animation: 1.6s ease-in 0s infinite running jump2;
}

.loader::after {
  --width: 2em;
  --height: 2em;
  content: "";
  position: absolute;
  top: 100%;
  left: calc(50% - var(--width)/2);
  width: 2em;
  height: 2em;
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
