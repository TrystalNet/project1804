webpackJsonp([1],{"+cgv":function(n,t){},"3f40":function(n,t){},"4qOc":function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),r=e("NYxO"),i=e("G0J2"),c=e.n(i),a=(e("3f40"),e("4qOc"),e("+cgv"),{render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var u=e("VU/8")({name:"App"},a,!1,function(n){e("vGjf")},null,null).exports,l=e("/ocq"),s=e("Dd8w"),d=e.n(s),f=new(e("YwQ6").a)("project1804");f.version(1).stores({local:"name"});var p=function(n,t,e){n.local.put({name:t,content:e}).then(function(n){return console.log("saved")}).catch(function(n){return console.log("err:",n)})},v=f,m={name:"HelloWorld",data:function(){return{msg:"Project 1804",editorOption:{},saver:null}},computed:Object(r.c)(["name","dirty","content"]),methods:d()({},Object(r.b)(["SET_DIRTY","SET_CLEAN","SET_CONTENT"]),{onCtrlS:function(){console.log("ignoring control-s")},onEditorChange:function(n){var t,e,o,r=n.html;n.text,n.quill;if(null==this.saver)return this.saver=(t=p,e=2,o=void 0,function(){var n=this,r=arguments;clearTimeout(o),o=setTimeout(function(){return t.apply(n,r)},1e3*e)});this.SET_CONTENT({value:r}),this.saver(v,this.name,this.content)},onEditorBlur:function(){},onEditorReady:function(){var n=this;v.local.get({name:this.name},function(t){n.saver=null,n.SET_CONTENT({value:t?t.content:""})})}})},h={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"hello",on:{keydown:function(t){return("button"in t||83===t.keyCode)&&t.ctrlKey?(t.preventDefault(),n.onCtrlS(t)):null}}},[e("h1",{class:{dirty:n.dirty}},[n._v(n._s(n.msg))]),n._v(" "),e("quill-editor",{ref:"myQuillEditor",attrs:{content:n.content,options:n.editorOption},on:{change:function(t){n.onEditorChange(t)},blur:function(t){n.onEditorBlur(t)},ready:function(t){n.onEditorReady(t)}}})],1)},staticRenderFns:[]};var E=e("VU/8")(m,h,!1,function(n){e("Q7SJ")},"data-v-78cfb8c3",null).exports;o.a.use(l.a);var T,_=new l.a({routes:[{path:"/",name:"HelloWorld",component:E}]}),y=e("bOdI"),g=e.n(y),N=(T={},g()(T,"SET_CONTENT",function(n,t){n.content=t.value}),g()(T,"SET_DIRTY",function(n){n.dirty=!0}),g()(T,"SET_CLEAN",function(n){n.dirty=!1}),T);o.a.config.productionTip=!1,o.a.use(r.a),o.a.use(c.a),new o.a({el:"#app",router:_,store:new r.a.Store({state:{name:"home",dirty:!1,content:"<p>project 1804... ready to roll</p>"},mutations:N}),components:{App:u},template:"<App/>"})},Q7SJ:function(n,t){},vGjf:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.be3713381bc9ea6a9cd3.js.map