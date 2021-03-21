<template>
  <div class="container">
    <h1 id="title-page" class="mt-5 p-3">Edit Product</h1>
    <div class="row mt-5 d-flex align-self-center">
      <div class="col-md-8">
        <img
        :src="products.image_url"
        alt=""
        style="width: 500px" height="500px"
        >
      </div>
        <div class="col-md-4">
          <h1>{{products.name}}</h1><hr>
          <div class="form-group">
          <label for="price-add">Price :</label>
          <input
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
            type="text"
            class="form-control"
            name="stock-add"
            id="stock-add"
            placeholder="Enter Product's Stock"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary" id="add-post-btn">
          Edit Product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Detail',
  data () {
    return {
      // input isi pake fetch readOne product => fecth readOne product, value=''
      // bikin variabel,
      // samaain kaya di input
      price: '',
      stock: ''
    }
  },
  methods: {
    fetchProductDetail () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductDetail', id)
    }
  },
  created () {
    this.fetchProductDetail()
  },
  computed: {
    ...mapState(['products'])
  }

}
</script>

<style>
#title-page{
  background-color: rgb(238, 229, 218);
}
label{
  font-size: 25px;
}
</style>
