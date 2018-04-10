<template>
  <div id="app" @keydown.ctrl.83.prevent='onCtrlS'>
    <router-view/>
    <quill-editor v-model='content' ref='myQuillEditor' :options='editorOption' 
      @blur='onEditorBlur($event)' 
      @focus='onEditorFocus($event)'
      @ready='onEditorReady($event)'/>
  </div>
</template>

<script>
/* eslint vue/valid-v-on: "off" */
import db from './localdb'

const saveIt = (db, name, content) => {
  db.local.put({name,content}).
  then(res => console.log('saved the content, we think')).
  catch(err => console.log('the err is ', err))
}

export default {
  name: 'App',
  data() {
    return {
      content: '<p>example content</p>',
      editorOption: {}
    }
  },
  computed: {
    name() {
      return this.$store.state.name
    }
  },
  methods: {
    onCtrlS: function() {
      saveIt(db, this.name, this.content)
    },
    onEditorBlur: function() {
      db.local.put({
        name: this.name,
        content: this.content
      }).then(res => console.log('saved the content, we think')
      ).catch(err => console.log('the err is ', err))
    },
    onEditorFocus: function() { },
    onEditorReady: function() {
      db.local.get({name:this.name}, result => {
        this.content = result ? result.content : ''
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
