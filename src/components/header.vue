<template>
    <header class="container-fluid nav-custom">
     <div class="container">
       <!-- desktop menu-->
       <img src="../assets/saccharoselogo1436.png" alt="logo">
          <nav class="nav-interieur hidden-xs">
              <a class="ancrage" href="/acceuil.vue">acceuil</a>
              <a class="ancrage" href="/boutique.html">boutique</a>
              <a class="ancrage"  href="">panier</a>
              <a class="ancrage" href="">contact</a>
              <button type="button" class="btn bouton1">Inscription</button>
              <button type="button" class="btn bouton1">Connexion</button>
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
                   <a class="text-nav"  href="/index.html">Acceuil</a>
                 </li>
                 <li class="nav-item">
                   <a class="text-nav"  href="/boutique.html">Pâtisserie</a>
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
    </header>
  </template>

<script>
export default {
  name: 'header',
  props: {
    id: Number,
    titre:String,
    image:String,
  }
}
</script>

