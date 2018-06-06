webpackJsonp([46],{rCuH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),o=n.n(a),r=n("DZ6q"),s=n.n(r),i=n("COTu"),l=n("Zpx/"),u=n("NYxO"),c=n("ueJj"),p={name:"Presentation",components:{fetchGroupList:i.e},computed:o()({},Object(u.b)(["id"])),data:function(){return{presentationCover:s.a,dialogCreatePresentation:!1,groupList:[],loadingConfirm:!1,presentationList:[],rules:c.a.rules(),temp:new c.a}},created:function(){var t=this;this.getGroupList(),this.temp.userId=this.id,Object(l.d)().then(function(e){t.presentationList=e.data.presentations})},methods:{showDialog:function(){this.dialogCreatePresentation=!0},getGroupList:function(){var t=this;Object(i.e)().then(function(e){t.groupList=JSON.parse(e.data.groups)})},handleCreate:function(){var t=this;this.$refs.presentationForm.validate(function(e){e&&(t.loadingConfirm=!0,Object(l.a)(t.temp).then(function(e){t.dialogCreatePresentation=!1,t.loadingConfirm=!1,t.$notify({title:t.$t("test.createSuccessTitle"),message:t.$t("test.createSuccessMessage"),type:"success",duration:2e3}),t.$router.push({path:"/presentation/create/"+e.data})}).catch(function(){t.loadingConfirm=!1,t.$notify({title:t.$t("test.createErrorTitle"),message:t.$t("test.createErrorMessage"),type:"error",duration:2e3})}))})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"text-center"},[n("img",{attrs:{src:t.presentationCover}}),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:t.showDialog}},[t._v("Create new Presentation")])],1),t._v(" "),n("el-table",{staticStyle:{width:"100%","padding-top":"15px"},attrs:{data:t.presentationList}},[n("el-table-column",{attrs:{label:"Name",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t"+t._s(e.row.name)+"\n\t\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"User","show-overflow-tooltip":"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t  "+t._s(e.row.user.first_name)+" "+t._s(e.row.user.last_name)+" \n\t\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Group","show-overflow-tooltip":"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t  "+t._s(e.row.group.name)+"\n\t\t\t\t\t\t")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Action",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/presentation/"+e.row.pk}},[n("el-button",{staticClass:"info"},[t._v("\n                  Join\n                ")])],1)]}}])})],1),t._v(" "),n("el-dialog",{attrs:{title:"Create New Presentation",visible:t.dialogCreatePresentation},on:{"update:visible":function(e){t.dialogCreatePresentation=e}}},[n("el-form",{ref:"presentationForm",attrs:{rules:t.rules,model:t.temp}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{prop:"groupId","label-width":"50%",label:t.$t("prenstation.formAdd.groupId")}},[n("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},model:{value:t.temp.groupId,callback:function(e){t.$set(t.temp,"groupId",e)},expression:"temp.groupId"}},t._l(t.groupList,function(t){return n("el-option",{key:t.key,attrs:{label:t.name,value:t.pk}})}))],1),t._v(" "),n("el-form-item",{staticClass:"postInfo-container-item",attrs:{prop:"name","label-width":"50%",label:t.$t("prenstation.formAdd.presentationName")}},[n("el-input",{model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1)],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",loading:t.loadingConfirm},on:{click:t.handleCreate}},[t._v("Confirm")])],1)],1)],1)},staticRenderFns:[]},f=n("VU/8")(p,d,!1,null,null,null);e.default=f.exports}});