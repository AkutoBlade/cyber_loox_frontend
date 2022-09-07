<template>
  <main>
    <div id="left">
      <h1 id="main_title">CYBER LOOX</h1>
      <p id="quote">the convenient pocket pc</p>
      <img id="mascot" src="../assets/Mascot_1.png" alt="">
    </div>
    <div id="right"></div>
  </main>
</template>
<script>
export default {};
</script>
<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  height: 100vh;
}

#left {
  background-color:;
  height: 800px;
  width: 800px;
}

#right {
  background-color: blue;
  height: 800px;
  width: 800px;
}

#main_title {
  position: absolute;
  left: 11%;
  text-decoration: line-through;
  font-size: 100px;
  text-shadow: 0px 0px 10px;
  font-family: "Dosis", sans-serif;
  color: white;
}

#quote{
    position: absolute;
    font-size:18px;
    left:14%;
    top:20%;
    background-color: white;
    height: 30px;
    padding-left:100px;
    padding-right:100px;
    border-radius: 10px;
    color: #3ec5ffdf;
}

#mascot{
position: absolute;
top: 23%;
left: 5%;
width:400px;
}
</style>
