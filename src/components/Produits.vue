<template>
    <div class="container">
                <h3 class="h3-custom">Individuel</h3>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid9">
                            <div class="product-image9">
                                <a href="#">
                                    <img class="pic-1" src="/img/2000_feuilles.jpg">
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
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid9">
                            <div class="product-image9">
                                <a href="#">
                                    <img class="pic-1" src="/img/carre_blanc.jpg">
                                    <img class="pic-2" src="/img/carre_blanc1.jpg">
                                </a>
                                <a href="#" class="fa fa-search product-full-view">5€</a>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#">Carré blanc</a></h3>
                                <div class="price">Amandes, marmelade de poires et d'airelles </div>
                                <a class="add-to-cart" href="">Commander</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid9">
                            <div class="product-image9">
                                <a href="#">
                                    <img class="pic-1" src="/img/tarte-choc.jpg">
                                    <img class="pic-2" src="/img/tarte-choc1.jpg">
                                </a>
                                <a href="#" class="fa fa-search product-full-view">5€</a>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#">Tartelette chocolat</a></h3>
                                <div class="price">Chocolat au lait, praliné feuiletté</div>
                                <a class="add-to-cart" href="">Commander</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid9">
                            <div class="product-image9">
                                <a href="#">
                                    <img class="pic-1" src="/img/macaron-framboise.jpg">
                                    <img class="pic-2" src="/img/macaron-framboise1.jpg">
                                </a>
                                <a href="#" class="fa fa-search product-full-view">5€</a>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#">Macaron Framboise</a></h3>
                                <div class="price">Rose, framboise & letchi</div>
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