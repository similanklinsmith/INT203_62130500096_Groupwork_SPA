<template>
  <div class="songs">
    <div class="content">
      <div class="title">
        <h2>TRACK<span>LISTS</span></h2>
      </div>

      <section class="about" id="about">
        <div class="max-width">
          <div class="about-content">
            <div class="column left">
              <img src="../assets/tracklist-img.jpg" alt="" />
            </div>
            <div class="column right">
              <div
                class="slot"
                v-for="track in tracklists"
                :key="track.songName"
                @click="showLyrics(track.id)"
              >
                <div class="popUpCard">
                  <pop-up :track="track" v-if="track.show"></pop-up>
                </div>
                
                <h4>{{ track.songName }}</h4>

                <div v-show="track.producer !== null">
                  <p><span>Produced by </span>{{ track.producer }}</p>
                </div>

                <p><span>Written by </span>{{ track.writer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <footer>
    <span
      >Created By <a href="#">Talay</a> |
      <span class="fa fa-copyright"> </span> 2020 All rights reserved.</span
    >
  </footer>
</template>

<script>
export default {
  data() {
    return {
      tracklists: [
        {
          id: 1,
          songName: "Ego",
          producer: null,
          writer: "김혜지 (Hye Ji Kim), 조은오 (Eunoh Jo) & JQ",
          show:false
        },
        {
          id: 2,
          songName: "REVEAL[TITLE]",
          producer: "Sean Alexander, J-Hype, Drew Ryan Scott & Phil Schwan",
          writer: "황유빈 (Hwang Yoo Bin)",
          show:false
        },
        {
          id: 3,
          songName: "Shake It down",
          producer: null,
          writer: "Kenzie (KOR)",
          show:false
        },
        {
          id: 4,
          songName: "흔적 (Scar)",
          producer: null,
          writer:"김혜지 (Hye Ji Kim), 세리 (Serie), 정재연 (Jae Yeon Jeong), Eric (The Boyz), Sunwoo (The Boyz), BOMNA & JQ",
          show:false
        },
        {
          id: 5,
          songName: "Salty",
          producer: null,
          writer: "Jo Yoon-Kyung (조윤경)",
          show:false
        },
        {
          id: 6,
          songName: "환상고백 (Break Your Rules)",
          producer: null,
          writer: "황유빈 (Hwang Yoo Bin) & Sunwoo (The Boyz)",
          show:false
        },
        {
          id: 7,
          songName: "Wings (胡蝶夢)",
          producer: null,
          writer: "지예원 (Ji Ye Won)",
          show:false
        },
        {
          id: 8,
          songName: "시간의 숲 (Goodbye)",
          producer: null,
          writer: "지예원 (Ji Ye Won)",
          show:false
        },
        {
          id: 9,
          songName: "Spring Snow",
          producer: null,
          writer:"Ju Haknyeon (The Boyz), 정윤 (Jeong Yoon), Eric (The Boyz), Sunwoo (The Boyz), Q (The Boyz), New (The Boyz), Kevin (The Boyz), Juyeon (The Boyz), Hyunjae (The Boyz), Younghoon (The Boyz), Jacob (The Boyz), Sangyeon (The Boyz) & 문 킴 (Moon Kim)",
          show:false
        },
      ],
    };
  },
  methods:{
    showLyrics(id){
      for (let index = 0; index < this.tracklists.length; index++) {
        if (this.tracklists[index].show === true) {
          this.tracklists[index].show = false;
        }
      }
      this.tracklists[id - 1].show = true;
      console.log(this.tracklists[id-1].show)
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
html {
  scroll-behavior: smooth;
}
.songs {
  background-image: linear-gradient(#151516, #db2929);
  width: 100%;
  height: 100%;
}
.songs .content {
  padding: 100px 0;
}
.title {
  color: white;
  font-size: 25px;
  margin-bottom: 5px;
}
.title span {
  text-decoration: underline;
  font-style: italic;
  color: #db2929;
}
.about .about-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.about .about-content .left img {
  height: 700px;
  width: 500px;
  transition: transform 0.3s, filter 1.5s ease-in-out;
  overflow: hidden;
}
.about .about-content .left img:hover {
  transform: scale(1.05);
}
.about .about-content .left {
  width: 45%;
}
.about .about-content .right {
  width: 55%;
}

.about .about-content .right .slot {
  background: rgba(255, 255, 255, 0.425);
  padding: 10px;
  border-radius: 2px;
  text-align: left;
  margin: 5px;
  font-size: 15px;
  transition: all 0.2s ease-in;
  cursor: pointer;
}
.about .about-content .right .slot span {
  color: #db2929;
  font-weight: 500;
}
.about .about-content .right .slot:hover {
  background: white;
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
</style>