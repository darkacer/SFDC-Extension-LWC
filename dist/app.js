!function(e){function t(t){for(var o,a,n=t[0],l=t[1],c=t[2],u=0,h=[];u<n.length;u++)a=n[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);h.length;)h.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],o=!0,n=1;n<s.length;n++){var l=s[n];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=s[0]))}return e}var o={},r={1:0},i=[];function a(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.e=function(e){var t=[],s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,o){s=r[e]=[t,o]}));t.push(s[2]=o);var i,n=document.createElement("script");n.charset="utf-8",n.timeout=120,a.nc&&n.setAttribute("nonce",a.nc),n.src=function(e){return a.p+""+e+".app.js"}(e);var l=new Error;i=function(t){n.onerror=n.onload=null,clearTimeout(c);var s=r[e];if(0!==s){if(s){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,s[1](l)}r[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:n})}),12e4);n.onerror=n.onload=i,document.head.appendChild(n)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(s,o,function(t){return e[t]}.bind(null,o));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./",a.oe=function(e){throw console.error(e),e};var n=window.webpackJsonp=window.webpackJsonp||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=l;i.push([31,0,2]),s()}({31:function(e,t,s){e.exports=s(34)},34:function(e,t,s){"use strict";s.r(t);s(32);var o=s(0);var r=[function(e,t,s){return[".green",t,"{color:#fff;background-color:green}.green",t,",.white",t,"{padding:6px 5px;text-align:left;width:400px;border-radius:5px;border-color:#000;border-style:solid;margin-top:1px}.white",t,"{color:#000;background-color:#e4f2f8}"].join("")}];function i(e,t,s,o){const{d:r,k:i,b:a,h:n,i:l,t:c,f:d}=e,{_m0:u}=o;return d([t.rows.length?l(t.rows,(function(e){return n("div",{className:e.class,attrs:{"data-index":e.index},key:i(0,e.index),on:{click:u||(o._m0=a(t.handleOrgSelect))}},[r(e.domain)])})):[],t.rows.length?null:c("You seem to be not connected to any of the SalesForce Orgs")])}var a=Object(o.registerTemplate)(i);i.stylesheets=[],r&&i.stylesheets.push.apply(i.stylesheets,r),i.stylesheetTokens={hostAttribute:"my-orgList-_orgList-host",shadowAttribute:"my-orgList-_orgList"};let n={sharedValue:0,sobjectList:[],idToOrgObj:{},selectIndex:0};const l=(e,t)=>{console.log("inside set"),n[e]=t},c=e=>(console.log("inside get"),n[e]),d="undefined"==typeof chrome?browser:chrome,u=e=>{d.cookies&&d.cookies.getAll({name:"sid"},e)},h=async(e,t,s)=>{let o,r="https://"+e+"/services/data/v49.0/"+t,i={async:!0,crossDomain:!0,method:"GET",headers:{authorization:"Bearer "+s}};try{o=await fetch(r,i)}catch(e){console.log("erroris ",e)}return o?o.json():null},p=e=>{let t={};for(let s in e)if("object"==typeof e[s]&&null!==e[s]){let o=p(e[s]);for(let e in o)t[s.toLowerCase()+"."+e.toLowerCase()]=o[e]}else t[s.toLowerCase()]=e[s];return t},m=e=>{return e=e.replace(/\s\s+/g," "),h(t?c("idToOrgObj")[t].domain:c("idToOrgObj")[c("selectIndex")].domain,"query/?q="+e,(e=>e?c("idToOrgObj")[e].value:c("idToOrgObj")[c("selectIndex")].value)());var t},y=()=>{let e=c("selectIndex"),t=c("idToOrgObj")[e];h(t.domain,"sobjects/",t.value).then(e=>{l("sobjectList",e.sobjects)})},g={size:1,queue:[],pushVal(e){for(let e=0;e<this.size;e++)this.queue[e]=this.queue[e+1];this.queue[this.size-1]=e}},b=()=>(void 0).selectmax<=1;class f extends o.LightningElement{constructor(...e){super(...e),this.rows=[],this.selectIndex=0,this.selectmax=1}connectedCallback(){let e=[],t={},s=0;u(o=>{o.forEach(o=>{console.log("elem => ",JSON.stringify(o)),new RegExp(".*salesforce.com").test(o.domain)&&(e.push({index:s,value:o.value,domain:o.domain,class:"white"}),t[s]={value:o.value,domain:o.domain},s++)}),l("idToOrgObj",t),this.rows=[...e],b&&(this.rows.length?(this.rows[0].class="green",l("selectIndex",0),g.pushVal(0)):l("selectIndex",-1),this.communicateOrgId())})}communicateOrgId(){const e=new CustomEvent("orgidset");this.dispatchEvent(e)}handleOrgSelect(e){let t=e.target.dataset.index;this.selectIndex=t,this.rows.forEach(e=>{e.class="white"}),this.rows[t].class="green",l("selectIndex",this.selectIndex),this.communicateOrgId()}newHandleOrgSelect(e){let t=e.target.dataset.index;g.pushVal(t),this.rows.forEach(e=>{e.class="white"}),g.queue.forEach(e=>{this.rows[e].class="green"}),b&&(l("selectIndex",t),this.communicateOrgId())}setOrg(e){let t=c("idToOrgObj")[e].value,s=c("idToOrgObj")[e].domain;h(s,"sobjects/",t).then(e=>{console.log("response =>",e.sobjects[0].name),l("sobjectList",e.sobjects)})}}Object(o.registerDecorators)(f,{publicProps:{selectmax:{config:0}},track:{rows:1},fields:["selectIndex"]});var O=Object(o.registerComponent)(f,{tmpl:a}),k=s(2),v=s.n(k),j=s(29),w=s(30);function _(e,t,s,o){const{}=e;return[]}var x=Object(o.registerTemplate)(_);_.stylesheets=[],v.a&&_.stylesheets.push.apply(_.stylesheets,v.a),_.stylesheetTokens={hostAttribute:"my-currentAction-_currentAction-host",shadowAttribute:"my-currentAction-_currentAction"};var L=s(17);var D=[function(e,t,s){return[".selected",t,"{color:#000;background-color:grey}.output",t,"{list-style:none;width:100%;min-height:0;border-top:0!important;color:#000;background-color:#fff;font-size:.75em;transition:min-height .2s;position:absolute;z-index:5}"].join("")}],S=s(9);function T(e,t,s,o){const{b:r,c:i,d:a,k:n,h:l,i:c}=e,{_m0:d,_m1:u,_m2:h,_m3:p,_m4:m}=o;return[i("lightning-input",S.a,{props:{label:t.inputLabel,value:t.inputStream,ariaAutoComplete:"false"},key:0,on:{keydown:d||(o._m0=r(t.handleKeyUp)),focus:u||(o._m1=r(t.focusOn)),blur:h||(o._m2=r(t.focusOff))}},[]),t.isFocused?l("div",{classMap:{output:!0},key:2},c(t.filterOptions,(function(e){return l("div",{className:e.selectedClass,attrs:{"data-value":e.value},key:n(1,e.value),on:{mousedown:p||(o._m3=r(t.handleSelect)),mouseover:m||(o._m4=r(t.mouseOver))}},[a(e.value)])}))):null]}var C=Object(o.registerTemplate)(T);T.stylesheets=[],D&&T.stylesheets.push.apply(T.stylesheets,D),T.stylesheetTokens={hostAttribute:"basecomp-dropDownFilter-_dropDownFilter-host",shadowAttribute:"basecomp-dropDownFilter-_dropDownFilter"};class A extends o.LightningElement{constructor(...e){super(...e),this.options=[],this.inputLabel="mylabel",this.maxSize=5,this.inputStream="",this.isFocused=!1,this.selectedIndex=0,this.tempOptions=void 0,this.filterOptions=void 0}resetOptions(e){this.tempOptions=this.generateTempOpt([...e])}generateTempOpt(e){let t=0;return e.map(e=>({value:e,selectedClass:t++?"":"selected"}))}connectedCallback(){let e=0;this.tempOptions=this.generateTempOpt(this.options),this.filterOptions=this.tempOptions.filter(()=>e<this.maxSize&&(e++,!0))}focusOff(){this.isFocused=!1,this.dispatchEvent(new CustomEvent("finalselect",{detail:this.inputStream}))}focusOn(){this.isFocused=!0}handleKeyUp(e){if(this.focusOn(),console.log("key pressed is = ",e.keyCode),13===e.keyCode)return this.inputStream=this.filterOptions[this.selectedIndex].value,void this.focusOff();27===e.keyCode&&this.focusOff(),40!==e.keyCode&&38!==e.keyCode||e.preventDefault(),40!==e.keyCode&&38!==e.keyCode&&(this.selectedIndex=0),this.inputStream=e.target.value,console.log("input stream is ",this.inputStream),40===e.keyCode&&this.selectedIndex<this.filterOptions.length-1&&this.selectedIndex++,38===e.keyCode&&this.selectedIndex&&this.selectedIndex--;let t=0;this.filterOptions=[],this.filterOptions=this.tempOptions.filter(e=>!!(t<this.maxSize&&e.value.toLowerCase().includes(this.inputStream.toLowerCase()))&&(t++,!0)),t=0,this.filterOptions=this.filterOptions.map(e=>(e.selectedClass=this.selectedIndex===t++?"selected":"",e))}handleSelect(e){this.inputStream=e.currentTarget.dataset.value}mouseOver(e){console.log("mouse over"+e.currentTarget.dataset.value)}}Object(o.registerDecorators)(A,{publicProps:{options:{config:0},inputLabel:{config:0},maxSize:{config:0}},publicMethods:["resetOptions"],track:{tempOptions:1,filterOptions:1},fields:["inputStream","isFocused","selectedIndex"]});var M=Object(o.registerComponent)(A,{tmpl:C}),q=s(27);function F(e,t,s,o){const{t:r,d:i,h:a,k:n,i:l,c:c}=e;return[r("size newRecordList"),i(t.newRecordList.length),r(" finalData = "),i(t.finalData.length),t.finalData.length?a("table",{classMap:{"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0},key:9},[a("thead",{key:4},[a("tr",{classMap:{"slds-line-height_reset":!0},key:n(3,t.col)},l(t.columns2,(function(e){return a("th",{classMap:{},attrs:{scope:"col"},key:n(2,e)},[a("div",{classMap:{"slds-truncate":!0},attrs:{title:e},key:n(1,e)},[a("b",{key:0},[i(e)])])])})))]),a("tbody",{key:8},l(t.finalData,(function(e){return a("tr",{classMap:{"slds-hint-parent":!0},key:n(7,e._id)},l(e.array,(function(e){return a("td",{key:n(6,e.id)},[a("div",{classMap:{"slds-truncate":!0},attrs:{title:e.id},key:5},[i(e.value)])])})))})))]):null,t.finalData.length?c("lightning-datatable",q.a,{props:{columns:t.columns2,keyField:"id",data:t.finalData},key:10},[]):null]}var I=Object(o.registerTemplate)(F);F.stylesheets=[],v.a&&F.stylesheets.push.apply(F.stylesheets,v.a),F.stylesheetTokens={hostAttribute:"basecomp-datatable-_datatable-host",shadowAttribute:"basecomp-datatable-_datatable"};class E extends o.LightningElement{constructor(...e){super(...e),this.columns2=[],this.finalData=[],this.newRecordList=[],this.recordList=[]}connectedCallback(){this.recordList=[...this.newRecordList],this.processData2()}timepass(e){this.newRecordList=[...e],this.processData2()}processData2(){this.newRecordList.length&&(this.newRecordList=this.newRecordList.map(e=>p(e)),this.generateColumnNames(this.newRecordList),this.convertData(JSON.stringify(this.newRecordList)));let e=0;this.finalData=this.finalData.map(t=>Object.assign({},{array:t},{_id:e++})),this.finalData=[...this.finalData]}generateColumnNames(e){let t=new Set;e.forEach(e=>{t=new Set([...t,...this.getNonNullKeys(e)])}),this.columns2=Array.from(t),console.log("columns2 => ",JSON.stringify(this.columns2))}getNonNullKeys(e){return Object.keys(e).filter(t=>!(null==e[t]||t.includes("attributes")))}convertData(e){let t=JSON.parse(e);this.finalData=[],t.forEach(e=>{let t=[];this.columns2.forEach(s=>{t.push(e[s]?{id:s,value:e[s]}:{id:s,value:""})}),this.finalData.push(t)}),console.log("finaldata ",JSON.stringify(this.finalData))}}Object(o.registerDecorators)(E,{publicProps:{newRecordList:{config:0}},publicMethods:["timepass"],track:{columns2:1,finalData:1,recordList:1}});var N=Object(o.registerComponent)(E,{tmpl:I});function Q(e,t,s,o){const{t:r,gid:i,h:a,b:n,c:l,d:c}=e,{_m0:d,_m1:u,_m2:h,_m3:p,_m4:m,_m5:y,_m6:g}=o;return[a("div",{classMap:{"slds-grid":!0,"slds-gutters":!0},key:17},[a("div",{classMap:{"slds-col":!0,"slds-size_2-of-3":!0},key:8},[a("div",{classMap:{"slds-form-element":!0},key:6},[a("label",{classMap:{"slds-form-element__label":!0},attrs:{for:""+i("textarea-id-01")},key:0},[r("SOQL Query")]),a("span",{classMap:{"slds-form-element__control":!0},key:2},[a("textarea",{classMap:{"slds-textarea":!0},attrs:{id:i("textarea-id-01"),value:t.query,placeholder:"Your Query Here",name:"Query Caller",rows:"4",cols:"50","data-name":"query"},key:1,on:{change:d||(o._m0=n(t.handleChange))}},[])]),a("label",{classMap:{"slds-form-element__label":!0},attrs:{for:""+i("input-id-01")},key:3},[r("Tooling API")]),a("div",{classMap:{"slds-form-element__control":!0},key:5},[a("input",{classMap:{},attrs:{id:i("input-id-01"),type:"checkbox","data-name":"tooling"},props:{value:t.toolingQuery},key:4,on:{change:u||(o._m1=n(t.handleChange))}},[])])]),l("lightning-button",L.a,{props:{label:"Query!",disabled:t.isQueryButtonDisabled,variant:"brand"},key:7,on:{click:h||(o._m2=n(t.fireQuery))}},[])]),a("div",{classMap:{"slds-col":!0,"slds-size_1-of-3":!0},key:16},[l("lightning-button",L.a,{props:{label:"Refresh MetaData",title:"Gets fresh sObject data from selected Org"},key:9,on:{click:p||(o._m3=n(t.getMetaData))}},[]),t.isMetaDataVisible?l("basecomp-drop-down-filter",M,{props:{options:t.sobjectListFormat,maxSize:"30",inputLabel:"SObject Name"},key:10,on:{finalselect:m||(o._m4=n(t.onobjectselect))}},[]):null,t.sObjectFieldList.length?l("basecomp-drop-down-filter",M,{props:{options:t.sObjectFieldList,maxSize:"30",inputLabel:"Field Name"},key:11,on:{finalselect:y||(o._m5=n(t.onFieldSelect))}},[]):null,t.showKey?a("label",{classMap:{"slds-form-element__label":!0},attrs:{for:""+i("input-id-02")},key:12},[r("Key:")]):null,t.showKey?a("div",{classMap:{"slds-form-element__control":!0},key:15},[a("input",{classMap:{"slds-input":!0},attrs:{id:i("input-id-02"),type:"text",placeholder:"Comma Separated Column names","data-name":"key"},props:{value:t.key},key:13,on:{change:g||(o._m6=n(t.handleChange))}},[]),l("lightning-input",S.a,{props:{type:"text",label:"Add salami",value:"this is dummy"},key:14},[])]):null])]),t.records.length?r("ji "):null,t.records.length?c(t.records.length):null,t.records.length?l("basecomp-datatable",N,{props:{newRecordList:t.records},key:18},[]):null]}var R=Object(o.registerTemplate)(Q);Q.stylesheets=[],v.a&&Q.stylesheets.push.apply(Q.stylesheets,v.a),Q.stylesheetTokens={hostAttribute:"my-queryBox-_queryBox-host",shadowAttribute:"my-queryBox-_queryBox"};class z extends o.LightningElement{constructor(...e){super(...e),this.query="",this.key="",this.toolingQuery=!1,this.isQueryButtonDisabled=!1,this.showKey=!1,this.records=[],this.sobjectListFormat=void 0,this.sObjectFieldList=[]}get isMetaDataVisible(){return this.sobjectListFormat&&this.sobjectListFormat.length}getMetaData(){y(),this.getsobjectListFormat(),this.resetDropDown(this.sobjectListFormat,0)}resetDropDown(e,t){let s=this.template.querySelectorAll("basecomp-drop-down-filter")[t];s&&s.resetOptions(e)}fireQuery(){m(this.query).then(e=>{if(console.log("query response is ",e),e.done){this.records=[...e.records],this.records=[...this.records];let t=this.template.querySelectorAll("basecomp-datatable")[0];t&&t.timepass(this.records)}this.isQueryButtonDisabled=!1}),this.isQueryButtonDisabled=!0}handleChange(e){switch(e.currentTarget.dataset.name){case"query":this.query=e.target.value;break;case"tooling":this.toolingQuery=!this.toolingQuery;break;case"key":this.key=e.target.value}}handleClick(){console.log("you clicked! ")}onobjectselect(e){console.log("u chose ",e.detail),e.detail&&(e=>{let t=c("selectIndex"),s=c("idToOrgObj")[t];return h(s.domain,"sobjects/"+e+"/describe",s.value)})(e.detail.split(" - ")[1]).then(e=>{let t=e.fields;this.sObjectFieldList=[...t.map(e=>e.label+" - "+e.name)],this.resetDropDown(this.sObjectFieldList,1)})}onFieldSelect(e){console.log(e.detail)}getsobjectListFormat(){let e=c("sobjectList");e=e.map(e=>e.label+" - "+e.name),this.sobjectListFormat=[...e]}}Object(o.registerDecorators)(z,{publicProps:{showKey:{config:0}},track:{records:1,sobjectListFormat:1,sObjectFieldList:1},fields:["query","key","toolingQuery","isQueryButtonDisabled"]});var P=Object(o.registerComponent)(z,{tmpl:R});function B(e,t,s,o){const{b:r,c:i}=e,{_m0:a}=o;return[i("my-query-box",P,{props:{showKey:t.falsy},key:0,on:{queryfire:a||(o._m0=r(t.handleResponse))}},[])]}var J=Object(o.registerTemplate)(B);function K(e,t,s,o){const{t:r,i:i,f:a}=e;return a([r("hi im object details newer!"),i(t.sobjectNames,(function(e){return[]}))])}B.stylesheets=[],v.a&&B.stylesheets.push.apply(B.stylesheets,v.a),B.stylesheetTokens={hostAttribute:"my-currentAction-_queryMaker-host",shadowAttribute:"my-currentAction-_queryMaker"};var V=Object(o.registerTemplate)(K);function H(e,t,s,o){const{t:r}=e;return[r("hi im record detail")]}K.stylesheets=[],v.a&&K.stylesheets.push.apply(K.stylesheets,v.a),K.stylesheetTokens={hostAttribute:"my-currentAction-_objectDetail-host",shadowAttribute:"my-currentAction-_objectDetail"};var G=Object(o.registerTemplate)(H);H.stylesheets=[],v.a&&H.stylesheets.push.apply(H.stylesheets,v.a),H.stylesheetTokens={hostAttribute:"my-currentAction-_recordDetail-host",shadowAttribute:"my-currentAction-_recordDetail"};var U=s(28);function Y(e,t,s,o){const{b:r,c:i,t:a,d:n,h:l}=e,{_m0:c}=o;return[i("lightning-dual-listbox",U.a,{props:{name:"Org List",label:"Select Two Orgs",sourceLabel:"Available",selectedLabel:"Selected",fieldLevelHelp:"Select your preferred Orgs",options:t.options,max:"2"},key:0,on:{change:c||(o._m0=r(t.handleChange))}},[]),l("div",{classMap:{"slds-box":!0},key:2},[l("p",{key:1},[a("Selected orgs are: "),n(t.selected)])]),t.areTwoSelected?a("you selected 2!!!!!!!!!!!!!!!!!!!!!"):null]}var W=Object(o.registerTemplate)(Y);Y.stylesheets=[],v.a&&Y.stylesheets.push.apply(Y.stylesheets,v.a),Y.stylesheetTokens={hostAttribute:"my-dualOrgSelect-_dualOrgSelect-host",shadowAttribute:"my-dualOrgSelect-_dualOrgSelect"};class X extends o.LightningElement{constructor(...e){super(...e),this._selected=[],this.orgList=[]}connectedCallback(){let e=0;u(t=>{t.forEach(t=>{console.log("elem => ",JSON.stringify(t)),new RegExp(".*salesforce.com").test(t.domain)&&(this.orgList.push({index:e,value:t.value,domain:t.domain}),e++)}),console.log("orgList ",JSON.stringify(this.orgList))})}get options(){return this.orgList.map(e=>({label:e.domain,value:JSON.stringify(e)}))}get selected(){return this._selected.length?this._selected:"none"}get areTwoSelected(){return 2===this._selected.length}handleChange(e){this._selected=e.detail.value}}Object(o.registerDecorators)(X,{track:{orgList:1},fields:["_selected"]});var Z=Object(o.registerComponent)(X,{tmpl:W});function $(e,t,s,o){const{c:r}=e;return[r("my-dual-org-select",Z,{key:0},[]),r("my-query-box",P,{props:{showKey:t.truthy},key:1},[])]}var ee=Object(o.registerTemplate)($);$.stylesheets=[],v.a&&$.stylesheets.push.apply($.stylesheets,v.a),$.stylesheetTokens={hostAttribute:"my-currentAction-_compareMetaData-host",shadowAttribute:"my-currentAction-_compareMetaData"};class te extends o.LightningElement{constructor(...e){super(...e),this.pageType="",this.sobjectList=[],this.records=[],this.truthy=!0,this.falsy=!1}get sobjectNames(){return this.sobjectList.map(e=>Object.assign({},e,{value:e.label+"-"+e.name}))}render(){switch(this.pageType){case"queryMaker":return J;case"objectDetail":return V;case"recordDetail":return G;case"compareMetaData":return ee;default:return""}}connectedCallback(){this.getSobjectList()}getSobjectList(){console.log("inside get sobjectlist"),this.sobjectList=c("sobjectList");for(let e=0;e<10;e++)console.log(JSON.stringify(this.sobjectList[e]))}onobjectselect(e){console.log("you selected = ",e.detail)}handleResponse(e){this.records=[],console.log("inside handle response "+e.detail.records),this.records=[...e.detail.records]}}Object(o.registerDecorators)(te,{publicProps:{pageType:{config:0}},track:{sobjectList:1,records:1},fields:["truthy","falsy"]});var se=Object(o.registerComponent)(te,{tmpl:x});function oe(e,t,s,o){const{k:r,c:i,i:a}=e;return[i("lightning-tabset",j.a,{key:2},a(t.actions,(function(e){return i("lightning-tab",w.a,{props:{label:e.name},key:r(1,e.id)},[i("my-current-action",se,{props:{pageType:e.api},key:r(0,e.id)},[])])})))]}var re=Object(o.registerTemplate)(oe);oe.stylesheets=[],v.a&&oe.stylesheets.push.apply(oe.stylesheets,v.a),oe.stylesheetTokens={hostAttribute:"my-chooseComponentTab-_chooseComponentTab-host",shadowAttribute:"my-chooseComponentTab-_chooseComponentTab"};class ie extends o.LightningElement{constructor(...e){super(...e),this.actions=[{id:0,name:"Query Maker",api:"queryMaker"},{id:1,name:"Record Detail",api:"recordDetail"},{id:2,name:"Object Detail",api:"objectDetail"},{id:3,name:"Compare Metadata Detail",api:"compareMetaData"}]}}Object(o.registerDecorators)(ie,{track:{actions:1}});var ae=Object(o.registerComponent)(ie,{tmpl:re});function ne(e,t,s,o){const{b:r,c:i,h:a}=e,{_m0:n}=o;return[a("div",{styleMap:{border:"1%"},key:2},[i("my-org-list",O,{props:{selectmax:"1"},key:0,on:{orgidset:n||(o._m0=r(t.handleOrgChange))}},[]),t.showBody?i("my-choose-component-tab",ae,{key:1},[]):null])]}var le=Object(o.registerTemplate)(ne);ne.stylesheets=[],ne.stylesheetTokens={hostAttribute:"my-app-_app-host",shadowAttribute:"my-app-_app"};class ce extends o.LightningElement{constructor(...e){super(...e),this.showBody=!1,this.deletemeLater=["jazz1","rock2","song3","sfdc4","superman5","joker6","rust7"]}handleOrgChange(){-1!==c("selectIndex")&&(y(),this.showBody=!0)}showselected(e){console.log("u chose ",e.detail)}}Object(o.registerDecorators)(ce,{track:{showBody:1},fields:["deletemeLater"]});var de=Object(o.registerComponent)(ce,{tmpl:le});const ue=Object(o.createElement)("my-app",{is:de});document.querySelector("#main").appendChild(ue)}});