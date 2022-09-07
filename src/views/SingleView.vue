<template>
      <main>
    <h1 id="main_title">CYBER LOOX</h1>
    <div id="cable"></div>
      <div v-if="product">
    <div id="container">
        <div id="navbar">
         <div id="content">
          <h2>{{product[0].title}}</h2>
          <h4>{{product[0].category}}</h4>
          <p>{{product[0].product_description}}</p>
          <p>Price: R{{product[0].price}}</p>
           <button id="cart" type="button" @click="addCart"><i class="fa-solid fa-cart-plus"></i> CART</button>
         </div>
          <div class="circle left"></div>
          <div class="circle middle"></div>
          <div class="circle right"></div>  
        </div>
      <div id="half">
        <div id="speaker"></div>
        <div id="border">
            <img id="image" :src="product[0].img" alt="">
        </div>
      </div>
       <div id="left" class="col-6">
        <div  class="row"></div>
      </div>
    </div>
  </div>
  </main>
</template>
<script>
export default {
    props: ['id'],
    mounted(){
        this.$store.dispatch('getProduct', this.id)
    },
    computed:{
        product(){
            return this.$store.state.product
        },

    },
    methods:{
  addCart(){
    const payload = {
        product_id: this.product[0].product_id,
        title: this.product[0].title,
        category: this.product[0].category,
        product_description: this.product[0].product_description,
        img: this.product[0].img,
        price: this.product[0].price
    }
    this.$store.dispatch('addCart',payload)
  }
}
    
}
</script>
<style scoped>
main{
    height: 100vh;
}

#cart{
  border-radius: 20px;
  border: 1px solid #3ec5ffdf;
  background-color: #3ec5ffdf;
  color:white;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0px 0px 10px #3ec5ffdf ;
  top:50%;
  left:55%;
}

#content{
    position: absolute;
    top: 30%;
    left: 5%;
}
#container {
  background: rgba(255, 255, 255, 0.968);
  width: 1000px;
  height: 650px;
  position: absolute;
  left: 24%;
  top: 20%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px;
}

#main_title{
 position: absolute;
 text-decoration: line-through;
 left:37%;
 top:0%;
 font-size: 100px;
  text-shadow: 0px 0px 10px;
  font-family: 'Dosis', sans-serif;
  color: white;
}

#half{
  height: 650px;
  background: #3ec5ffdf;
  width:325px;
  height: 450px;
  left: 60%;
  top: 20%;
  border-radius: 10px;
  box-shadow: 2px 0vw 10px #3ec5ffdf;
  position: absolute;
}

#border{
    height:365px;
    width: 265px;
    background-color: white;
    position: absolute;
    left: 9%;
    top: 8%;
    border-radius: 10px;
    box-shadow: 0vw 0vw 10px white;
}

#button{
    height:3%;
    width: 4%;
    background: white;
    position: absolute;
    top: 93%;
    left: 50%;
    border-radius:100%;
}

#cart:active {
  transform: scale(0.95);
}

#cart:focus {
  outline: none;
}

#speaker{
    height:1%;
    width: 10%;
    background: rgba(255, 255, 255, 0.627);
    position: absolute;
    top: 3%;
    left: 46.8%;
    border-radius:10px;
}

#image{
    height:200px;
    width: 195px;
    position: absolute;
    top:19%;
    left:15%;
    transition: all 1.5s;
}

#image:hover{
	transform: scale(1.3);
}

#navbar{
    width:100%;
    height: 14%;
    background: #3ec5ffdf;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    box-shadow: 0px 1px 10px #3ec5ffdf
}

.circle{
    height:3%;
    width: 2%;
    background: white;
    position: absolute;
    border-radius:50%;
    top:5%;
}

.right{
 left:15%
}

.middle{
    left: 10%;
}

.left{
    left: 5%;
}

h2{
 font-family: "Dosis", sans-serif; 
}

h4{
    font-family: "Dosis", sans-serif;
    color:  #3ec5ffdf ;
}

p{
 font-family: "Dosis", sans-serif;
 font-size: 25px;
}

#cable{
    height: 5px;
    width:150px;
    background-color: white;
    position: absolute;
    top:14%;
    left: 47.5%;
    box-shadow: 0px 0px 10px white;
    transform: rotate(90deg);

}

</style>