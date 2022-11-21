<template>
 <div class="card">
        <div class="espaceh3"></div>
        <div class="espaceh3"><h3>Inspirations de nos Pâtisserie:</h3></div>
        <div class="card-group">
          <div class="card">
            <img src="../assets/philippe-conticini.jpg" class="card-img-top" alt="philippe-conticini" height="auto">
            <div class="card-body">
              <h5 class="card-title">Philippe Conticini</h5>
              <p class="card-text">Distingué tant pour ses travaux sucrés que salés, il est considéré par ses pairs comme une des figures majeures de la gastronomie contemporaine française."</p>
                <a class="ancrage1" href="https://www.instagram.com/philippe_conticini/?hl=fr">Ses pâtisserie</a>
            </div>
          </div>
          <div class="card">
            <img src="../assets/Christelle-Brua.jpg" class="card-img-top" alt="Christelle Brua" height="auto" >
            <div class="card-body">
              <h5 class="card-title">Christelle Brua</h5>
              <p class="card-text">Après avoir été élue meilleur pâtissier de l'année en 2009,
                 elle devient la première femme à être sacrée « meilleure pâtissière de restaurant du monde » en 2018</p>
                <a class="ancrage1" href="https://www.instagram.com/christellebrua/?hl=fr">Ses pâtisseries</a>
            </div>
          </div> 
          <div class="card">
            <img src="../assets/christophe-adam.jpg" class="card-img-top" alt="christophe-adam" height="auto">
            <div class="card-body">
              <h5 class="card-title">Christophe Adam</h5>
              <p class="card-text">Il est consacré « Meilleur pâtissier 2015 » et en 2017, le magazine Vanity Fair 
                le nomme à la 40ème place des 50 Français les plus influents du monde. </p>
              <a class="ancrage1" href="https://www.instagram.com/christopheadam/?hl=fr">Ses pâtisserie</a>
            </div>
          </div>
        </div>
      </div>
    
</template>

<script>
export default {
  name: 'cards',
  props: {
    id: Number,
    titre:String,
    image:String,
  }
}
</script>