<template>
  <div class="popUp">
    <div class="card">
      <h4>{{ track.songName }}<span class="close" @click="close">&times;</span></h4>

      <div class="content">
        <p>
          벗어 던질 Time 불을 지펴 Now<br />
          파고들어와 거침없어<br />
          켜지는 Sign 비켜 Warning Yeah<br />
          타락해 갈증 난 널 원해<br />
          숨겨둔 모습들 The other side<br />
          맘속에 비친 잠들었던 본능이<br />
          Wait it Wait it No more<br />
          Wait it Wait it No more<br />
          가려왔던 베일 속 날 깨워<br />
          매일 넌<br />
          날 찾게 될 거야<br />
          All night<br />
          멈추지 말고 다 가질 순 없어<br />
          Nobody Nobody No yeah<br />
          Ego like savage<br />
          Want it Burn it Shout out<br />
          깨워 날 Toxic<br />
          Want it Burn it Shout out<br />
          끝도 없이 널 파고들어<br />
          모든 걸 할퀴어 밝혀<br />
          Right up my everything<br />
          Bring it on 널 붙잡고 집어삼켜<br />
          I'm going crazy like you<br />
          치명적인 내 Limit<br />
          맘을 닫아 도망가 미리<br />
          잠식되어 버릴 걸 Maybe<br />
          무의미 Hey Get it<br />
          한눈팔지 마 점점 빠져들어가<br />
          긴장해 빼앗아 널 Uh<br />
          멈출 수 없어 난 갈망해<br />
          더 늦기 전에 넌 도망가<br />
          Run Run<br />
          빈틈이 없다면 비집어 난<br />
          어둠 속 감춰진 진심을 봐<br />
          What I need<br />
          Show me Show me Warning<br />
          Show me Show me Warning<br />
          뭘 더 원해 쉽게 주진 않아<br />
          매일 넌<br />
          날 찾게 될 거야<br />
          All night<br />
          멈추지 말고 다 가질 순 없어<br />
          Nobody Nobody No yeah<br />
          Ego like savage<br />
          Want it Burn it Shout out<br />
          깨워 날 Toxic<br />
          Want it Burn it Shout out<br />
          끊임없이 널 파고들어<br />
          모든 걸 걸어 아직 멀어 널 가지기엔<br />
          Bring it on 널 붙잡고 집어삼켜<br />
          I'm going crazy like you<br />
          쉴 새 없이 Up and down<br />
          자꾸 홀려가 눈이 돌아가 Baby<br />
          아직 넌 날 가질 수 없어<br />
          Ego like savage
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["track"],
  methods:{
      close(){
          const popUp = document.querySelector(".popUp");
          popUp.style.display = "none";
      }
  }
};
</script>

<style scoped>
.popUp {
  z-index: 100;
  /* display: none; */
  position: fixed;
  /* margin: 100px 100px 100px 100px; */
  top: 15%;
  left: 55%;
  /* right: 25%;
  bottom: 25%; */
  animation-name: fade-in;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
}
.card {
  background: white;
  width: 320px;
  height: 600px;
  border-radius: 5px;
}
.card .content {
  padding: 5px 0 0 10px;
  overflow: scroll;
  width: 300px;
  height: 520px;
  justify-items: center;
}
.card h4 {
  padding: 20px 0 0 20px;
  color: #db2929;
  
}
.card h4 .close{
  color: #aaaaaa;
  float: right;
  font-size: 20px;
  font-weight: 600;
  padding-right: 8%;
  cursor: pointer;
  transition: 0.3s ease-in;
}
.card h4 .close:hover {
  color: black;
}

.card .content p {
  padding: 10px 10px 10px 10px;
  justify-content: justify;
  /*   justify-content:center; */
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