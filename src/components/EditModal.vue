<template>
         <div
            class="modal fade"
            :id="'update'+product.product_id"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div id="update" class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit
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
                        v-model="product.title"
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
                        v-model="product.category"
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
                        v-model="product.product_description"
                        
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
                        v-model="product.img"
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
                        v-model="product.price"
                        
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
                  @click="update" data-bs-dismiss="modal">
                    Update Product
                  </button>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
props:['product'],
methods:{
    update() {
            return this.$store.dispatch("updateProduct", {
                id: this.product.product_id,
                title: this.product.title,
                category: this.product.category,
                product_description: this.product.product_description,
                img: this.product.img,
                price: this.product.price
            });
        }
}
}
</script>

<style scoped>

</style>
