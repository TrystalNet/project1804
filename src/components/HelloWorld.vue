<template>
  <div class="hello" @keydown.ctrl.83.prevent='onCtrlS'>
    <h1 v-bind:class="{dirty}">{{ msg }}</h1>
    <quill-editor :content='content' ref='myQuillEditor' :options='editorOption' 
      @change='onEditorChange($event)'
      @blur='onEditorBlur($event)' 
      @ready='onEditorReady($event)'/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import db, {saveIt} from '../localdb'
import {SET_DIRTY, SET_CLEAN, SET_CONTENT} from '../mutation-types'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Project 1804',
      editorOption: {},
      initialLoad: true
    }
  },
  computed: mapState(['name', 'dirty', 'content']),
  methods: {
    ...mapMutations([SET_DIRTY, SET_CLEAN, SET_CONTENT]),
    onCtrlS: function() {
      saveIt(db, this.name, this.content)
      this.SET_CLEAN()
    },
    onEditorChange: function({html, text, quill}) {
      console.log('step 5')
      if (this.initialLoad) {
        this.initialLoad = false
        return
      }
      this.SET_CONTENT({value:html})
      this.SET_DIRTY()
    },
    onEditorBlur: function() {
      db.local.put({
        name: this.name,
        content: this.content
      }).then(res => console.log('saved the content, we think')
      ).catch(err => console.log('the err is ', err))
    },
    onEditorReady: function() {
      db.local.get({name:this.name}, result => {
        this.initialLoad = true
        this.SET_CONTENT({value:result ? result.content : ''})
        this.SET_CLEAN()
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dirty {
  color: red;
}
</style>
