(this.webpackJsonpnametagapp=this.webpackJsonpnametagapp||[]).push([[6,10,13],{105:function(e,t,a){"use strict";a.r(t);var n=a(67),r=a(0),i=a.n(r),o=a(59),l=a(101),c=a(100),s=a(56),d=a(71),m=a(73),u=a(60),p=a(16),f=(a(39),a(70),a(66)),b=a(63),g=a(82),h=(a(92),a(6)),E=a.n(h),y=a(57),v=a(13),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var N="easy-print-Print-_exclusive-3Eag",O="easy-print-Print-root-2BcA",j="easy-print-Print-_main-LssU";a(41)("/*  imported from Print.css  */\n\n.easy-print-Print-_exclusive-3Eag {\n  display: none;\n}\n\n@media print {\n  .easy-print-Print-root-2BcA {\n    visibility: visible; /* visible element even nested in the hidden one */\n  }\n  .easy-print-Print-root-2BcA.easy-print-Print-_main-LssU {\n    visibility: visible;\n  }\n  .easy-print-Print-_exclusive-3Eag {\n    display: block;\n  }\n}\n");E.a.string,E.a.node.isRequired,E.a.bool,E.a.bool,E.a.bool,E.a.bool;var w=y.a.childContextTypes,C=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={printOffsetLeft:0,printOffsetTop:0},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),x(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.name){Object(v.a)("init printable",this.props.name);var a=this.props.main||this.props.single;this.context.printProvider&&this.context.printProvider.regPrintable(this.props.name,i.a.createElement(t,this.props),a)}(this.props.main||this.props.single)&&(window.matchMedia("print").onchange=function(){if(window.matchMedia("print").matches){var t=document.body.getBoundingClientRect(),a=e.printElement,n=a&&a.getBoundingClientRect(),r=n&&n.left-t.left,i=n&&n.top-t.top;e.setState({printOffsetTop:i,printOffsetLeft:r})}else e.setState({printOffsetTop:0,printOffsetLeft:0})})}},{key:"componentWillUnmount",value:function(){if(this.props.name){Object(v.a)("remove printable",this.props.name);var e=this.props.main||this.props.single;this.context.printProvider&&this.context.printProvider.unregPrintable(this.props.name,e)}(this.props.main||this.props.single)&&(window.matchMedia("print").onchange=null)}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.main,r=t.single,o=t.exclusive,l=t.printOnly,c=this.state,s=c.printOffsetLeft,d=c.printOffsetTop,m=n||r?j:"",u=o||l?N:"",p=window.matchMedia("print").matches,f=(d||s)&&m&&p?{marginTop:-d,marginLeft:-s}:{},b="react-easy-print-print "+O+" "+m+" "+u;return i.a.createElement("div",{ref:function(t){return e.printElement=t},style:f,className:b},a)}}]),t}(i.a.Component),S=C;C.contextTypes=w;var T=function(e){Object(r.useEffect)((function(){}),[e.props]);var t="printframe"+e.index,a="";return a=""===e.props.thirdLine?"<div style='text-align:center;'><p style='font-size:38px;font-family:calibri;margin-bottom:0px;margin-top:35px;'>"+e.props.name+"</p><p style='font-size:38px;font-family:calibri;margin-bottom:0px;margin-top:20px;'>"+e.props.secondLine+"</p></div>":"<div style='text-align:center;'><p style='font-size:30px;font-family:calibri;margin-bottom:0px;margin-top:30px;'>"+e.props.name+"</p><p style='font-size:30px;font-family:calibri;margin-bottom:0px;margin-top:10px;'>"+e.props.secondLine+"</p><p style='font-size:30px;font-family:calibri;margin-bottom:0px;margin-top:10px;'>"+e.props.thirdLine+"</p></div>",i.a.createElement(o.a,null,i.a.createElement(s.a,{onClick:function(){window.frames[t].focus(),window.frames[t].print(),window.frames[t].close()}},"PRINT"),i.a.createElement(S,{single:!0,name:"print-class"},i.a.createElement("iframe",{id:t,title:t,name:t,srcDoc:a})))};t.default=function(){var e=Object(r.useState)(-1),t=Object(n.a)(e,2),a=t[0],h=t[1];Object(r.useEffect)((function(){var e=localStorage.getItem("version");(e=parseInt(e))!==a&&-1!==a?(console.log("wrong local version: "+e+" of latest: "+a),window.location.reload(!0),localStorage.setItem("version",a)):e===a&&console.log("running latest version")}),[a]),Object(f.a)({mode:"get_app_version"}).then((function(e){e=parseInt(e),h(e)}));var E=Object(r.useState)("ADMIN LOGIN"),y=Object(n.a)(E,2),v=y[0],x=y[1],N=Object(r.useState)(!1),O=Object(n.a)(N,2),j=O[0],w=O[1],C=Object(r.useState)([{id:0,data:{color:"",comments:"",requestor:"",datefinished:0,daterequest:0,reqDaysAgo:0,height:1,width:1,attachment:"",thickness:"",signColor:""}}]),S=Object(n.a)(C,2),k=S[0],A=S[1],L=Object(r.useState)([]),I=Object(n.a)(L,2),P=I[0],_=I[1],q=Object(r.useState)(!1),R=Object(n.a)(q,2),M=R[0],D=R[1],z=Object(r.useState)(-1),B=Object(n.a)(z,2),F=B[0],U=B[1],K=Object(r.useRef)(null),G=Object(r.useState)(""),Q=Object(n.a)(G,2),W=Q[0],H=Q[1],V=function(e){"Enter"!==e.key&&"Button"!==e||Object(f.a)({mode:"auth",authUser:"emeqiss@deervalley.com",authPass:W}).then((function(e){D(!0),x("ADMIN CENTER")})).catch((function(e){x(e.msg)}))};return Object(r.useEffect)((function(){K.current.focus(),Object(f.a)({mode:"read_all"}).then((function(e){A(e),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(U(-1),window.getSelection().removeAllRanges())}))}))}),[]),Object(r.useEffect)((function(){var e=[];k.forEach((function(t,a){var n;n=""===t.data.thirdline?"2-"+t.data.color:11===t.data.colorCode?"1-"+t.data.color:"3-"+t.data.color;var r=e.findIndex((function(e){return e.adminTodoCode===n}));if(-1===r){if(""===t.data.color)return;e.push({adminTodoCode:n,data:[]})}r=e.findIndex((function(e){return e.adminTodoCode===n})),e[r].data.push({id:t.id,name:t.data.name,secondLine:t.data.titlecity,thirdLine:t.data.thirdline,comments:t.data.comments,requestor:t.data.requestor,thickness:t.data.thickness,height:t.data.height,width:t.data.width,attachment:t.data.attachment,signColor:t.data.signcolor,signQuantity:t.data.signquantity})})),0===k.length&&w(!0),_(e)}),[k]),i.a.createElement(o.a,{className:"p-0"},i.a.createElement(l.a,{className:"justify-content-between nav-h4-bar-bg mx-0"},i.a.createElement(c.a,{xs:"auto",className:"p-0"},i.a.createElement(p.b,{to:"/"},i.a.createElement(s.a,null,"HOME"))),i.a.createElement(c.a,{xs:"auto"},i.a.createElement("h4",{className:"nav-h4-bar"},v)),i.a.createElement(c.a,{xs:"auto",className:"p-0"},i.a.createElement(p.b,{to:"/status"},i.a.createElement(s.a,null,"STATUS")))),!M&&i.a.createElement(l.a,{className:"mt-2 mx-0"},i.a.createElement(c.a,{xs:10,className:"pl-0 pr-2"},i.a.createElement(d.a,null,i.a.createElement(m.a,{ref:K,placeholder:"Password",type:"password","aria-label":"Password","aria-describedby":"basic-addon1",onChange:function(e){var t=e.target.value;H(t)},onKeyPress:function(e){return V(e)}}))),i.a.createElement(c.a,{xs:2,className:"px-0 align-right"},i.a.createElement(s.a,{id:"submit-admin",onClick:function(){return V("Button")}},"Submit"))),M&&i.a.createElement(o.a,{className:"mt-2 mb-5 pb-4 px-4 admin-top-section"},i.a.createElement(l.a,{className:"justify-content-center mt-1"},i.a.createElement("h5",{className:"grey-text"},"The Following Tags Need to be Completed:")),0===P.length&&!j&&i.a.createElement(u.a,{variant:"danger",animation:"border",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")),j&&i.a.createElement(l.a,{className:"justify-content-center"},i.a.createElement("p",{className:"green-text"},"All tags are completed. Good job, you!")),P.map((function(e,t){return i.a.createElement(l.a,{className:"admin-todo-item mt-2 py-3",key:t,onClick:function(){U(t),function(e){var t=document.querySelector(e),a=document.createRange();a.selectNodeContents(t);var n=window.getSelection();n.removeAllRanges(),n.addRange(a),document.execCommand("copy")}("#table-data-"+t)}},i.a.createElement(c.a,{xs:12,lg:4,className:"px-0"},i.a.createElement(l.a,null,"1"!==e.adminTodoCode[3]&&"5"!==e.adminTodoCode[2]&&i.a.createElement(c.a,null,i.a.createElement(b.default,{data:{colorCode:parseInt(e.adminTodoCode.slice(2)),name:2===parseInt(e.adminTodoCode[0])?"2 LINE":"3 LINE"}})),"1"===e.adminTodoCode[3]&&i.a.createElement(c.a,null,i.a.createElement(b.default,{data:{colorCode:parseInt(e.adminTodoCode.slice(2)),name:"SKI / BASKET TAG"}}))),F===t&&i.a.createElement(l.a,null,i.a.createElement(c.a,{md:5,className:"ml-2 red-text"},"Copied to Clipboard! ESC to unselect"),i.a.createElement(c.a,{md:5,className:"text-center"},i.a.createElement("p",{className:"my-0"},"MARK THESE AS DONE:"),i.a.createElement(s.a,{onClick:function(){var e=[];P[t].data.forEach((function(t){e.push(t.id)})),Object(f.a)({mode:"update_entry",type:"done",docIdArray:e}).then((function(){Object(f.a)({mode:"read_all"}).then((function(e){A(e),U(-1)}))}))}},"\u2714")))),i.a.createElement(c.a,{xs:6,lg:4,className:"px-0"},i.a.createElement("table",{className:"admin-table",id:"table-data-"+t},"4"!==e.adminTodoCode[2]&&"1"!==e.adminTodoCode[3]&&"5"!==e.adminTodoCode[2]&&e.data.map((function(e,t){return i.a.createElement("tbody",{key:e.id},i.a.createElement("tr",null,i.a.createElement("td",{className:"admin-table-td"},e.name),i.a.createElement("td",{className:"admin-table-td"},e.secondLine),!(""===e.thirdLine)&&i.a.createElement("td",{className:"admin-table-td"},e.thirdLine)),i.a.createElement("tr",null,i.a.createElement("td",{className:"admin-table-td"},e.name),i.a.createElement("td",{className:"admin-table-td"},e.secondLine),!(""===e.thirdLine)&&i.a.createElement("td",{className:"admin-table-td"},e.thirdLine)))})),("4"===e.adminTodoCode[2]||"1"===e.adminTodoCode[3])&&e.data.map((function(t,a){return i.a.createElement("tbody",{key:t.id},i.a.createElement("tr",null,i.a.createElement("td",{className:"admin-table-td-double"},t.name),!("1"===e.adminTodoCode[3])&&i.a.createElement("td",{className:"admin-table-td-double"},t.secondLine),!(""===t.thirdLine)&&i.a.createElement("td",{className:"admin-table-td"},t.thirdLine)))})),"5"===e.adminTodoCode[2]&&e.data.map((function(e,t){return i.a.createElement("tbody",{key:e.id},i.a.createElement("tr",null,i.a.createElement("td",{colSpan:4,className:"admin-table-td-double"},i.a.createElement(b.default,{data:{colorCode:5,name:e.name,signColor:e.signColor,width:e.width,height:e.height}}))),i.a.createElement("tr",null,i.a.createElement("td",{className:"admin-table-td-double"},"Thickness: ",e.thickness),i.a.createElement("td",{className:"admin-table-td-double"},"Attachment: ",e.attachment),i.a.createElement("td",{className:"admin-table-td-double"},"Height: ",e.height,'"'),i.a.createElement("td",{className:"admin-table-td-double"},"Width: ",e.width,'"')))})))),i.a.createElement(c.a,{xs:6,lg:4,className:"pr-0"},i.a.createElement("table",{className:"admin-table"},e.data.map((function(a,n){return i.a.createElement("tbody",{key:a.id},i.a.createElement("tr",null,"4"===e.adminTodoCode[2]&&i.a.createElement("td",{className:"admin-table-td-double"},i.a.createElement(T,{props:a,index:t})),i.a.createElement("td",{className:"admin-table-td-double"},"Requestor: "+a.requestor),i.a.createElement("td",{className:"admin-table-td-double"},"Comments: "+a.comments)),"5"===e.adminTodoCode[2]&&i.a.createElement("tr",null,i.a.createElement("td",{className:"admin-table-td-double"},"Quantity: ",a.signQuantity),i.a.createElement("td",{className:"admin-table-td-double"},"Color: ",a.signColor)))})))))}))),M&&i.a.createElement(o.a,{className:"mx-0 pb-3 px-4 pt-3 admin-bottom-section"},i.a.createElement(g.default,{adminMode:!0,dataRowAdmin:k,setDataRowAdmin:A})),M&&i.a.createElement(o.a,{className:"mt-2 mb-0 ml-2 pl-4 pb-0 pt-1"},i.a.createElement(l.a,null,i.a.createElement(c.a,{xs:"auto",className:"mt-2 mr-3 p-0"},i.a.createElement("p",null,"Current Version: ",a)),i.a.createElement(c.a,{xs:"auto",className:"p-0"},i.a.createElement(d.a,null,i.a.createElement(m.a,{placeholder:"App Version Write-Over",type:"number","aria-label":"number","aria-describedby":"basic-addon1",onKeyPress:function(e){return function(e){if("Enter"===e.key){var t=e.target.value;Object(f.a)({mode:"set_app_version",version:t}).then((function(){h(t)}))}}(e)}}))))))}},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(100),o=a(59),l=a(101);a(65),a(62);t.default=function(e){var t,a,n=function(e){var t={bg:"",img:"null-space",defName:"Name",defSecond:"City, ST",quantity:"x2"};return 1===e?t.bg="tag-green":2===e?(t.bg="tag-greenmag",t.img="dvgold-img"):3===e?(t.bg="tag-bronze",t.img="dvblack-img"):4===e?(t.bg="tag-outdoor",t.img="dvwhite-img",t.quantity="x3"):5===e?(t.bg="tag-sign",t.defName="Sign",t.defSecond="Put details in the comments",t.quantity=""):7===e?(t.bg="tag-green",t.defSecond="Title"):8===e?(t.bg="tag-greenmag",t.img="dvgold-img",t.defSecond="Title"):9===e?(t.bg="tag-bronze",t.img="dvwhite-img",t.defSecond="Title"):10===e?(t.bg="tag-outdoor",t.defSecond="Title",t.quantity="x3"):11===e?(t.bg="tag-basket",t.defName="<p style='font-size:60px;position:relative;top:-20%;'>&#8226;</p>",t.defSecond="<p style='font-size:19px;position:relative;bottom:30%;'>Basket Check</p>",t.quantity=""):12===e?(t.bg="tag-patrol",t.img="dvpatrol-img",t.quantity="x3"):13===e?(t.bg="tag-oldoutdoor",t.quantity="x3"):14===e?(t.bg="tag-blackdiamond",t.img="dvblackdiamond-img",t.quantity="x2"):15===e?(t.bg="tag-black",t.quantity="x2"):16===e?(t.bg="tag-blackdiamond",t.img="dvclub-img",t.quantity="x2"):t.bg="tag-other",t}(e.data.colorCode);n.bg=n.bg+"  justify-content-between";var c=[],s=e.data.name;return 5===e.data.colorCode&&((c=e.data.signColor.split(" / "))[0]="color-"+c[0].toLowerCase(),c[1]="bg-"+c[1].toLowerCase(),t=parseFloat(e.data.height),a=parseFloat(e.data.width),t*=50,a*=50,t+="px",a+="px",s=s.split("\n")),r.a.createElement(i.a,{xs:12,md:6,lg:4,className:"px-0"},5!==e.data.colorCode&&r.a.createElement(o.a,null,r.a.createElement(l.a,{className:n.bg},!("null-space"===n.img)&&r.a.createElement("div",{className:n.img}),r.a.createElement("div",{className:"title-parent"},r.a.createElement("div",{className:"title-text justify-content-center"},e.data.name),r.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.secondLine),r.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.thirdLine)))),5===e.data.colorCode&&r.a.createElement(o.a,{style:{width:a,height:t,textAlign:"center",margin:"auto",display:"flex",flexDirection:"row"},className:c[1]+" "+c[0]+" bg-basic"},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"auto"}},s.map((function(e,t){return r.a.createElement(l.a,{className:"justify-content-center",key:t},e)})))))}},64:function(e,t,a){"use strict";var n=function(){};e.exports=n},70:function(e,t,a){},71:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(3),o=a.n(i),l=a(0),c=a.n(l),s=a(23),d=a(4),m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.size,l=e.className,s=e.as,m=void 0===s?"div":s,u=Object(r.a)(e,["bsPrefix","size","className","as"]);return a=Object(d.b)(a,"input-group"),c.a.createElement(m,Object(n.a)({ref:t},u,{className:o()(l,a,i&&a+"-"+i)}))})),u=Object(s.a)("input-group-append"),p=Object(s.a)("input-group-prepend"),f=Object(s.a)("input-group-text",{Component:"span"});m.displayName="InputGroup",m.Text=f,m.Radio=function(e){return c.a.createElement(f,null,c.a.createElement("input",Object(n.a)({type:"radio"},e)))},m.Checkbox=function(e){return c.a.createElement(f,null,c.a.createElement("input",Object(n.a)({type:"checkbox"},e)))},m.Append=u,m.Prepend=p,t.a=m},73:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(3),o=a.n(i),l=a(0),c=a.n(l),s=(a(64),a(6)),d=a.n(s),m={type:d.a.string.isRequired,as:d.a.elementType},u=c.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,l=e.className,s=e.type,d=Object(r.a)(e,["as","className","type"]);return c.a.createElement(i,Object(n.a)({},d,{ref:t,className:o()(l,s&&s+"-feedback")}))}));u.displayName="Feedback",u.propTypes=m,u.defaultProps={type:"valid"};var p=u,f=c.a.createContext({controlId:void 0}),b=a(4),g=c.a.forwardRef((function(e,t){var a,i,s=e.bsPrefix,d=e.type,m=e.size,u=e.id,p=e.className,g=e.isValid,h=e.isInvalid,E=e.plaintext,y=e.readOnly,v=e.as,x=void 0===v?"input":v,N=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),O=Object(l.useContext)(f).controlId;if(s=Object(b.b)(s,"form-control"),E)(i={})[s+"-plaintext"]=!0,a=i;else if("file"===d){var j;(j={})[s+"-file"]=!0,a=j}else{var w;(w={})[s]=!0,w[s+"-"+m]=m,a=w}return c.a.createElement(x,Object(n.a)({},N,{type:d,ref:t,readOnly:y,id:u||O,className:o()(p,a,g&&"is-valid",h&&"is-invalid")}))}));g.displayName="FormControl",g.Feedback=p;t.a=g},82:function(e,t,a){"use strict";a.r(t);var n=a(67),r=a(0),i=a.n(r),o=a(60),l=a(59),c=a(101),s=a(100),d=a(56),m=a(71),u=a(73),p=a(16),f=a(66),b=(a(39),a(65),a(70),Object(r.lazy)((function(){return a.e(13).then(a.bind(null,63))}))),g=i.a.createElement(o.a,{variant:"danger",animation:"border",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")),h=function(e){var t={};if(0===e)return t.text="Still Working...",t.class="status-yellow",t;if(-1===e)return t.text="Marked as Duplicate",t.class="status-red",t;var a=(Date.now()-e)/864e4;return a=Math.round(a)/10,t.text="Finished "+a+" Days Ago!",t.class="status-green",t};t.default=function(e){var t=Object(r.useState)(-1),a=Object(n.a)(t,2),E=a[0],y=a[1];Object(r.useEffect)((function(){var e=localStorage.getItem("version");(e=parseInt(e))!==E&&-1!==E?(console.log("wrong local version: "+e+" of latest: "+E),window.location.reload(!0),localStorage.setItem("version",E)):e===E&&console.log("running latest version")}),[E]),Object(f.a)({mode:"get_app_version"}).then((function(e){e=parseInt(e),y(e)}));var v=Object(r.useState)([{id:0,data:{color:"",comments:"",datefinished:0,daterequest:0,reqDaysAgo:0,attachment:"",signColor:"White / Green",signQuantity:1,height:1,width:1,thickness:""}}]),x=Object(n.a)(v,2),N=x[0],O=x[1],j=Object(r.useState)(!1),w=Object(n.a)(j,2),C=w[0],S=w[1],T=Object(r.useState)(!1),k=Object(n.a)(T,2),A=k[0],L=k[1],I=Object(r.useState)(""),P=Object(n.a)(I,2),_=P[0],q=P[1],R=Object(r.useState)(""),M=Object(n.a)(R,2),D=M[0],z=M[1],B=Object(r.useState)("STATUS for UNFINISHED TAGS:"),F=Object(n.a)(B,2),U=F[0],K=F[1],G=Object(r.useState)("Search Already Ordered Tags"),Q=Object(n.a)(G,2),W=Q[0],H=Q[1],V=function(){S(!1),""===_?Object(f.a)({mode:"read_all"}).then((function(t){O(t),0===t.length&&L(!0),S(!0),e.setDataRowAdmin(t)})):(K(g),Object(f.a)({mode:"read_all"}).then((function(t){e.setDataRowAdmin(t)})).then((function(){Object(f.a)({mode:"search_for",searchForString:_}).then((function(e){O(e)})).then((function(){S(!0),K("Results for: "+_)}))})))};return Object(r.useEffect)((function(){Object(f.a)({mode:"read_all"}).then((function(e){O(e),0===e.length&&L(!0),S(!0)}))}),[]),Object(r.useEffect)((function(){Object(f.a)({mode:"read_all"}).then((function(e){O(e),0===e.length&&L(!0),S(!0)}))}),[e.dataRowAdmin]),Object(r.useEffect)((function(){e.adminMode&&(K("Edit Individual Tag Status"),H("Search for Specific Tags"),z("px-0"))}),[e.adminMode]),Object(r.useEffect)((function(){}),[N]),i.a.createElement(l.a,{className:D},i.a.createElement(c.a,{className:"justify-content-between mt-1 nav-h4-bar-bg print-hide"},!e.adminMode&&i.a.createElement(s.a,{xs:"auto",className:"p-0"},i.a.createElement(p.b,{to:"/"},i.a.createElement(d.a,null,"BACK"))),i.a.createElement(s.a,{xs:"auto"},i.a.createElement("h4",{className:"nav-h4-bar"},U)),i.a.createElement(s.a,{xs:"auto",className:"p-0"},i.a.createElement(m.a,{id:"status-search-bar"},i.a.createElement(u.a,{placeholder:W,"aria-label":"Search","aria-describedby":"basic-addon1",id:"status-search-bar-inner",onChange:function(e){var t=e.target.value;t=t.toLowerCase(),q(t)},onKeyPress:function(e){"Enter"===e.key&&(""===_?(K("Edit Individual Tag Status"),Object(f.a)({mode:"read_all"}).then((function(e){O(e),0===e.length&&L(!0),S(!0)}))):(K(g),Object(f.a)({mode:"search_for",searchForString:_}).then((function(e){console.log(e),O(e),K("Results for: "+_)}))))}})))),!C&&i.a.createElement(c.a,null,i.a.createElement(o.a,{variant:"danger",animation:"border",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading..."))),A&&!e.adminMode&&i.a.createElement(c.a,{className:"justify-content-center mt-2"},i.a.createElement("h5",{className:"green-text mt-2"},"All tags in the system are done.")),C&&N.map((function(t,a){return i.a.createElement(c.a,{className:"mt-1 justify-content-between status-row",key:"status-"+t.id},e.adminMode&&i.a.createElement(s.a,{xs:12,md:1,className:"px-0"},i.a.createElement(c.a,{className:"justify-content-center mt-1"},i.a.createElement(s.a,{xs:"auto"},i.a.createElement(d.a,{variant:"success",className:"admin-change-status-button",disabled:"status-green"===h(t.data.datefinished).class,onClick:function(){var e=[];e.push(t.id),Object(f.a)({mode:"update_entry",type:"done",docIdArray:e}).then((function(){V()}))}},"\u2714"))),i.a.createElement(c.a,{className:"justify-content-center mt-1"},i.a.createElement(s.a,{xs:"auto"},i.a.createElement(d.a,{variant:"danger",className:"admin-change-status-button",disabled:"status-green"===h(t.data.datefinished).class,onClick:function(){var e=[];e.push(t.id),Object(f.a)({mode:"update_entry",type:"duplicate",docIdArray:e}).then((function(){V()}))}},"\u2398"))),i.a.createElement(c.a,{className:"justify-content-center mt-1"},i.a.createElement(s.a,{xs:"auto"},i.a.createElement(d.a,{variant:"warning",className:"admin-change-status-button",disabled:"status-yellow"===h(t.data.datefinished).class,onClick:function(){var e=[];e.push(t.id),Object(f.a)({mode:"update_entry",type:"notdone",docIdArray:e}).then((function(){V()}))}},"\u27f2")))),i.a.createElement(s.a,{xs:12,md:e.adminMode?5:6,className:"px-0"},i.a.createElement(r.Suspense,{fallback:g},5!==t.data.color&&i.a.createElement(b,{data:{name:t.data.name,secondLine:t.data.titlecity,thirdLine:t.data.thirdline,colorCode:t.data.color}}),5===t.data.color&&i.a.createElement(b,{data:{name:t.data.name,colorCode:5,signColor:t.data.signcolor,attachment:t.data.attachment,height:t.data.height,width:t.data.width}}))),i.a.createElement(s.a,{xs:12,md:4,className:"px-0"},i.a.createElement(c.a,null,i.a.createElement(s.a,null,i.a.createElement("p",{className:"status-b-col-text"},"Requestor: ",t.data.requestor))),i.a.createElement(c.a,null,i.a.createElement(s.a,null,i.a.createElement("p",{className:"status-b-col-text"},"Requested: ",function(e){var t=(Date.now()-e)/864e4;return Math.floor(t)/10}(t.data.daterequest)," Days Ago"))),i.a.createElement(c.a,null,i.a.createElement(s.a,null,5!==t.data.color&&i.a.createElement("p",{className:"status-b-col-text"},"Quantity: ",t.data.quantity))),i.a.createElement(c.a,null,i.a.createElement(s.a,null,i.a.createElement("p",{className:"status-b-col-text"},"Comments: ",t.data.comments)))),i.a.createElement(s.a,{xs:12,md:2,className:h(t.data.datefinished).class},i.a.createElement("p",null,"STATUS: ",h(t.data.datefinished).text)))})))}},92:function(e,t,a){}}]);
//# sourceMappingURL=6.5d7078cb.chunk.js.map