webpackJsonp([15],{"/rHw":function(e,r,a){var i=a("Hqvx");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("4de72276",i,!0)},"5TKe":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=a("Oakg"),n=a("kCe2"),t={name:"avatarUpload-demo",components:{ImageCropper:i.a,PanThumb:n.a},data:function(){return{imagecropperShow:!1,imagecropperKey:0,image:"https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"}},methods:{cropSuccess:function(e){this.imagecropperShow=!1,this.imagecropperKey=this.imagecropperKey+1,this.image=e.files.avatar},close:function(){this.imagecropperShow=!1}}},p={render:function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"components-container"},[a("code",[e._v("This is based on\n    "),a("a",{staticClass:"link-type",attrs:{href:"//github.com/dai-siki/vue-image-crop-upload"}},[e._v(" vue-image-crop-upload")]),e._v(".\n    "+e._s(e.$t("components.imageUploadTips"))+"\n  ")]),e._v(" "),a("pan-thumb",{attrs:{image:e.image}}),e._v(" "),a("el-button",{staticStyle:{position:"absolute",bottom:"15px","margin-left":"40px"},attrs:{type:"primary",icon:"upload"},on:{click:function(r){e.imagecropperShow=!0}}},[e._v("Change avatar\n  ")]),e._v(" "),a("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imagecropperShow,expression:"imagecropperShow"}],key:e.imagecropperKey,attrs:{width:300,height:300,url:"https://httpbin.org/post",langType:"en"},on:{close:e.close,"crop-upload-success":e.cropSuccess}})],1)},staticRenderFns:[]};var o=a("VU/8")(t,p,!1,function(e){a("/rHw")},"data-v-07adf78b",null);r.default=o.exports},"91u8":function(e,r,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n@charset \"UTF-8\";\n@-webkit-keyframes vicp_progress-data-v-7ae02ef3 {\n0% {\r\n        background-position-y: 0;\n}\n100% {\r\n        background-position-y: 40px;\n}\n}\n@keyframes vicp_progress-data-v-7ae02ef3 {\n0% {\r\n        background-position-y: 0;\n}\n100% {\r\n        background-position-y: 40px;\n}\n}\n@-webkit-keyframes vicp-data-v-7ae02ef3 {\n0% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(0) translatey(-60px);\r\n        transform: scale(0) translatey(-60px);\n}\n100% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1) translatey(0);\r\n        transform: scale(1) translatey(0);\n}\n}\n@keyframes vicp-data-v-7ae02ef3 {\n0% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(0) translatey(-60px);\r\n        transform: scale(0) translatey(-60px);\n}\n100% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1) translatey(0);\r\n        transform: scale(1) translatey(0);\n}\n}\n.vue-image-crop-upload[data-v-7ae02ef3] {\r\n    position: fixed;\r\n    display: block;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    z-index: 10000;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.65);\r\n    -webkit-tap-highlight-color: transparent;\r\n    -moz-tap-highlight-color: transparent;\n}\n.vue-image-crop-upload .vicp-wrap[data-v-7ae02ef3] {\r\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    position: fixed;\r\n    display: block;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    z-index: 10000;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    width: 600px;\r\n    height: 330px;\r\n    padding: 25px;\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n    -webkit-animation: vicp-data-v-7ae02ef3 0.12s ease-in;\r\n    animation: vicp-data-v-7ae02ef3 0.12s ease-in;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close[data-v-7ae02ef3] {\r\n    position: absolute;\r\n    right: -30px;\r\n    top: -30px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4[data-v-7ae02ef3] {\r\n    position: relative;\r\n    display: block;\r\n    width: 30px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n    -webkit-transition: -webkit-transform 0.18s;\r\n    transition: -webkit-transform 0.18s;\r\n    transition: transform 0.18s;\r\n    transition: transform 0.18s, -webkit-transform 0.18s;\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4[data-v-7ae02ef3]::after, .vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4[data-v-7ae02ef3]::before {\r\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    content: '';\r\n    position: absolute;\r\n    top: 12px;\r\n    left: 4px;\r\n    width: 20px;\r\n    height: 3px;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    background-color: #fff;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4[data-v-7ae02ef3]::after {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4[data-v-7ae02ef3]:hover {\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area[data-v-7ae02ef3] {\r\n    position: relative;\r\n    padding: 35px;\r\n    height: 200px;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    text-align: center;\r\n    border: 1px dashed rgba(0, 0, 0, 0.08);\r\n    overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1[data-v-7ae02ef3] {\r\n    display: block;\r\n    margin: 0 auto 6px;\r\n    width: 42px;\r\n    height: 42px;\r\n    overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-arrow[data-v-7ae02ef3] {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 14.7px solid rgba(0, 0, 0, 0.3);\r\n    border-left: 14.7px solid transparent;\r\n    border-right: 14.7px solid transparent;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-body[data-v-7ae02ef3] {\r\n    display: block;\r\n    width: 12.6px;\r\n    height: 14.7px;\r\n    margin: 0 auto;\r\n    background-color: rgba(0, 0, 0, 0.3);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-bottom[data-v-7ae02ef3] {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    height: 12.6px;\r\n    border: 6px solid rgba(0, 0, 0, 0.3);\r\n    border-top: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-hint[data-v-7ae02ef3] {\r\n    display: block;\r\n    padding: 15px;\r\n    font-size: 14px;\r\n    color: #666;\r\n    line-height: 30px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-no-supported-hint[data-v-7ae02ef3] {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 30px;\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 30px;\r\n    background-color: #eee;\r\n    text-align: center;\r\n    color: #666;\r\n    font-size: 14px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area[data-v-7ae02ef3]:hover {\r\n    cursor: pointer;\r\n    border-color: rgba(0, 0, 0, 0.1);\r\n    background-color: rgba(0, 0, 0, 0.05);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop[data-v-7ae02ef3] {\r\n    overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left[data-v-7ae02ef3] {\r\n    float: left;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container[data-v-7ae02ef3] {\r\n    position: relative;\r\n    display: block;\r\n    width: 240px;\r\n    height: 180px;\r\n    background-color: #e5e5e0;\r\n    overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img[data-v-7ae02ef3] {\r\n    position: absolute;\r\n    display: block;\r\n    cursor: move;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade[data-v-7ae02ef3] {\r\n    -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n    position: absolute;\r\n    background-color: rgba(241, 242, 243, 0.8);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-1[data-v-7ae02ef3] {\r\n    top: 0;\r\n    left: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-2[data-v-7ae02ef3] {\r\n    bottom: 0;\r\n    right: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range[data-v-7ae02ef3] {\r\n    position: relative;\r\n    margin: 30px 0;\r\n    width: 240px;\r\n    height: 18px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5[data-v-7ae02ef3],\r\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6[data-v-7ae02ef3] {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 18px;\r\n    height: 18px;\r\n    border-radius: 100%;\r\n    background-color: rgba(0, 0, 0, 0.08);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5[data-v-7ae02ef3]:hover,\r\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6[data-v-7ae02ef3]:hover {\r\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n    cursor: pointer;\r\n    background-color: rgba(0, 0, 0, 0.14);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5[data-v-7ae02ef3] {\r\n    left: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5[data-v-7ae02ef3]::before {\r\n    position: absolute;\r\n    content: '';\r\n    display: block;\r\n    left: 3px;\r\n    top: 8px;\r\n    width: 12px;\r\n    height: 2px;\r\n    background-color: #fff;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6[data-v-7ae02ef3] {\r\n    right: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6[data-v-7ae02ef3]::before {\r\n    position: absolute;\r\n    content: '';\r\n    display: block;\r\n    left: 3px;\r\n    top: 8px;\r\n    width: 12px;\r\n    height: 2px;\r\n    background-color: #fff;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6[data-v-7ae02ef3]::after {\r\n    position: absolute;\r\n    content: '';\r\n    display: block;\r\n    top: 3px;\r\n    left: 8px;\r\n    width: 2px;\r\n    height: 12px;\r\n    background-color: #fff;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3] {\r\n    display: block;\r\n    padding-top: 5px;\r\n    margin: 0 auto;\r\n    width: 180px;\r\n    height: 8px;\r\n    vertical-align: top;\r\n    background: transparent;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    cursor: pointer;\r\n    /* 滑块\r\n                     ---------------------------------------------------------------*/\r\n    /* 轨道\r\n                     ---------------------------------------------------------------*/\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]:focus {\r\n    outline: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]::-webkit-slider-thumb {\r\n    -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    margin-top: -3px;\r\n    width: 12px;\r\n    height: 12px;\r\n    background-color: #61c091;\r\n    border-radius: 100%;\r\n    border: none;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]::-moz-range-thumb {\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    width: 12px;\r\n    height: 12px;\r\n    background-color: #61c091;\r\n    border-radius: 100%;\r\n    border: none;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]::-ms-thumb {\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n    appearance: none;\r\n    width: 12px;\r\n    height: 12px;\r\n    background-color: #61c091;\r\n    border: none;\r\n    border-radius: 100%;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]:active::-moz-range-thumb {\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    width: 14px;\r\n    height: 14px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]:active::-ms-thumb {\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    width: 14px;\r\n    height: 14px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]:active::-webkit-slider-thumb {\r\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    margin-top: -4px;\r\n    width: 14px;\r\n    height: 14px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]::-webkit-slider-runnable-track {\r\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n    width: 100%;\r\n    height: 6px;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n    border: none;\r\n    background-color: rgba(68, 170, 119, 0.3);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]::-moz-range-track {\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n    width: 100%;\r\n    height: 6px;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n    border: none;\r\n    background-color: rgba(68, 170, 119, 0.3);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]::-ms-track {\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border-color: transparent;\r\n    color: transparent;\r\n    height: 6px;\r\n    border-radius: 2px;\r\n    border: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]::-ms-fill-lower {\r\n    background-color: rgba(68, 170, 119, 0.3);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]::-ms-fill-upper {\r\n    background-color: rgba(68, 170, 119, 0.15);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]:focus::-webkit-slider-runnable-track {\r\n    background-color: rgba(68, 170, 119, 0.5);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]:focus::-moz-range-track {\r\n    background-color: rgba(68, 170, 119, 0.5);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]:focus::-ms-fill-lower {\r\n    background-color: rgba(68, 170, 119, 0.45);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range][data-v-7ae02ef3]:focus::-ms-fill-upper {\r\n    background-color: rgba(68, 170, 119, 0.25);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right[data-v-7ae02ef3] {\r\n    float: right;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview[data-v-7ae02ef3] {\r\n    height: 150px;\r\n    overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item[data-v-7ae02ef3] {\r\n    position: relative;\r\n    padding: 5px;\r\n    width: 100px;\r\n    height: 100px;\r\n    float: left;\r\n    margin-right: 16px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item span[data-v-7ae02ef3] {\r\n    position: absolute;\r\n    bottom: -30px;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    color: #bbb;\r\n    display: block;\r\n    text-align: center;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item img[data-v-7ae02ef3] {\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    padding: 3px;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    overflow: hidden;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item[data-v-7ae02ef3]:last-child {\r\n    margin-right: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item:last-child img[data-v-7ae02ef3] {\r\n    border-radius: 100%;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload[data-v-7ae02ef3] {\r\n    position: relative;\r\n    padding: 35px;\r\n    height: 200px;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    text-align: center;\r\n    border: 1px dashed #ddd;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-loading[data-v-7ae02ef3] {\r\n    display: block;\r\n    padding: 15px;\r\n    font-size: 16px;\r\n    color: #999;\r\n    line-height: 30px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap[data-v-7ae02ef3] {\r\n    margin-top: 12px;\r\n    background-color: rgba(0, 0, 0, 0.08);\r\n    border-radius: 3px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress[data-v-7ae02ef3] {\r\n    position: relative;\r\n    display: block;\r\n    height: 5px;\r\n    border-radius: 3px;\r\n    background-color: #4a7;\r\n    -webkit-box-shadow: 0 2px 6px 0 rgba(68, 170, 119, 0.3);\r\n    box-shadow: 0 2px 6px 0 rgba(68, 170, 119, 0.3);\r\n    -webkit-transition: width 0.15s linear;\r\n    transition: width 0.15s linear;\r\n    background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\r\n    background-size: 40px 40px;\r\n    -webkit-animation: vicp_progress-data-v-7ae02ef3 0.5s linear infinite;\r\n    animation: vicp_progress-data-v-7ae02ef3 0.5s linear infinite;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress[data-v-7ae02ef3]::after {\r\n    content: '';\r\n    position: absolute;\r\n    display: block;\r\n    top: -3px;\r\n    right: -3px;\r\n    width: 9px;\r\n    height: 9px;\r\n    border: 1px solid rgba(245, 246, 247, 0.7);\r\n    -webkit-box-shadow: 0 1px 4px 0 rgba(68, 170, 119, 0.7);\r\n    box-shadow: 0 1px 4px 0 rgba(68, 170, 119, 0.7);\r\n    border-radius: 100%;\r\n    background-color: #4a7;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-error[data-v-7ae02ef3],\r\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-success[data-v-7ae02ef3] {\r\n    height: 100px;\r\n    line-height: 100px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-operate[data-v-7ae02ef3] {\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: 20px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-operate a[data-v-7ae02ef3] {\r\n    position: relative;\r\n    float: left;\r\n    display: block;\r\n    margin-left: 10px;\r\n    width: 100px;\r\n    height: 36px;\r\n    line-height: 36px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    color: #4a7;\r\n    border-radius: 2px;\r\n    overflow: hidden;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-operate a[data-v-7ae02ef3]:hover {\r\n    background-color: rgba(0, 0, 0, 0.03);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-error[data-v-7ae02ef3],\r\n.vue-image-crop-upload .vicp-wrap .vicp-success[data-v-7ae02ef3] {\r\n    display: block;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    height: 24px;\r\n    color: #d10;\r\n    text-align: center;\r\n    vertical-align: top;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-success[data-v-7ae02ef3] {\r\n    color: #4a7;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon3[data-v-7ae02ef3] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    top: 4px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon3[data-v-7ae02ef3]::after {\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 6px;\r\n    width: 6px;\r\n    height: 10px;\r\n    border-width: 0 2px 2px 0;\r\n    border-color: #4a7;\r\n    border-style: solid;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    content: '';\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon2[data-v-7ae02ef3] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    top: 4px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon2[data-v-7ae02ef3]::after, .vue-image-crop-upload .vicp-wrap .vicp-icon2[data-v-7ae02ef3]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 9px;\r\n    left: 4px;\r\n    width: 13px;\r\n    height: 2px;\r\n    background-color: #d10;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon2[data-v-7ae02ef3]::after {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\n}\n.e-ripple[data-v-7ae02ef3] {\r\n    position: absolute;\r\n    border-radius: 100%;\r\n    background-color: rgba(0, 0, 0, 0.15);\r\n    background-clip: padding-box;\r\n    pointer-events: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    opacity: 1;\n}\n.e-ripple.z-active[data-v-7ae02ef3] {\r\n    opacity: 0;\r\n    -webkit-transform: scale(2);\r\n    transform: scale(2);\r\n    -webkit-transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;\n}\n",""])},Hqvx:function(e,r,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.avatar[data-v-07adf78b]{\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n}\n",""])},Oakg:function(e,r,a){"use strict";var i=a("fZjL"),n=a.n(i),t=a("pFYg"),p=a.n(t),o=a("woOf"),c=a.n(o);var s=a("vLgD"),v={zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},en:{hint:"Click, or drag the file here",loading:"Uploading……",noSupported:"Browser does not support, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"The lowest pixel in the image: "}}},d="image/jpeg",l={props:{field:{type:String,default:"avatar"},url:{type:String,default:""},params:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noCircle:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"}},data:function(){var e=this.langType,r=this.width,a=this.height,i=!0,n=v[e]?v[e]:n.zh;return"function"!=typeof FormData&&(i=!1),{show:!0,mime:d,lang:n,isSupported:i,step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:r/a,sourceImg:null,sourceImgUrl:"",createImgUrl:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:180},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){return{width:this.progress+"%"}},sourceImgStyle:function(){var e=this.scale,r=this.sourceImgMasking;return{top:e.y+r.y+"px",left:e.x+r.x+"px",width:e.width+"px",height:e.height+"px"}},sourceImgMasking:function(){var e=this.width,r=this.height,a=this.ratio,i=this.sourceImgContainer,n=i.width/i.height,t=0,p=0,o=i.width,c=i.height,s=1;return a<n&&(s=i.height/r,o=i.height*a,t=(i.width-o)/2),a>n&&(s=i.width/e,c=i.width/a,p=(i.height-c)/2),{scale:s,x:t,y:p,width:o,height:c}},sourceImgShadeStyle:function(){var e=this.sourceImgContainer,r=this.sourceImgMasking;return{width:(r.width==e.width?r.width:(e.width-r.width)/2)+"px",height:(r.height==e.height?r.height:(e.height-r.height)/2)+"px"}},previewStyle:function(){this.width,this.height;var e=this.ratio,r=this.previewContainer,a=r.width,i=r.height,n=a/i;return e<n&&(a=r.height*e),e>n&&(i=r.width/e),{width:a+"px",height:i+"px"}}},methods:{ripple:function(e){!function(e,r){var a=c()({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},r),i=a.ele;if(i){var n=i.getBoundingClientRect(),t=i.querySelector(".e-ripple");switch(t?t.className="e-ripple":((t=document.createElement("span")).className="e-ripple",t.style.height=t.style.width=Math.max(n.width,n.height)+"px",i.appendChild(t)),a.type){case"center":t.style.top=n.height/2-t.offsetHeight/2+"px",t.style.left=n.width/2-t.offsetWidth/2+"px";break;default:t.style.top=e.pageY-n.top-t.offsetHeight/2-document.body.scrollTop+"px",t.style.left=e.pageX-n.left-t.offsetWidth/2-document.body.scrollLeft+"px"}t.style.backgroundColor=a.bgc,t.className="e-ripple z-active"}}(e)},off:function(){this.show=!1,this.$emit("close")},setStep:function(e){var r=this;setTimeout(function(){r.step=e},200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var r=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(r[0])&&this.setSourceImg(r[0])}},checkFile:function(e){var r=this.lang,a=this.maxSize;return-1===e.type.indexOf("image")?(this.hasError=!0,this.errorMsg=r.error.onlyImg,!1):(this.mime=e.type,!(e.size/1024>a)||(this.hasError=!0,this.errorMsg=r.error.outOfSize+a+"kb",!1))},reset:function(){this.step=1,this.loading=0,this.hasError=!1,this.errorMsg="",this.progress=0},setSourceImg:function(e){var r=this,a=new FileReader;a.onload=function(e){r.sourceImgUrl=a.result,r.startCrop()},a.readAsDataURL(e)},startCrop:function(){var e=this,r=(e.width,e.height,e.ratio),a=e.scale,i=e.sourceImgUrl,n=e.sourceImgMasking,t=(e.lang,n),p=new Image;p.src=i,p.onload=function(){var i=p.naturalWidth,n=p.naturalHeight,o=i/n,c=t.width,s=t.height,v=0,d=0;r>o&&(s=c/o,d=(t.height-s)/2),r<o&&(c=s*o,v=(t.width-c)/2),a.range=0,a.x=v,a.y=d,a.width=c,a.height=s,a.minWidth=c,a.minHeight=s,a.maxWidth=i*t.scale,a.maxHeight=n*t.scale,a.naturalWidth=i,a.naturalHeight=n,e.sourceImg=p,e.createImg(),e.setStep(2)}},imgStartMove:function(e){var r=this.sourceImgMouseDown,a=this.scale,i=r;i.mX=e.screenX,i.mY=e.screenY,i.x=a.x,i.y=a.y,i.on=!0},imgMove:function(e){var r=this.sourceImgMouseDown,a=r.on,i=r.mX,n=r.mY,t=r.x,p=r.y,o=this.scale,c=this.sourceImgMasking,s=t+(e.screenX-i),v=p+(e.screenY-n);a&&(s>0&&(s=0),v>0&&(v=0),s<c.width-o.width&&(s=c.width-o.width),v<c.height-o.height&&(v=c.height-o.height),o.x=s,o.y=v)},startZoomAdd:function(e){var r=this,a=r.scale;a.zoomAddOn=!0,function e(){if(a.zoomAddOn){var i=a.range>=100?100:++a.range;r.zoomImg(i),setTimeout(function(){e()},60)}}()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){var r=this,a=r.scale;a.zoomSubOn=!0,function e(){if(a.zoomSubOn){var i=a.range<=0?0:--a.range;r.zoomImg(i),setTimeout(function(){e()},60)}}()},endZoomSub:function(e){this.scale.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var r=this,a=this.sourceImgMasking,i=(this.sourceImgMouseDown,this.scale),n=i.maxWidth,t=i.maxHeight,p=i.minWidth,o=i.minHeight,c=i.width,s=i.height,v=i.x,d=i.y,l=(i.range,a),g=l.width,u=l.height,h=p+(n-p)*e/100,m=o+(t-o)*e/100,f=g/2-h/c*(g/2-v),w=u/2-m/s*(u/2-d);f>0&&(f=0),w>0&&(w=0),f<g-h&&(f=g-h),w<u-m&&(w=u-m),i.x=f,i.y=w,i.width=h,i.height=m,i.range=e,setTimeout(function(){i.range==e&&r.createImg()},300)},createImg:function(e){var r=this.mime,a=this.sourceImg,i=this.scale,n=i.x,t=i.y,p=i.width,o=i.height,c=this.sourceImgMasking.scale,s=this.$refs.canvas,v=s.getContext("2d");e&&(this.sourceImgMouseDown.on=!1),v.drawImage(a,n/c,t/c,p/c,o/c),this.createImgUrl=s.toDataURL(r)},upload:function(){var e=this,r=this.lang,a=this.imgFormat,i=this.mime,t=this.url,o=this.params,c=(this.headers,this.field),v=this.ki,d=this.createImgUrl,l=new FormData;a=i.split("/")[1],l.append(c,function(e,r){e=e.split(",")[1],e=window.atob(e);for(var a=new Uint8Array(e.length),i=0;i<e.length;i++)a[i]=e.charCodeAt(i);return new Blob([a],{type:r})}(d,i),c+"."+a),"object"==(void 0===o?"undefined":p()(o))&&o&&n()(o).forEach(function(e){l.append(e,o[e])}),e.reset(),e.loading=1,e.setStep(3),e.$emit("crop-success",d,c,v),Object(s.a)({url:t,method:"post",data:l}).then(function(r){e.loading=2,e.$emit("crop-upload-success",r.data)}).catch(function(a){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=r.fail,e.$emit("crop-upload-fail",a,c,v))})}}},g={render:function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"vue-image-crop-upload"},[a("div",{staticClass:"vicp-wrap"},[a("div",{staticClass:"vicp-close",on:{click:e.off}},[a("i",{staticClass:"vicp-icon4"})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[a("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[a("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[a("i",{staticClass:"vicp-icon1-arrow"}),e._v(" "),a("i",{staticClass:"vicp-icon1-body"}),e._v(" "),a("i",{staticClass:"vicp-icon1-bottom"})]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),e._v(" "),a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[a("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+"\n            ")]),e._v(" "),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),e._v(" "),2==e.step?a("div",{staticClass:"vicp-step2"},[a("div",{staticClass:"vicp-crop"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[a("div",{staticClass:"vicp-img-container"},[a("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),e._v(" "),a("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),e._v(" "),a("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),e._v(" "),a("div",{staticClass:"vicp-range"},[a("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{change:e.zoomChange}}),e._v(" "),a("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),e._v(" "),a("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[a("div",{staticClass:"vicp-preview"},[a("div",{staticClass:"vicp-preview-item"},[a("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),a("span",[e._v(e._s(e.lang.preview))])]),e._v(" "),a("div",{staticClass:"vicp-preview-item"},[e.noCircle?e._e():a("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),a("span",[e._v(e._s(e.lang.preview))])])])])]),e._v(" "),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:function(r){e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),a("a",{staticClass:"vicp-operate-btn",on:{click:e.upload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),e._v(" "),3==e.step?a("div",{staticClass:"vicp-step3"},[a("div",{staticClass:"vicp-upload"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),e._v(" "),a("div",{staticClass:"vicp-progress-wrap"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[a("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+"\n                ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[a("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+"\n                ")])]),e._v(" "),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:function(r){e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),a("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),e._v(" "),a("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},staticRenderFns:[]};var u=a("VU/8")(l,g,!1,function(e){a("rIAj")},"data-v-7ae02ef3",null);r.a=u.exports},rIAj:function(e,r,a){var i=a("91u8");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("26b70613",i,!0)}});