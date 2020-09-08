(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207b2c"],{a249:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ces-main"},[a("el-row",[a("el-tag",{staticClass:"themetag"},[t._v("海洋区域管理")]),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.AddArea}},[t._v("增加区域")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,model:t.form,border:""}},[a("el-table-column",{attrs:{property:"area_id",label:"区域编号"}}),a("el-table-column",{attrs:{property:"area_name",label:"区域名称"}}),a("el-table-column",{attrs:{property:"longitude",label:"经度"}}),a("el-table-column",{attrs:{property:"latitude",label:"纬度"}}),a("el-table-column",{attrs:{property:"radius",label:"区域半径"}}),a("el-table-column",{attrs:{property:"status",label:"监控状态"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.Edit(e.row)}}},[t._v("激活监控")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.Dele(e.row)}}},[t._v("删除")])]}}])})],1),a("el-dialog",{attrs:{title:"新增区域",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{"label-position":"left",model:t.form}},[a("el-form-item",{attrs:{label:"区域编号","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.area_id,callback:function(e){t.$set(t.form,"area_id",e)},expression:"form.area_id"}})],1),a("el-form-item",{attrs:{label:"区域名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.area_name,callback:function(e){t.$set(t.form,"area_name",e)},expression:"form.area_name"}})],1),a("el-form-item",{attrs:{label:"区域圆心经度","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.longitude,callback:function(e){t.$set(t.form,"longitude",e)},expression:"form.longitude"}})],1),a("el-form-item",{attrs:{label:"区域圆心纬度","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.latitude,callback:function(e){t.$set(t.form,"latitude",e)},expression:"form.latitude"}})],1),a("el-form-item",{attrs:{label:"区域半径","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.radius,callback:function(e){t.$set(t.form,"radius",e)},expression:"form.radius"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.BtnOk()}}},[t._v("确 定")])],1)],1)],1)},o=[],i=a("dac6"),r={data:function(){return{that:this,tableData:[],dialogFormVisible:!1,form:{area_id:"",area_name:"",longitude:"",latitude:"",radius:""},delete_id:"",change_id:"",formLabelWidth:"120px"}},created:function(){this.GetAllData()},methods:{GetAllData:function(){var t=this,e="/areas/area_list";i["a"].get(e).then((function(e){console.log(e),t.tableData=e.data.data.results})).catch((function(e){console.log(e),t.$notify.error({title:"失败",message:"获取数据失败"})}))},AddArea:function(){this.dialogFormVisible=!0,this.form={}},Edit:function(t){var e=this;console.log(t.area_id),this.$axios.put("http://175.24.65.62:8900/areas/area_update?area_id="+t.area_id).then((function(t){console.log(t.data.data),e.$notify.success({title:"成功",message:"修改成功"}),e.GetAllData()})).catch((function(t){console.log(t),e.$notify.success({title:"失败",message:"修改失败"})}))},Dele:function(t){var e=this;this.$confirm("删除操作将无法恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log(t.area_id),e.delete_id=t.area_id;var a="/areas/area_delete";i["a"].delete(a,{params:{area_id:e.delete_id}}).then((function(t){console.log(t),e.$notify.success({title:"成功",message:"删除成功"}),e.GetAllData()})).catch((function(t){console.log(t),e.$notify.success({title:"失败",message:"删除失败"})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},BtnOk:function(){var t=this;i["a"].post("/areas/area_add",this.form).then((function(e){console.log("如果成功：",e),t.GetAllData()})).catch((function(e){t.$notify.error({title:"失败",message:"新增失败"}),console.log(e)})),this.dialogFormVisible=!1}}},n=r,s=a("2877"),c=Object(s["a"])(n,l,o,!1,null,"0ae1c2a2",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d207b2c.87dbe75f.js.map