<template>
  <div class="home">
    
    <VButton text="schedules"/>
    <VButton text="location"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VButton from '@/components/VButton.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    VButton
      
  }
}
</script>


<style>
    body {
        background: black
    }
</style>