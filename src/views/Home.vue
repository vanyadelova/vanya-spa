<template>
 
  <div class="home">
   
   <img src="nysl_logo.png" alt="">
    
    <VButton text="Schedule"/>
    <VButton text="Locations"/>
    <VButton text="Results"/>
    <VButton text="Log in & Chat"/>

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
</style>