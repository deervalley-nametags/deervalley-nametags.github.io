(this.webpackJsonpnametagapp=this.webpackJsonpnametagapp||[]).push([[10],{64:function(e,a,t){"use strict";var n=function(){};e.exports=n},70:function(e,a,t){},71:function(e,a,t){"use strict";var n=t(1),s=t(2),c=t(3),r=t.n(c),l=t(0),o=t.n(l),i=t(23),d=t(4),u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.size,l=e.className,i=e.as,u=void 0===i?"div":i,m=Object(s.a)(e,["bsPrefix","size","className","as"]);return t=Object(d.b)(t,"input-group"),o.a.createElement(u,Object(n.a)({ref:a},m,{className:r()(l,t,c&&t+"-"+c)}))})),m=Object(i.a)("input-group-append"),f=Object(i.a)("input-group-prepend"),b=Object(i.a)("input-group-text",{Component:"span"});u.displayName="InputGroup",u.Text=b,u.Radio=function(e){return o.a.createElement(b,null,o.a.createElement("input",Object(n.a)({type:"radio"},e)))},u.Checkbox=function(e){return o.a.createElement(b,null,o.a.createElement("input",Object(n.a)({type:"checkbox"},e)))},u.Append=m,u.Prepend=f,a.a=u},73:function(e,a,t){"use strict";var n=t(1),s=t(2),c=t(3),r=t.n(c),l=t(0),o=t.n(l),i=(t(64),t(6)),d=t.n(i),u={type:d.a.string.isRequired,as:d.a.elementType},m=o.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"div":t,l=e.className,i=e.type,d=Object(s.a)(e,["as","className","type"]);return o.a.createElement(c,Object(n.a)({},d,{ref:a,className:r()(l,i&&i+"-feedback")}))}));m.displayName="Feedback",m.propTypes=u,m.defaultProps={type:"valid"};var f=m,b=o.a.createContext({controlId:void 0}),p=t(4),h=o.a.forwardRef((function(e,a){var t,c,i=e.bsPrefix,d=e.type,u=e.size,m=e.id,f=e.className,h=e.isValid,E=e.isInvalid,g=e.plaintext,j=e.readOnly,O=e.as,y=void 0===O?"input":O,v=Object(s.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),N=Object(l.useContext)(b).controlId;if(i=Object(p.b)(i,"form-control"),g)(c={})[i+"-plaintext"]=!0,t=c;else if("file"===d){var x;(x={})[i+"-file"]=!0,t=x}else{var S;(S={})[i]=!0,S[i+"-"+u]=u,t=S}return o.a.createElement(y,Object(n.a)({},v,{type:d,ref:a,readOnly:j,id:m||N,className:r()(f,t,h&&"is-valid",E&&"is-invalid")}))}));h.displayName="FormControl",h.Feedback=f;a.a=h},82:function(e,a,t){"use strict";t.r(a);var n=t(67),s=t(0),c=t.n(s),r=t(60),l=t(59),o=t(101),i=t(100),d=t(56),u=t(71),m=t(73),f=t(16),b=t(66),p=(t(39),t(65),t(70),Object(s.lazy)((function(){return t.e(13).then(t.bind(null,63))}))),h=c.a.createElement(r.a,{variant:"danger",animation:"border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")),E=function(e){var a={};if(0===e)return a.text="Still Working...",a.class="status-yellow",a;if(-1===e)return a.text="Marked as Duplicate",a.class="status-red",a;var t=(Date.now()-e)/864e4;return t=Math.round(t)/10,a.text="Finished "+t+" Days Ago!",a.class="status-green",a};a.default=function(e){var a=Object(s.useState)(-1),t=Object(n.a)(a,2),g=t[0],j=t[1];Object(s.useEffect)((function(){var e=localStorage.getItem("version");(e=parseInt(e))!==g&&-1!==g?(console.log("wrong local version: "+e+" of latest: "+g),window.location.reload(!0),localStorage.setItem("version",g)):e===g&&console.log("running latest version")}),[g]),Object(b.a)({mode:"get_app_version"}).then((function(e){e=parseInt(e),j(e)}));var O=Object(s.useState)([{id:0,data:{color:"",comments:"",datefinished:0,daterequest:0,reqDaysAgo:0,attachment:"",signColor:"White / Green",signQuantity:1,height:1,width:1,thickness:""}}]),y=Object(n.a)(O,2),v=y[0],N=y[1],x=Object(s.useState)(!1),S=Object(n.a)(x,2),w=S[0],k=S[1],A=Object(s.useState)(!1),C=Object(n.a)(A,2),I=C[0],R=C[1],T=Object(s.useState)(""),_=Object(n.a)(T,2),D=_[0],M=_[1],q=Object(s.useState)(""),F=Object(n.a)(q,2),P=F[0],z=F[1],L=Object(s.useState)("STATUS for UNFINISHED TAGS:"),G=Object(n.a)(L,2),U=G[0],J=G[1],K=Object(s.useState)("Search Already Ordered Tags"),Q=Object(n.a)(K,2),V=Q[0],W=Q[1],B=function(){k(!1),""===D?Object(b.a)({mode:"read_all"}).then((function(a){N(a),0===a.length&&R(!0),k(!0),e.setDataRowAdmin(a)})):(J(h),Object(b.a)({mode:"read_all"}).then((function(a){e.setDataRowAdmin(a)})).then((function(){Object(b.a)({mode:"search_for",searchForString:D}).then((function(e){N(e)})).then((function(){k(!0),J("Results for: "+D)}))})))};return Object(s.useEffect)((function(){Object(b.a)({mode:"read_all"}).then((function(e){N(e),0===e.length&&R(!0),k(!0)}))}),[]),Object(s.useEffect)((function(){Object(b.a)({mode:"read_all"}).then((function(e){N(e),0===e.length&&R(!0),k(!0)}))}),[e.dataRowAdmin]),Object(s.useEffect)((function(){e.adminMode&&(J("Edit Individual Tag Status"),W("Search for Specific Tags"),z("px-0"))}),[e.adminMode]),Object(s.useEffect)((function(){}),[v]),c.a.createElement(l.a,{className:P},c.a.createElement(o.a,{className:"justify-content-between mt-1 nav-h4-bar-bg print-hide"},!e.adminMode&&c.a.createElement(i.a,{xs:"auto",className:"p-0"},c.a.createElement(f.b,{to:"/"},c.a.createElement(d.a,null,"BACK"))),c.a.createElement(i.a,{xs:"auto"},c.a.createElement("h4",{className:"nav-h4-bar"},U)),c.a.createElement(i.a,{xs:"auto",className:"p-0"},c.a.createElement(u.a,{id:"status-search-bar"},c.a.createElement(m.a,{placeholder:V,"aria-label":"Search","aria-describedby":"basic-addon1",id:"status-search-bar-inner",onChange:function(e){var a=e.target.value;a=a.toLowerCase(),M(a)},onKeyPress:function(e){"Enter"===e.key&&(""===D?(J("Edit Individual Tag Status"),Object(b.a)({mode:"read_all"}).then((function(e){N(e),0===e.length&&R(!0),k(!0)}))):(J(h),Object(b.a)({mode:"search_for",searchForString:D}).then((function(e){console.log(e),N(e),J("Results for: "+D)}))))}})))),!w&&c.a.createElement(o.a,null,c.a.createElement(r.a,{variant:"danger",animation:"border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))),I&&!e.adminMode&&c.a.createElement(o.a,{className:"justify-content-center mt-2"},c.a.createElement("h5",{className:"green-text mt-2"},"All tags in the system are done.")),w&&v.map((function(a,t){return c.a.createElement(o.a,{className:"mt-1 justify-content-between status-row",key:"status-"+a.id},e.adminMode&&c.a.createElement(i.a,{xs:12,md:1,className:"px-0"},c.a.createElement(o.a,{className:"justify-content-center mt-1"},c.a.createElement(i.a,{xs:"auto"},c.a.createElement(d.a,{variant:"success",className:"admin-change-status-button",disabled:"status-green"===E(a.data.datefinished).class,onClick:function(){var e=[];e.push(a.id),Object(b.a)({mode:"update_entry",type:"done",docIdArray:e}).then((function(){B()}))}},"\u2714"))),c.a.createElement(o.a,{className:"justify-content-center mt-1"},c.a.createElement(i.a,{xs:"auto"},c.a.createElement(d.a,{variant:"danger",className:"admin-change-status-button",disabled:"status-green"===E(a.data.datefinished).class,onClick:function(){var e=[];e.push(a.id),Object(b.a)({mode:"update_entry",type:"duplicate",docIdArray:e}).then((function(){B()}))}},"\u2398"))),c.a.createElement(o.a,{className:"justify-content-center mt-1"},c.a.createElement(i.a,{xs:"auto"},c.a.createElement(d.a,{variant:"warning",className:"admin-change-status-button",disabled:"status-yellow"===E(a.data.datefinished).class,onClick:function(){var e=[];e.push(a.id),Object(b.a)({mode:"update_entry",type:"notdone",docIdArray:e}).then((function(){B()}))}},"\u27f2")))),c.a.createElement(i.a,{xs:12,md:e.adminMode?5:6,className:"px-0"},c.a.createElement(s.Suspense,{fallback:h},5!==a.data.color&&c.a.createElement(p,{data:{name:a.data.name,secondLine:a.data.titlecity,thirdLine:a.data.thirdline,colorCode:a.data.color}}),5===a.data.color&&c.a.createElement(p,{data:{name:a.data.name,colorCode:5,signColor:a.data.signcolor,attachment:a.data.attachment,height:a.data.height,width:a.data.width}}))),c.a.createElement(i.a,{xs:12,md:4,className:"px-0"},c.a.createElement(o.a,null,c.a.createElement(i.a,null,c.a.createElement("p",{className:"status-b-col-text"},"Requestor: ",a.data.requestor))),c.a.createElement(o.a,null,c.a.createElement(i.a,null,c.a.createElement("p",{className:"status-b-col-text"},"Requested: ",function(e){var a=(Date.now()-e)/864e4;return Math.floor(a)/10}(a.data.daterequest)," Days Ago"))),c.a.createElement(o.a,null,c.a.createElement(i.a,null,5!==a.data.color&&c.a.createElement("p",{className:"status-b-col-text"},"Quantity: ",a.data.quantity))),c.a.createElement(o.a,null,c.a.createElement(i.a,null,c.a.createElement("p",{className:"status-b-col-text"},"Comments: ",a.data.comments)))),c.a.createElement(i.a,{xs:12,md:2,className:E(a.data.datefinished).class},c.a.createElement("p",null,"STATUS: ",E(a.data.datefinished).text)))})))}}}]);
//# sourceMappingURL=10.20a96952.chunk.js.map