<template>
   <section class="about" id="about">
    <div class="max-width">
        <h2 class="title">REVEAL</h2>
        <div class="about-content">
         <div class="column left">
             <img src="../assets/group.jpg" alt="">
         </div>
         <div class="column right">
             <div class="text">FIRST FULL ALBUM <span>REVEAL</span></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero explicabo quibusdam quisquam possimus mollitia tempore sapiente eveniet magni reiciendis doloribus excepturi quia corporis, architecto praesentium corrupti. Tempora consequatur voluptatibus error accusamus harum minima magnam rem quo exercitationem eum, iste, itaque veniam fuga quia placeat ex dolor dolore beatae doloribus velit dolorum quisquam saepe nisi est? Ullam praesentium sequi eos.</p>
        </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
.about{
    font-family: 'Poppins', sans-serif;
}
section .title{
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Kanit',sans-serif;
    color: black;
}

section .title::before{ 
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #111;
    transform: translateX(-50%);
}
section .title::after{ 
    position: absolute;
    bottom: -17px;
    left: 50%;
    font-size: 20px;
    color: #db2929;
    padding: 5px;
    background: white;
    transform: translateX(-50%);
    
}
section{
    padding: 100px 0;
}



.about .title::after{
    content: "THE BOYZ";
}


.about .about-content .left img{
    height:400px;
    width:400px;
    object-fit: cover;
    border-radius: 6px;
    transition: transform 0.3s, filter 1.5s ease-in-out;
    filter: grayscale(100%);
    overflow: hidden;
}
.about .about-content .left img:hover{
    filter: grayscale(0);
    transform: scale(1.1);
}
.about .about-content .left{
    width: 45%;
}
.about .about-content .right{
    width: 55%;
}
.about .about-content .right .text{
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}
.about .about-content .right .text span{
    color: #db2929;
}
.about .about-content .right p{
    text-align: justify;
}
@media (max-width: 1035px){
    .about .about-content .left{
        width: 100%;
    }
    .about .about-content .right{
        padding-top: 20px;
        width: 100%;
    }
}

</style>