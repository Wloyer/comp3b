<template>
  <div class="fond">
    <carousel/>
    <cards/>
  </div>
</template>

<script>
import cards from '@/components/cards.vue'
import carousel from '@/components/carousel.vue'
import axios from 'axios'

export default {
  name: 'Acceuil',
  components: {
    carousel,
    cards
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