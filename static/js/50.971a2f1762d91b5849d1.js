webpackJsonp([50],{tuUF:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("BO1k"),i=l.n(a),s=l("woOf"),n=l.n(s),r=l("mvHQ"),o=l.n(r),u=l("COTu"),p=l("cAgV"),c=l("0xDb"),d=l("Zx67"),m=l.n(d),g=l("Zrlr"),f=l.n(g),y=l("wxAW"),v=l.n(y),h=l("zwoO"),b=l.n(h),_=l("Pf15"),k=l.n(_),$=function(e){function t(){return f()(this,t),b()(this,(t.__proto__||m()(t)).apply(this,arguments))}return k()(t,e),v()(t,[{key:"defaults",value:function(){return{id:null,name:"",field:"",level:"",group:""}}},{key:"mutations",value:function(){return{id:function(e){return Number(e)||null},name:String,field:String,level:String,group:String}}}],[{key:"rules",value:function(){return{name:[{required:!0,message:"name is required",trigger:"change"}],field:[{required:!0,message:"Field is required",trigger:"change"}],level:[{required:!0,message:"level is required",trigger:"change"}],group:[{required:!0,message:"group is required",trigger:"change"}]}}}]),t}(l("efHD").a),w=[{key:"MPI",display_name:"MPI"},{key:"CBA",display_name:"CBA"},{key:"GL",display_name:"GL"},{key:"RT",display_name:"RT"},{key:"IMI",display_name:"IMI"},{key:"IIA",display_name:"IIA"},{key:"CH",display_name:"CH"},{key:"BIO",display_name:"BIO"}],x=[{key:"1",display_name:"1"},{key:"2",display_name:"2"},{key:"3",display_name:"3"},{key:"4",display_name:"4"},{key:"5",display_name:"5"}],C=[{key:"1",display_name:"1"},{key:"2",display_name:"2"}],O={name:"groups",directives:{waves:p.a},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,path:"/groups/group",listQuery:{page:1,limit:20,groupName:void 0,groupField:void 0,groupLevel:void 0,sort:"+id"},importanceOptions:[1,2,3],groupFieldOptions:w,groupLevelOptions:x,groupGroupOptions:C,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],temp:new $,dialogFormVisible:!1,dialogJointGroup:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],downloadLoading:!1,rules:$.rules()}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(u.e)(this.listQuery).then(function(t){console.log(JSON.parse(t.data.groups)),e.list=JSON.parse(t.data.groups),e.total=JSON.parse(t.data.groups).length,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit!==e&&(this.listQuery.limit=e,this.getList())},handleCurrentChange:function(e){this.listQuery.page!==e&&(this.listQuery.page=e,this.getList())},handleModifyStatus:function(e,t){this.$message({message:"Modify Success",type:"success"}),e.status=t},resetTemp:function(){this.temp=new $},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;console.log(o()(this.temp)),this.$refs.dataForm.validate(function(t){t&&Object(u.a)(e.temp).then(function(t){console.log(t.data.group),e.list.unshift(t.data.group),e.dialogFormVisible=!1,e.$notify({title:e.$t("groups.createsuccesstitle"),message:e.$t("groups.createsuccessmessage"),type:"success",duration:2e3})})})},handleUpdate:function(e){var t=this;this.temp=n()({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var l=n()({},e.temp);l.id=e.temp.pk,Object(u.f)(l).then(function(){var t=!0,l=!1,a=void 0;try{for(var s,n=i()(e.list);!(t=(s=n.next()).done);t=!0){var r=s.value;if(r.id===e.temp.id){var o=e.list.indexOf(r);e.list.splice(o,1,e.temp);break}}}catch(e){l=!0,a=e}finally{try{!t&&n.return&&n.return()}finally{if(l)throw a}}e.dialogFormVisible=!1,e.$notify({title:e.$t("groups.updatesuccesstitle"),message:e.$t("groups.updatesuccesstitle"),type:"success",duration:2e3})})}})},handleDelete:function(e){var t=this;Object(u.b)(e).then(function(){t.$notify({title:t.$t("groups.deletesuccesstitle"),message:t.$t("groups.deletesuccesstitle"),type:"success",duration:2e3});var l=t.list.indexOf(e);t.list.splice(l,1)})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([l.e(70),l.e(69)]).then(l.bind(null,"zWO4")).then(function(t){var l=e.formatJson(["timestamp","title","type","importance","status"],e.list);t.export_json_to_excel(["timestamp","title","type","importance","status"],l,"table-list"),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(c.c)(t[e]):t[e]})})}}},S={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container calendar-list-container"},[l("div",{staticClass:"filter-container"},[l("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("table.groupName")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.groupName,callback:function(t){e.$set(e.listQuery,"groupName",t)},expression:"listQuery.groupName"}}),e._v(" "),l("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:e.$t("table.groupField")},model:{value:e.listQuery.groupField,callback:function(t){e.$set(e.listQuery,"groupField",t)},expression:"listQuery.groupField"}},e._l(e.groupFieldOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),e._v(" "),l("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:e.$t("table.groupLevel")},model:{value:e.listQuery.groupLevel,callback:function(t){e.$set(e.listQuery,"groupLevel",t)},expression:"listQuery.groupLevel"}},e._l(e.groupLevelOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),e._v(" "),l("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:e.handleFilter},model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}},e._l(e.sortOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),e._v(" "),l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),l("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",loading:e.downloadLoading,icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(e._s(e.$t("table.export")))])],1),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{width:"150px",align:"center",label:e.$t("table.groupName")},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{"min-width":"150px",label:e.$t("table.groupClass")},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.field))])]}}])}),e._v(" "),l("el-table-column",{attrs:{"min-width":"150px",label:e.$t("table.groupGroup")},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.group))])]}}])}),e._v(" "),l("el-table-column",{attrs:{width:"150px",align:"center",label:e.$t("table.groupLevel")},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.level))])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:e.$t("table.actions"),width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("router-link",{attrs:{to:e.path+"/"+t.row.pk}},[l("el-button",{attrs:{type:"success",size:"mini"}},[e._v("View")])],1),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(l){e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("table.edit")))]),e._v(" "),l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("table.delete")))])]}}])})],1),e._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),l("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"50%"}},[l("el-form-item",{attrs:{prop:"name",label:e.$t("groups.formadd.groupname")}},[l("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"field",label:e.$t("groups.formadd.groupclass")}},[l("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.field,callback:function(t){e.$set(e.temp,"field",t)},expression:"temp.field"}},e._l(e.groupFieldOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),l("el-form-item",{attrs:{prop:"level",label:e.$t("groups.formadd.grouplevel")}},[l("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.level,callback:function(t){e.$set(e.temp,"level",t)},expression:"temp.level"}},e._l(e.groupLevelOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),l("el-form-item",{attrs:{prop:"group",label:e.$t("groups.formadd.groupgroup")}},[l("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.group,callback:function(t){e.$set(e.temp,"group",t)},expression:"temp.group"}},e._l(e.groupGroupOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?l("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):l("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"Reading statistics",visible:e.dialogPvVisible},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),l("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},F=l("VU/8")(O,S,!1,null,null,null);t.default=F.exports}});