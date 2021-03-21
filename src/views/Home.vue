<template>
  <div class="home">
    <Navbar/>
      <section>
      <div class="text-center" ></div>
      <div class="container-fluid pt-3">
        <div class="row d-flex justify-content-center">
          <ListProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
          >
          </ListProduct>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ListProduct from '@/components/ListProduct.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    ListProduct,
    Navbar
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>
