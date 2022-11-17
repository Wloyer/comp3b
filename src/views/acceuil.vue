<template>

</template>

<script>
import carousel from '@/components/carousel.vue'
import cards from '@components/cards.vue'
import axios from 'axios'

export default {
  name: 'acceuil',
  components: {

    Carousel,
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