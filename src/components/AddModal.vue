<template>
        <div
            class="modal fade"
            id="add"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div id="add" class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Title:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="title"
                        v-model="title"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Category:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="category"
                        v-model="category"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Product Description:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="description"
                        v-model="product_description"
                        
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Image:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="image"
                        v-model="img"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label"
                        >Price:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        placeholder="price"
                        v-model="price"
                        
                      />
                    </div>
 
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" 
                  class="btn btn-primary"
                  @click="add" data-bs-dismiss="modal">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
props:['product'],
  data() {
    return {
      title:"",
      category:"",
      product_description:"",
      img:"",
      price:""
    };
  }, 
methods:{
    add() {
           this.$store.dispatch("addProduct", {
                title: this.title,
                category: this.category,
                product_description: this.product_description,
                img: this.img,
                price: this.price
            });
        }
}
}
</script>

<style scoped>

</style>