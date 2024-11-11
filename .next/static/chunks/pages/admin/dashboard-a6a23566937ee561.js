(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{5504:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return a(6273)}])},6273:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var s=a(5893),r=a(1664),n=a.n(r),o=a(1163),c=a(7294),l={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function i(e){var t=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var s=(e.match(/[^0-9]*$/)||"").toString();return l[s]?{value:t,unit:s}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var d=function(){return(d=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},m=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>t.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(a[s[r]]=e[s[r]]);return a},x=function(e,t,a){var s="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return s;var r=document.createElement("style");document.head.appendChild(r);var n=r.sheet,o="\n    @keyframes ".concat(s," {\n      ").concat(t,"\n    }\n  ");return n&&n.insertRule(o,0),s}("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip"),p=function(e){var t=e.loading,a=e.color,s=void 0===a?"#000000":a,r=e.speedMultiplier,n=e.cssOverride,o=e.size,l=void 0===o?35:o,p=m(e,["loading","color","speedMultiplier","cssOverride","size"]),u=d({background:"transparent !important",width:i(l),height:i(l),borderRadius:"100%",border:"2px solid",borderTopColor:s,borderBottomColor:"transparent",borderLeftColor:s,borderRightColor:s,display:"inline-block",animation:"".concat(x," ").concat(.75/(void 0===r?1:r),"s 0s infinite linear"),animationFillMode:"both"},void 0===n?{}:n);return void 0===t||t?c.createElement("span",d({style:u},p)):null},u=a(9134),h=a(9008),b=a.n(h);function f(){let e="https://lmsservice.unicornstore.in",t=(0,o.useRouter)(),[a,r]=(0,c.useState)([]),[l,i]=(0,c.useState)(),[d,m]=(0,c.useState)(""),[x,h]=(0,c.useState)(""),[f,g]=(0,c.useState)(!1),[y,j]=(0,c.useState)(""),[v,w]=(0,c.useState)(1),[N,S]=(0,c.useState)(1),[C,k]=(0,c.useState)(""),[_,E]=(0,c.useState)(""),[P,O]=(0,c.useState)(!1),[T,R]=(0,c.useState)("dashboard"),[A,L]=(0,c.useState)([]),[D,I]=(0,c.useState)(""),[F,U]=(0,c.useState)(1),[M,z]=(0,c.useState)(1),[q,B]=(0,c.useState)(10),[W,X]=(0,c.useState)(10),[$,G]=(0,c.useState)([]),[H,J]=(0,c.useState)(""),[K,Q]=(0,c.useState)(1),[V,Y]=(0,c.useState)(""),[Z,ee]=(0,c.useState)(10),[et,ea]=(0,c.useState)(""),[es,er]=(0,c.useState)(""),en=e=>{w(e)},eo=e=>{z(e)},ec=e=>{Q(e)},el=async()=>{O(!0);try{let t=await fetch("".concat(e,"/get-all-meta-forms/?page=").concat(v,"&per_page=").concat(q,"&sort_desc=false"));if(!t.ok)throw Error("Could not get forms");let a=await t.json();r(a.data),S(Math.ceil(a.total_count/q)),E(a.total_count),a.status}catch(e){console.log(e),i(e.message)}O(!1)};(0,c.useEffect)(()=>{t.isReady&&el()},[v,q]);let ei=async()=>{try{let t=await fetch("".concat(e,"/get-all-submission-forms/?page=").concat(M,"&per_page=").concat(W,"&sort_desc=false&search=").concat(et));if(!t.ok)throw Error("Could not get form submissions");let a=await t.json();L(a.data),U(Math.ceil(a.total_count/W)),I(a.total_count)}catch(e){console.log(e),u.Am.error(e.message)}};(0,c.useEffect)(()=>{t.isReady&&ei()},[t.isReady,t,M,W]);let ed=function(e,t){let[a,s]=(0,c.useState)(e);return(0,c.useEffect)(()=>{let t=setTimeout(()=>{s(e)},500);return()=>{clearTimeout(t)}},[e,500]),a}(et,0);(0,c.useEffect)(()=>{""!==ed&&(z(1),ei())},[ed,et]);let em=async()=>{try{let t=await fetch("".concat(e,"/get-order-details?per_page=").concat(Z,"&page=").concat(K));if(!t.ok)throw Error("Could not get order details");let a=await t.json();G(a.data),J(a.count),Y(Math.ceil(a.count/Z))}catch(e){u.Am.error(e.message,{toastId:"preBookError"})}};(0,c.useEffect)(()=>{em()},[Z,K]);let ex=async e=>{let{protocol:t,hostname:a,port:s}=window.location;if(!/^([^=&]+=[^=&]+)(&[^=&]+=[^=&]+)*$/.test(x)){g("Invalid slug format. Must be in 'key=value' format.");return}let r="".concat(t,"//").concat(a).concat(s?":".concat(s):"","/upgrade/").concat(e,"?").concat(x).split(" ").join("");if(navigator.clipboard&&"function"==typeof navigator.clipboard.writeText)navigator.clipboard.writeText(r).then(()=>{g("Copied!"),setTimeout(()=>g(!1),2e3)},()=>{console.error("Failed to copy the text.")});else{let e=document.createElement("textarea");e.value=r,document.body.appendChild(e),e.select();try{document.execCommand("copy"),g("Copied!"),setTimeout(()=>g(!1),2e3)}catch(e){console.error("Failed to copy: ",e),u.Am.warn(e.message,{toastId:"errorToast"})}}},ep=e=>new Date(e).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0}),eu=async()=>{try{let t=await fetch("".concat(e,"/generate-excel/?page=1&per_page=10000"),{method:"GET"});if(!t.ok)throw Error("Could not download file");let a=await t.blob(),s=window.URL.createObjectURL(a),r=document.createElement("a");r.href=s,r.setAttribute("download","users-data.xlsx"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(s)}catch(e){u.Am.error(e.message,{toastId:"formSubmittedExcelErrorToast"})}};return((0,c.useEffect)(()=>{let{protocol:e,hostname:t,port:a}=window.location;er("".concat(e,"//").concat(t).concat(a?":".concat(a):""))},[]),P)?(0,s.jsx)("div",{className:"w-full p-4 text-center mt-28 ",children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)(p,{color:"#42c8b7",size:40,"aria-label":"Loading Spinner","data-testid":"loader"})})}):l?(0,s.jsx)("div",{className:"mt-28 flex justify-center",children:(0,s.jsxs)("div",{className:"container max-w-screen-xl text-red-500",children:["Error: ",l]})}):(0,s.jsxs)("div",{className:"min-h-screen mt-28 ",children:[(0,s.jsx)(b(),{children:(0,s.jsx)("title",{children:"Offer Unicorn - Admin Dashboard"})}),(0,s.jsxs)("div",{className:"max-w-screen-xl mx-auto relative",children:[(0,s.jsxs)("div",{className:"relative -top-8 flex  space-x-4",children:[(0,s.jsx)("button",{className:"px-6 py-2 rounded-md border-2 text-gray-700 transition-all bg-accent-dimmed border-accent-dimmed focus:outline-none focus:ring-2 focus:ring-[var(--accent-border-dimmed)] ".concat("dashboard"===T?"bg-accent text-white border-accent shadow-md":""),onClick:()=>R("dashboard"),children:"Web To Lead"}),(0,s.jsx)("button",{className:"px-6 py-2 rounded-md border-2 text-gray-700 transition-all bg-accent-dimmed border-accent-dimmed focus:outline-none focus:ring-2 focus:ring-[var(--accent-border-dimmed)] ".concat("submissions"===T?"bg-accent text-white border-accent shadow-md":""),onClick:()=>R("submissions"),children:"Forms Submitted"}),(0,s.jsx)("button",{className:"px-6 py-2 rounded-md border-2 text-gray-700 transition-all bg-accent-dimmed border-accent-dimmed focus:outline-none focus:ring-2 focus:ring-[var(--accent-border-dimmed)] ".concat("prebooks"===T?"bg-accent text-white border-accent shadow-md":""),onClick:()=>R("prebooks"),children:"Confirmed Prebookings"})]}),"dashboard"===T&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl font-bold text-center mb-5",children:"Web to Lead"}),(0,s.jsx)("div",{className:"flex justify-start mb-5",children:(0,s.jsxs)("button",{className:"bg-accent text-white font-semibold px-6 rounded-lg transition duration-300 py-2",onClick:()=>t.push("/admin/add-product"),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg mr-2"})," Create New Page"]})}),(0,s.jsx)("div",{className:"bg-white shadow-md rounded overflow-hidden",children:(0,s.jsxs)("table",{className:"min-w-full table-auto",children:[(0,s.jsx)("thead",{className:"bg-gray-200 ",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold text-gray-700 uppercase text-center",children:"ID"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold text-gray-700 uppercase text-center",children:"Page Title"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold text-gray-700 uppercase text-center",children:"Slug"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold text-gray-700 uppercase text-center",children:"CreateD At"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold text-gray-700 uppercase text-center",children:"Upated At"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold text-gray-700 uppercase text-center",children:"Actions"})]})}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null==a?void 0:a.map((e,t)=>(0,s.jsxs)("tr",{className:"divide-x hover:bg-gray-100",children:[(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.id}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.product_title}),(0,s.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:[(0,s.jsxs)("div",{className:"grid grid-cols-3 items-center",children:[(0,s.jsx)("span",{className:"col-span-2 justify-self-center",children:e.slug}),(0,s.jsx)("button",{className:"  text-[#287b71] bg-[#42c8b745] hover:bg-[#42c8b7] px-2 py-1 rounded hover:text-white transition-all ms-2 justify-self-start",onClick:()=>{m(e.id),document.body.classList.add("overflow-hidden")},children:(0,s.jsx)("i",{className:"bi bi-question-lg"})})]}),d===e.id&&(0,s.jsx)("div",{className:"fixed top-0 left-0 flex h-screen w-screen backdrop-blur justify-center items-center z-50",children:(0,s.jsxs)("div",{className:"rounded border min-w-[60vw] border-green-300 bg-green-100 py-2 px-2 text-start relative",children:[(0,s.jsx)("button",{className:"absolute right-4 top-0 text-red-500 font-bold hover:bg-red-100 transition-all px-2 py-1 rounded",onClick:()=>{m(""),document.body.classList.remove("overflow-hidden")},children:(0,s.jsx)("i",{className:"bi bi-x-lg "})}),(0,s.jsx)("span",{className:"font-semibold",children:"Slug: "}),(0,s.jsxs)("span",{children:[es,"/upgrade/",e.slug,"?",x,(0,s.jsxs)("button",{className:"ms-4 text-gray-500 hover:text-gray-800",onClick:()=>ex(e.slug),children:[(0,s.jsx)("i",{className:"bi bi-copy me-2"}),f]})]}),(0,s.jsx)("div",{className:"relative col-span-2",children:(0,s.jsx)("input",{type:"text",value:x,onChange:e=>h(e.target.value.split(" ").join("")),className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200",placeholder:"query"})})]})})]}),(0,s.jsx)("td",{className:" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:ep(e.created_at)}),(0,s.jsx)("td",{className:" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:ep(e.updated_at)}),(0,s.jsxs)("td",{className:" py-4 whitespace-nowrap text-sm font-medium text-center",children:[(0,s.jsx)("a",{href:"/upgrade/".concat(e.slug),target:"_blank",className:"text-blue-500 bg-blue-100 hover:bg-blue-400 px-2 py-1 rounded hover:text-white font-semibold mr-4 transition-all",children:(0,s.jsx)("i",{className:"bi bi-eye "})}),(0,s.jsx)(n(),{href:"/admin/update-product/".concat(e.id),className:"text-orange-500 bg-orange-100 hover:bg-orange-400 px-2 py-1 rounded hover:text-white font-semibold mr-4 transition-all",children:(0,s.jsx)("i",{className:"bi bi-pencil-square "})})]})]},t))})]})}),(null==a?void 0:a.length)!==0&&(0,s.jsxs)("div",{className:"flex w-full justify-center items-center space-x-2 py-4 relative",children:[(0,s.jsx)("button",{className:"px-3 py-1 rounded border border-gray-300 ".concat(1===v?"opacity-50 cursor-not-allowed":"hover:bg-[#54ffe925]"),onClick:()=>en(v-1),disabled:1===v,children:"Previous"}),Array.from({length:N}).map((e,t)=>(0,s.jsx)("button",{className:"px-3 py-1 rounded border ".concat(v===t+1?"bg-accent text-white":"border-gray-300 hover:bg-[#54ffe925]"),onClick:()=>en(t+1),children:t+1},t+1)),(0,s.jsx)("button",{className:"px-3 py-1 rounded border border-gray-300 ".concat(v===N?"opacity-50 cursor-not-allowed":"hover:bg-[#54ffe925]"),onClick:()=>en(v+1),disabled:v===N,children:"Next"}),(0,s.jsx)("div",{children:(0,s.jsxs)("select",{name:"formsSubmittedPerPage",className:"px-3 py-1 rounded border border-gray-300 outline-none",value:q,onChange:e=>{B(e.target.value),z(1)},children:[(0,s.jsx)("option",{value:"10",children:"10"}),(0,s.jsx)("option",{value:"20",children:"20"}),(0,s.jsx)("option",{value:"30",children:"30"}),(0,s.jsx)("option",{value:"40",children:"40"}),(0,s.jsx)("option",{value:"50",children:"50"})]})}),_>0&&(0,s.jsx)("div",{className:"absolute right-5 text-end  w-fit",children:(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-semibold",children:" Total Records:"})," ",_]})})]})]}),"submissions"===T&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl font-bold text-center mb-5",children:"Users Data"}),(0,s.jsxs)("div",{className:"flex justify-between mb-5",children:[(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("input",{type:"text",value:et,onChange:e=>ea(e.target.value),className:"border px-4 py-2 rounded w-[500px] border-gray-300 outline-none h-full ",placeholder:"Search by ID, Name, Email, Phone no, Slug, Product or Store"})}),(0,s.jsxs)("button",{className:"bg-accent text-white font-semibold px-6 rounded-lg transition duration-300 py-2",onClick:eu,children:[(0,s.jsx)("i",{className:"bi bi-download mr-2"})," Export to excel"]})]}),(0,s.jsx)("div",{className:"bg-white shadow-md rounded  relative",children:(0,s.jsxs)("table",{className:"min-w-full table-auto shadow-lg rounded-lg overflow-hidden",children:[(0,s.jsx)("thead",{className:"bg-gray-200",children:(0,s.jsxs)("tr",{className:"",children:[(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"ID"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Name"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Email"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Phone No"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Slug"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Product"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Store"})]})}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null==A?void 0:A.map((e,t)=>(0,s.jsxs)("tr",{className:"hover:bg-gray-100 transition-colors divide-x",children:[(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.form_id}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.name}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.email}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.phone}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:Object.entries(e.url_data).map(e=>{let[t,a]=e;return"phoneID"!==t&&(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{className:"px-3 whitespace-nowrap text-sm font-medium text-gray-900",children:[t,":"]}),(0,s.jsx)("td",{className:"px-3 whitespace-nowrap text-sm text-gray-500",children:a})]},t)})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.product_name}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.store_name})]},t))})]})}),(null==A?void 0:A.length)!==0&&(0,s.jsxs)("div",{className:"flex w-full justify-center items-center space-x-2 py-4 relative",children:[(0,s.jsx)("button",{className:"px-3 py-1 rounded border border-gray-300 ".concat(1===M?"opacity-50 cursor-not-allowed":"hover:bg-[#54ffe925]"),onClick:()=>eo(M-1),disabled:1===M,children:"Previous"}),Array.from({length:F}).map((e,t)=>(0,s.jsx)("button",{className:"px-3 py-1 rounded border ".concat(M===t+1?"bg-accent text-white":"border-gray-300 hover:bg-[#54ffe925]"),onClick:()=>eo(t+1),children:t+1},t+1)),(0,s.jsx)("button",{className:"px-3 py-1 rounded border border-gray-300 ".concat(M===F?"opacity-50 cursor-not-allowed":"hover:bg-[#54ffe925]"),onClick:()=>eo(M+1),disabled:M===F,children:"Next"}),(0,s.jsx)("div",{children:(0,s.jsxs)("select",{name:"formsSubmittedPerPage",className:"px-3 py-1 rounded border border-gray-300 outline-none",value:W,onChange:e=>{X(e.target.value),z(1)},children:[(0,s.jsx)("option",{value:"10",children:"10"}),(0,s.jsx)("option",{value:"20",children:"20"}),(0,s.jsx)("option",{value:"30",children:"30"}),(0,s.jsx)("option",{value:"40",children:"40"}),(0,s.jsx)("option",{value:"50",children:"50"})]})}),(0,s.jsx)("div",{className:"absolute right-5 text-end w-fit",children:(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-semibold",children:" Total Records:"})," ",D]})})]})]}),"prebooks"===T&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl font-bold text-center mb-5",children:"Orders"}),(0,s.jsx)("div",{className:"bg-white shadow-md rounded overflow-hidden",children:(0,s.jsxs)("table",{className:"min-w-full table-auto shadow-lg rounded-lg overflow-hidden",children:[(0,s.jsx)("thead",{className:"bg-gray-200",children:(0,s.jsxs)("tr",{className:"",children:[(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Payment ID"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Name"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Phone No"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Payment Date"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Status"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Amount"}),(0,s.jsx)("th",{className:"px-6 py-3 text-sm font-semibold uppercase text-center",children:"Product"})]})}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null==$?void 0:$.map((e,t)=>(0,s.jsxs)("tr",{className:"hover:bg-gray-100 transition-colors divide-x",children:[(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.payment_id}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.customer_name}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.phone}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:ep(e.date)}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center capitalize",children:e.status}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.amount}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center",children:e.product_name})]},t))})]})}),(null==$?void 0:$.length)!==0&&(0,s.jsxs)("div",{className:"flex w-full justify-center items-center space-x-2 py-4 relative",children:[(0,s.jsx)("button",{className:"px-3 py-1 rounded border border-gray-300 ".concat(1===K?"opacity-50 cursor-not-allowed":"hover:bg-[#54ffe925]"),onClick:()=>ec(K-1),disabled:1===K,children:"Previous"}),Array.from({length:V}).map((e,t)=>(0,s.jsx)("button",{className:"px-3 py-1 rounded border ".concat(K===t+1?"bg-accent text-white":"border-gray-300 hover:bg-[#54ffe925]"),onClick:()=>ec(t+1),children:t+1},t+1)),(0,s.jsx)("button",{className:"px-3 py-1 rounded border border-gray-300 ".concat(K===V?"opacity-50 cursor-not-allowed":"hover:bg-[#54ffe925]"),onClick:()=>ec(K+1),disabled:K===V,children:"Next"}),(0,s.jsx)("div",{children:(0,s.jsxs)("select",{name:"formsSubmittedPerPage",className:"px-3 py-1 rounded border border-gray-300 outline-none",value:Z,onChange:e=>{ee(e.target.value),Q(1)},children:[(0,s.jsx)("option",{value:"10",children:"10"}),(0,s.jsx)("option",{value:"20",children:"20"}),(0,s.jsx)("option",{value:"30",children:"30"}),(0,s.jsx)("option",{value:"40",children:"40"}),(0,s.jsx)("option",{value:"50",children:"50"})]})}),0!==H&&(0,s.jsx)("div",{className:"absolute right-5 text-end w-fit",children:(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-semibold",children:" Total Records:"})," ",H]})})]})]})]})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5504)}),_N_E=e.O()}]);