<template>
 <header/>
  <router-view/>
 <footer/>
</template>

<script>
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script>

