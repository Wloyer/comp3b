<template>
    <div class="container">
                <h3 class="h3-custom">Individuel</h3>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid9" >
                            <div class="product-image9" v-for="product in products">
                                <a href="#">
                                    <img class="pic-1" :src="require(`@/assets/${image}`)">
                                    <img class="pic-2" src="/img/2000_feuilles1.jpg">
                                </a>
                                <a href="#" class="fa fa-search product-full-view">5€</a>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#">mille feuille</a></h3>
                                <div class="price">Praliné aux noisettes du Piémont</div>
                                <a class="add-to-cart" href="">Commander</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <hr>
</template>

<script>
export default {
  name: 'Produits',
  props: {
    id: Number,
    titre:String,
    image:String,
  }
}
</script>
<!-- <img class="pic-1" :src="require(`@/assets/${image}`)"> -->