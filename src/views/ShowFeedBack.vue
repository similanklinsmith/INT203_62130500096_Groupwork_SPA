<template>
  <div class="showFeedback">
    <div class="title">FEED<span>BACKS</span></div>
    <div class="lists">
      <div class="list" v-for="result in feedbackResults" :key="result.id" @click="editSurvey(result.id)">
        <div class="content">
          <h4>
            <i class="fas fa-edit" @click="editSurvey(result.id)"></i
            >{{ result.subject }}
            <span @click="deleteFeedback(result.id)">&times;</span>
          </h4>
          <p><span>"</span> {{ result.msg }} <span>"</span></p>
          <h5>- {{ result.name }} -</h5>
        </div>
        <div class="isEdit" v-if="isEdit">
           <form @submit.prevent="editSubmit(result)">
            <div class="field textarea">
              <textarea
                maxlength="50"
                v-model="newMsg"
                cols="30"
                rows="10"
                placeholder="message"
                required
              ></textarea>
            </div>
            <div class="button">
              <button type="submit">edit</button>
            </div>
          </form>
        </div>
       
      </div>
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
      feedbackResults: [],
      url: "http://localhost:3000/feedbackResults",
      isEdit: false,
      newMsg:'',
    };
  },
  methods: {
    async fetchFeedbackResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
    async deleteFeedback(id) {
      if (confirm(`Are you sure to delete ?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.feedbackResults = this.feedbackResults.filter(
              (feedback) => feedback.id !== id
            ))
          : alert("Error to delete feedback");
      }
    },
    editSurvey() {
      this.isEdit = true
    },
    async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: editingData.name,
          email: editingData.email,
          subject: editingData.subject,
          msg: this.newMsg
        })
      })
      const data = await res.json()
      this.feedbackResults = this.feedbackResults.map((feedback) =>
        feedback.id === data.id
          ? {
              ...feedback,
              name: data.name,
              email: data.email,
              subject: data.subject,
              msg: data.msg
            }
          : feedback
      )
      this.newMsg=''
      this.isEdit = false
    }
  },
  async created() {
    this.feedbackResults = await this.fetchFeedbackResult();
  },
};
</script>

<style scoped>
.showFeedback {
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  background: #000;
}
.showFeedback .title {
  color: white;
  font-size: 45px;
  font-weight: 600;
}
.showFeedback .title span {
  text-decoration: none;
  font-style: normal;
}
.showFeedback .lists {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 10%;
}
.showFeedback .lists .list {
  width: 30%;
  height: 150px;
  background: white;
  border-radius: 5px;
  margin: 10px;
  transition: ease-in-out all 0.15s;
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.showFeedback .lists .list:hover {
  transform: scale(1.05);
}
.showFeedback .lists .list .content h4 {
  padding-top: 5px;
  padding-bottom: 5px;
  background: #db2929;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  color: white;
}
.showFeedback .lists .list .content h4 .fa-edit {
  right: 65px;
  position: relative;
  font-size: 15px;
  transition: ease-in-out 0.15s;
  cursor: pointer;
}
.showFeedback .lists .list .content h4 span {
  left: 65px;
  position: relative;
  font-size: 20px;
  transition: ease-in-out 0.15s;
  cursor: pointer;
}
.showFeedback .lists .list .content h4 span:hover,
.showFeedback .lists .list .content h4 .fa-edit:hover {
  color: black;
}
.showFeedback .lists .list .content p {
  margin-top: 25px;
  color: black;
  padding: 2px;
}
.showFeedback .lists .list .content p span {
  color: #db2929;
  font-size: 20px;
  font-weight: 600;
}
.isEdit .textarea textarea{
  width: 120px;
  height: 20px;
  border-radius: 3px;
  resize: none;
}
.isEdit button{
    width: 100%;
    height: 100%;
    border: 0px;
    background: #acacac;
    color: white;
    font-size: 17px;
    font-weight: 400;
    border-radius: 6px;
    transition: 0.3s all ease;
    cursor: pointer;
}
.isEdit button:hover{
   background: #585858;
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