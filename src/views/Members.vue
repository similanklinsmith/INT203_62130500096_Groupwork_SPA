<template>
  <div class="member">
    <section class="about" id="about">
      <div class="max-width">
        <h2 class="title">MEMBER<span>S</span></h2>
        <div class="about-content">
          <div
            class="column left"
            v-for="member in members"
            :key="member.id"
            @click="selected(member.id)"
          >
            <img :src="member.thumbnail" alt="" :class="member.clicked ? 'clicked-img' : ''"/>
          </div>
          <div class="column right">
            <div class="pic">
              
              <img :src="members[cursor - 1].img" alt="" />
              <div class="arrow-left" @click="previous">
                 <h3>&lt;</h3>
              </div>
             
            </div>
          </div>
          <div class="column right">
            <div class="text">
              <h4 class="profile">
                <span>Stagename</span> : {{ members[cursor - 1].stageName }}
              </h4>
              <h4 class="profile">
                <span>Birthname</span> : {{ members[cursor - 1].birthname }}
              </h4>
              <h4 class="profile">
                <span>Birthdate</span> : {{ members[cursor - 1].bidthDate }}
              </h4>
              <h4 class="profile">
                <span>Position</span> : {{ members[cursor - 1].position }}
              </h4>
              <div class="info">
                <p>
                  &nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Nesciunt non consequatur eligendi, sint
                  beatae aperiam illum consectetur! Nisi deleniti enim officia
                  voluptatem quos, ducimus vitae sit fugit dolorum ex sapiente
                  architecto, doloribus modi repellendus, quae repellat. Modi
                  incidunt quis veniam dolor facere, voluptates assumenda quas
                  aliquam repellat, magnam neque minus aliquid tenetur? Corrupti
                  at incidunt minus dolorem eum, neque iure fugit, voluptas
                  mollitia rerum dolores ratione animi eveniet commodi laborum?
                  Odio, incidunt! Mollitia alias deserunt eum illo tempora magni
                  amet maxime impedit earum voluptate magnam ad corporis
                  sapiente neque reprehenderit quod tenetur, quaerat labore
                  dolor aliquid minima non quidem quos. Accusantium vero
                  deleniti autem impedit non! Numquam iste exercitationem
                  ratione esse culpa, sunt ad quibusdam. Inventore eligendi
                  labore vel veniam.
                </p>
              </div>
            </div>
              <div class="arrow-right" @click="next">
                <h3>&gt;</h3>
              </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <span
        >Created By <a href="#">Talay</a> |
        <span class="fa fa-copyright"> </span> 2020 All rights reserved.</span
      >
    </footer>
  </div>

  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      members: [
        {
          id: 1,
          stageName: "Sangyeon",
          birthname: "Lee Sang Yeon",
          position: "Leader, Main Vocalist",
          bidthDate: "November 4, 1996",
          img: require("@/assets/teasers/sangyeon-full.jpg"),
          thumbnail: require("@/assets/thumbnails/sangyeon.jpg"),
          clicked: true,
        },
        {
          id: 2,
          stageName: "Jacob",
          birthname: "Jacob Bae",
          position: "Lead Vocalist",
          bidthDate: "May 30, 1997",
          img: require("@/assets/teasers/jacob-full.jpg"),
          thumbnail: require("@/assets/thumbnails/jacob.jpg"),
          clicked: false,
        },
        {
          id: 3,
          stageName: "Younghoon",
          birthname: "Kim Young Hoon",
          position: "Vocalist, Visual",
          bidthDate: "August 8, 1997",
          img: require("@/assets/teasers/younghoon-full.jpg"),
          thumbnail: require("@/assets/thumbnails/younghoon.jpg"),
          clicked: false,
        },
        {
          id: 4,
          stageName: "Hyunjae",
          birthname: "Lee Jae Hyun",
          position: "Lead Vocalist, Lead Dancer, Visual",
          bidthDate: "September 13, 1997",
          img: require("@/assets/teasers/hyunjae-full.jpg"),
          thumbnail: require("@/assets/thumbnails/hyunjae.jpg"),
          clicked: false,
        },
        {
          id: 5,
          stageName: "Juyeon",
          birthname: "Lee Ju Yeon",
          position: "Main Dancer, Vocalist, Visual",
          bidthDate: "January 15, 1998",
          img: require("@/assets/teasers/juyeon-full.jpg"),
          thumbnail: require("@/assets/thumbnails/juyeon.jpg"),
          clicked: false,
        },
        {
          id: 6,
          stageName: "Kevin",
          birthname: "Kevin Moon",
          position: "Main Vocalist",
          bidthDate: "February 23, 1998",
          img: require("@/assets/teasers/kevin-full.jpg"),
          thumbnail: require("@/assets/thumbnails/kevin.jpg"),
          clicked: false,
        },
        {
          id: 7,
          stageName: "New",
          birthname: "Choi Chan Hee",
          position: "Main Vocalist",
          bidthDate: "April 26, 1998",
          img: require("@/assets/teasers/new-full.jpg"),
          thumbnail: require("@/assets/thumbnails/new.jpg"),
          clicked: false,
        },
        {
          id: 8,
          stageName: "Q",
          birthname: "Ji Chang Min",
          position: "Main Dancer, Vocalist",
          bidthDate: "November 5, 1998",
          img: require("@/assets/teasers/q-full.jpg"),
          thumbnail: require("@/assets/thumbnails/q.jpg"),
          clicked: false,
        },
        {
          id: 9,
          stageName: "Juhaknyeon",
          birthname: "Ju Hak Nyeon",
          position: "Lead Dancer, Vocalist, Rapper",
          bidthDate: "March 9, 1999",
          img: require("@/assets/teasers/haknyeon-full.jpg"),
          thumbnail: require("@/assets/thumbnails/haknyeon.jpg"),
          clicked: false,
        },
        {
          id: 10,
          stageName: "Sunwoo",
          birthname: "Kim Sun Woo",
          position: "Main Rapper, Lead Dancer, Vocalist",
          bidthDate: "April 12, 2000",
          img: require("@/assets/teasers/sunwoo-full.jpg"),
          thumbnail: require("@/assets/thumbnails/sunwoo.jpg"),
          clicked: false,
        },
        {
          id: 11,
          stageName: "Eric",
          birthname: "Son Young Jae",
          position: "Lead Dancer, Lead Rapper, Vocalist, Maknae",
          bidthDate: "December 22, 2000",
          img: require("@/assets/teasers/eric-full.jpg"),
          thumbnail: require("@/assets/thumbnails/eric.jpg"),
          clicked: false,
        },
      ],
      cursor: 1,
    };
  },
  methods: {
    selected(id) {
      for (let index = 0; index < this.members.length; index++) {
        if (this.members[index].clicked === true) {
          this.members[index].clicked = false;
        }
      }
      this.cursor = id;
      this.members[this.cursor - 1].clicked = true;
      document.querySelector(".pic").src = this.members[this.cursor - 1].img;
      // console.log(this.cursor);
    },
    next(){
      this.cursor++;
      if (this.cursor > this.members.length) {
        this.cursor = 1
      }
     this.selected(this.cursor);
    //  console.log(this.cursor);
    },
    previous(){
      this.cursor--;
      if (this.cursor < 1) {
        this.cursor = this.members.length;
      }
     this.selected(this.cursor);
    //  console.log(this.cursor);
    }
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  
}
html {
  scroll-behavior: smooth;
  
}
.max-width {
  margin: auto;
  max-width: 1300px;
  padding: 45px 0;
}
.about .about-content {
  display: flex;
  flex-wrap: wrap;
}

.about {
  font-family: "Poppins", sans-serif;
}
section .title {
  position: relative;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 60px;
  padding-bottom: 20px;
  font-family: "Kanit", sans-serif;
  color: #111;
}
section .title span{
  text-decoration: none;
  font-style: unset;
  color: #111;
}

/* Insert some text before the content */
section .title::before {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 180px;
  height: 3px;
  background: #111;
  transform: translateX(-50%);
}
section .title::after {
  position: absolute;
  bottom: -17px;
  left: 50%;
  font-size: 20px;
  color: #db2929;
  padding: 5px;
  background: white;
  transform: translateX(-50%);
}
section {
  padding: 50px 0;
}
/* about section styling */

.about .title::after {
  content: "THE BOYZ";
}
.about .about-content .left img {
  height: 50px;
  width: 50px;
  object-fit: cover;
  transition: transform 0.3s, filter 0.5s ease-in-out;
  filter: grayscale(100%);
  overflow: hidden;
  cursor: pointer;
}
.clicked-img{
  height: 50px;
  width: 50px;
  object-fit: cover;
  transform: scale(1.2);
  pointer-events: none;
  filter:grayscale(0%);
}
.about .about-content .left img:hover {
  filter: grayscale(0);
  transform: scale(1.1);
}
.about .about-content .left {
  width: 5%;
}
.about .about-content .right {
  width: 50%;
}
.about .about-content .right img{
  width: 45%;
  height: 600px;
  width: 400px;
  object-fit: contain;
  position: relative;
  margin-top: 20px;
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.about .about-content .right .text {
  text-align: left;
  width: 65%;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 40px;
  margin-left: -40px;
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.about .about-content .right .text .profile{
 margin-top: 0.75%;
}
.about .about-content .right .text .info{
 margin-top: 5%;
}
.about .about-content .right .text span {
  background: #db2929;
  color: white;
  border-radius: 2px;
  margin-bottom: 2px;
  padding: 0 3px;
}
.about .about-content .right p {
  text-align: justify;
}
footer {
  background: #181818;
  color: white;
  padding: 2px 0;
}
footer a {
  text-decoration: none;
  color: #db2929;
}
.arrow-left{
  position: absolute;
  overflow: hidden;
  top: 75%;
  font-size: 35px;
}
.arrow-right{
  position: absolute;
  overflow: hidden;
  top: 75%;
  right: 10%;
  font-size: 35px;
}
.arrow-left:hover,.arrow-right:hover{
  color: #db2929;
  cursor: pointer;
  transition: ease-in-out all 0.2s;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(3%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
