<template>
  <h3 class="h3-custom">Individuel</h3>
  <div class="container" > 
    <div class="row"> 
    <Products v-for="product in products"  :id="product.id"
               :description="product.description"   :name="product.name"
               :image="product.image"  :image1="product.image1" />        
    </div>
  </div>
</template>

<!-- <style>

</style> -->

<script>
import Products from '@/components/Products.vue'
import axios from 'axios'
// import { numberLiteralTypeAnnotation } from '@babel/types'

export default {
  name: 'products',
  components:{
    Products
  },
  props:{
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