(this.webpackJsonpnametagapp=this.webpackJsonpnametagapp||[]).push([[7,11],{62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(85),c=a(59),i=a(86);a(64),a(63);t.default=function(e){var t,a,n=function(e){var t={bg:"",img:"null-space",defName:"Name",defSecond:"City, ST",quantity:"x2"};return 1===e?t.bg="tag-green":2===e?(t.bg="tag-greenmag",t.img="dvgold-img"):3===e?(t.bg="tag-bronze",t.img="dvwhite-img"):4===e?(t.bg="tag-outdoor",t.quantity="x3"):5===e?(t.bg="tag-sign",t.defName="Sign",t.defSecond="Put details in the comments",t.quantity=""):7===e?(t.bg="tag-green",t.defSecond="Title"):8===e?(t.bg="tag-greenmag",t.img="dvgold-img",t.defSecond="Title"):9===e?(t.bg="tag-bronze",t.img="dvwhite-img",t.defSecond="Title"):10===e?(t.bg="tag-outdoor",t.defSecond="Title",t.quantity="x3"):11===e?(t.bg="tag-basket",t.defName="<p style='font-size:60px;position:relative;top:-20%;'>&#8226;</p>",t.defSecond="<p style='font-size:19px;position:relative;bottom:30%;'>Basket Check</p>",t.quantity=""):t.bg="tag-other",t}(e.data.colorCode);n.bg=n.bg+"  justify-content-between";var l=[],s=e.data.name;return 5===e.data.colorCode&&((l=e.data.signColor.split(" / "))[0]="color-"+l[0].toLowerCase(),l[1]="bg-"+l[1].toLowerCase(),t=parseFloat(e.data.height),a=parseFloat(e.data.width),t*=50,a*=50,t+="px",a+="px",s=s.split("\n")),o.a.createElement(r.a,{xs:12,md:6,lg:4,className:"px-0"},5!==e.data.colorCode&&o.a.createElement(c.a,null,o.a.createElement(i.a,{className:n.bg},!("null-space"===n.img)&&o.a.createElement("div",{className:n.img}),o.a.createElement("div",{className:"title-parent"},o.a.createElement("div",{className:"title-text justify-content-center"},e.data.name),o.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.secondLine),o.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.thirdLine)))),5===e.data.colorCode&&o.a.createElement(c.a,{style:{width:a,height:t,textAlign:"center",margin:"auto",display:"flex",flexDirection:"row"},className:l[1]+" "+l[0]+" bg-basic"},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"auto"}},s.map((function(e,t){return o.a.createElement(i.a,{className:"justify-content-center",key:t},e)})))))}},63:function(e,t,a){},64:function(e,t,a){},85:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(3),c=a.n(r),i=a(0),l=a.n(i),s=a(4),m=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,d=void 0===i?"div":i,u=Object(o.a)(e,["bsPrefix","className","as"]),g=Object(s.b)(a,"col"),f=[],p=[];return m.forEach((function(e){var t,a,n,o=u[e];if(delete u[e],null!=o&&"object"===typeof o){var r=o.span;t=void 0===r||r,a=o.offset,n=o.order}else t=o;var c="xs"!==e?"-"+e:"";null!=t&&f.push(!0===t?""+g+c:""+g+c+"-"+t),null!=n&&p.push("order"+c+"-"+n),null!=a&&p.push("offset"+c+"-"+a)})),f.length||f.push(g),l.a.createElement(d,Object(n.a)({},u,{ref:t,className:c.a.apply(void 0,[r].concat(f,p))}))}));d.displayName="Col",t.a=d},86:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(3),c=a.n(r),i=a(0),l=a.n(i),s=a(4),m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.noGutters,i=e.as,m=void 0===i?"div":i,d=e.className,u=Object(o.a)(e,["bsPrefix","noGutters","as","className"]),g=Object(s.b)(a,"row");return l.a.createElement(m,Object(n.a)({ref:t},u,{className:c()(d,g,r&&"no-gutters")}))}));m.defaultProps={noGutters:!1},t.a=m},99:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(59),c=a(86),i=a(85),l=a(56),s=a(62),m=a(16);t.default=function(){return o.a.createElement(r.a,{className:"mt-1 justify-content-center"},o.a.createElement(c.a,{className:"justify-content-center nav-h4-bar-bg"},o.a.createElement(i.a,{xs:"auto"},o.a.createElement("h4",{className:"nav-h4-bar"},"CLICK TAG TYPE TO GET STARTED or GOTO")),o.a.createElement(i.a,{xs:"auto"},o.a.createElement(m.b,{to:"/status"},o.a.createElement(l.a,null,"ORDER STATUS")))),o.a.createElement(c.a,{className:"justify-content-between mt-3"},[{colorCode:1,name:"Name",secondLine:"Title"},{colorCode:1,name:"Name",secondLine:"City, ST"},{colorCode:1,name:"Name",secondLine:"Title",thirdLine:"Department"},{colorCode:2,name:"Name",secondLine:"Title"},{colorCode:2,name:"Name",secondLine:"City, ST"},{colorCode:2,name:"Name",secondLine:"Title",thirdLine:"Department"},{colorCode:3,name:"Name",secondLine:"Title"},{colorCode:3,name:"Name",secondLine:"City, ST"},{colorCode:3,name:"Name",secondLine:"Title",thirdLine:"Department"},{colorCode:4,name:"Name",secondLine:"Title"},{colorCode:4,name:"Name",secondLine:"City, ST"},{colorCode:4,name:"Name",secondLine:"Title",thirdLine:"Department"},{colorCode:11,name:"Ski / Basket Check",secondLine:"Click to Enter Details"},{colorCode:5,name:"Custom Sign\nClick to Enter Details",signColor:"White / Blue",width:7,height:3}].map((function(e,t){return o.a.createElement(i.a,{className:"p-0 mb-1 justify-content-center start-tag-container",xs:"auto",key:t},5!==e.colorCode&&o.a.createElement("div",{className:"start-tag"},o.a.createElement(m.b,{to:"/create/"+e.colorCode},o.a.createElement(s.default,{data:e}))),5===e.colorCode&&o.a.createElement("div",{className:"start-tag-sign"},o.a.createElement(m.b,{to:"/sign"},o.a.createElement(s.default,{data:e}))))}))))}}}]);
//# sourceMappingURL=7.d295756e.chunk.js.map