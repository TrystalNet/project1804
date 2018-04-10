<template>
  <div id="app">
    <router-view/>
    <quill-editor v-model='content' ref='myQuillEditor' :options='editorOption' 
      @blur='onEditorBlur($event)' 
      @focus='onEditorFocus($event)'
      @ready='onEditorReady($event)'/>
  </div>
</template>

<script>
import db from './localdb'

export default {
  name: 'App',
  data() {
    return {
      content: '<p>example content</p>',
      editorOption: {}
    }
  },
  methods: {
    onEditorBlur: function() {
      db.local.put({
        name: 'home',
        content: this.content
      }).then(res => console.log('saved the content, we think')
      ).catch(err => console.log('the err is ', err))
    },
    onEditorFocus: function() {
      console.log('focus')
    },
    onEditorReady: function() {
      db.local.get({name:'home'}, result => {
        var content = result.content
        console.log('got a result', content)
        this.content = content
        // this.content = result.content
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
