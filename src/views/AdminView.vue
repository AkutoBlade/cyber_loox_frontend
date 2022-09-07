<template>
    <main>
<h1>ADMIN</h1>
<table class="table">
  <tr>
    <th class="table__heading">ID</th>
    <th class="table__heading">Title</th>
    <th class="table__heading">Catergory</th>
    <th class="table__heading">Description</th>
    <th class="table__heading">Image</th>
    <th class="table__heading">Price</th>
    <th class="table__heading">Edit</th>
  </tr>
  <tr class="table__row" v-for="product in products" :key="product.id">
    <td class="table__content" data-heading="ID">{{product.product_id}}</td>
    <td class="table__content" data-heading="Title">{{product.title}}</td>
    <td class="table__content" data-heading="Catergory">{{product.category}}</td>
    <td class="table__content" data-heading="Description">{{product.product_description}}</td>
    <td class="table__content" id="image" data-heading="Image"><img class="images" :src="product.img"/></td>
    <td class="table__content" data-heading="Price">R {{product.price}}</td>
    <td class="table__content" data-heading=""><i class="fa-solid fa-trash-can" @click="this.$store.dispatch('deleteProduct', product.product_id)"></i> <i class="fa-solid fa-pen-to-square" type="button" data-bs-toggle="modal" :data-bs-target="'#update'+product.product_id"></i></td>
<EditModal :product="product"/>
  </tr>
</table>
</main>
</template>
<script>
import EditModal from '../components/EditModal.vue'
export default {
  props:["products"],
  components: {EditModal},
  mounted(){
  this.$store.dispatch('getProducts')
 },
 computed:{
   products(){
    return this.$store.state.products
   }
 },
 methods:{

 }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:white;
  font-family: "Dosis", sans-serif;
}

.images{
	border-radius: 30px;
	width:220px;
  height:2%;
  padding: 0;
	transition: all 1.5s;
}

table{
margin-bottom: 2%;
}

body {
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  background-color: #fafafa;
}

td, th { padding: 8px; padding: .5rem;
}

th {
  text-align: left;
  font-weight: 300;
  font-size: 20px;
  font-size: 1.25rem;
}

td { font-family: 'Avenir Next', 'Segoe UI', 'Lucida Grande', sans-serif; }

.table {
  width: 100%;
  padding: 16px;
  padding: 1rem;
}

.table__heading { border-bottom: 2px solid#3ec5ffdf; }
 @media (max-width: 32rem) {
 .table__heading {
display: none;
}
 .table__content {
 display: block;
 padding: .5rem 0;
}
 .table__row {
 margin: .25rem 1rem;
 padding: .5rem 0;
 display: block;
 border-bottom: 2px solid #3ec5ffdf;
}
 .table__content:before {
 content: attr(data-heading);
 display: inline-block;
 width: 5rem;
 margin-right: 1.2rem;
 color: #999;
 font-size: .75rem;
 font-weight: 700;
 font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
 text-transform: uppercase;
 letter-spacing: 2px;
}
}

h1, h4 {
  margin: 50px auto 50px auto;
  text-align: center;
}
</style>
