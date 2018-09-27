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
    button {
        font-size: 28px;
        background: yellow;
        border-radius: 50px;
        display: block;
        width: 100%;
        padding: .4em;
        margin: 15px 0;
        border: none;
        transition: all .3s;
    }
    button:hover {
        background: orange
    }
</style>
