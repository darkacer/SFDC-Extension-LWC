!function(e){function t(t){for(var o,a,n=t[0],l=t[1],c=t[2],u=0,h=[];u<n.length;u++)a=n[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);h.length;)h.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],o=!0,n=1;n<s.length;n++){var l=s[n];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=s[0]))}return e}var o={},r={1:0},i=[];function a(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.e=function(e){var t=[],s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,o){s=r[e]=[t,o]}));t.push(s[2]=o);var i,n=document.createElement("script");n.charset="utf-8",n.timeout=120,a.nc&&n.setAttribute("nonce",a.nc),n.src=function(e){return a.p+""+e+".app.js"}(e);var l=new Error;i=function(t){n.onerror=n.onload=null,clearTimeout(c);var s=r[e];if(0!==s){if(s){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,s[1](l)}r[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:n})}),12e4);n.onerror=n.onload=i,document.head.appendChild(n)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(s,o,function(t){return e[t]}.bind(null,o));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./",a.oe=function(e){throw console.error(e),e};var n=window.webpackJsonp=window.webpackJsonp||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=l;i.push([34,0,2]),s()}({34:function(e,t,s){e.exports=s(38)},38:function(e,t,s){"use strict";s.r(t);s(35);var o=s(0);var r=[function(e,t,s){return[".box",t," {position: absolute;left: 0;right: 0;top: 0;margin: auto;}\n"].join("")}];function i(e,t,s,r){const{d:i,h:a,fid:n,t:l,b:c}=e,{_m0:d}=r;return[a("div",{classMap:{box:!0},key:14},[a("div",{classMap:{"demo-only":!0},styleMap:{height:"4rem"},key:13},[a("div",{classMap:{"slds-notify_container":!0,"slds-is-relative":!0},key:12},[a("div",{className:t.theme,attrs:{role:"status"},key:11},[a("span",{classMap:{"slds-assistive-text":!0},key:0},[i(t.messageType)]),a("span",{className:t.iconClass,attrs:{title:"Description of icon when needed"},key:3},[a("svg",{classMap:{"slds-icon":!0,"slds-icon_small":!0},attrs:{"aria-hidden":"true"},key:2},[a("use",{attrs:{"xlink:href":Object(o.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href",n(t.buttonClass))},key:1},[])])]),a("div",{classMap:{"slds-notify__content":!0},key:5},[a("h2",{classMap:{"slds-text-heading_small":!0},key:4},[i(t.message)]),i(t.detail)]),a("div",{classMap:{"slds-notify__close":!0},key:10},[a("button",{classMap:{"slds-button":!0,"slds-button_icon":!0,"slds-button_icon-inverse":!0},attrs:{title:"Close"},key:9,on:{click:d||(r._m0=c(t.closeMessage))}},[a("svg",{classMap:{"slds-button__icon":!0,"slds-button__icon_large":!0},attrs:{"aria-hidden":"true"},key:7},[a("use",{attrs:{"xlink:href":Object(o.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href",n(t.closeButton))},key:6},[])]),a("span",{classMap:{"slds-assistive-text":!0},key:8},[l("Close")])])])])])])])]}var a=Object(o.registerTemplate)(i);i.stylesheets=[],r&&i.stylesheets.push.apply(i.stylesheets,r),i.stylesheetTokens={hostAttribute:"my-my-toastMessage_toastMessage-host",shadowAttribute:"my-my-toastMessage_toastMessage"};class n extends o.LightningElement{constructor(...e){super(...e),this.messageType="error",this.message="Your dev forgot to put message here",this.detail="your dev forgot to put details here"}connectedCallback(){setTimeout(()=>this.closeMessage(),1e4)}get iconClass(){return"slds-icon_container slds-icon-utility-"+this.messageType+" slds-m-right_small slds-no-flex slds-align-top"}get theme(){return"slds-notify slds-notify_toast slds-theme_"+this.messageType}get buttonClass(){return"SLDS/icons/utility-sprite/svg/symbols.svg#"+this.messageType}get closeButton(){return"SLDS/icons/utility-sprite/svg/symbols.svg#close"}closeMessage(){this.dispatchEvent(new CustomEvent("close"))}}Object(o.registerDecorators)(n,{publicProps:{messageType:{config:0},message:{config:0},detail:{config:0}}});var l=Object(o.registerComponent)(n,{tmpl:a});var c=[function(e,t,s){return[".green",t," {color: white;background-color: green;padding: 6px 5px;text-align: left;width: 400px;border-radius: 5px;border-color: black;border-style: solid;margin-top: 1px;}\n.white",t," {color: black;background-color: #e4f2f8;padding: 6px 5px;text-align: left;width: 400px;border-radius: 5px;border-color: black;border-style: solid;margin-top: 1px;}\n"].join("")}];function d(e,t,s,o){const{d:r,k:i,b:a,h:n,i:l,t:c,f:d}=e,{_m0:u}=o;return d([t.rows.length?l(t.rows,(function(e){return n("div",{className:e.class,attrs:{"data-index":e.index},key:i(0,e.index),on:{click:u||(o._m0=a(t.handleOrgSelect))}},[r(e.domain)])})):[],t.rows.length?null:c("You seem to be not connected to any of the SalesForce Orgs")])}var u=Object(o.registerTemplate)(d);d.stylesheets=[],c&&d.stylesheets.push.apply(d.stylesheets,c),d.stylesheetTokens={hostAttribute:"my-my-orgList_orgList-host",shadowAttribute:"my-my-orgList_orgList"};let h={sharedValue:0,sobjectList:[],idToOrgObj:{},selectIndex:0};const p=(e,t)=>{console.log("inside set"),h[e]=t},m=e=>(console.log("inside get"),h[e]),y="undefined"==typeof chrome?browser:chrome,g=e=>{y.cookies&&y.cookies.getAll({name:"sid"},e)},b=async(e,t,s)=>{let o,r="https://"+e+"/services/data/v49.0/"+t,i={async:!0,crossDomain:!0,method:"GET",headers:{authorization:"Bearer "+s}};try{o=await fetch(r,i)}catch(e){console.log("erroris ",e)}return o?o.json():null},f=e=>{let t={};for(let s in e)if("object"==typeof e[s]&&null!==e[s]){let o=f(e[s]);for(let e in o)t[s.toLowerCase()+"."+e.toLowerCase()]=o[e]}else t[s.toLowerCase()]=e[s];return t},v=e=>{return e=e.replace(/\s\s+/g," "),b(t?m("idToOrgObj")[t].domain:m("idToOrgObj")[m("selectIndex")].domain,"query/?q="+e,(e=>e?m("idToOrgObj")[e].value:m("idToOrgObj")[m("selectIndex")].value)());var t},k=()=>{let e=m("selectIndex"),t=m("idToOrgObj")[e];b(t.domain,"sobjects/",t.value).then(e=>{p("sobjectList",e.sobjects)})},O={size:1,queue:[],pushVal(e){for(let e=0;e<this.size;e++)this.queue[e]=this.queue[e+1];this.queue[this.size-1]=e}},j=()=>(void 0).selectmax<=1;class w extends o.LightningElement{constructor(...e){super(...e),this.rows=[],this.selectIndex=0,this.selectmax=1}connectedCallback(){let e=[],t={},s=0;g(o=>{o.forEach(o=>{console.log("elem => ",JSON.stringify(o)),new RegExp(".*salesforce.com").test(o.domain)&&(e.push({index:s,value:o.value,domain:o.domain,class:"white"}),t[s]={value:o.value,domain:o.domain},s++)}),p("idToOrgObj",t),this.rows=[...e],j&&(this.rows.length?(this.rows[0].class="green",p("selectIndex",0),O.pushVal(0)):p("selectIndex",-1),this.communicateOrgId())})}communicateOrgId(){const e=new CustomEvent("orgidset");this.dispatchEvent(e)}handleOrgSelect(e){let t=e.target.dataset.index;this.selectIndex=t,this.rows.forEach(e=>{e.class="white"}),this.rows[t].class="green",p("selectIndex",this.selectIndex),this.communicateOrgId()}newHandleOrgSelect(e){let t=e.target.dataset.index;O.pushVal(t),this.rows.forEach(e=>{e.class="white"}),O.queue.forEach(e=>{this.rows[e].class="green"}),j&&(p("selectIndex",t),this.communicateOrgId())}setOrg(e){let t=m("idToOrgObj")[e].value,s=m("idToOrgObj")[e].domain;b(s,"sobjects/",t).then(e=>{console.log("response =>",e.sobjects[0].name),p("sobjectList",e.sobjects)})}}Object(o.registerDecorators)(w,{publicProps:{selectmax:{config:0}},track:{rows:1},fields:["selectIndex"]});var _=Object(o.registerComponent)(w,{tmpl:u}),x=s(2),T=s.n(x),D=s(31),L=s(33);function C(e,t,s,o){const{}=e;return[]}var S=Object(o.registerTemplate)(C);C.stylesheets=[],T.a&&C.stylesheets.push.apply(C.stylesheets,T.a),C.stylesheetTokens={hostAttribute:"my-my-currentAction_currentAction-host",shadowAttribute:"my-my-currentAction_currentAction"};var M=s(32),A=s(9),q=s(18);var E=[function(e,t,s){return[".selected",t," {color: black;background-color: grey;}\n.output",t," {list-style: none;width: 100%;min-height: 0px;border-top: 0 !important;color: black;background-color: white;font-size: 0.75em;transition: min-height 0.2s;position: absolute;z-index: 5;}\n"].join("")}];function F(e,t,s,o){const{b:r,c:i,d:a,k:n,h:l,i:c}=e,{_m0:d,_m1:u,_m2:h,_m3:p,_m4:m}=o;return[i("lightning-input",A.a,{props:{label:t.inputLabel,value:t.inputStream,autocomplete:t.falsy},key:0,on:{keydown:d||(o._m0=r(t.handleKeyUp)),focus:u||(o._m1=r(t.focusOn)),blur:h||(o._m2=r(t.focusOffUI))}},[]),t.isFocused?l("div",{classMap:{output:!0},key:2},c(t.filterOptions,(function(e){return l("div",{className:e.selectedClass,attrs:{"data-value":e.value},key:n(1,e.value),on:{mousedown:p||(o._m3=r(t.handleSelect)),mouseover:m||(o._m4=r(t.mouseOver))}},[a(e.value)])}))):null]}var I=Object(o.registerTemplate)(F);F.stylesheets=[],E&&F.stylesheets.push.apply(F.stylesheets,E),F.stylesheetTokens={hostAttribute:"my-basecomp-dropDownFilter_dropDownFilter-host",shadowAttribute:"my-basecomp-dropDownFilter_dropDownFilter"};class B extends o.LightningElement{constructor(...e){super(...e),this.options=[],this.inputLabel="mylabel",this.maxSize=5,this.inputStream="",this.isFocused=!1,this.selectedIndex=0,this.falsy=!1,this.tempOptions=void 0,this.filterOptions=void 0}resetOptions(e){this.tempOptions=this.generateTempOpt([...e])}generateTempOpt(e){let t=0;return e.map(e=>({value:e,selectedClass:t++?"":"selected"}))}connectedCallback(){let e=0;this.tempOptions=this.generateTempOpt(this.options),this.filterOptions=this.tempOptions.filter(()=>e<this.maxSize&&(e++,!0))}focusOffUI(){this.isFocused=!1}focusOff(e){this.isFocused=!1,this.dispatchEvent(new CustomEvent("finalselect",{detail:{input:this.inputStream,append:e}}))}focusOn(){this.isFocused=!0}handleKeyUp(e){if(this.focusOn(),console.log("key pressed is = ",e.keyCode),13===e.keyCode)return this.inputStream=this.filterOptions[this.selectedIndex].value,void this.focusOff(!0);27===e.keyCode&&this.focusOff(!1),40!==e.keyCode&&38!==e.keyCode||e.preventDefault(),40!==e.keyCode&&38!==e.keyCode&&(this.selectedIndex=0),this.inputStream=e.target.value,console.log("input stream is ",this.inputStream),40===e.keyCode&&this.selectedIndex<this.filterOptions.length-1&&this.selectedIndex++,38===e.keyCode&&this.selectedIndex&&this.selectedIndex--;let t=0;this.filterOptions=[],this.filterOptions=this.tempOptions.filter(e=>!!(t<this.maxSize&&e.value.toLowerCase().includes(this.inputStream.toLowerCase()))&&(t++,!0)),t=0,this.filterOptions=this.filterOptions.map(e=>(e.selectedClass=this.selectedIndex===t++?"selected":"",e))}handleSelect(e){this.inputStream=e.currentTarget.dataset.value}mouseOver(e){console.log("mouse over"+e.currentTarget.dataset.value)}}Object(o.registerDecorators)(B,{publicProps:{options:{config:0},inputLabel:{config:0},maxSize:{config:0}},publicMethods:["resetOptions"],track:{tempOptions:1,filterOptions:1},fields:["inputStream","isFocused","selectedIndex","falsy"]});var Q=Object(o.registerComponent)(B,{tmpl:I}),z=s(29);function N(e,t,s,o){const{b:r,c:i}=e,{_m0:a}=o;return[t.tempdata.length?i("lightning-datatable",z.a,{props:{columns:t.tempColumns,keyField:"id",data:t.tempdata,hideCheckboxColumn:!0,defaultSortDirection:t.defaultSortDirection,sortedDirection:t.sortDirection,sortedBy:t.sortedBy},key:0,on:{sort:a||(o._m0=r(t.onHandleSort))}},[]):null]}var P=Object(o.registerTemplate)(N);N.stylesheets=[],T.a&&N.stylesheets.push.apply(N.stylesheets,T.a),N.stylesheetTokens={hostAttribute:"my-basecomp-datatableWrapper_datatableWrapper-host",shadowAttribute:"my-basecomp-datatableWrapper_datatableWrapper"};let J=new Set;class K extends o.LightningElement{constructor(...e){super(...e),this.fullData=[],this.tempdata=[],this.columns=[],this.defaultSortDirection="asc",this.sortDirection="asc",this.sortedBy=void 0}connectedCallback(){console.log("fulldata ",JSON.stringify(this.fullData)),this.processData()}updateData(e){this.fullData=[...e],this.processData()}clearTable(){this.fullData=[],this.processData(),J.clear()}get tempColumns(){return this.columns.map(e=>({label:e,fieldName:e}))}processData(){this.fullData.length?(this.fullData=this.fullData.map(e=>f(e)).map(e=>this.removeAttributes(e)),this.tempdata=[...this.fullData],console.log("this.tempdata",this.tempdata)):this.tempdata=[]}removeAttributes(e){let t={};for(const s in e)s.includes("attributes")||(t[s]=e[s],J.add(s));return this.columns=[...J],t}sortBy(e,t,s){const o=s?function(t){return s(t[e])}:function(t){return t[e]};return function(e,s){return e=o(e),s=o(s),t*((e>s)-(s>e))}}onHandleSort(e){const{fieldName:t,sortDirection:s}=e.detail,o=[...this.tempdata];o.sort(this.sortBy(t,"asc"===s?1:-1)),this.tempdata=o,this.sortDirection=s,this.sortedBy=t}}Object(o.registerDecorators)(K,{publicProps:{fullData:{config:0}},publicMethods:["updateData","clearTable"],track:{tempdata:1,columns:1},fields:["defaultSortDirection","sortDirection","sortedBy"]});var R=Object(o.registerComponent)(K,{tmpl:P});function V(e,t,s,o){const{b:r,c:i,h:a,t:n,gid:l,d:c}=e,{_m0:d,_m1:u,_m2:h,_m3:p,_m4:m,_m5:y,_m6:g}=o;return[a("div",{classMap:{"slds-grid":!0,"slds-gutters":!0},key:15},[a("div",{classMap:{"slds-col":!0,"slds-size_2-of-3":!0},key:6},[a("div",{classMap:{"slds-form-element":!0},key:4},[a("span",{classMap:{"slds-form-element__control":!0},key:1},[i("lightning-textarea",M.a,{attrs:{"data-name":"query"},props:{name:"Query Caller",value:t.query,placeholder:"Your Query Here",label:"SOQL Query"},key:0,on:{change:d||(o._m0=r(t.handleChange))}},[])]),a("div",{classMap:{"slds-form-element__control":!0},key:3},[i("lightning-input",A.a,{attrs:{"data-name":"tooling"},props:{type:"checkbox",value:t.toolingQuery,label:"Tooling API"},key:2,on:{change:u||(o._m1=r(t.handleChange))}},[])])]),i("lightning-button",q.a,{props:{label:"Query!",disabled:t.isQueryButtonDisabled,variant:"brand"},key:5,on:{click:h||(o._m2=r(t.fireQuery))}},[])]),a("div",{classMap:{"slds-col":!0,"slds-size_1-of-3":!0},key:14},[i("lightning-button",q.a,{props:{label:"Refresh MetaData",title:"Gets fresh sObject data from selected Org"},key:7,on:{click:p||(o._m3=r(t.getMetaData))}},[]),t.isMetaDataVisible?i("basecomp-drop-down-filter",Q,{props:{options:t.sobjectListFormat,maxSize:"30",inputLabel:"SObject Name"},key:8,on:{finalselect:m||(o._m4=r(t.onobjectselect))}},[]):null,t.sObjectFieldList.length?i("basecomp-drop-down-filter",Q,{props:{options:t.sObjectFieldList,maxSize:"30",inputLabel:"Field Name"},key:9,on:{finalselect:y||(o._m5=r(t.onFieldSelect))}},[]):null,t.showKey?a("label",{classMap:{"slds-form-element__label":!0},attrs:{for:""+l("input-id-02")},key:10},[n("Key:")]):null,t.showKey?a("div",{classMap:{"slds-form-element__control":!0},key:13},[a("input",{classMap:{"slds-input":!0},attrs:{id:l("input-id-02"),type:"text",placeholder:"Comma Separated Column names","data-name":"key"},props:{value:t.key},key:11,on:{change:g||(o._m6=r(t.handleChange))}},[]),i("lightning-input",A.a,{props:{type:"text",label:"Add salami",value:"this is dummy"},key:12},[])]):null])]),t.records.length?n("ji "):null,t.records.length?c(t.records.length):null,t.records.length?i("basecomp-datatable-wrapper",R,{props:{fullData:t.records},key:16},[]):null]}var H=Object(o.registerTemplate)(V);V.stylesheets=[],T.a&&V.stylesheets.push.apply(V.stylesheets,T.a),V.stylesheetTokens={hostAttribute:"my-my-queryBox_queryBox-host",shadowAttribute:"my-my-queryBox_queryBox"};var W=s(17),Y=s.n(W);class U extends o.LightningElement{constructor(...e){super(...e),this.query="",this.key="",this.toolingQuery=!1,this.isQueryButtonDisabled=!1,this.showKey=!1,this.records=[],this.sobjectListFormat=void 0,this.sObjectFieldList=[]}get isMetaDataVisible(){return this.sobjectListFormat&&this.sobjectListFormat.length}getMetaData(){k(),this.getsobjectListFormat(),this.resetDropDown(this.sobjectListFormat,0)}resetDropDown(e,t){let s=this.template.querySelectorAll("basecomp-drop-down-filter")[t];s&&s.resetOptions(e)}fireQuery(){v(this.query).then(e=>{console.log("query response is ",e);let t=this.template.querySelectorAll("basecomp-datatable-wrapper")[0];t&&t.clearTable(),e.done&&e.totalSize?(this.records=[...e.records],this.records=[...this.records],console.log("this recprds",JSON.stringify(this.records)),t&&t.updateData(this.records)):e.records&&!e.totalSize?Y.a.publish("customException",{message:"Try a different Where Clause",type:"error",details:"No Rows present for the given query"}):Y.a.publish("customException",{message:"Something is wrong with the query "+e[0].errorCode,type:"error",details:e[0].message}),this.isQueryButtonDisabled=!1}),this.isQueryButtonDisabled=!0}handleChange(e){switch(e.currentTarget.dataset.name){case"query":this.query=e.target.value;break;case"tooling":this.toolingQuery=!this.toolingQuery;break;case"key":this.key=e.target.value}}handleClick(){console.log("you clicked! ")}onobjectselect(e){console.log("u chose ",e.detail),e.detail.input&&(e=>{let t=m("selectIndex"),s=m("idToOrgObj")[t];return b(s.domain,"sobjects/"+e+"/describe",s.value)})(e.detail.input.split(" - ")[1]).then(e=>{let t=e.fields;this.sObjectFieldList=[...t.map(e=>e.label+" - "+e.name)],this.resetDropDown(this.sObjectFieldList,1)}),e.detail.append&&this.appendToQuery(e.detail.input)}onFieldSelect(e){console.log(e.detail),e.detail.append&&this.appendToQuery(e.detail.input)}getsobjectListFormat(){let e=m("sobjectList");e=e.map(e=>e.label+" - "+e.name),this.sobjectListFormat=[...e]}appendToQuery(e){this.query+=e.split(" - ")[1]+" "}}Object(o.registerDecorators)(U,{publicProps:{showKey:{config:0}},track:{records:1,sobjectListFormat:1,sObjectFieldList:1},fields:["query","key","toolingQuery","isQueryButtonDisabled"]});var G=Object(o.registerComponent)(U,{tmpl:H});function X(e,t,s,o){const{b:r,c:i,h:a}=e,{_m0:n}=o;return[a("div",{styleMap:{padding:"1%"},key:1},[i("my-query-box",G,{props:{showKey:t.falsy},key:0,on:{queryfire:n||(o._m0=r(t.handleResponse))}},[])])]}var Z=Object(o.registerTemplate)(X);function $(e,t,s,o){const{t:r,h:i}=e;return[i("div",{styleMap:{padding:"1%"},key:0},[r("hi im object details newer!")])]}X.stylesheets=[],T.a&&X.stylesheets.push.apply(X.stylesheets,T.a),X.stylesheetTokens={hostAttribute:"my-my-currentAction_queryMaker-host",shadowAttribute:"my-my-currentAction_queryMaker"};var ee=Object(o.registerTemplate)($);function te(e,t,s,o){const{t:r,h:i}=e;return[i("div",{styleMap:{padding:"1%"},key:0},[r("hi im record detail")])]}$.stylesheets=[],T.a&&$.stylesheets.push.apply($.stylesheets,T.a),$.stylesheetTokens={hostAttribute:"my-my-currentAction_objectDetail-host",shadowAttribute:"my-my-currentAction_objectDetail"};var se=Object(o.registerTemplate)(te);te.stylesheets=[],T.a&&te.stylesheets.push.apply(te.stylesheets,T.a),te.stylesheetTokens={hostAttribute:"my-my-currentAction_recordDetail-host",shadowAttribute:"my-my-currentAction_recordDetail"};var oe=[function(e,t,s){return[".slds-dueling-list",t," {background-color: black;color: white;}\n"].join("")}],re=s(30);function ie(e,t,s,o){const{b:r,c:i,t:a,d:n,h:l}=e,{_m0:c}=o;return[i("lightning-dual-listbox",re.a,{props:{name:"Org List",label:"Select Two Orgs",sourceLabel:"Available",selectedLabel:"Selected",fieldLevelHelp:"Select your preferred Orgs",options:t.options,max:"2"},key:0,on:{change:c||(o._m0=r(t.handleChange))}},[]),l("div",{classMap:{"slds-box":!0},key:2},[l("p",{key:1},[a("Selected orgs are: "),n(t.selected)])]),t.areTwoSelected?a("you selected 2!!!!!!!!!!!!!!!!!!!!!"):null]}var ae=Object(o.registerTemplate)(ie);ie.stylesheets=[],oe&&ie.stylesheets.push.apply(ie.stylesheets,oe),ie.stylesheetTokens={hostAttribute:"my-my-dualOrgSelect_dualOrgSelect-host",shadowAttribute:"my-my-dualOrgSelect_dualOrgSelect"};class ne extends o.LightningElement{constructor(...e){super(...e),this._selected=[],this.orgList=[]}connectedCallback(){let e=0;g(t=>{t.forEach(t=>{console.log("elem => ",JSON.stringify(t)),new RegExp(".*salesforce.com").test(t.domain)&&(this.orgList.push({index:e,value:t.value,domain:t.domain}),e++)}),console.log("orgList ",JSON.stringify(this.orgList)),this.orgList.length>=2&&Y.a.publish("customException",{message:"You are signed in to 2 or more orgs",type:"success",details:"Select your orgs from the multi-select picklist"})})}renderedCallback(){console.log("no of orgs ",this.orgList.length),this.orgList.length<2&&Y.a.publish("customException",{message:"Not signed in to enough orgs",type:"error",details:"You need atleast two orgs to use this function"})}get options(){return this.orgList.map(e=>({label:e.domain,value:JSON.stringify(e)}))}get selected(){return this._selected.length?this._selected:"none"}get areTwoSelected(){return 2===this._selected.length}handleChange(e){this._selected=e.detail.value}}Object(o.registerDecorators)(ne,{track:{orgList:1},fields:["_selected"]});var le=Object(o.registerComponent)(ne,{tmpl:ae});function ce(e,t,s,o){const{c:r,h:i}=e;return[i("div",{styleMap:{padding:"1%"},key:2},[r("my-dual-org-select",le,{key:0},[]),r("my-query-box",G,{props:{showKey:t.truthy},key:1},[])])]}var de=Object(o.registerTemplate)(ce);ce.stylesheets=[],T.a&&ce.stylesheets.push.apply(ce.stylesheets,T.a),ce.stylesheetTokens={hostAttribute:"my-my-currentAction_compareMetaData-host",shadowAttribute:"my-my-currentAction_compareMetaData"};class ue extends o.LightningElement{constructor(...e){super(...e),this.pageType="",this.sobjectList=[],this.records=[],this.truthy=!0,this.falsy=!1}get sobjectNames(){return this.sobjectList.map(e=>Object.assign({},e,{value:e.label+"-"+e.name}))}render(){switch(this.pageType){case"queryMaker":return Z;case"objectDetail":return ee;case"recordDetail":return se;case"compareMetaData":return de;default:return""}}connectedCallback(){this.getSobjectList()}getSobjectList(){console.log("inside get sobjectlist"),this.sobjectList=m("sobjectList");for(let e=0;e<10;e++)console.log(JSON.stringify(this.sobjectList[e]))}onobjectselect(e){console.log("you selected = ",e.detail)}handleResponse(e){this.records=[],console.log("inside handle response "+e.detail.records),this.records=[...e.detail.records]}}Object(o.registerDecorators)(ue,{publicProps:{pageType:{config:0}},track:{sobjectList:1,records:1},fields:["truthy","falsy"]});var he=Object(o.registerComponent)(ue,{tmpl:S});function pe(e,t,s,o){const{k:r,c:i,i:a}=e;return[i("lightning-tabset",D.a,{key:2},a(t.actions,(function(e){return i("lightning-tab",L.a,{props:{label:e.name},key:r(1,e.id)},[i("my-current-action",he,{props:{pageType:e.api},key:r(0,e.id)},[])])})))]}var me=Object(o.registerTemplate)(pe);pe.stylesheets=[],T.a&&pe.stylesheets.push.apply(pe.stylesheets,T.a),pe.stylesheetTokens={hostAttribute:"my-my-chooseComponentTab_chooseComponentTab-host",shadowAttribute:"my-my-chooseComponentTab_chooseComponentTab"};class ye extends o.LightningElement{constructor(...e){super(...e),this.actions=[{id:0,name:"Query Maker",api:"queryMaker"},{id:1,name:"Record Detail",api:"recordDetail"},{id:2,name:"Object Detail",api:"objectDetail"},{id:3,name:"Compare Metadata Detail",api:"compareMetaData"}]}}Object(o.registerDecorators)(ye,{track:{actions:1}});var ge=Object(o.registerComponent)(ye,{tmpl:me});function be(e,t,s,o){const{b:r,c:i,h:a}=e,{_m0:n,_m1:c}=o;return[a("div",{styleMap:{border:"1%"},key:3},[t.showToast?i("my-toast-message",l,{props:{detail:t.toastDetails,message:t.toastMessage,messageType:t.toastMessageType},key:0,on:{close:n||(o._m0=r(t.closeToast))}},[]):null,i("my-org-list",_,{props:{selectmax:"1"},key:1,on:{orgidset:c||(o._m1=r(t.handleOrgChange))}},[]),t.showBody?i("my-choose-component-tab",ge,{key:2},[]):null])]}var fe=Object(o.registerTemplate)(be);be.stylesheets=[],be.stylesheetTokens={hostAttribute:"my-my-app_app-host",shadowAttribute:"my-my-app_app"};class ve extends o.LightningElement{constructor(...e){super(...e),this.showToast=!1,this.toastMessage="",this.toastDetails="",this.toastMessageType="error",this.showBody=!1,this.deletemeLater=["jazz1","rock2","song3","sfdc4","superman5","joker6","rust7"]}handleOrgChange(){-1!==m("selectIndex")&&(k(),this.showBody=!0)}connectedCallback(){Y.a.subscribe("customException",(e,t)=>{console.log(e,t.message,t.type,t.details,t),this.showToast=!0,this.toastMessage=t.message,this.toastDetails=t.details,this.toastMessageType=t.type})}showselected(e){console.log("u chose ",e.detail)}closeToast(){this.showToast=!1}}Object(o.registerDecorators)(ve,{fields:["showToast","toastMessage","toastDetails","toastMessageType","showBody","deletemeLater"]});var ke=Object(o.registerComponent)(ve,{tmpl:fe});const Oe=Object(o.createElement)("my-app",{is:ke});document.querySelector("#main").appendChild(Oe)}});