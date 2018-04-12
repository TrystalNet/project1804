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
import db, {saveIt, debounce} from '../localdb'
import {SET_DIRTY, SET_CLEAN, SET_CONTENT} from '../mutation-types'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Project 1804',
      editorOption: {},
      saver:null
    }
  },
  computed: mapState(['name', 'dirty', 'content']),
  methods: {
    ...mapMutations([SET_DIRTY, SET_CLEAN, SET_CONTENT]),
    onCtrlS: function() { console.log('ignoring control-s') },
    onEditorChange: function({html, text, quill}) {
      if (this.saver == null) return (this.saver = debounce(saveIt, 2))
      this.SET_CONTENT({value:html})
      this.saver(db, this.name, this.content)
    },
    onEditorBlur: function() { },
    onEditorReady: function() {
      db.local.get({name:this.name}, result => {
        this.saver = null
        this.SET_CONTENT({value:result ? result.content : ''})
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
