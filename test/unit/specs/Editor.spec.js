import Vue from 'vue'
import App from 'src/App'
import MyComponent from 'src/components/Editor'
function getRendered (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}
describe('App.vue', () => {
  var vmApp = getRendered(App, {})
  var vm = getRendered(MyComponent, {
    addNote: vmApp.addNote,
    noteNow: vmApp.addNote,
    updateNote: vmApp.updateNote
  })
  it('เพิ่มข้อมูลได้', () => {
    vm.text = 'Hello unit test'
    vm.add()
    vmApp.setNote(vmApp.notes[0].id, vmApp.notes[0].name, vmApp.notes[0].text)
  })
  it('ลบข้อมูลได้', () => {
    vmApp.deleteNote(vmApp[0].id)
    // vmApp.setNote(vmApp.notes[0].id, vmApp.notes[0].name, vmApp.notes[0].text)
  })
})
