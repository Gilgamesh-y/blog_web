(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{348:function(t,e,o){var content=o(673);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("3ef32833",content,!0,{sourceMap:!1})},349:function(t,e,o){var content=o(675);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("4940f47f",content,!0,{sourceMap:!1})},350:function(t,e,o){var content=o(677);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("f7d5840a",content,!0,{sourceMap:!1})},351:function(t,e,o){var content=o(679);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("740ec6ce",content,!0,{sourceMap:!1})},672:function(t,e,o){"use strict";var n=o(348);o.n(n).a},673:function(t,e,o){(t.exports=o(33)(!1)).push([t.i,"body .v-modal{opacity:1;background:#fff}",""])},674:function(t,e,o){"use strict";var n=o(349);o.n(n).a},675:function(t,e,o){(t.exports=o(33)(!1)).push([t.i,".chat-box .el-card__body{padding-left:0!important}",""])},676:function(t,e,o){"use strict";var n=o(350);o.n(n).a},677:function(t,e,o){(t.exports=o(33)(!1)).push([t.i,".box{width:50%;margin:auto}.box .user-list{height:500px;overflow-y:scroll}.box .user-list .item{height:40px;line-height:40px;margin:5px 0;padding:10px 0 10px 20px}.box .user-list .item img{float:left;width:40px;height:40px;border-radius:50%}.box .user-list .item span{margin-left:10px}.box .user-list .active{background:#ececec}.box .user-list::-webkit-scrollbar{width:5px}.box .user-list::-webkit-scrollbar-track{background-color:#fff}.box .user-list::-webkit-scrollbar-thumb{background-color:#cecece}.box .content{height:425px;overflow-y:scroll;border-left:1px solid #cecece}.box .content img{width:40px;height:40px;border-radius:50%}.box .content p{margin:0}.box .content .float-left{float:left}.box .content .float-right{float:right}.box .content .text-right{text-align:right}.box .content .item{margin:10px 0}.box .content .item img{width:30px;height:30px;margin:0 10px;border-radius:50%}.box .content .item .con span{font-weight:100;font-family:MicroSoft Yahei;color:#afaeae}.box .content .history{text-align:center}.box .content .history a{font-size:14px}.box .content::-webkit-scrollbar{width:5px;position:relative}.box .content::-webkit-scrollbar-track{background-color:#fff}.box .content::-webkit-scrollbar-thumb{background-color:#cecece}.box .message{background:#ddd}",""])},678:function(t,e,o){"use strict";var n=o(351);o.n(n).a},679:function(t,e,o){(t.exports=o(33)(!1)).push([t.i,".top[data-v-1d001be7]{padding-top:51px}",""])},695:function(t,e,o){"use strict";o.r(e);o(16);var n,r,c=o(18),l=(o(58),o(11)),f={components:(n={},Object(c.a)(n,l.Dialog.name,l.Dialog),Object(c.a)(n,l.Input.name,l.Input),n),data:function(){return{form:{name:""},dialogVisible:!0}},computed:{},watch:{},methods:{handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},submit:function(){this.dialogVisible=!1,this.$emit("confirm",this.form)}},mounted:function(){},beforeDestroy:function(){}},h=(o(672),o(14)),d=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{title:"登录",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("el-input",{attrs:{placeholder:"用户名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)}),[],!1,null,null,null).exports,m={components:(r={},Object(c.a)(r,l.Row.name,l.Row),Object(c.a)(r,l.Col.name,l.Col),Object(c.a)(r,l.Input.name,l.Input),Object(c.a)(r,"Login",d),r),data:function(){return{loading:!1,user_list:[{fd:0,name:"example"}],my:{fd:0,name:""},websock:null,target_user:{target_fd:0,message:null},message_list:[],ws_data:{url:"",type:"get",data:null}}},methods:{fetchUserList:function(){var t=this;this.loading=!0,this.$axios.$get("https://wrath.cc/php/users").then((function(e){e&&(t.user_list=e.map((function(t){return JSON.parse(t)})),t.user_list.length>1&&(t.user_list=t.user_list.filter((function(e){return e.fd!==t.my.fd}))))})).finally((function(){t.loading=!1}))},chooseTarget:function(t){this.target_user.target_fd=t.fd,this.target_user.source_name=this.my.name,this.target_user.target_name=t.name,this.target_user.source_fd=this.my.fd},push:function(){if(!this.target_user.target_fd)return this.$message.error("请选择聊天对象");if(this.target_user.target_fd===this.my.fd)return this.$message.error("请不要自言自语");if(this.ws_data.url="/ws/chats",this.ws_data.type="post",this.ws_data.data=Object.assign({},this.target_user),this.target_user.message=null,this.message_list.push(this.ws_data.data),this.websock.readyState===this.websock.OPEN)this.websocketsend();else if(this.websock.readyState===this.websock.CONNECTING){var t=this;setTimeout((function(){t.websocketsend()}),300)}else{this.initWebSocket();var e=this;setTimeout((function(){e.websocketsend()}),500)}},initWebSocket:function(){this.websock=new WebSocket("wss://wrath.cc/ws/chat/"),this.websock.onmessage=this.websocketonmessage,this.websock.onclose=this.websocketclose},websocketonmessage:function(t){var e=JSON.parse(t.data);if(0!=e.code)return this.$message.success("服务器异常");var data=e.data;"fetchUserList"!==data?(this.websock.fd||(this.websock.fd=data.fd),data.source_fd&&this.message_list.push(data)):this.fetchUserList()},websocketsend:function(){this.websock.send(JSON.stringify(this.ws_data))},websocketclose:function(t){this.$axios.delete("https://wrath.cc/php/users?name="+this.my.name)},login:function(data){var t=this,e={data:{}};e.data.name=data.name,e.data.fd=this.websock.fd,this.my=e.data,this.$axios.post("https://wrath.cc/php/users",e).then((function(e){t.ws_data.url="/ws/chat_users",t.ws_data.data="fetchUserList",t.websocketsend()}))},getLogs:function(){var t=this,e={};e.target_name=this.target_user.target_name,e.source_name=this.target_user.source_name,this.$axios.get("https://wrath.cc/php/chat-logs",{params:e}).then((function(e){t.message_list=e.data}))}},mounted:function(){this.initWebSocket()},beforeDestroy:function(){this.websock.onclose}},_=(o(674),o(676),{components:{Main:Object(h.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-card",{staticClass:"box chat-box"},[o("Login",{on:{confirm:t.login}}),t._v(" "),t.my?o("el-row",[o("el-col",{attrs:{span:6}},[o("div",{staticClass:"user-list"},t._l(t.user_list,(function(e){return o("div",{key:e.fd,staticClass:"item",class:{active:e.fd===t.target_user.target_fd},on:{click:function(o){return t.chooseTarget(e)}}},[o("img",{attrs:{src:"https://blog-ico.oss-cn-shanghai.aliyuncs.com/1.jpg"}}),t._v(" "),o("span",[t._v(t._s(e.name))])])})),0)]),t._v(" "),o("el-col",{attrs:{span:18}},[o("div",{staticClass:"content"},[t.target_user.target_fd?o("div",{staticClass:"history"},[o("a",{on:{click:t.getLogs}},[t._v("历史记录")])]):t._e(),t._v(" "),t._l(t.message_list,(function(e){return o("div",{key:e.fd,staticClass:"item",class:{"text-right":e.source_fd===t.my.fd}},[o("img",{class:{"float-right":e.source_fd===t.my.fd,"float-left":e.source_fd!==t.my.fd},attrs:{src:"https://blog-ico.oss-cn-shanghai.aliyuncs.com/1.jpg"}}),t._v(" "),o("div",{staticClass:"con"},[o("span",[t._v(t._s(e.source_name))]),t._v(" "),o("p",[t._v(t._s(e.message))])])])}))],2),t._v(" "),o("el-input",{staticClass:"message",attrs:{type:"textarea",rows:4,resize:"none",placeholder:"(ctrl + enter发送消息)"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey?t.push(e):null}},model:{value:t.target_user.message,callback:function(e){t.$set(t.target_user,"message",e)},expression:"target_user.message"}})],1)],1):t._e()],1)}),[],!1,null,null,null).exports},data:function(){return{form:{name:"",message:"message"},my:{name:"",fd:0},websock:null,list:[]}},computed:{},watch:{},methods:{},mounted:function(){},beforeDestroy:function(){}}),x=(o(678),Object(h.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-card",[e("div",{staticClass:"top"}),this._v(" "),e("Main")],1)}),[],!1,null,"1d001be7",null));e.default=x.exports}}]);