(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{336:function(t,n,e){var content=e(560);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(34).default)("2f042f60",content,!0,{sourceMap:!1})},559:function(t,n,e){"use strict";var o=e(336);e.n(o).a},560:function(t,n,e){(t.exports=e(33)(!1)).push([t.i,".wrap[data-v-63f665d1]{width:50%;margin:auto}.wrap .top[data-v-63f665d1]{padding-top:81px}",""])},696:function(t,n,e){"use strict";e.r(n);e(16),e(44);var o,r=e(2),c=e(357),d=e.n(c),l=(e(358),{transition:"page",components:{},data:function(){return{loading:!1,form:{}}},computed:{},watch:{},methods:{fetchData:(o=Object(r.a)(regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$axios.$get("articles/2").then((function(t){n.form=t})).finally((function(){return n.loading=!1}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},mounted:function(){this.fetchData()},updated:function(){document.querySelectorAll("pre").forEach((function(t){d.a.highlightBlock(t)}))}}),f=(e(559),e(14)),component=Object(f.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"top"}),this._v(" "),n("el-card",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}]},[n("div",{domProps:{innerHTML:this._s(this.form.html)}})])],1)}),[],!1,null,"63f665d1",null);n.default=component.exports}}]);