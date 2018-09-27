<template>
<button>{{text}}</button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        font-size: 48px;
    }
</style>
