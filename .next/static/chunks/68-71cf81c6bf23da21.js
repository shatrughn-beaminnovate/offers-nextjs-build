"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68],{5612:function(e,t,n){n.d(t,{U:function(){return T}});var r=n(7294);let i=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],a=e=>({_s:e,status:i[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}),o=e=>e?6:5,u=(e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return o(t)}},l=e=>"object"==typeof e?[e.enter,e.exit]:[e,e],s=(e,t)=>setTimeout(()=>{isNaN(document.body.offsetTop)||e(t+1)},0),c=new Map,f=new Map,d=(e,t,n,r,i,o)=>{clearTimeout(i);let u=a(t),l=new Map(r.current);l.set(e,u),n(l),r.current=l,o&&o({key:e,current:u})},p=({allowMultiple:e,enter:t=!0,exit:n=!0,preEnter:i,preExit:a,timeout:p,initialEntered:h,mountOnEnter:g,unmountOnExit:v,onStateChange:m}={})=>{let[y,b]=(0,r.useState)(c),E=(0,r.useRef)(y),_=(0,r.useRef)(f),[w,x]=l(p),N=(0,r.useCallback)((e,t)=>{let{initialEntered:n=h}=t||{};d(e,n?2:o(g),b,E),_.current.set(e,{})},[h,g]),L=(0,r.useCallback)(e=>{let t=new Map(E.current);return!!t.delete(e)&&(b(t),E.current=t,_.current.delete(e),!0)},[]),T=(0,r.useCallback)(e=>{let t=E.current.get(e);if(!t)return;let{timeoutId:n}=_.current.get(e),r=u(t._s,v);r&&d(e,r,b,E,n,m)},[m,v]),D=(0,r.useCallback)((r,u)=>{let l=E.current.get(r);if(!l)return;let c=_.current.get(r),f=e=>{switch(d(r,e,b,E,c.timeoutId,m),e){case 1:w>=0&&(c.timeoutId=setTimeout(()=>T(r),w));break;case 4:x>=0&&(c.timeoutId=setTimeout(()=>T(r),x));break;case 0:case 3:c.timeoutId=s(f,e)}},p=l.isEnter;"boolean"!=typeof u&&(u=!p),u?!p&&(f(t?i?0:1:2),e||E.current.forEach((e,t)=>t!==r&&D(t,!1))):p&&f(n?a?3:4:o(v))},[m,T,e,t,n,i,a,w,x,v]),A=(0,r.useCallback)(t=>{if(e||!1===t)for(let e of E.current.keys())D(e,t)},[e,D]);return{stateMap:y,toggle:D,toggleAll:A,endTransition:T,setItem:N,deleteItem:L}},h=(e,t)=>!0===e||!!(e&&e[t]),g=({transition:e,transitionTimeout:t,...n}={})=>{let r=p({timeout:t,enter:h(e,"enter"),exit:h(e,"exit"),preEnter:h(e,"preEnter"),preExit:h(e,"preExit"),...n});return{mountOnEnter:!!n.mountOnEnter,initialEntered:!!n.initialEntered,...r}};var v=n(1620),m=n(7287),y=n(3622),b=n(5893);let E=e=>(0,b.jsx)(v.SY.Provider,{...e}),_=e=>{do e=e.parentElement;while(e&&!e.hasAttribute(v.gE));return e},w=(e,t,n)=>e?t>0?t-1:n-1:(t+1)%n,x=(e,t)=>{let{activeElement:n}=document;if(!n||!n.hasAttribute(v.OM)||_(n)!==t.currentTarget)return;let r=t.currentTarget.querySelectorAll(`[${v.OM}]`),{length:i}=r;for(let a=0;a<i;a++)if(r[a]===n){let n=w(e,a,i);for(;_(r[a])!==_(r[n]);)n=w(e,n,i);a!==n&&(t.preventDefault(),r[n].focus());break}},N=()=>({accordionProps:{[v.gE]:"",onKeyDown:e=>"ArrowUp"===e.key?x(!0,e):"ArrowDown"===e.key&&x(!1,e)}}),L=(0,r.forwardRef)(({providerValue:e,className:t,...n},r)=>{let{accordionProps:i}=N();return(0,b.jsx)(E,{value:e,children:(0,b.jsx)("div",{...(0,y.d)(i,n),ref:r,className:(0,m.P)(v.Kj)(t)})})});L.displayName="ControlledAccordion";let T=(0,r.forwardRef)(({allowMultiple:e,initialEntered:t,mountOnEnter:n,unmountOnExit:r,transition:i,transitionTimeout:a,onStateChange:o,...u},l)=>{let s=g({allowMultiple:e,initialEntered:t,mountOnEnter:n,unmountOnExit:r,transition:i,transitionTimeout:a,onStateChange:o});return(0,b.jsx)(L,{...u,ref:l,providerValue:s})});T.displayName="Accordion"},4039:function(e,t,n){n.d(t,{Q:function(){return E}});var r=n(7294),i=n(1620),a=n(7287),o=n(3622);let u=0,l=r.useId||(()=>{let[e,t]=(0,r.useState)();return(0,r.useEffect)(()=>t(++u),[]),e&&`${i.o6}-${e}`}),s=({state:e,toggle:t,disabled:n})=>{let r=l(),a=r&&r+"-",o={id:r,"aria-controls":a,"aria-expanded":e.isEnter,onClick:t};return n?o.disabled=!0:o[i.OM]="",{buttonProps:o,panelProps:{id:a,"aria-labelledby":r,role:"region"}}},c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,f=({status:e,isResolved:t})=>{let[n,i]=(0,r.useState)(),a=(0,r.useRef)(null);return c(()=>{("preEnter"===e||"preExit"===e)&&i(a.current.getBoundingClientRect().height)},[e]),[{height:"preEnter"===e||"exiting"===e?0:"entering"===e||"preExit"===e?n:void 0,overflow:t?void 0:"hidden"},a]};function d(e,t){"function"==typeof e?e(t):e.current=t}function p(e,t){return(0,r.useMemo)(()=>e?t?n=>{d(e,n),d(t,n)}:e:t,[e,t])}let h=(e,t,n)=>{let{stateMap:r,mountOnEnter:i,initialEntered:a}=e,o=null!=n?n:a;return r.get(t)||{status:o?"entered":i?"unmounted":"exited",isMounted:!i,isEnter:o,isResolved:!0}},g=()=>(0,r.useContext)(i.SY),v=({itemKey:e,initialEntered:t,disabled:n}={})=>{let i=(0,r.useRef)(null),a=g(),o=null!=e?e:i.current,u=h(a,o,t),{setItem:l,deleteItem:s,toggle:c}=a;return(0,r.useEffect)(()=>{if(n)return;let r=null!=e?e:i.current;return l(r,{initialEntered:t}),()=>void s(r)},[l,s,e,t,n]),{itemRef:i,state:u,toggle:(0,r.useCallback)(e=>c(o,e),[c,o])}};var m=n(5893);let y=(e,t)=>"function"==typeof e?e(t):e,b=(0,r.memo)(({forwardedRef:e,itemRef:t,state:n,toggle:r,className:u,disabled:l,header:c,headingTag:d="h3",headingProps:h,buttonProps:g,contentProps:v,panelProps:b,children:E,..._})=>{let w={state:n,toggle:r,disabled:l},{buttonProps:x,panelProps:N}=s(w),[L,T]=f(n),D=p(b&&b.ref,T),{status:A,isMounted:U,isEnter:I}=n;return(0,m.jsxs)("div",{..._,ref:p(e,t),className:(0,a.P)(i.Kj,"item",{status:A,expanded:I})(u,n),children:[(0,m.jsx)(d,{...h,style:{margin:0,...h&&h.style},className:(0,a.P)(i.Kj,"item-heading")(h&&h.className,n),children:(0,m.jsx)("button",{...(0,o.d)(x,g),type:"button",className:(0,a.P)(i.Kj,"item-btn")(g&&g.className,n),children:y(c,w)})}),U&&(0,m.jsx)("div",{...v,style:{display:"exited"===A?"none":void 0,...L,...v&&v.style},className:(0,a.P)(i.Kj,"item-content")(v&&v.className,n),children:(0,m.jsx)("div",{...(0,o.d)(N,b),ref:D,className:(0,a.P)(i.Kj,"item-panel")(b&&b.className,n),children:y(E,w)})})]})});b.displayName="AccordionItem";let E=(e=>{let t=(0,r.forwardRef)(({itemKey:t,initialEntered:n,...r},i)=>(0,m.jsx)(e,{forwardedRef:i,...r,...v({itemKey:t,initialEntered:n,disabled:r.disabled})}));return t.displayName="WithAccordionItem",t})(b)},7287:function(e,t,n){n.d(t,{P:function(){return r}});let r=(e,t,n)=>(r,i)=>{let a=t?`${e}__${t}`:e,o=a;n&&Object.keys(n).forEach(e=>{let t=n[e];t&&(o+=` ${a}--${!0===t?e:`${e}-${t}`}`)});let u="function"==typeof r?r(i):r;return"string"==typeof u&&(u=u.trim())&&(o+=` ${u}`),o}},1620:function(e,t,n){n.d(t,{Kj:function(){return i},OM:function(){return u},SY:function(){return l},gE:function(){return o},o6:function(){return a}});var r=n(7294);let i="szh-accordion",a="szh-adn",o=`data-${a}`,u=`data-${a}-btn`,l=(0,r.createContext)({})},3622:function(e,t,n){n.d(t,{d:function(){return r}});let r=(e,t)=>{if(!t)return e;let n={...e};return Object.keys(t).forEach(r=>{let i=e[r],a=t[r];"function"==typeof a&&i?n[r]=(...e)=>{i(...e),a(...e)}:n[r]=a}),n}},3670:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_DATA_URL_KEY=t.INIT_MAX_NUMBER=t.DEFAULT_NULL_INDEX=void 0,t.DEFAULT_NULL_INDEX=-1,t.INIT_MAX_NUMBER=1e3,t.DEFAULT_DATA_URL_KEY="dataURL"},3942:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,u)}l((r=r.apply(e,t||[])).next())})},l=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},s=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var a=arguments[t],o=0,u=a.length;o<u;o++,i++)r[i]=a[o];return r};Object.defineProperty(t,"__esModule",{value:!0});var c=o(n(7294)),f=n(9183),d=n(3838),p=n(3670);t.default=function(e){var t=e.value,n=e.onChange,i=e.onError,a=e.children,o=e.dataURLKey,h=void 0===o?p.DEFAULT_DATA_URL_KEY:o,g=e.multiple,v=void 0!==g&&g,m=e.maxNumber,y=void 0===m?p.INIT_MAX_NUMBER:m,b=e.acceptType,E=e.maxFileSize,_=e.resolutionWidth,w=e.resolutionHeight,x=e.resolutionType,N=e.inputProps,L=e.allowNonImageType,T=void 0!==L&&L,D=(void 0===t?[]:t)||[],A=c.useRef(null),U=c.useState(p.DEFAULT_NULL_INDEX),I=U[0],k=U[1],j=c.useState(null),P=j[0],M=j[1],R=c.useState(!1),S=R[0],F=R[1],O=c.useCallback(function(){return f.openFileDialog(A)},[A]),C=c.useCallback(function(){k(p.DEFAULT_NULL_INDEX),O()},[O]),V=c.useCallback(function(){null==n||n([])},[n]),K=function(e){return u(void 0,void 0,void 0,function(){var t,r,a,o,c;return l(this,function(g){switch(g.label){case 0:if(!e)return[2];return[4,f.getListFiles(e,h)];case 1:var m;if(!(t=g.sent()).length)return[2];return[4,(m=t,u(void 0,void 0,void 0,function(){var e;return l(this,function(t){switch(t.label){case 0:return[4,d.getErrorValidation({fileList:m,maxFileSize:E,maxNumber:y,acceptType:b,keyUpdate:I,resolutionType:x,resolutionWidth:_,resolutionHeight:w,value:D,allowNonImageType:T})];case 1:if(e=t.sent())return M(e),null==i||i(e,m),[2,!1];return P&&M(null),[2,!0]}})}))];case 2:if(!g.sent())return[2];if(a=[],I>p.DEFAULT_NULL_INDEX)o=t[0],(r=s(D))[I]=o,a.push(I);else if(v)for(r=s(D,t),c=D.length;c<r.length;c+=1)a.push(c);else r=[t[0]],a.push(0);return null==n||n(r,a),[2]}})})},X=c.useMemo(function(){return f.getAcceptTypeString(b,T)},[b,T]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("input",r({type:"file",accept:X,ref:A,multiple:v&&I===p.DEFAULT_NULL_INDEX,onChange:function(e){return u(void 0,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,K(e.target.files)];case 1:return t.sent(),I>p.DEFAULT_NULL_INDEX&&k(p.DEFAULT_NULL_INDEX),A.current&&(A.current.value=""),[2]}})})},style:{display:"none"}},void 0===N?{}:N)),null==a?void 0:a({imageList:D,onImageUpload:C,onImageRemoveAll:V,onImageUpdate:function(e){k(e),O()},onImageRemove:function(e){var t=s(D);Array.isArray(e)?e.forEach(function(e){t.splice(e,1)}):t.splice(e,1),null==n||n(t)},errors:P,dragProps:{onDrop:function(e){e.preventDefault(),e.stopPropagation(),F(!1),e.dataTransfer.files&&e.dataTransfer.files.length>0&&K(e.dataTransfer.files)},onDragEnter:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.items&&e.dataTransfer.items.length>0&&F(!0)},onDragLeave:function(e){e.preventDefault(),e.stopPropagation(),F(!1)},onDragOver:function(e){e.preventDefault(),e.stopPropagation()},onDragStart:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.clearData()}},isDragging:S}))}},9183:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getListFiles=t.getImage=t.getBase64=t.getAcceptTypeString=t.openFileDialog=void 0,t.openFileDialog=function(e){e.current&&e.current.click()},t.getAcceptTypeString=function(e,t){return(null==e?void 0:e.length)?e.map(function(e){return"."+e}).join(", "):t?"":"image/*"},t.getBase64=function(e){var t=new FileReader;return new Promise(function(n){t.addEventListener("load",function(){return n(String(t.result))}),t.readAsDataURL(e)})},t.getImage=function(e){var t=new Image;return new Promise(function(n){t.addEventListener("load",function(){return n(t)}),t.src=URL.createObjectURL(e)})},t.getListFiles=function(e,n){for(var r=[],i=0;i<e.length;i+=1)r.push(t.getBase64(e[i]));return Promise.all(r).then(function(t){return t.map(function(t,r){var i;return(i={})[n]=t,i.file=e[r],i})})}},3838:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,u)}l((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorValidation=t.isMaxNumberValid=t.isAcceptTypeValid=t.isMaxFileSizeValid=t.isImageValid=t.isResolutionValid=void 0;var a=n(3670),o=n(9183);t.isResolutionValid=function(e,t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=1),!n||!r||!e.width||!e.height)return!0;switch(t){case"absolute":if(e.width===n&&e.height===r)return!0;break;case"ratio":var i=n/r;if(e.width/e.height===i)return!0;break;case"less":if(e.width<=n&&e.height<=r)return!0;break;case"more":if(e.width>=n&&e.height>=r)return!0}return!1},t.isImageValid=function(e){return!!e.includes("image")},t.isMaxFileSizeValid=function(e,t){return!t||e<=t},t.isAcceptTypeValid=function(e,t){if(e&&e.length>0){var n=t.split(".").pop()||"";if(0>e.findIndex(function(e){return e.toLowerCase()===n.toLowerCase()}))return!1}return!0},t.isMaxNumberValid=function(e,t,n){if(0!==t&&!t)return!0;if(n===a.DEFAULT_NULL_INDEX){if(e<=t)return!0}else if(e<=t+1)return!0;return!1},t.getErrorValidation=function(e){var n=e.fileList,a=e.value,u=e.maxNumber,l=e.keyUpdate,s=e.acceptType,c=e.maxFileSize,f=e.resolutionType,d=e.resolutionWidth,p=e.resolutionHeight,h=e.allowNonImageType;return r(void 0,void 0,void 0,function(){var e,r,g,v;return i(this,function(i){switch(i.label){case 0:if(e={},t.isMaxNumberValid(n.length+a.length,u,l))return[3,1];return e.maxNumber=!0,[3,5];case 1:r=0,i.label=2;case 2:if(!(r<n.length))return[3,5];if(!(g=n[r].file))return[3,4];if(!h&&!t.isImageValid(g.type)||!t.isAcceptTypeValid(s,g.name))return e.acceptType=!0,[3,5];if(!t.isMaxFileSizeValid(g.size,c))return e.maxFileSize=!0,[3,5];if(!f)return[3,4];return[4,o.getImage(g)];case 3:if(v=i.sent(),!t.isResolutionValid(v,f,d,p))return e.resolution=!0,[3,5];i.label=4;case 4:return r+=1,[3,2];case 5:if(Object.values(e).find(Boolean))return[2,e];return[2,null]}})})}}}]);