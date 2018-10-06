<template>
 
  <div class="home">
  <div id="marquee">
    <div>
        <span>Northside Youth Soccer League</span>
    </div>
    <div aria-hidden="true">
        <span>Northside Youth Soccer League</span>
    </div>
</div>
   
   <img id ="logo" src="nysl_logo.png" alt="">
    
    <router-link class="link" to="/Schedule">Schedule</router-link>
    <VButton text="Locations"/>
    <router-link class="link" to="/Results">Results</router-link>
    <router-link class="link" to="/Login">Log in & Chat</router-link>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VButton from '@/components/VButton.vue'
import Logo from '@/components/Logo.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    VButton,
      Logo,
      
      
  }
}
</script>


<style>
    body {
        background: black
    }
    #logo {
        width: 50%;
    }
    .link {
        font-size: 28px;
        background: gold;
        border-radius: 50px;
        display: block;
        width: 95%;
        padding: .4em;
        margin: 15px 0;
        border: none;
        transition: all .3s;
        text-decoration: none;
        color: black;
    }
    .link:hover {
        background: orange;
    }
    
    #marquee { 
  margin-top: 3rem;
	perspective: 500px;
	font-size: 0;
	font-family: Agency, sans-serif;
}
#marquee div {
	display: inline-block; 
	height: 5rem; 
	width: 30rem;
	position: relative;
}

#marquee div:first-of-type { 
	background: #e5233e;
	transform-origin: top right;
	transform: rotateY(-40deg);
	color: #fff;
}
#marquee div:last-of-type {
	background: #b31e31;
	transform-origin: top left;
	transform: rotateY(45deg);
	color: #f8c9d9;
}
#marquee div { 
    font-size: 4rem;
    overflow: hidden;
}
#marquee div span { 
    position: absolute; 
    width: 400%;    
    line-height: 1.4;
}
#marquee div:first-of-type span {
    transform: translateX(40rem);
    animation: leftcrawl 14s linear infinite;
    text-shadow: 4px 0px 4px rgba(0,0,0,0.3);
}
#marquee div:last-of-type span {
    transform: translateX(20rem);
    animation: rightcrawl 14s linear infinite;
}

@keyframes leftcrawl {
	to { transform: translateX(-100rem); }
}
@keyframes rightcrawl {
	to { transform: translateX(-130rem); }
}


</style>