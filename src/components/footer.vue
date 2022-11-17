<template>
<footer class="container-fluid">
    <div class="espace"></div>
    <h4>resau sociaux :</h4>
    <div class="espace"></div>
    <div class="footer-line"></div>
    <a class="social" href="https://www.facebook.com/"><img src="/img/facebook.png" alt="facebook" width="40px"></a>
    <a class="social" href="https://www.instagram.com/?hl=fr"><img src="/img/instagram.png" alt="facebook" width="40px"></a>
    <a class="social" href="https://fr.linkedin.com/"><img src="/img/linkedin.png" alt="facebook" width="40px"></a>
    <a class="social" href="https://twitter.com/?lang=fr"><img src="/img/twitter.png" alt="facebook" width="40px"></a>
  </footer>
</template>

<script>
export default {
  name: 'Footers',
  props: {
   
    titre:String,
    image:String,
  }
}
</script>