(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8a070a0"],{"0d4c":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"zhuce"}},[t("div",{staticClass:"box"},[t("el-input",{attrs:{label:"用户名",type:"string",placeholder:"请输入用户名"},model:{value:e.name,callback:function(s){e.name=s},expression:"name"}}),t("el-input",{attrs:{label:"密码",type:"string",placeholder:"请输入密码","show-password":""},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),t("div",{staticClass:"button"},[t("el-button",{nativeOn:{click:function(s){return e.zhuce(s)}}},[e._v("注册")]),t("el-button",{nativeOn:{click:function(s){return e.goback(s)}}},[e._v("返回")])],1)],1)])},a=[],c=(t("b0c0"),{data:function(){return{name:"",password:""}},methods:{zhuce:function(){var e=this,s={name:this.name,password:this.password};s=this.$Qs.stringify(s),this.$sendData("/register",s).then((function(s){"01"==s.code&&(e.$message({message:"注册成功",type:"success"}),e.$router.push("/login")),"00"==s.code&&e.$message({message:"注册失败",type:"warning"}),"06"==s.code&&e.$message({message:"账户密码为空",type:"warning"})}))},goback:function(){this.$router.go(-1)}}}),i=c,o=(t("cd04"),t("2877")),r=Object(o["a"])(i,n,a,!1,null,null,null);s["default"]=r.exports},a9a8:function(e,s,t){},cd04:function(e,s,t){"use strict";var n=t("a9a8"),a=t.n(n);a.a}}]);
//# sourceMappingURL=chunk-b8a070a0.215b2955.js.map