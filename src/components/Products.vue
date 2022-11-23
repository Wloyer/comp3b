<template>
  
  
    
                    <div class="col-md-3 col-sm-6"   >
                        <div class="product-grid9" >
                            <div class="product-image9" >
                                <div  >
                                    <a href="#">
                                        <img class="pic-1 " :src="require(`@/assets/${image}`)">
                                        <img class="pic-2" :src="require(`@/assets/${image1}`)">
                                    </a>
                                    <a href="#" class="fa fa-search product-full-view">5€</a>
                                </div>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#">{{name}}</a></h3>
                                <div class="price">{{descriptions}}</div>
                                <a class="add-to-cart" href="">Commander</a>
                            </div>
                        </div>
                    </div> 
                  
                    
              
</template>

<style>
.h3-custom{
  font-family: alex-brush ,sans-serif;
  font-size: 50px;
  margin-top: 25px;
}
.product-grid9,.product-grid9 .product-image9{
  position:relative
}
.product-grid9{
  font-family: alex-brush ,sans-serif;
  z-index:1;
}
.product-grid9 .product-image9 a{
  display:block;
  
}
.product-grid9 .product-image9 img{
  width:100%;
  height:100%;
  box-shadow: 5px 5px 5px black;
}
.product-grid9 .pic-1{
  opacity:1;
  transition:all .5s ease-out 0s;
}
.product-grid9:hover .pic-1{
  opacity:0;
}
.product-grid9 .pic-2{
  position:absolute;
  top:0;
  left:0;
  opacity:0;
  transition:all .5s ease-out 0s;
}
.product-grid9:hover .pic-2{
  opacity:1;
}
.product-grid9 .product-full-view{
  color:#023373;
  background-color:#F25C05;
  font-size:13px;
  height:45px;
  width:45px;
  padding:18px;
  border-radius:100px 0 0;
  display:block;
  opacity:0;
  position:absolute;
  right:0;
  bottom:0;
  transition:all .3s ease 0s;
}
.product-grid9 .product-full-view:hover{
  color:#F25C05;
}
.product-grid9:hover .product-full-view{
  opacity:1;
}
.product-grid9 .product-content{
  padding:12px 12px 0;
  overflow:hidden;
  position:relative;
}
.product-content .rating{
  padding:0;
  margin:0 0 7px;
  list-style:none;
}
.product-grid9 .rating li{
  font-size:12px;
  color:#ffd200;
  transition:all .3s ease 0s;
}
.product-grid9 .rating li.disable{
  color:rgba(0,0,0,.2);
}
.product-grid9 .title{
  font-size:20px;
  font-weight:400;
  text-transform:capitalize;
  margin:0 0 3px;
  transition:all .3s ease 0s;
}
.product-grid9 .title a{
  color:#023373;
}
.product-grid9 .title a:hover{
  color:#F25C05;
}
.product-grid9 .price{
  color:#A60321;
  font-size:17px;
  margin:0;
  display:block;
  transition:all .5s ease 0s;
}
.product-grid9:hover .price{
  opacity:0;
}
.product-grid9 .add-to-cart{
  display:block;
  color:#F25C05;
  font-weight:600;
  font-size:20px;
  opacity:0;
  position:absolute;
  left:10px;
  bottom:-20px;
  transition:all .5s ease 0s;
}
.product-grid9:hover .add-to-cart{
  opacity:1;
  bottom:0;
}
</style>
<script>
export default {
  name: 'Products',
  
  props:{    
   id: Number,
   image: String,
   image1: String,
   name: String,
   descriptions: String,
  },
  
  data(){
        return {
        }
  },
 
}
</script>
// <!-- <img class="pic-1" :src="require(`@/assets/${image}`)"> -->