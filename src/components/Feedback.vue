<template>
  <div class="feedback">
    <div class="title"><span>Feed</span>back</div>
    <div class="content">
      <div class="column left">
        <div class="text">Get in Touch</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque! Vitae tempore molestias placeat maxime a
          impedit magnam vel quibusdam.
        </p>
        <div class="icons">
          <div class="row">
            <i class="fab fa-youtube" aria-hidden="true"></i>
            <div class="info">
              <div class="sub-title">
                <a
                  href="https://www.youtube.com/channel/UCkJ1rbOrsyPfBuHNfnLPm-Q"
                  >THE BOYZ</a
                >
              </div>
            </div>
          </div>

          <div class="row">
            <i class="fab fa-instagram-square" aria-hidden="true"></i>
            <div class="info">
              <div class="sub-title">
                <a href="https://www.instagram.com/official_theboyz/"
                  >official_theboyz</a
                >
              </div>
            </div>
          </div>

          <div class="row">
            <i class="fab fa-twitter-square" aria-hidden="true"></i>
            <div class="info">
              <div class="sub-title">
                <a href="https://twitter.com/WE_THE_BOYZ">@WE_THE_BOYZ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column right">
        <div class="text">Message us</div>
        <form @submit.prevent="addFeedback">
          <div class="fields">
            <div class="field name">
              <input v-model="name" type="text" placeholder="Name" required />
            </div>
            <div class="field email">
              <input v-model="email" type="email" placeholder="Email" required />
            </div>
          </div>
          <div class="field">
            <input v-model="subject" type="text" placeholder="Subject"  maxlength = "14" required />
          </div>
          <div class="field textarea">
            <textarea
            maxlength = "50"
            v-model="msg"
              cols="30"
              rows="10"
              placeholder="message"
              required
            ></textarea>
          </div>
          <div class="button">
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  data(){
      return{
          name:'',
          email:'',
          subject:'',
          msg:'',
          feedbackResults:[],
          url: 'http://localhost:3000/feedbackResults',
      }
  },
  methods:{
      // submitForm(){
      //     this.feedbackResults.push({
      //         name:this.name,
      //         email:this.email,
      //         subject:this.subject,
      //         msg:this.msg
      //     })
      //     // console.log(this.feedbackResults[0])
      // },
      async addFeedback(){
        const newFeedback = {
            name: this.name,
            email: this.email,
            subject: this.subject,
            msg: this.msg
        }
        const res = await fetch(this.url,{
          method: 'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            name: newFeedback.name,
            email: newFeedback.email,
            subject: newFeedback.subject,
            msg: newFeedback.msg
          })
        })
        const data = await res.json()
        this.feedbackResults = [...this.feedbackResults,data]
        this.name = ''
        this.email = ''
        this.subject = ''
        this.msg = ''
      }
  }
};
</script>
    
<style scoped>
.feedback {
  padding: 75px 0 20px 0;
  width: 100%;
  height: 100%;
  background: #000;
}
.feedback .title {
  font-size: 45px;
  font-weight: 600;
  padding-bottom: 3%;
}
.feedback .title span {
  color: #db2929;
  text-decoration: none;
  font-style: normal;
}
.content {
  color: white;
  display: flex;
}
.column {
  width: 50%;
}
.content .left,
.right {
  text-align: left;
  width: 45%;
  padding-top: 10px;
  padding-left: 10%;
}
.content .text {
  color: #db2929;
  font-size: 20px;
  font-weight: 600;
}
.content .left p {
  padding-bottom: 15px;
}
.content .row {
  display: flex;
  height: 65px;
  align-items: center;
  color: #db2929;
}
.content .row .info {
  margin-left: 30px;
  text-decoration: none;
}
.content .row .info .sub-title a {
  color: white;
}
.right form .fields {
  display: flex;
}
form .name{
    margin-right: 10px;
}
.contact .right form .email{
    margin-right: 10px;
}
.right form .field,
.contact .right form .fields .field{
    height: 45px;
    width: 100%;
    margin-bottom: 15px;
}
.right form .field input,.right form .textarea textarea{
    height: 100%;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 6px;
    outline: none;
    padding: 0 15px;
    font-size: 17px;
}
.right form .textarea textarea{
    height: 120px;
    width: 100%;

}
.right form .textarea textarea{
    padding-top: 10px;
    resize: none;
}
.right form .button{
    margin-top: 95px;
    height: 47px;
    width: 170px;
}
.right form .button button{
    width: 100%;
    height: 100%;
    border: 2px solid #db2929;
    background: #db2929;
    color: white;
    font-size: 17px;
    font-weight: 400;
    border-radius: 6px;
    transition: 0.3s all ease;
    cursor: pointer;

}
.right form .button button:hover{
    color: #db2929;
    background: none;
}
</style>