import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logo: 'GadgetFox',
    products: []
  },
  mutations: {
    insertProduct (state, payload) {
      state.products = payload
    },
    insertProductDetail (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      // console.log(payload, '===========')
      axios({
        url: 'login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          // console.log(data, 'dari then')
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => console.log(err))
    },
    logout (context, payload) {
      localStorage.removeItem('access_token')
      router.push('login')
    },
    addProduct (context, payload) {
      axios({
        url: 'products',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image: payload.image_url,
          stock: payload.stock,
          price: payload.price
        }
      })
        .then(({ data }) => {
          // router.push('/')
          context.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProduct (context, payload) {
      axios({
        url: 'products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios({
        url: `products/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProductDetail (context, payload) {
      axios({
        url: `products/${payload}`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProductDetail', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (context, payload) {
      axios({
        url: `cart/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          id: payload.id,
          quantity: payload.quantity
        }
      })
        .then(({ data }) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cart Updated',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/')
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
