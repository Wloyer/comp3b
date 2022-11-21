<template>
<footer class="container-fluid">
    <div class="espace"></div>
    <h4>resau sociaux :</h4>
    <div class="espace"></div>
    <div class="footer-line"></div>
    <a class="social" href="https://www.facebook.com/"><img src="../assets/facebook.png" alt="facebook" width="40px"></a>
    <a class="social" href="https://www.instagram.com/?hl=fr"><img src="../assets/instagram.png" alt="facebook" width="40px"></a>
    <a class="social" href="https://fr.linkedin.com/"><img src="../assets/linkedin.png" alt="facebook" width="40px"></a>
    <a class="social" href="https://twitter.com/?lang=fr"><img src="../assets/twitter.png" alt="facebook" width="40px"></a>
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