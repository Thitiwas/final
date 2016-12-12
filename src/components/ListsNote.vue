<template lang="html">
  <div class="">
    <!-- <input type="text" name="name" value=""> -->
    <note v-for="note in notes" :note="note" :set-note="setNote" :remove-note="removeNote"><note>
  </div>
</template>

<script>
import Note from './Note'
export default {
  props: ['notes', 'setNote', 'removeNote'],
  components: {
    Note
  }
}
</script>

<style lang="css">
</style>
