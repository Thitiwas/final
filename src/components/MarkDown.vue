<template lang="html">
  <div class="mark">
    <div  v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
var marked = require('marked')
export default {
  props: ['noteNow'],
  data () {
    return {
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.noteNow.text)
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
.mark {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  background-color: #FFF;
  width: 40vw;
  height: 70vh;
  padding-left: 10px;
}
</style>
