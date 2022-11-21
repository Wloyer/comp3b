<template>
    <Produits/>
</template>

<script>
import Produits from '@/components/Produits.vue'
import axios from 'axios'

export default {
  name: 'boutique',
  components: {
    Produits
  },
  
  data(){
        return {
            products:[],
            errors: [],
            ajout:0
        }
  },
  created() {
    axios.get(`http://localhost:8080/products.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.products = response.data.products
    })
    .catch(e => {
      this.errors.push(e)
    })
  }  
}
</script>