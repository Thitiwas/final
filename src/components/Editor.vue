<template lang="html">
  <div class="">
    <textarea class='edit' v-model="text" debounce="10" rows="30" cols="70"></textarea>
    <!-- <textarea name="name" rows="8" cols="40" v-model='text'>aqweqweqew</textarea> -->
    <button type="button" name="button" @click="add" >เพิ่ม</button>
    <button type="button" name="button" @click="updateNote(id, name, text)">แก้ไข</button>
    <div class="" v-show="false">
      {{a}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['addNote', 'noteNow', 'updateNote'],
  data () {
    return {
      id: '',
      name: '',
      text: ''
    }
  },
  methods: {
    add () {
      this.addNote(this.text)
      this.text = ''
    }
  },
  computed: {
    a () {
      this.id = this.noteNow.id
      this.text = this.noteNow.text
      this.name = this.noteNow.name
      return this.noteNow.text + this.noteNow.name + this.noteNow.id
    }
  }
}
</script>

<style lang="css">
.edit {
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
