<template>
   <header>
    <input type="checkbox" id="checkBox">
    <div class="toggle" @click="handleEvent">
        <span class="top_line common"></span>
        <span class="middle_line common"></span>
        <span class="bottom_line common"></span>
    </div>
    
    <div>
        <div class="slide">
        <h1 id="Menu">CYBER LOOX</h1>
        <ul>
        <li class="navs-links first-link"><router-link to="/"><span><i class="fa-solid fa-house-chimney"></i></span> HOME</router-link></li>
        <li class="navs-links"><router-link to="/about"><i class="fa-solid fa-circle-info"></i> ABOUT</router-link></li>
        <li class="navs-links"><router-link to="/resume"><i class="fa-solid fa-phone-flip"></i> CONTACT</router-link></li>
        <li class="navs-links"><router-link to="/project"><i class="fa-solid fa-circle-plus"></i> REGISTER</router-link></li>
        <li class="navs-links"><router-link to="/testimonials"><i class="fa-solid fa-user"></i>LOGIN</router-link></li>
        <li class="navs-links"><router-link to="/contact"><i class="fa-solid fa-cart-shopping"></i> CART</router-link></li>
        </ul>
        </div>
    </div>
    </header>  
</template>
<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
    color: #fff;
}
body{
    background-color:#f2f2f2;
}
.slide{
    height:100%;
    width: 500px;
     position: absolute;
    background-color:#252020;
    transform: translateX(-510px);
    z-index:98;
    overflow:hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
}

#Menu{
    font-weight: 800;
    text-align: center;
    /* padding: 10px 0;
    padding-right: 90px; */
    display: flex;
    justify-content: center;
    pointer-events: none;
    text-decoration: line-through;
    padding-right: 50px;
}

.first-link{
    margin-top:10%;
}

.navs-links {
    list-style: none;
    text-align: center;
    display: flex;
    /* justify-content: center; */
    padding: 1em 1em 1em 11em;
    margin-right: 2em;
}


.navs-links a{
    font-weight: 500;
    padding: 5px 0;
    display: block;
    text-transform: capitalize;
    text-decoration: none;
}

.navs-links a i{
    width: 40px;
    text-align: center;

}

.navs-links>a{
 padding-left:0;
 text-align: start;
}

#checkBox{
display: none; 
visibility: hidden ;
-webkit-appearance: none;
}

.toggle{
    position: absolute;
    height:30px;
    width: 30px;
    top: 15px;
    left: 11px;
    z-index: 1;
    cursor: pointer;
    border-radius: 2px;
    background-color: transparent;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index: 99;
}

.toggle .common{
    position: absolute;
    height: 2px;
    width: 20px;
    background-color: #fff;
    border-radius: 50px;
    transition: 0.3s ease;
    left:0;


}

.toggle .top_line{
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.toggle .middle_line{
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.toggle .bottom_line{
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
}

input:checked ~ .toggle .top_line{
    left: 2px;
    top: 14px;
    width: 25px;
    transform: rotate(45deg);
}

input:checked ~ .toggle .bottom_line{
    left: 2px;
    top: 14px;
    width: 25px;
    transform: rotate(-45deg);
}

input:checked ~ .toggle .middle_line{
   opacity: 0;
    transform: translateX(20px);
}

input:checked ~ .slide{
    transform:translateX(0)
}
.navs-links>a:hover{
color: white;
}
.navs-links:hover{
    color: white;
    background-color: #3EC6FF;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    transition: all 1.5s ease;
    width: 100%;
    box-shadow: 0px 0px 10px #3ec5ffdf;
}
</style>
<script>
export default {
    data() {
        return {
            isChecked: false
        }  
 },
    methods: {
        handleEvent() {
           this.isChecked = !this.isChecked;
           console.log(this.isChecked)
            if(this.isChecked == true){
             document.querySelector("#checkBox").checked = true;
             document.querySelector('.slide').style.transform= "translateX(-0px)";
             document.querySelector('.slide').style.transition= "all 0.8s ease";
            }
            if (this.isChecked == false){ 
            document.querySelector("#checkBox").checked = false;
             document.querySelector('.slide').style.transform= "translateX(-510px)"
            }
        }
    }
}
</script>