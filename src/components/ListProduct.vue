<template>
  <div class="col-md-3 mx-3 m-3 mb-5">
    <div class="card bg-light" style="border-radius: 10px">
      <div class="card-body">
        <div class="items border border-light text-center">
          <img
            :src="product.image_url"
            class="card-img-top mb-4"
            alt="..."
            style="width: 200px" height="200px"
          />
          <div
            class="card shadow-sm p-1 m-auto mt-1 bg-body"
            style="border-radius: 8px"
          >
            <div class="card-body">
              <h4>
                {{product.name}}
              </h4>
              <hr>
              <h6>
                Price: Rp. {{product.price}}
              </h6>
              <h6>
                Stock: {{product.stock}}
              </h6>
              <a
                @click.prevent="gotoDetail(product.id)"
                class="btn btn-outline-info m-2"
                href="#">
              Edit</a>
              <a
                @click.prevent="deleteProduct(product.id)"
                class="btn btn-outline-danger m-2"
                href="">
              Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ListProduct',
  props: ['product'],
  methods: {
    gotoDetail (id) {
      this.$router.push(`/detail/${id}`)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  },
  computed: {
    ...mapState(['products'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
