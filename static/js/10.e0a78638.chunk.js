(this.webpackJsonpnametagapp=this.webpackJsonpnametagapp||[]).push([[10],{102:function(e,n,t){"use strict";var o,a=t(2),r=t(1),i=t(5),s=t(3),c=t.n(s),l=t(30),d=t(17),u=t(23),p=t(31);function f(e){if((!o&&0!==o||e)&&d.a){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),o=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return o}var h=t(0),m=t.n(h);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){void 0===e&&(e=Object(u.a)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}var v=t(74),y=t(20),E=t(6),w=t.n(E),O=t(11),k=t.n(O);function j(e,n){e.classList?e.classList.add(n):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function N(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function x(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=N(e.className,n):e.setAttribute("class",N(e.className&&e.className.baseVal||"",n))}var C=t(15);function F(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function S(e){var n;return F(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=Object(u.a)(e),t=F(n);return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var M=["template","script","style"],D=function(e,n,t){n=[].concat(n),[].forEach.call(e.children,(function(e){-1===n.indexOf(e)&&function(e){var n=e.nodeType,t=e.tagName;return 1===n&&-1===M.indexOf(t.toLowerCase())}(e)&&t(e)}))};function R(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var T,A=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,o=void 0===t||t,a=n.handleContainerOverflow,r=void 0===a||a;this.hideSiblingNodes=o,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return function(e,n){var t=-1;return e.some((function(e,o){return!!n(e,o)&&(t=o,!0)})),t}(this.data,(function(n){return-1!==n.modals.indexOf(e)}))},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(Object(C.a)(n,"paddingRight")||0,10)+this.scrollbarSize+"px"),Object(C.a)(n,t)},n.removeContainerStyle=function(e,n){var t=e.style;Object.keys(t).forEach((function(e){n.style[e]=t[e]}))},n.add=function(e,n,t){var o=this.modals.indexOf(e),a=this.containers.indexOf(n);if(-1!==o)return o;if(o=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;D(e,[t,o],(function(e){return R(!0,e)}))}(n,e),-1!==a)return this.data[a].modals.push(e),o;var r={modals:[e],classes:t?t.split(/\s+/):[],overflowing:S(n)};return this.handleContainerOverflow&&this.setContainerStyle(r,n),r.classes.forEach(j.bind(null,n)),this.containers.push(n),this.data.push(r),o},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),o=this.data[t],a=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.classes.forEach(x.bind(null,a)),this.handleContainerOverflow&&this.removeContainerStyle(o,a),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;D(e,[t,o],(function(e){return R(!1,e)}))}(a,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var r=o.modals[o.modals.length-1],i=r.backdrop;R(!1,r.dialog),R(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),H=t(75),B=t(98);var L=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))||this).state={exited:!n.props.show},n.onShow=function(){var e=n.props,t=e.container,o=e.containerClassName,a=e.onShow;n.getModalManager().add(b(n),t,o),n.removeKeydownListener=Object(y.a)(document,"keydown",n.handleDocumentKeyDown),n.removeFocusListener=Object(y.a)(document,"focus",(function(){return setTimeout(n.enforceFocus)}),!0),a&&a(),n.autoFocus()},n.onHide=function(){n.getModalManager().remove(b(n)),n.removeKeydownListener(),n.removeFocusListener(),n.props.restoreFocus&&n.restoreLastFocus()},n.setDialogRef=function(e){n.dialog=e},n.setBackdropRef=function(e){n.backdrop=e&&k.a.findDOMNode(e)},n.handleHidden=function(){var e;(n.setState({exited:!0}),n.onHide(),n.props.onExited)&&(e=n.props).onExited.apply(e,arguments)},n.handleBackdropClick=function(e){e.target===e.currentTarget&&(n.props.onBackdropClick&&n.props.onBackdropClick(e),!0===n.props.backdrop&&n.props.onHide())},n.handleDocumentKeyDown=function(e){n.props.keyboard&&27===e.keyCode&&n.isTopModal()&&(n.props.onEscapeKeyDown&&n.props.onEscapeKeyDown(e),n.props.onHide())},n.enforceFocus=function(){if(n.props.enforceFocus&&n._isMounted&&n.isTopModal()){var e=g(Object(H.a)(b(n)));n.dialog&&!Object(v.a)(n.dialog,e)&&n.dialog.focus()}},n.renderBackdrop=function(){var e=n.props,t=e.renderBackdrop,o=e.backdropTransition,a=t({ref:n.setBackdropRef,onClick:n.handleBackdropClick});return o&&(a=m.a.createElement(o,{appear:!0,in:n.props.show},a)),a},n}Object(i.a)(n,e),n.getDerivedStateFromProps=function(e){return e.show?{exited:!1}:e.transition?null:{exited:!0}};var t=n.prototype;return t.componentDidMount=function(){this._isMounted=!0,this.props.show&&this.onShow()},t.componentDidUpdate=function(e){var n=this.props.transition;!e.show||this.props.show||n?!e.show&&this.props.show&&this.onShow():this.onHide()},t.componentWillUnmount=function(){var e=this.props,n=e.show,t=e.transition;this._isMounted=!1,(n||t&&!this.state.exited)&&this.onHide()},t.getSnapshotBeforeUpdate=function(e){return d.a&&!e.show&&this.props.show&&(this.lastFocus=g()),null},t.getModalManager=function(){return this.props.manager?this.props.manager:(T||(T=new A),T)},t.restoreLastFocus=function(){this.lastFocus&&this.lastFocus.focus&&(this.lastFocus.focus(this.props.restoreFocusOptions),this.lastFocus=null)},t.autoFocus=function(){if(this.props.autoFocus){var e=g(Object(H.a)(this));this.dialog&&!Object(v.a)(this.dialog,e)&&(this.lastFocus=e,this.dialog.focus())}},t.isTopModal=function(){return this.getModalManager().isTopModal(this)},t.render=function(){var e=this.props,t=e.show,o=e.container,i=e.children,s=e.renderDialog,c=e.role,l=void 0===c?"dialog":c,d=e.transition,u=e.backdrop,p=e.className,f=e.style,h=e.onExit,b=e.onExiting,g=e.onEnter,v=e.onEntering,y=e.onEntered,E=Object(a.a)(e,["show","container","children","renderDialog","role","transition","backdrop","className","style","onExit","onExiting","onEnter","onEntering","onEntered"]);if(!(t||d&&!this.state.exited))return null;var w=Object(r.a)({role:l,ref:this.setDialogRef,"aria-modal":"dialog"===l||void 0},function(e,n){var t=Object.keys(e),o={};return t.forEach((function(t){Object.prototype.hasOwnProperty.call(n,t)||(o[t]=e[t])})),o}(E,n.propTypes),{style:f,className:p,tabIndex:"-1"}),O=s?s(w):m.a.createElement("div",w,m.a.cloneElement(i,{role:"document"}));return d&&(O=m.a.createElement(d,{appear:!0,unmountOnExit:!0,in:t,onExit:h,onExiting:b,onExited:this.handleHidden,onEnter:g,onEntering:v,onEntered:y},O)),k.a.createPortal(m.a.createElement(m.a.Fragment,null,u&&this.renderBackdrop(),O),o)},n}(m.a.Component);L.propTypes={show:w.a.bool,container:w.a.any,onShow:w.a.func,onHide:w.a.func,backdrop:w.a.oneOfType([w.a.bool,w.a.oneOf(["static"])]),renderDialog:w.a.func,renderBackdrop:w.a.func,onEscapeKeyDown:w.a.func,onBackdropClick:w.a.func,containerClassName:w.a.string,keyboard:w.a.bool,transition:w.a.elementType,backdropTransition:w.a.elementType,autoFocus:w.a.bool,enforceFocus:w.a.bool,restoreFocus:w.a.bool,restoreFocusOptions:w.a.shape({preventScroll:w.a.bool}),onEnter:w.a.func,onEntering:w.a.func,onEntered:w.a.func,onExit:w.a.func,onExiting:w.a.func,onExited:w.a.func,manager:w.a.object},L.defaultProps={show:!1,role:"dialog",backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,onHide:function(){},renderBackdrop:function(e){return m.a.createElement("div",e)}};var P=function(e){var n=m.a.forwardRef((function(n,t){var o=Object(B.a)(n.container);return o?m.a.createElement(e,Object(r.a)({},n,{ref:t,container:o})):null}));return n.Manager=A,n._Inner=e,n}(L);P.Manager=A;var _,I=P,U=t(73),z=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",K=".sticky-top",W=".navbar-toggler",V=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))||this).adjustAndStore=function(e,n,t){var o,a=n.style[e];n.dataset[e]=a,Object(C.a)(n,((o={})[e]=parseFloat(Object(C.a)(n,e))+t+"px",o))},n.restore=function(e,n){var t,o=n.dataset[e];void 0!==o&&(delete n.dataset[e],Object(C.a)(n,((t={})[e]=o,t)))},n}Object(i.a)(n,e);var t=n.prototype;return t.setContainerStyle=function(n,t){var o=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var a=f();Object(U.a)(t,z).forEach((function(e){return o.adjustAndStore("paddingRight",e,a)})),Object(U.a)(t,K).forEach((function(e){return o.adjustAndStore("margingRight",e,-a)})),Object(U.a)(t,W).forEach((function(e){return o.adjustAndStore("margingRight",e,a)}))}},t.removeContainerStyle=function(n,t){var o=this;e.prototype.removeContainerStyle.call(this,n,t),Object(U.a)(t,z).forEach((function(e){return o.restore("paddingRight",e)})),Object(U.a)(t,K).forEach((function(e){return o.restore("margingRight",e)})),Object(U.a)(t,W).forEach((function(e){return o.restore("margingRight",e)}))},n}(A),$=t(29),q=t(14),J=t(32),G=((_={})[q.b]="show",_[q.a]="show",_),Q=m.a.forwardRef((function(e,n){var t=e.className,o=e.children,i=Object(a.a)(e,["className","children"]),s=Object(h.useCallback)((function(e){Object(J.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return m.a.createElement(q.e,Object(r.a)({ref:n,addEndListener:$.a},i,{onEnter:s}),(function(e,n){return m.a.cloneElement(o,Object(r.a)({},n,{className:c()("fade",t,o.props.className,G[e])}))}))}));Q.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Q.displayName="Fade";var X=Q,Y=t(25),Z=Object(Y.a)("modal-body"),ee=m.a.createContext({onHide:function(){}}),ne=t(4),te=m.a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,i=e.centered,s=e.size,l=e.children,d=e.scrollable,u=Object(a.a)(e,["bsPrefix","className","centered","size","children","scrollable"]),p=(t=Object(ne.b)(t,"modal"))+"-dialog";return m.a.createElement("div",Object(r.a)({},u,{ref:n,className:c()(p,o,s&&t+"-"+s,i&&p+"-centered",d&&p+"-scrollable")}),m.a.createElement("div",{className:t+"-content"},l))}));te.displayName="ModalDialog";var oe=te,ae=Object(Y.a)("modal-footer"),re=t(24),ie={label:w.a.string.isRequired,onClick:w.a.func},se=m.a.forwardRef((function(e,n){var t=e.label,o=e.onClick,i=e.className,s=Object(a.a)(e,["label","onClick","className"]);return m.a.createElement("button",Object(r.a)({ref:n,type:"button",className:c()("close",i),onClick:o},s),m.a.createElement("span",{"aria-hidden":"true"},"\xd7"),m.a.createElement("span",{className:"sr-only"},t))}));se.displayName="CloseButton",se.propTypes=ie,se.defaultProps={label:"Close"};var ce=se,le=m.a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.closeLabel,i=e.closeButton,s=e.onHide,l=e.className,d=e.children,u=Object(a.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);t=Object(ne.b)(t,"modal-header");var p=Object(h.useContext)(ee),f=Object(re.a)((function(){p&&p.onHide(),s&&s()}));return m.a.createElement("div",Object(r.a)({ref:n},u,{className:c()(l,t)}),d,i&&m.a.createElement(ce,{label:o,onClick:f}))}));le.displayName="ModalHeader",le.defaultProps={closeLabel:"Close",closeButton:!1};var de,ue=le,pe=(de="h4",m.a.forwardRef((function(e,n){return m.a.createElement("div",Object(r.a)({},e,{ref:n,className:c()(e.className,de)}))}))),fe=Object(Y.a)("modal-title",{Component:pe}),he={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:oe,manager:new V};function me(e){return m.a.createElement(X,e)}function be(e){return m.a.createElement(X,e)}var ge=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))||this).state={style:{}},n.modalContext={onHide:function(){return n.props.onHide()}},n.setModalRef=function(e){n._modal=e},n.handleDialogMouseDown=function(){n._waitingForMouseUp=!0},n.handleMouseUp=function(e){n._waitingForMouseUp&&e.target===n._modal.dialog&&(n._ignoreBackdropClick=!0),n._waitingForMouseUp=!1},n.handleClick=function(e){n._ignoreBackdropClick||e.target!==e.currentTarget?n._ignoreBackdropClick=!1:n.props.onHide()},n.handleEnter=function(e){var t;e&&(e.style.display="block",n.updateDialogStyle(e));for(var o=arguments.length,a=new Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];n.props.onEnter&&(t=n.props).onEnter.apply(t,[e].concat(a))},n.handleEntering=function(e){for(var t,o=arguments.length,a=new Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];n.props.onEntering&&(t=n.props).onEntering.apply(t,[e].concat(a)),Object(l.a)(window,"resize",n.handleWindowResize)},n.handleExited=function(e){var t;e&&(e.style.display="");for(var o=arguments.length,a=new Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];n.props.onExited&&(t=n.props).onExited.apply(t,a),Object(p.a)(window,"resize",n.handleWindowResize)},n.handleWindowResize=function(){n.updateDialogStyle(n._modal.dialog)},n.renderBackdrop=function(e){var t=n.props,o=t.bsPrefix,a=t.backdropClassName,i=t.animation;return m.a.createElement("div",Object(r.a)({},e,{className:c()(o+"-backdrop",a,!i&&"show")}))},n}Object(i.a)(n,e);var t=n.prototype;return t.componentWillUnmount=function(){Object(p.a)(window,"resize",this.handleWindowResize)},t.updateDialogStyle=function(e){if(d.a){var n=this.props.manager.isContainerOverflowing(this._modal),t=e.scrollHeight>Object(u.a)(e).documentElement.clientHeight;this.setState({style:{paddingRight:n&&!t?f():void 0,paddingLeft:!n&&t?f():void 0}})}},t.render=function(){var e=this.props,n=e.bsPrefix,t=e.className,o=e.style,i=e.dialogClassName,s=e.children,l=e.dialogAs,d=e.show,u=e.animation,p=e.backdrop,f=e.keyboard,h=e.manager,b=e.onEscapeKeyDown,g=e.onShow,v=e.onHide,y=e.container,E=e.autoFocus,w=e.enforceFocus,O=e.restoreFocus,k=e.onEntered,j=e.onExit,N=e.onExiting,x=(e.onExited,e.onEntering,e.onEnter,e.onEntering,e.backdropClassName,Object(a.a)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","show","animation","backdrop","keyboard","manager","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","onEntered","onExit","onExiting","onExited","onEntering","onEnter","onEntering","backdropClassName"])),C=!0===p?this.handleClick:null,F=Object(r.a)({},o,{},this.state.style);return u||(F.display="block"),m.a.createElement(ee.Provider,{value:this.modalContext},m.a.createElement(I,{show:d,backdrop:p,container:y,keyboard:f,autoFocus:E,enforceFocus:w,restoreFocus:O,onEscapeKeyDown:b,onShow:g,onHide:v,onEntered:k,onExit:j,onExiting:N,manager:h,ref:this.setModalRef,style:F,className:c()(t,n),containerClassName:n+"-open",transition:u?me:void 0,backdropTransition:u?be:void 0,renderBackdrop:this.renderBackdrop,onClick:C,onMouseUp:this.handleMouseUp,onEnter:this.handleEnter,onEntering:this.handleEntering,onExited:this.handleExited},m.a.createElement(l,Object(r.a)({},x,{onMouseDown:this.handleDialogMouseDown,className:i}),s)))},n}(m.a.Component);ge.defaultProps=he;var ve=Object(ne.a)(ge,"modal");ve.Body=Z,ve.Header=ue,ve.Title=fe,ve.Footer=ae,ve.Dialog=oe,ve.TRANSITION_DURATION=300,ve.BACKDROP_TRANSITION_DURATION=150;n.a=ve},70:function(e,n,t){"use strict";function o(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(n,"a",(function(){return o}))},73:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var o=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,n){return o(e.querySelectorAll(n))}},74:function(e,n,t){"use strict";function o(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}t.d(n,"a",(function(){return o}))},75:function(e,n,t){"use strict";var o=t(11),a=t.n(o),r=t(23);n.a=function(e){return Object(r.a)(a.a.findDOMNode(e))}},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t(23),a=t(0),r=function(e){if("undefined"!==typeof document)return null==e?Object(o.a)().body:("function"===typeof e&&(e=e()),e&&e.current&&(e=e.current),e&&e.nodeType?e:null)};function i(e,n){var t=Object(a.useState)((function(){return r(e)})),o=t[0],i=t[1];if(!o){var s=r(e);s&&i(s)}return Object(a.useEffect)((function(){n&&o&&n(o)}),[n,o]),Object(a.useEffect)((function(){var n=r(e);n!==o&&i(n)}),[e,o]),o}}}]);
//# sourceMappingURL=10.e0a78638.chunk.js.map