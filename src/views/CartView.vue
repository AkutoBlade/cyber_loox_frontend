<template>
    <div v-for="product in cart" key="product.id">
        <div>{{product.title}}</div>
    </div>
</template>
<script>
export default {
  computed:{
    cart(){
        return this.$store.state.cart
    }
  }  
}
</script>
<style scoped>
*{
    color: white;
}
</style>
