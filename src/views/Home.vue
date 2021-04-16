<template>
   <section class="home" id="home">
      <div class="max-width">
          <div class="home-content">
              <div class="text-1">FIRST <span>ALBUM</span></div>
              <div class="text-2">REVEAL</div>
              <div class="text-3">is already released<span class="typing"></span></div>
              <a href="#">Check It Out</a>
              <video autoplay loop muted>
                  <source src="../assets/Reveal.mp4" type="video/mp4">
              </video>
              <div class="album">
                <img src="../assets/reveal_album.jpg" alt="">
              </div>
          </div>
      </div>
  </section>
<About></About>
<Feedback></Feedback>
<footer>
    <span>Created By <a href="#">Talay</a> | <span class="fa fa-copyright">
    </span> 2020 All rights reserved.</span>
</footer>
</template>

<script>
import About from '../components/About.vue'
import Feedback from '../components/Feedback.vue'
export default {
  name: "Home",
   components: {
       About,Feedback
  },
};
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
html{
    scroll-behavior: smooth;
}
.max-width{
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}
.home{
    font-family: 'Kanit',sans-serif;
    display: flex;
    height: 100vh;
    color:#181818;
    min-height: 500px;
}
video{
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -1;
}
.home .max-width{
    margin: auto 0 auto 40px;
}
.home .home-content .text-1{
  font-weight: 500;
    font-size: 30px;
    color: rgb(255, 255, 255);
}
.home .home-content .text-1 span{
    color: #db2929;
}
.home .home-content .text-2{
    font-size: 105px;
    font-weight: 600;
    margin-left: -3px;
    transition: 0.3s all ease;
    color: white;
    letter-spacing: 5px;
}
.home .home-content .text-2:hover{
    transform: skew(-10deg, 0);
    color: #db2929;
}
.home .home-content .text-3{
    font-size: 24px;
    margin: 5px 0;
    color: white;
}
.home .home-content .text-3 span{
    color:white;
    font-weight: 400;

}
.home .home-content a{
   display: inline-block;
   background: #db2929;
   color:white;
   font-size: 25px;
   padding:12px 36px;
   margin-top: 20px;
   border-radius: 6px;
   border: 2px solid #db2929;
   transition: all 0.3s ease;

}
.home .home-content a:hover{
    color: #db2929;
    background: none;

}
.album{
  position: absolute;
  right: 10%;
  top: 20%;
  overflow: hidden;
  filter: grayscale(0.3);
  transition: transform 0.25s ease-in, filter 0.15s;
}
.album:hover{
  transform: scale(1.1);
  filter: grayscale(0);
}
footer{
    background: #181818;
    color: white;
    padding: 2px 0;
    /* margin-top: 0; */
}
footer a{
    text-decoration: none;
    color: #db2929;
}
@media (max-width: 1035px){
     .home-content .album img{
        width: 300px;
        height: 300px;
    }
}
@media (max-width: 947px){
    .home-content .album img{
        display:none;
    }
    .home-content .text-1{
        position: absolute;
    }
}
</style>