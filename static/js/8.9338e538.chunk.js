(this.webpackJsonpnametagapp=this.webpackJsonpnametagapp||[]).push([[8,13],{101:function(e,a,t){"use strict";t.r(a);var n=t(73),r=t(67),i=t(0),o=t.n(i),l=t(9),c=t(16),s=t(59),m=t(87),u=t(86),d=t(56),h=t(100),f=t(105),g=(t(39),t(63)),p=t(66),E=t(64);a.default=function(){var e=parseInt(Object(l.g)().id),a=Object(l.f)(),t=Object(i.useState)([{name:"",color:e,secondLine:"",thirdLine:"",requestor:"",comments:"",quantity:1===e?"2 PINS":4===e||12===e?"3 VELCRO":13===e?"3 CARDS ONLY":"2 MAGNETS"}]),b=Object(r.a)(t,2),y=b[0],N=b[1];Object(i.useEffect)((function(){""===y[0].name&&""===y[0].requestor?(A(!0),j(0)):""===y[0].name?(A(!0),j(2)):""===y[0].requestor?(A(!0),j(1)):""!==y[0].name&&""!==y[0].requestor?(A(!1),j(4)):console.log("updateSubmitGrey() ran into some other condition on validation!")}),[y]);var v=Object(i.useState)(!0),w=Object(r.a)(v,2),x=w[0],A=w[1],C=Object(i.useState)(0),S=Object(r.a)(C,2),O=S[0],j=S[1];return o.a.createElement(s.a,null,o.a.createElement(m.a,{className:"justify-content-between nav-h4-bar-bg"},o.a.createElement(u.a,{xs:"auto",className:"p-0"},o.a.createElement(c.b,{to:"/"},o.a.createElement(d.a,null,"BACK"))),o.a.createElement(u.a,{xs:"auto"},o.a.createElement("h4",{className:"nav-h4-bar"},"NEW TAG")),o.a.createElement(u.a,{xs:"auto",className:"p-0"},o.a.createElement(c.b,{to:"/createmultiple/"+e},o.a.createElement(d.a,null,"NEED MULTIPLES?")))),o.a.createElement(m.a,{className:"mt-3"},o.a.createElement(u.a,{xs:12,md:6,lg:4,className:"justify-content-center"},o.a.createElement(m.a,null,"Preview: "),o.a.createElement(m.a,null,o.a.createElement(g.default,{data:{colorCode:e,name:y[0].name,secondLine:y[0].secondLine,thirdLine:y[0].thirdLine}}))),o.a.createElement(u.a,{xs:12,md:6,lg:8},o.a.createElement(m.a,null,o.a.createElement(h.a,{className:"mt-4"},o.a.createElement(f.a,{placeholder:"Requestor (or: WHO to Mail it to)","aria-label":"Requestor",onChange:function(e){var a=Object(p.a)(e.target.value,3);if(0!==a){var t=y[0];t.requestor=a,N([t])}else{var n=y[0];n.requestor="",N([n])}}}))),o.a.createElement(m.a,null,o.a.createElement(h.a,{className:"mt-3"},o.a.createElement(f.a,{placeholder:"Name on tag","aria-label":"Name",onChange:function(e){var a=Object(p.a)(e.target.value,3);if(0!==a){var t=y[0];t.name=a,N([t])}else{var n=y[0];n.name="",N([n])}}}))))),o.a.createElement(m.a,null,o.a.createElement(h.a,{className:"mt-3"},o.a.createElement(f.a,{placeholder:"Title OR: City, ST","aria-label":"Second Line",onChange:function(e){var a=Object(p.a)(e.target.value),t=y[0];t.secondLine=a,N([t])}}))),o.a.createElement(m.a,null,o.a.createElement(h.a,{className:"mt-3"},o.a.createElement(f.a,{placeholder:"Third Line(if applicable)","aria-label":"Third Line",onChange:function(e){var a=Object(p.a)(e.target.value),t=y[0];t.thirdLine=a,N([t])}}))),o.a.createElement(m.a,null,o.a.createElement(h.a,{className:"mt-3"},o.a.createElement(f.a,{as:"textarea",placeholder:"Comments","aria-label":"Comments",onChange:function(e){var a=Object(p.a)(e.target.value),t=y[0];t.comments=a,N([t])}}))),(1===e||2===e||3===e)&&o.a.createElement(m.a,{className:"justify-content-between pinmag-row mt-3"},o.a.createElement(u.a,{xs:12,md:"auto",className:"px-0"},o.a.createElement("label",{className:"mb-0"},o.a.createElement(h.a,null,o.a.createElement(h.a.Prepend,null,o.a.createElement(h.a.Radio,{name:"pinmag","aria-label":"Radio for PIN",defaultChecked:1===e,onChange:function(e){if(e.target.checked){var a=y;a[0].quantity="2 PINS",N(Object(n.a)(a))}}})),o.a.createElement(h.a.Append,null,o.a.createElement(h.a.Text,null,"2 PINS"))))),o.a.createElement(u.a,{xs:12,md:"auto",className:"px-0"},o.a.createElement("label",{className:"mb-0"},o.a.createElement(h.a,null,o.a.createElement(h.a.Prepend,null,o.a.createElement(h.a.Radio,{name:"pinmag","aria-label":"Radio for PIN",defaultChecked:1!==e,onChange:function(e){if(e.target.checked){var a=y;a[0].quantity="2 MAGNETS",N(Object(n.a)(a))}}})),o.a.createElement(h.a.Append,null,o.a.createElement(h.a.Text,null,"2 MAGNETS"))))),o.a.createElement(u.a,{xs:12,md:"auto",className:"px-0"},o.a.createElement("label",{className:"mb-0"},o.a.createElement(h.a,null,o.a.createElement(h.a.Prepend,null,o.a.createElement(h.a.Radio,{name:"pinmag","aria-label":"Radio for PIN and MAG",onChange:function(e){if(e.target.checked){var a=y;a[0].quantity="1 PIN + 1 MAGNET",N(Object(n.a)(a))}}})),o.a.createElement(h.a.Append,null,o.a.createElement(h.a.Text,null,"1 PIN + 1 MAGNET")))))),(12===e||4===e)&&o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("p",{className:"mt-2 red-text"},"Each name ordered will come with 3 outdoor tags with velcro."))),13===e&&o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("p",{className:"mt-2 red-text"},"Each name ordered will come with 3 outdoor tags that should slip right into the window of the uniform."))),(1===e||2===e||3===e||14===e)&&o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("p",{className:"mt-2 red-text"},"Pins may be provided if magnet supply is low or out!",o.a.createElement("br",null),"Deer Heads: Managers, Supervisors, Guest Svc, Directors, VPs, Attendants, Bronze Tags, Lodges, Fireside, and Chefs",o.a.createElement("br",null),"Plain Tag: Everybody else"))),o.a.createElement(m.a,{className:"mt-3 justify-content-end"},o.a.createElement(u.a,{xs:12,md:6,lg:"auto"},o.a.createElement("p",{className:"mt-2"},["There must be a requestor, The Name on the tag must be at least 3 characters","There must be a requestor.","The Name on the tag must be at least 3 characters","Submitting...",""][O])),o.a.createElement(u.a,{xs:12,md:6,lg:"auto"},o.a.createElement(d.a,{type:"submit",disabled:x,onClick:function(){!1===x&&(j(3),Object(E.a)({mode:"new_entry",writeData:y}).then((function(e){a.push("/status")})))}},"Submit Request"))))}},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(86),o=t(59),l=t(87);t(65),t(62);a.default=function(e){var a,t,n=function(e){var a={bg:"",img:"null-space",defName:"Name",defSecond:"City, ST",quantity:"x2"};return 1===e?a.bg="tag-green":2===e?(a.bg="tag-greenmag",a.img="dvgold-img"):3===e?(a.bg="tag-bronze",a.img="dvwhite-img"):4===e?(a.bg="tag-outdoor",a.img="dvwhite-img",a.quantity="x3"):5===e?(a.bg="tag-sign",a.defName="Sign",a.defSecond="Put details in the comments",a.quantity=""):7===e?(a.bg="tag-green",a.defSecond="Title"):8===e?(a.bg="tag-greenmag",a.img="dvgold-img",a.defSecond="Title"):9===e?(a.bg="tag-bronze",a.img="dvwhite-img",a.defSecond="Title"):10===e?(a.bg="tag-outdoor",a.defSecond="Title",a.quantity="x3"):11===e?(a.bg="tag-basket",a.defName="<p style='font-size:60px;position:relative;top:-20%;'>&#8226;</p>",a.defSecond="<p style='font-size:19px;position:relative;bottom:30%;'>Basket Check</p>",a.quantity=""):12===e?(a.bg="tag-patrol",a.img="dvpatrol-img",a.quantity="x3"):13===e?(a.bg="tag-oldoutdoor",a.quantity="x3"):14===e?(a.bg="tag-blackdiamond",a.img="dvblackdiamond-img",a.quantity="x2"):11===e||(a.bg="tag-other"),a}(e.data.colorCode);n.bg=n.bg+"  justify-content-between";var c=[],s=e.data.name;return 5===e.data.colorCode&&((c=e.data.signColor.split(" / "))[0]="color-"+c[0].toLowerCase(),c[1]="bg-"+c[1].toLowerCase(),a=parseFloat(e.data.height),t=parseFloat(e.data.width),a*=50,t*=50,a+="px",t+="px",s=s.split("\n")),r.a.createElement(i.a,{xs:12,md:6,lg:4,className:"px-0"},5!==e.data.colorCode&&r.a.createElement(o.a,null,r.a.createElement(l.a,{className:n.bg},!("null-space"===n.img)&&r.a.createElement("div",{className:n.img}),r.a.createElement("div",{className:"title-parent"},r.a.createElement("div",{className:"title-text justify-content-center"},e.data.name),r.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.secondLine),r.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.thirdLine)))),5===e.data.colorCode&&r.a.createElement(o.a,{style:{width:t,height:a,textAlign:"center",margin:"auto",display:"flex",flexDirection:"row"},className:c[1]+" "+c[0]+" bg-basic"},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"auto"}},s.map((function(e,a){return r.a.createElement(l.a,{className:"justify-content-center",key:a},e)})))))}},64:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n,r,i=t(68),o=t.n(i);t(69),t(70);function l(e,a){return new Promise((function(t,n){o.a.auth().setPersistence(o.a.auth.Auth.Persistence.NONE).then((function(){return o.a.auth().signInWithEmailAndPassword(e,a)})).then((function(){t(!0)})).catch((function(e){var a=e.code,t=e.message;n({code:a,msg:t})}))}))}function c(){return new Promise((function(e,a){o.a.auth().onAuthStateChanged((function(a){a?(console.log("checkAuth() passed with user: "+a.email),e(a.email)):console.log("checkAuth() failed: no credentials.")}))}))}function s(e){if("undefined"==typeof o.a.apps[0]){o.a.initializeApp({apiKey:"AIzaSyA1uPdDnmLSWqkuEkFlGH5YF7UvxvszceU",authDomain:"nametags-4019a.firebaseapp.com",projectId:"nametags-4019a"});var a=o.a.firestore();n=a.collection("names");var t=Math.sqrt(4356);t="iamanonymous"+t,l("anonymous@deervalley.com",t+="6")}if("auth"===e.mode)return new Promise((function(a,t){l(e.authUser,e.authPass).then((function(){c().then((function(e){a(e)})).catch((function(e){}))})).catch((function(e){t(e)}))}));if("read_all"===e.mode)return r=[],new Promise((function(e,a){c().then((function(){n.where("datefinished","==",0).get().then((function(a){a.forEach((function(e){-1===r.findIndex((function(a){return a.id===e.id}))&&r.push({id:e.id,data:e.data()})})),e(r)}))}))}));if("search_for"===e.mode){var i=[];return new Promise((function(a,t){c().then((function(){n.where("namearray","array-contains-any",[e.searchForString]).get().then((function(e){e.forEach((function(e){i.push({id:e.id,data:e.data()})}))})).then((function(){n.where("requestorarray","array-contains-any",[e.searchForString]).get().then((function(e){e.forEach((function(e){-1===i.findIndex((function(a){return a.id===e.id}))&&i.push({id:e.id,data:e.data()})})),a(i)}))}))}))}))}if("new_entry"===e.mode)return r=[],new Promise((function(a,t){c().then((function(){e.writeData.forEach((function(e,t){var r=e.name,i=e.requestor,o=r.toLowerCase(),l=i.toLowerCase(),c=o.split(" "),s=l.split(" ");c.unshift(o),s.unshift(l);var m=(new Date).getTime();5===e.color?n.add({name:r,namearray:c,color:5,attachment:e.attachment,signcolor:e.signColor,signquantity:e.signQuantity,height:e.height,width:e.width,thickness:e.thickness,requestor:i,requestorarray:s,comments:e.comments,daterequest:m,datefinished:0}).then((function(){a(!0)})):n.add({name:r,namearray:c,color:e.color,titlecity:e.secondLine,thirdline:e.thirdLine,requestor:i,requestorarray:s,comments:e.comments,daterequest:m,datefinished:0,quantity:e.quantity}).then((function(){a(!0)}))}))}))}));if("auth"===e.mode);else{if("update_entry"===e.mode)return new Promise((function(a,t){var r;if("done"===e.type){var i=new Date;r=i.getTime()}else"notdone"===e.type&&(r=0);e.docIdArray.forEach((function(e,t){n.doc(e).update({datefinished:r}).then((function(){console.log("Document successfully written on update_entry()!"),a(!0)})).catch((function(e){console.error("Error writing document on update_entry(): ",e)}))}))}));console.log("dbUtility() was called using a non supported utilityObj mode."),console.log("supported modes are 'read_all', 'search_for', 'new_entry', 'update_entry', or 'auth'."),console.log(e.mode)}}},66:function(e,a,t){"use strict";function n(e,a){var t=function(e){if(""===e)return"";return e.match(/\w|\n|\r|\t|\d|[.!,?@ /&*()#$%-=+"']|[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\xff]/g).join("")}(e);return e.length<a?"":t=function(e){var a,t=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],n=e.split(",");2===n.length&&(a=n[1].slice(1));if(1===n.length){var r=(n=n[0].split(" "))[n.length-1];n.pop();var i=[];i[0]=n.join(" "),i.push(r),a=(n=i)[1]}var o=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].indexOf(a);if(-1!==o)return n[0]+", "+t[o];var l=["Al","Ak","Az","Ar","Ca","Co","Ct","De","Dc","Fl","Hi","Id","Il","In","Ia","Ks","Ky","La","Me","Md","Ma","Mi","Mn","Ms","Mo","Mt","Ne","Nv","Nh","Nj","Nm","Ny","Nc","Nd","Oh","Ok","Or","Pa","Ri","Sc","Sd","Tn","Tx","Ut","Vt","Va","Wa","Wv","Wi","Wy"].indexOf(a);return-1!==l?n[0]+", "+t[l]:e}(t=function(e){var a=e.split(" ");""===a[a.length-1]&&a.pop();var t=a.map((function(e){var a=e[0].toUpperCase();return e=a+""+(e=e.slice(1))}));return t=t.join(" ")}(t=function(e){var a=e.split(",");if(a.length>1){var t=a[1];return a=" "===t[0]?a.join(","):a.join(", ")}return e}(t)))}t.d(a,"a",(function(){return n}))},73:function(e,a,t){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=8.9338e538.chunk.js.map