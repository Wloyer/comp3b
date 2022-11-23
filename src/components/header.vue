<template>
    <div class="container-fluid nav-custom">
     <div class="container">
       <!-- desktop menu-->
       <img src="../assets/saccharoselogo1436.png" alt="logo">
          <nav class="nav-interieur hidden-xs">
              <a ><router-link class="ancrage" to="/">Accueil </router-link></a>
              <a ><router-link class="ancrage" to="/Boutique">Boutique </router-link></a>
              <a class="ancrage"  href="">panier </a>
              <a class="ancrage" href="">contact </a>
              <button type="button" class="btn bouton1"> Inscription </button>
              <button type="button" class="btn bouton1">Connexion </button>
          </nav>
      </div>
      <!-- Hamburger menu -->
      <div class="hidden-sm hidden-md hidden-lg">
       <nav class="navbar navbar-dark  fixed-top customnav">
         <div class="container-fluid">
           <a class="navbar-brand" href="#"><img src="../assets/saccharoselogo1436.png" alt="logo"></a>
           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
             <span class="navbar-toggler-icon bouton"></span>
           </button>
           <div class="offcanvas offcanvas-end custom-fond " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
             <div class="offcanvas-header  ">
               <h5 class="offcanvas-title " id="offcanvasDarkNavbarLabel"></h5>
               <button type="button" class="btn-close bouton" data-bs-dismiss="offcanvas" aria-label="Close"></button>
             </div>
             <div class="offcanvas-body titrenav">
               <ul class="navbar-nav justify-content-end   flex-grow-1 pe-3">
                 <li class="nav-item">
                   <a class="text-nav"> <router-link class="nav-link" to="/">Accueil</router-link></a>
                 </li>
                 <li class="nav-item">
                   <a class="text-nav"><router-link class="nav-link" to="/">Boutique</router-link></a>
                 </li>
                 <li class="nav-item">
                   <a class="text-nav"  href="#">Panier</a>
                 </li>
                 <li class="nav-item">
                   <a class="text-nav" href="#">Contact</a>
                 </li>
                 <li class="nav-item">
                   <a class="text-nav"  href="#">Profil</a>
                 </li>
                 <li class="nav-item">
                   <a class="text-nav" href="#">Contact</a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </nav>
    </div>
  </div>
  </template>

<style>
.nav-interieur{
    float: right;
    word-spacing: 10px;
}
.nav-custom{
    font-size: 30px;
    height: 80px;
    line-height: 70px; 
    background: linear-gradient(180deg, rgba(2,51,115,1) 65%, rgba(3,74,166,1) 86%);
    border-radius: 0px 0px 5px 5px;
}
.customnav{
  background: linear-gradient(180deg, rgba(2,51,115,1) 65%, rgba(3,74,166,1) 86%);
  border-radius: 0px 0px 5px 5px;
}
.ancrage:hover{
    text-decoration: none;
    color:  #A60321 ;
}
.ancrage{
  font-family: alex-brush, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  color: #F25C05;
}
</style>

<script>
export default {
  name: 'Header',
  props: {
    id: Number,
    titre:String,
    image:String,
  }
}
</script>

