<template>
  <div id="nav">
    <div class="logo">The<span>Boyz</span>.</div>
    <ul>
      <li><router-link to="/">Home</router-link> |</li>
      <li><router-link to="/members">Members</router-link> |</li>
      <li><router-link to="/songs">Songs</router-link></li>
      <li><router-link to="/feedback">Feedbacks</router-link></li>
    </ul>
  </div>
  <router-view/>
</template>

<script>
export default {
  methods:{
    redirect(){
      this.$router.push({ name: 'Home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #151516;
}
#nav .logo {
  font-size: 40px;
  color: white;
  font-weight: 600;
}
#nav .logo span {
  color: #db2929;
}
#nav{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px 0px 100px;
  background: #1f1f20;
  width:100%;
  z-index: 100;
  position: fixed;
}
#nav ul li a{
    color: white;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 8px 10px;
}
#nav ul{
    display: flex;
    list-style: none;
}
#nav ul li{
    margin: 0 5px;
}
#nav a:hover {
  color: #db2929;
  transition: all ease-in 0.2s;
}
#nav a.router-link-exact-active {
  transition: all ease-in 0.2s;
  background: #db2929;
  border-radius: 50px 20px;
}
#nav a.router-link-exact-active:hover {
  color: white;
}
.max-width{
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}
video{
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: 100;
}

</style>
