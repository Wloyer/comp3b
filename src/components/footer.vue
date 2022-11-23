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

<style>
footer{
  align-content: center;
  text-align:center; 
  height: 50px;	 
  line-height: 120px;  
  margin-left:-100%; 
  margin-right:-100%;
  height:auto;
  background: rgb(2,51,115);
  background: linear-gradient(0deg, rgba(2,51,115,1) 45%, rgba(3,74,166,1) 85%);
  color: #F25C05;
  font-family: alex-brush, sans-serif;
  font-weight: 400;
  font-style: normal;
}
.footer-line{ 
  margin-left: auto;
  margin-right: auto; 
  width: auto;
  height: 5px;
  background-color: #A60321;
}
.espace{
  height: 15px;
}
.ancrage1{
  font-family: alex-brush, sans-serif;
  font-weight: 400;
  font-style: normal;
  color:#023373;
  font-size: 25px;
}
.customnav{
  background-color: #023373;
}
.bouton{
  background-color: #F25C05;
}
.custom-fond
{
  background-color:#F25C05;
}
.text-nav{
  text-decoration: none;
  font-family: alex-brush, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size:50px ;
  color: #023373;

}
.text-nav:hover{
  color: #A60321;
  text-decoration: none;
}
.offcanvas-header{
  text-align:center;
  align-content: center;
}
.titrenav{
  text-align:center;
  align-content: center;
}
.bouton1{
  background-color: #F25C05;
  box-shadow: inset 2px 2px 3px rgba(242, 135, 5, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
}
.bouton1:hover{
  background-color: #F28705;
}

</style>

<script>
export default {
  name: 'Footers',
  props: {
   
    titre:String,
    image:String,
  }
}
</script>