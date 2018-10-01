<template>
<div >
<img id ="logo" src="nysl_logo.png" alt="">
</div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #logo {
         width: 20%;
     
    }
</style>
