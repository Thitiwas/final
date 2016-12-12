<template lang="html">
  <div class="note" >
    <h2 @click="setNote(note.id, note.name, note.text)">{{note.name}}</h2>
    <button type="button" name="button" @click="removeNote(note.id)">x</button>
  </div>
</template>

<script>
export default {
  props: ['note', 'setNote', 'removeNote']
}
</script>

<style lang="css">
.note {
  width: 100%;
  background-color: #6cc677;
}
</style>
