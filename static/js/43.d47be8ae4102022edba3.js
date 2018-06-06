webpackJsonp([43],{hfEX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("cAgV"),s=a("0xDb"),l=a("ts7I"),n=[{key:"MPI",display_name:"MPI"},{key:"CBA",display_name:"CBA"},{key:"GL",display_name:"GL"},{key:"RT",display_name:"RT"},{key:"IMI",display_name:"IMI"},{key:"IIA",display_name:"IIA"},{key:"CH",display_name:"CH"},{key:"BIO",display_name:"BIO"}],r=[{key:"1",display_name:"1"},{key:"2",display_name:"2"},{key:"3",display_name:"3"},{key:"4",display_name:"4"},{key:"5",display_name:"5"}],o={name:"requests",directives:{waves:i.a},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,groupName:void 0,groupClass:void 0,groupLevel:void 0,sort:"+id"},groupClassOptions:n,groupLevelOptions:r,importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published",fields:{}},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1,joinGroupLoading:!1,dialogJointGroup:!1,JoinGroupId:""}},filters:{statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(l.c)(this.listQuery).then(function(t){e.list=JSON.parse(t.data.requests),e.total=e.list.length,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit!==e&&(this.listQuery.limit=e,this.getList())},handleCurrentChange:function(e){this.listQuery.page!==e&&(this.listQuery.page=e,this.getList())},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:"",fields:{}}},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e(70),a.e(69)]).then(a.bind(null,"zWO4")).then(function(t){var a=e.formatJson(["timestamp","title","type","importance","status"],e.list);t.export_json_to_excel(["timestamp","title","type","importance","status"],a,"table-list"),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(s.c)(t[e]):t[e]})})},handleAccept:function(e){var t=this;Object(l.a)({requestId:e.id}).then(function(a){t.$notify({title:"request",message:"success",type:"success",duration:2e3});var i=t.list.indexOf(e);t.list.splice(i,1)}).catch(function(){t.$notify({title:"request",message:"Error",type:"error",duration:2e3})})},handleDiscard:function(e){var t=this;Object(l.b)({requestId:e.id}).then(function(a){t.$notify({title:"request",message:"success",type:"success",duration:2e3});var i=t.list.indexOf(e);t.list.splice(i,1)}).catch(function(){t.$notify({title:"request",message:"Error",type:"error",duration:2e3})})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("table.groupName")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.groupName,callback:function(t){e.$set(e.listQuery,"groupName",t)},expression:"listQuery.groupName"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:e.$t("table.groupClass")},model:{value:e.listQuery.groupClass,callback:function(t){e.$set(e.listQuery,"groupClass",t)},expression:"listQuery.groupClass"}},e._l(e.groupClassOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:e.$t("table.groupLevel")},model:{value:e.listQuery.groupLevel,callback:function(t){e.$set(e.listQuery,"groupLevel",t)},expression:"listQuery.groupLevel"}},e._l(e.groupLevelOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:e.handleFilter},model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}},e._l(e.sortOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",loading:e.downloadLoading,icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(e._s(e.$t("table.export")))])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:e.$t("table.id"),width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"150px",label:e.$t("table.groupName")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.group_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150px",align:"center",label:e.$t("table.studentEmail")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.student_email))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150px",align:"center",label:e.$t("table.studentFirstName")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.student_first_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150px",align:"center",label:e.$t("table.studentLastName")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.student_last_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"150px",label:e.$t("table.date")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.date))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("table.actions"),width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success"},on:{click:function(a){e.handleAccept(t.row)}}},[e._v("Accept")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){e.handleDiscard(t.row)}}},[e._v("Discard")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},staticRenderFns:[]},d=a("VU/8")(o,u,!1,null,null,null);t.default=d.exports}});