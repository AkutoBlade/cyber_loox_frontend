<template>
  <main>
    <div id="left">
      <h1 id="main_title" data-text="CYBER LOOX">CYBER LOOX</h1>
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
  position: relative;
  left: 17%;
  text-decoration: line-through;
  font-size: 100px;
  text-shadow: 0px 0px 10px;
  font-family: "Dosis", sans-serif;
  color: white;
}

#main_title::before{
position: absolute;
content: attr(data-text);
text-shadow: 0px 0px 20px white;
filter: blur(25px) brightness(1);
animation:  flicker 4s linear 1s infinite;
}

@keyframes flicker{
  0%{filter:blur(5px) brightness(1);}
  3%{filter:blur(5px) brightness(0);}
  6%{filter:blur(5px) brightness(0);}
  7%{filter:blur(5px) brightness(1);}
  8%{filter:blur(5px) brightness(0);}
  9%{filter:blur(5px) brightness(1);}
  10%{filter:blur(5px) brightness(0);}
  20%{filter:blur(5px) brightness(1);}
  50%{filter:blur(5px) brightness(1);}
  99%{filter:blur(5px) brightness(0);}
  100%{filter:blur(5px) brightness(1);}
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
animation: float 2.0s ease-in-out infinite;
}


@keyframes float{
        0% {
        transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
          }
</style>
