import { createStore } from 'vuex'
import axios from 'axios';
import { register } from 'register-service-worker';
import swal from 'sweetalert';
import router from '@/router';
export default createStore({
  state: {
    products: null,
    product:null,
    user: null
  },
  getters: {
  },
  mutations: {
   setProducts(context,products){
     context.products = products;
   },
   setProduct(context,product){
    context.product = product
   },
   setUser(context,user){
    context.user = user;
   }
  },
  actions: {
    async getProducts(context){
    let fetched = await fetch('https://cyber-loox.herokuapp.com/products');
    let res = await fetched.json()
    context.commit('setProducts',res.products)
    },
    async getProduct(context,id){
      let fetched = await fetch('https://cyber-loox.herokuapp.com/products/' + id);
      let res = await fetched.json();
      context.commit('setProduct', res.product)
    },
   async login(context,payload){
    fetch('https://cyber-loox.herokuapp.com/users/login', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.msg == 'Email does not exist'){
          swal({
            icon:"error",
            title: "Email does not exist",
            text: "Type in the proper email",
            buttons: "Try Again"
          })
        } else{
          if(data.msg == 'Incorrect Password'){
            swal({
              icon:"error",
              title:"Incorrect Password",
              buttons: "Try Again"
            })
          }else{
            swal({
              icon: "success",
              title: `Welcome Astronaut, ${data.msg[0].user_fullname}`,
              closeOnClickOutside: false
            })
            context.commit('setUser',data.msg[0]);
          }
        }
      })
  
    },
    async register(context,payload){
      fetch('https://cyber-loox.herokuapp.com/users/register', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.msg == "The email already exist"){
            swal({
              icon:"error",
              title:"The email already exist",
              text:"Please try another email",
              button:"OK"
            })
          } else{
          swal({
            icon: "success",
            title: "Registered",
            buttons:"OK"
          })
            context.commit('setUser',payload)
            console.log(data);
          }
        })
   }},
  modules: {
  }
})
