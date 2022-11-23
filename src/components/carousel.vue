<template>
<div id="carouselExampleFade" class="carousel slide carousel-fade carousel-dark carouselCustom" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/macaron-framboise.jpg" class="d-block w-100" alt="macaron-framboise">
            </div>
            <div class="carousel-item">
              <img src="../assets/tarte-choc.jpg" class="d-block w-100" alt="tarte-chocolat">
            </div>
            <div class="carousel-item">
              <img src="../assets/saint-honore1.jpg" class="d-block w-100" alt="saint-honore">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
</template>

<style>
.carousel-inner{
  width:90%;
  height:80%;
}
.carouselCustom {
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 5px;
  width: auto;
  height: auto;
}
</style>

<script>
export default {
  name: 'carousel',
  props: {
    id: Number,
    titre:String,
    image:String,
  }
}
</script>