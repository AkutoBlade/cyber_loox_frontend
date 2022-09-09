<template>
<main></main>
<h1 id="main_title" data-text="CYBER LOOX">CYBER LOOX</h1>
<div class="container">
    <div class="card" v-for="product in cart" :key="product.id">
        	<img :src="product.img" :alt="product.img" class="images" />
	<div class="intro">
		<h1>{{product.title}}</h1>
    <button id="cart" type="button" @click="deleteCart(product.product_id)"><i class="fa-solid fa-trash-can"></i> DELETE</button>
	</div>
    <img class="image_icon" src="../assets/Mascot_1.png" alt="">
    </div>
</div>

</template>
<script>
export default {
  computed:{
    cart(){
        return this.$store.state.cart
    }
  },
  methods:{
    deleteCart(id){
      console.log(id)
     this.$store.dispatch('deleteCartItem',id)
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
  left:35%;
}

#main_title{
 position: relative;
 text-decoration: line-through;
 left: 0%;
 right: 1%;
 top:0%;
 font-size: 100px;
 /* transform: rotate(90deg); */
  text-shadow: 0px 0px 10px;
  font-family: 'Dosis', sans-serif;
  color: white;
} 

#main_title::before{
position: absolute;
content: attr(data-text);
text-shadow: 0px 0px 20px white;
filter: blur(25px) brightness(1);
animation:  flicker 4s linear 1s infinite;
}

@keyframes flicker{
  0%{filter:blur(5px) brightness(1);}
  3%{filter:blur(5px) brightness(0);}
  6%{filter:blur(5px) brightness(0);}
  7%{filter:blur(5px) brightness(1);}
  8%{filter:blur(5px) brightness(0);}
  9%{filter:blur(5px) brightness(1);}
  10%{filter:blur(5px) brightness(0);}
  20%{filter:blur(5px) brightness(1);}
  50%{filter:blur(5px) brightness(1);}
  99%{filter:blur(5px) brightness(0);}
  100%{filter:blur(5px) brightness(1);}
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
  bottom:-11%;
  left: -2%;
  width:180px;
  z-index: 2;
  animation: float 2.0s ease-in-out infinite;
}

@keyframes float{
        0% {
        transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
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
	margin-top: -2%;
	margin-bottom: 4%;
	box-shadow: 5px 5px 20px #3ec5ffdf;
    border-radius: 30px;
	position: relative;
}

</style>
