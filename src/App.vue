<template>
  <div class="app">
    <div class="left">
      <lists-note :notes="notes" :set-note="setNote" :remove-note="removeNote"></lists-note>
    </div>
    <div class="right">
      <button type="button" name="button" @click="markDown = false">text</button>
      <button type="button" name="button" @click="markDown = true">MarkDown</button>
      <editor :add-note="addNote" :note-now="noteNow" :update-note="updateNote" v-show="!markDown"></editor>
      <mark-down v-if="markDown" :note-now="noteNow">  </mark-down>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyCPDLIe7nszKTq9JcSsiAy8NwHy0EI8rbM',
  authDomain: 'final-exam-30b8d.firebaseapp.com',
  databaseURL: 'https://final-exam-30b8d.firebaseio.com',
  storageBucket: 'final-exam-30b8d.appspot.com',
  messagingSenderId: '794684674371'
}
firebase.initializeApp(config)
var Notes = firebase.database().ref('notes')
import ListsNote from './components/ListsNote'
import Editor from './components/Editor'
import MarkDown from './components/MarkDown'
export default {
  name: 'app',
  components: {
    ListsNote,
    Editor,
    MarkDown
  },
  data () {
    return {
      notes: [],
      noteNow: {
        id: '',
        name: '',
        text: ''
      },
      markDown: false,
      conntentMark: ''
    }
  },
  mounted () {
    var vm = this
    Notes.on('child_added', function (data) {
      var item = data.val()
      item.id = data.key
      vm.notes.push(item)
    })
    Notes.on('child_removed', function (data) {
      var id = data.key
      var index = vm.notes.findIndex(note => note.id === id)
      vm.notes.splice(index, 1)
    })
    Notes.on('child_changed', function (snapshot) {
      var id = snapshot.key
      var note = vm.notes.find(note => note.id === id)
      note.name = snapshot.val().name
      note.text = snapshot.val().text
    })
  },
  methods: {
    addNote (text) {
      var name = 'Note #' + (this.notes.length + 1)
      var data = {
        name,
        text
      }
      Notes.push(data)
    },
    removeNote (id) {
      firebase.database().ref('notes/' + id).remove()
      if (this.noteNow.id === id) {
        this.noteNow.id = ''
        this.noteNow.text = ''
        this.noteNow.name = ''
      }
    },
    updateNote (id, name, text) {
      firebase.database().ref('notes/' + id).update({
        name: name,
        text: text
      })
    },
    setNote (id, name, text) {
      this.noteNow = {
        id,
        name,
        text
      }
    }
  }
}
</script>

<style>
.app {

}
body {
  background: #587174;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.left {
  overflow: auto;
  display: inline-block;
  width: 10vw;
  height: 100vh;
  font-family: 'BlinkMacSystemFont', 'Lucida Grande', 'Segoe UI', Ubuntu, Cantarell, sans-serif;
  font-size: 14px;
}
.right {
  float: right;
  display: inline-block;
  width: 80vw;
  height: 100vh;
  padding-top: 0px;
}
</style>
