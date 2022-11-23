<template>
  <div class="fond">
    <carousel/>
    <cards/>
  </div>
</template>

<script>
import cards from '@/components/cards.vue'
import carousel from '@/components/carousel.vue'


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
 
}
</script>