(this.webpackJsonpnametagapp=this.webpackJsonpnametagapp||[]).push([[12,13],{62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(100),i=a(59),l=a(101);a(65),a(62);t.default=function(e){var t,a,n=function(e){var t={bg:"",img:"null-space",defName:"Name",defSecond:"City, ST",quantity:"x2"};return 1===e?t.bg="tag-green":2===e?(t.bg="tag-greenmag",t.img="dvgold-img"):3===e?(t.bg="tag-bronze",t.img="dvwhite-img"):4===e?(t.bg="tag-outdoor",t.img="dvwhite-img",t.quantity="x3"):5===e?(t.bg="tag-sign",t.defName="Sign",t.defSecond="Put details in the comments",t.quantity=""):7===e?(t.bg="tag-green",t.defSecond="Title"):8===e?(t.bg="tag-greenmag",t.img="dvgold-img",t.defSecond="Title"):9===e?(t.bg="tag-bronze",t.img="dvwhite-img",t.defSecond="Title"):10===e?(t.bg="tag-outdoor",t.defSecond="Title",t.quantity="x3"):11===e?(t.bg="tag-basket",t.defName="<p style='font-size:60px;position:relative;top:-20%;'>&#8226;</p>",t.defSecond="<p style='font-size:19px;position:relative;bottom:30%;'>Basket Check</p>",t.quantity=""):12===e?(t.bg="tag-patrol",t.img="dvpatrol-img",t.quantity="x3"):13===e?(t.bg="tag-oldoutdoor",t.quantity="x3"):14===e?(t.bg="tag-blackdiamond",t.img="dvblackdiamond-img",t.quantity="x2"):11===e||(t.bg="tag-other"),t}(e.data.colorCode);n.bg=n.bg+"  justify-content-between";var c=[],d=e.data.name;return 5===e.data.colorCode&&((c=e.data.signColor.split(" / "))[0]="color-"+c[0].toLowerCase(),c[1]="bg-"+c[1].toLowerCase(),t=parseFloat(e.data.height),a=parseFloat(e.data.width),t*=50,a*=50,t+="px",a+="px",d=d.split("\n")),o.a.createElement(r.a,{xs:12,md:6,lg:4,className:"px-0"},5!==e.data.colorCode&&o.a.createElement(i.a,null,o.a.createElement(l.a,{className:n.bg},!("null-space"===n.img)&&o.a.createElement("div",{className:n.img}),o.a.createElement("div",{className:"title-parent"},o.a.createElement("div",{className:"title-text justify-content-center"},e.data.name),o.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.secondLine),o.a.createElement("div",{className:"smaller-text justify-content-center"},e.data.thirdLine)))),5===e.data.colorCode&&o.a.createElement(i.a,{style:{width:a,height:t,textAlign:"center",margin:"auto",display:"flex",flexDirection:"row"},className:c[1]+" "+c[0]+" bg-basic"},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"auto"}},d.map((function(e,t){return o.a.createElement(l.a,{className:"justify-content-center",key:t},e)})))))}},99:function(e,t,a){"use strict";a.r(t);var n=a(67),o=a(0),r=a.n(o),i=a(59),l=a(101),c=a(100),d=a(56),s=(a(39),a(63)),m=a(66),g=a(16);t.default=function(){var e=Object(o.useState)(-1),t=Object(n.a)(e,2),a=t[0],u=t[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("version");(e=parseInt(e))!==a&&-1!==a?(console.log("wrong local version: "+e+" of latest: "+a),window.location.reload(!0),localStorage.setItem("version",a)):e===a&&console.log("running latest version")}),[a]),Object(m.a)({mode:"get_app_version"}).then((function(e){e=parseInt(e),u(e)})),r.a.createElement(i.a,{className:"mt-1 justify-content-center"},r.a.createElement(l.a,{className:"justify-content-center nav-h4-bar-bg"},r.a.createElement(c.a,{xs:"auto"},r.a.createElement("h4",{className:"nav-h4-bar"},"CLICK TAG TYPE TO GET STARTED or GOTO")),r.a.createElement(c.a,{xs:"auto"},r.a.createElement(g.b,{to:"/status"},r.a.createElement(d.a,null,"ORDER STATUS")))),r.a.createElement(l.a,{className:"justify-content-between mt-3"},[{colorCode:1,name:"Green Tag",secondLine:"Indoor",thirdLine:""},{colorCode:2,name:"Green Tag Deerhead",secondLine:"Indoor",thirdLine:""},{colorCode:3,name:"Bronze Tag",secondLine:"Indoor Lodges",thirdLine:""},{colorCode:14,name:"Black Diamond Tag",secondLine:"-----------------------------",thirdLine:"Black Diamond Lodge"},{colorCode:4,name:"Outdoor Velcro Tag",secondLine:"Regular Outdoor",thirdLine:""},{colorCode:12,name:"Ski Patrol",secondLine:"Ski Patrol Only",thirdLine:""},{colorCode:13,name:"Old Black Card Tags",secondLine:"Old Under Armour Window Tags",thirdLine:""},{colorCode:5,name:"Custom Engraved Sign\nClick to Enter Details",signColor:"White / Blue",width:7,height:3}].map((function(e,t){return r.a.createElement(c.a,{className:"p-0 mb-1 justify-content-center start-tag-container",xs:"auto",key:t},5!==e.colorCode&&r.a.createElement("div",{className:"start-tag"},r.a.createElement(g.b,{to:"/create/"+e.colorCode},r.a.createElement(s.default,{data:e}))),5===e.colorCode&&r.a.createElement("div",{className:"start-tag-sign"},r.a.createElement(g.b,{to:"/sign"},r.a.createElement(s.default,{data:e}))))}))))}}}]);
//# sourceMappingURL=12.4f693683.chunk.js.map