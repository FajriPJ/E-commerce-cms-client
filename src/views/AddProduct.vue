<template>
  <div class="container mt-5">
    <div>
      <h1 class="mt-5 p-3">Add Product</h1>
    </div>
    <form @submit.prevent="addProduct" >
      <div class="form-group">
        <label for="name-add">Name :</label>
        <input
          v-model="product.name"
          type="text"
          class="form-control"
          name="name-add"
          id="name-add"
          placeholder="Enter Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="image-add">Image Url :</label>
        <input
          v-model="product.image_url"
          type="text"
          class="form-control"
          name="image-add"
          id="image-add"
          placeholder="Enter Image Url"
          required
        />
      </div>
      <div class="form-group">
        <label for="price-add">Price :</label>
        <input
          v-model="product.price"
          type="text"
          class="form-control"
          name="price-add"
          id="price-add"
          placeholder="Enter Product's Price"
          required
        />
      </div>
      <div class="form-group">
        <label for="stock-add">Stock :</label>
        <input
          v-model="product.stock"
          type="text"
          class="form-control"
          name="stock-add"
          id="stock-add"
          placeholder="Enter Product's Stock"
          required
        />
      </div>
      <div>
        <br />
        <button type="submit" class="btn btn-primary m-2" id="add-post-btn">
          Submit
        </button>
        <button @click="cancelAdd" class="btn btn-danger m-2" id="go-back-btn">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        stock: '',
        price: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.product)
      this.cancelAdd()
    },
    cancelAdd () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
h1{
  background-color: antiquewhite;
}
</style>
