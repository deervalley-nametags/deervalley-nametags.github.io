(this.webpackJsonpnametagapp=this.webpackJsonpnametagapp||[]).push([[11,13],{62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(86),l=a(59),i=a(87);a(65),a(62);t.default=function(e){var t,a,n=function(e){var t={bg:"",img:"null-space",defName:"Name",defSecond:"City, ST",quantity:"x2"};return 1===e?t.bg="tag-green":2===e?(t.bg="tag-greenmag",t.img="dvgold-img"):3===e?(t.bg="tag-bronze",t.img="dvwhite-img"):4===e?(t.bg="tag-outdoor",t.img="dvwhite-img",t.quantity="x3"):5===e?(t.bg="tag-sign",t.defName="Sign",t.defSecond="Put details in the comments",t.quantity=""):7===e?(t.bg="tag-green",t.defSecond="Title"):8===e?(t.bg="tag-greenmag",t.img="dvgold-img",t.defSecond="Title"):9===e?(t.bg="tag-bronze",t.img="dvwhite-img",t.defSecond="Title"):10===e?(t.bg="tag-outdoor",t.defSecond="Title",t.quantity="x3"):11===e?(t.bg="tag-basket",t.defName="<p style='font-size:60px;position:relative;top:-20%;'>&#8226;</p>",t.defSecond="<p style='font-size:19px;position:relative;bottom:30%;'>Basket Check</p>",t.quantity=""):12===e?(t.bg="tag-patrol",t.img="dvpatrol-img",t.quantity="x3"):13===e?(t.bg="tag-oldoutdoor",t.quantity="x3"):14===e?(t.bg="tag-blackdiamond",t.img="dvblackdiamond-img",t.quantity="x2"):11===e||(t.bg="tag-other"),t}(e.data.colorCode);n.bg=n.bg+"  justify-content-between";var s=[],c=e.data.name;return 5===e.data.colorCode&&((s=e.data.signColor.split(" / "))[0]="color-"+s[0].toLowerCase(),s[1]="bg-"+s[1].toLowerCase(),t=parseFloat(e.data.height),a=parseFloat(e.data.width),t*=50,a*=50,t+="px",a+="px",c=c.split("\n")),o.a.createElement(r.a,{xs:12,md:6,lg:4,className:"px-0"},5!==e.data.colorCode&&o.a.createElement(l.a,null,o.a.createElement(i.a,{className:n.bg},!("null-space"===n.img)&&o.a.createElement("div",{className:n.img}),o.a.createElement("div",{className:"title-parent"},o.a.createElement("div",{className:"title-text justify-content-center"},e.data.name),o.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.secondLine),o.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.thirdLine)))),5===e.data.colorCode&&o.a.createElement(l.a,{style:{width:a,height:t,textAlign:"center",margin:"auto",display:"flex",flexDirection:"row"},className:s[1]+" "+s[0]+" bg-basic"},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"auto"}},c.map((function(e,t){return o.a.createElement(i.a,{className:"justify-content-center",key:t},e)})))))}},86:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(3),l=a.n(r),i=a(0),s=a.n(i),c=a(4),d=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,m=void 0===i?"div":i,g=Object(o.a)(e,["bsPrefix","className","as"]),u=Object(c.b)(a,"col"),f=[],b=[];return d.forEach((function(e){var t,a,n,o=g[e];if(delete g[e],null!=o&&"object"===typeof o){var r=o.span;t=void 0===r||r,a=o.offset,n=o.order}else t=o;var l="xs"!==e?"-"+e:"";null!=t&&f.push(!0===t?""+u+l:""+u+l+"-"+t),null!=n&&b.push("order"+l+"-"+n),null!=a&&b.push("offset"+l+"-"+a)})),f.length||f.push(u),s.a.createElement(m,Object(n.a)({},g,{ref:t,className:l.a.apply(void 0,[r].concat(f,b))}))}));m.displayName="Col",t.a=m},87:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(3),l=a.n(r),i=a(0),s=a.n(i),c=a(4),d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.noGutters,i=e.as,d=void 0===i?"div":i,m=e.className,g=Object(o.a)(e,["bsPrefix","noGutters","as","className"]),u=Object(c.b)(a,"row");return s.a.createElement(d,Object(n.a)({ref:t},g,{className:l()(m,u,r&&"no-gutters")}))}));d.defaultProps={noGutters:!1},t.a=d},99:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(59),l=a(87),i=a(86),s=a(56),c=(a(39),a(63)),d=a(16);t.default=function(){var e=parseFloat(localStorage.getItem("version"));return console.log("local version: "+e),console.log("latest version: 7.0004"),7.0004!==e&&(window.location.reload(!0),localStorage.setItem("version",7.0004)),o.a.createElement(r.a,{className:"mt-1 justify-content-center"},o.a.createElement(l.a,{className:"justify-content-center nav-h4-bar-bg"},o.a.createElement(i.a,{xs:"auto"},o.a.createElement("h4",{className:"nav-h4-bar"},"CLICK TAG TYPE TO GET STARTED or GOTO")),o.a.createElement(i.a,{xs:"auto"},o.a.createElement(d.b,{to:"/status"},o.a.createElement(s.a,null,"ORDER STATUS")))),o.a.createElement(l.a,{className:"justify-content-between mt-3"},[{colorCode:1,name:"Green Tag",secondLine:"Indoor",thirdLine:""},{colorCode:2,name:"Green Tag Deerhead",secondLine:"Indoor",thirdLine:""},{colorCode:3,name:"Bronze Tag",secondLine:"Indoor Lodges",thirdLine:""},{colorCode:14,name:"Black Diamond Tag",secondLine:"-----------------------------",thirdLine:"Black Diamond Lodge"},{colorCode:4,name:"Outdoor Velcro Tag",secondLine:"Regular Outdoor",thirdLine:""},{colorCode:12,name:"Ski Patrol",secondLine:"Ski Patrol Only",thirdLine:""},{colorCode:13,name:"Old Black Card Tags",secondLine:"Old Under Armour Window Tags",thirdLine:""},{colorCode:5,name:"Custom Engraved Sign\nClick to Enter Details",signColor:"White / Blue",width:7,height:3}].map((function(e,t){return o.a.createElement(i.a,{className:"p-0 mb-1 justify-content-center start-tag-container",xs:"auto",key:t},5!==e.colorCode&&o.a.createElement("div",{className:"start-tag"},o.a.createElement(d.b,{to:"/create/"+e.colorCode},o.a.createElement(c.default,{data:e}))),5===e.colorCode&&o.a.createElement("div",{className:"start-tag-sign"},o.a.createElement(d.b,{to:"/sign"},o.a.createElement(c.default,{data:e}))))}))))}}}]);
//# sourceMappingURL=11.45cb5527.chunk.js.map