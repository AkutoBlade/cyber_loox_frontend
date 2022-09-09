import {
  createStore
} from 'vuex'
import axios from 'axios';
import swal from 'sweetalert';
import router from '@/router';
export default createStore({
  state: {
    products: null,
    product: null,
    user: null,
    cart: null
  },
  getters: {},
  mutations: {
    setProducts(context, products) {
      context.products = products;
    },
    setProduct(context, product) {
      context.product = product
    },
    setUser(context, user) {
      context.user = user;
    },
    setCart(context, cart) {
      context.cart = cart
    }
  },
  actions: {
    async getProducts(context) {
      let fetched = await fetch('https://cyber-loox.herokuapp.com/products');
      let res = await fetched.json()
      context.commit('setProducts', res.products)
    },
    async getProduct(context, id) {
      let fetched = await fetch('https://cyber-loox.herokuapp.com/products/' + id);
      let res = await fetched.json();
      context.commit('setProduct', res.results)
    },
    async getCart(context, id) {
      let fetched = await fetch('https://cyber-loox.herokuapp.com/users/' + id + '/cart');
      let res = await fetched.json();
      context.commit('setCart', res.results)
    },
    async getUser(context, id) {
      let fetched = await fetch('https://cyber-loox.herokuapp.com/users/' + id);
      let res = await fetched.json();
      context.commit('setUser', res.results);
    },
    async updateProduct(context,payload){
    const {id, title, category, product_description, img, price} = payload;
    fetch(`https://cyber-loox.herokuapp.com/products/` + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        context.dispatch("getProducts", data.msg);
      });
    },
    async deleteProduct(context, id) {
      fetch("https://cyber-loox.herokuapp.com/products/" + id, {
      // fetch("https://cyber-loox.herokuapp.com/products/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getProducts");
        });
    },
    async addProduct(context, payload) {
      fetch('https://cyber-loox.herokuapp.com/products', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: `Item added`,
            buttons: "OK",
            closeOnClickOutside: false
          })
          context.dispatch('getProducts')
          // context.commit('setProducts', data.msg)
        })
    },
    addCart(context, payload) {
      let id = context.state.user.user_id
      fetch('https://cyber-loox.herokuapp.com/users/' + id + '/cart', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())  
        .then((data) => {
          swal({
            icon: "success",
            title: `Item added`,
            buttons: "OK",
            closeOnClickOutside: false
          })
          context.dispatch('getCart', id)
          console.log(id);
        })
    },
    async deleteCart(context, id) {
      fetch('https://cyber-loox.herokuapp.com/users/' + id + '/cart', {
          method: 'DELETE'
        })
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: `Items have been removed`,
            buttons: "OK",
            closeOnClickOutside: false
          })
          context.dispatch('getCart', context.state.user.user_id)
        })
    },
    async deleteCartItem(context, id) {
      fetch('https://cyber-loox.herokuapp.com/users/' + context.state.user.user_id + '/cart/' + id, {
          method: 'DELETE'
        })
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: `Items have been removed`,
            buttons: "OK",
            closeOnClickOutside: false
          })
          context.dispatch('getCart', context.state.user.user_id)
        })
    },
    async login(context, payload) {
      fetch('https://cyber-loox.herokuapp.com/users/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg == 'Email does not exist') {
            swal({
              icon: "error",
              title: "Email does not exist",
              text: "Type in the proper email",
              buttons: "Try Again"
            })
          } else {
            if (data.msg == 'Incorrect Password') {
              swal({
                icon: "error",
                title: "Incorrect Password",
                buttons: "Try Again"
              })
            } else {
              swal({
                icon: "success",
                title: `Welcome Astronaut, ${data.msg[0].user_fullname}`,
                buttons: "OK",
                closeOnClickOutside: false
              })

              context.commit('setUser', data.msg[0]);
              context.dispatch('getCart', data.msg[0].user_id)
              router.push('/products')
            }
          }
        })

    },
    async register(context, payload) {
      fetch('https://cyber-loox.herokuapp.com/users/register', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg == "The email already exist") {
            swal({
              icon: "error",
              title: "The email already exist",
              text: "Please try another email",
              button: "OK"
            })
          } else {
            swal({
              icon: "success",
              title: "Registered",
              buttons: "OK"
            })
            context.commit('setUser', payload)
            console.log(data);
          }
        })
    },
    async updateUser(context, payload) {
      fetch('http://cyber-loox.herokuapp.com/users/' + context.state.user.user_id, {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: "Updated",
            buttons: "OK"
          })
          context.commit('setUser', payload)
          console.log(context.state.user.user_id);

        })
    },
    async deleteUser(context, id) {
      fetch('http://cyber-loox.herokuapp.com/users/' + id, {
          method: "DELETE",
        })
        .then((response) => response.json())
        .then((data) => {
          swal({
            icon: "success",
            title: "User Deleted",
            buttons: "OK"
          })
          context.dispatch('getUser', context.state.user.user_id)
        })
    }
  },
  modules: {}
})