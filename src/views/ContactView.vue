<template>
  <main>
    <img src="../assets/Mascot_1.png" alt="">
    <div id="container">
      <div id="half"></div>
    </div>
    <h1 id="main_title">CYBER LOOX</h1>
    <h1 id="about">CONTACT</h1>
  </main>
</template>
<script>
export default {
  
};
</script>
<style scoped>

*{
    color: white;
}
main {
  height: 100vh;
}
#container {
  background: rgba(255, 255, 255, 0.968);
  width: 850px;
  height: 650px;
  position: absolute;
  left: 25%;
  top: 20%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px;
}

#main_title{
 position: absolute;
 text-decoration: line-through;
 left: 69.5%;
 top: 45%;
 font-size: 100px;
 transform: rotate(90deg);
  text-shadow: 0px 0px 10px;
  font-family: 'Dosis', sans-serif;
}

#about{
position: absolute;
 text-decoration: line-through;
 left:37%;
 top:0%;
 font-size: 100px;
 text-shadow: 0px 0px 10px;
 font-family: 'Dosis', sans-serif;
}

img{
  position: absolute;
  top:35%;
  left: 5%;
  width:350px;
  z-index: 2;
}
</style>
