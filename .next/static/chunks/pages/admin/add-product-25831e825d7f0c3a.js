(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{429:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/add-product",function(){return a(5130)}])},4133:function(e,t,a){"use strict";var l=a(5893);a(7294);var s=a(4039);t.Z=e=>{let{header:t,...a}=e;return(0,l.jsx)(s.Q,{...a,header:e=>{let{state:{isEnter:a}}=e;return(0,l.jsxs)(l.Fragment,{children:[t,(0,l.jsx)("i",{className:"bi bi-chevron-down ml-auto transition-transform duration-200 ease-out flex items-center ".concat(a&&"rotate-180")})]})},buttonProps:{className:e=>{let{isEnter:t}=e;return"flex items-center w-full px-4 py-1 text-left hover:bg-[#42c8b725] ".concat(t&&"bg-[#42c8b725]")}},contentProps:{className:"transition-height duration-200 ease-out"},panelProps:{className:"py-4"}})}},9722:function(e,t,a){"use strict";var l=a(5893),s=a(7294),r=a(3942),o=a.n(r);t.Z=e=>{let{maxNumber:t=69,onImagesChange:a=()=>{},s3imageUrlArray:r,setS3imageUrlArray:n,tag:i,imageName:c,setImageName:d}=e,[u,m]=(0,s.useState)([]),[h,p]=(0,s.useState)(""),x="http://192.168.1.15:7000";(0,s.useEffect)(()=>{"string"==typeof r&&r.length>0&&(m([{data_url:r}]),p(r))},[r]);let g=e=>{n(null)},f=e=>{let[t,a]=e.split(","),l=t.split(":")[1].split(";")[0],s=atob(a),r=new ArrayBuffer(s.length),o=new Uint8Array(r);for(let e=0;e<s.length;e++)o[e]=s.charCodeAt(e);return new Blob([r],{type:l})},b=(e,t)=>new File([e],t,{type:e.type}),y=async e=>{let t=new FormData;e.forEach(e=>t.append("file",e));try{let e=await fetch("".concat(x,"/upload-image"),{method:"POST",body:t});if(!e.ok)throw Error("Failed to upload images");let a=await e.json();n(a.url),p(a.s3_image),console.log(r)}catch(e){console.error("Error uploading images:",e)}},j=(0,s.useCallback)((e,t)=>{d(i+(c+1)),m(e),a(e,t),y(e.map(e=>b(f(e.data_url),"image_".concat(c,".jpg"))))},[a,i,c,y]),N=async e=>{try{if(!(await fetch("".concat(x,"/remove-image?s3_image=").concat(e),{method:"DELETE"})).ok)throw Error("Failed to delete image")}catch(e){console.error("Error deleting image:",e)}},v=async()=>{await N(h),g(),m([]),n(null)};return(0,l.jsx)("div",{className:"w-full h-full max-h-full relative ",children:(0,l.jsx)(o(),{value:u,onChange:j,dataURLKey:"data_url",children:e=>{let{imageList:t,onImageUpload:a,isDragging:s,dragProps:r}=e;return(0,l.jsxs)("div",{className:"flex flex-col w-full h-full items-center justify-center max-h-full",children:[(0,l.jsx)("button",{onClick:a,...r,className:"w-full h-full content-center absolute top-0 left-0 ".concat(s?"text-red-500":""),children:(0,l.jsx)("span",{className:"".concat(u.length>0?"hidden":""," "),children:"Click here to upload or Drop here"})}),(0,l.jsx)("div",{className:"overflow-y-scroll scrollbar-hidden z-10 w-full",children:(0,l.jsx)("div",{className:"flex items-center justify-center w-full space-y-5",children:t.map((e,t)=>(0,l.jsxs)("div",{className:"flex justify-start md:justify-center ",children:[(0,l.jsx)("div",{className:"flex flex-row absolute right-1 space-x-1 top-1 h-full -z-20",children:(0,l.jsx)("button",{className:"text-red-500 bg-gray-200 rounded px-1 text-xl h-fit sticky top-1",onClick:e=>{e.stopPropagation(),v(t)},children:(0,l.jsx)("i",{className:"bi bi-x-square"})})}),(0,l.jsx)("img",{className:"h-full",src:e.data_url,alt:""})]},t))})})]})}})})}},5130:function(e,t,a){"use strict";a.r(t);var l=a(5893),s=a(9722),r=a(5612),o=a(4133),n=a(7294),i=a(9134),c=a(9066),d=a(6670),u=a(9008),m=a.n(u);t.default=()=>{let e="http://192.168.1.15:7000",[t,a]=(0,n.useState)({name:"",email:"",phone:"",otp:"",product:"iPhone 13",state:"",city:"",store:""}),[u,h]=(0,n.useState)({seoTitle:"",productTitle:"",metaDesc:"",metaKeyWords:"",slug:"",productList:[{id:1,Name:""}]}),[p,x]=(0,n.useState)([]),[g,f]=(0,n.useState)(""),[b,y]=(0,n.useState)(),[j,N]=(0,n.useState)(""),[v,w]=(0,n.useState)(!1),[S,T]=(0,n.useState)({}),[C,k]=(0,n.useState)({}),[E,_]=(0,n.useState)(!1),[P,D]=(0,n.useState)([{id:1,Name:""}]),[F,A]=(0,n.useState)([]),[O,I]=(0,n.useState)([]),[K,U]=(0,n.useState)([]),[L,q]=(0,n.useState)(!1),[W,M]=(0,n.useState)(""),[Z,B]=(0,n.useState)(!1),[G,z]=(0,n.useState)(""),[V,X]=(0,n.useState)(!0),[$,J]=(0,n.useState)([]),[Q,R]=(0,n.useState)(""),H=async()=>{try{let t=await fetch("".concat(e,"/filter-products"));if(!t.ok)throw Error("Could not get phones");let a=await t.json();J(a)}catch(e){i.Am.error(e.message,{toastId:"productError"})}};(0,n.useEffect)(()=>{H()},[]),(0,n.useEffect)(()=>{(async()=>{try{let t=await fetch("".concat(e,"/get-all-states"));if(!t.ok)throw Error("Could not get states");let a=await t.json();A(a.map(e=>({value:e.state_id,label:e.state_name})));let l=await fetch("".concat(e,"/get-city-by-state"));if(!l.ok)throw Error("Could not get cities");let s=await l.json();I(s.map(e=>({value:e.city_id,label:e.city_name})));let r=await fetch("".concat(e,"/get-store-by-city"));if(!r.ok)throw Error("Could not get Stores");let o=await r.json();U(o.map(e=>({value:e.store_id,label:e.store_name})))}catch(e){console.log(e.message),i.Am.error(e.message)}})()},[]);let Y=e=>{},ee=(e,l)=>{let s=null==e?void 0:e.value;a(e=>({...e,[l]:s})),console.log(t)},et=e=>{ee(e,"state")},ea=e=>{ee(e,"city")},el=e=>{ee(e,"store")},es=e=>{let{name:t,value:a}=e.target;h(e=>({...e,[t]:a})),k(e=>{let l={...e};return"productTitle"===t&&(a.trim()?delete l.productTitle:l.productTitle="Product Title is required"),"slug"===t&&(/\s/.test(a)?l.slug="Slug cannot contain spaces":delete l.slug),l})};(0,n.useEffect)(()=>{E&&k(e=>{let t={...e};return(null==p?void 0:p.length)!==0&&p?delete t.s3imageUrlArray:t.s3imageUrlArray="Image is required",t})},[p]);let er=()=>{w(!0),setTimeout(()=>{w(!1)},2500),console.log("Getting OTP...")},eo=()=>{let e={};return t.name.trim()||(e.name="Name is required"),t.phone.trim()||(e.phone="Phone Number is required"),t.otp.trim()||(e.otp="OTP is required"),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(e.email="Email is invalid"):e.email="Email is required",t.state.trim()||(e.state="State is required"),T(e),0===Object.keys(e).length},en=e=>{e.preventDefault(),eo()&&(console.log("valid form"),console.log(t))},ei=()=>{var e;let t={};return(null==u?void 0:null===(e=u.productTitle)||void 0===e?void 0:e.trim())||(t.productTitle="Product Title is required"),/\s/.test(u.slug)&&(t.slug="Slug cannot contain spaces"),(null==j?void 0:j.trim())||(t.formID="Please Select a form"),(null==p?void 0:p.length)!==0&&p||(t.s3imageUrlArray="Image is required"),V&&1===P.length&&""===P[0].Name&&(t.phone="Add atleast one product"),k(t),0===Object.keys(t).length},ec=async()=>{if(_(!0),ei())try{let t=await fetch("".concat(e,"/create-meta-form"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({title:u.seoTitle,meta_description:u.metaDesc,meta_keyword:u.metaKeyWords,product_title:u.productTitle,title:u.productTitle,slug:""===u.slug?u.productTitle.toLowerCase().split(" ").join("-"):u.slug,image:p,form_type:V?"form-1":"form-2",product_name:V?P:u.productList})});if(!t.ok)throw Error("Could not create meta form");let a=await t.json();"success"===a.status?(i.Am.success("Form Created Successfully!"),q(!0),window.scrollTo({top:0,behavior:"smooth"})):(i.Am.warn(a.message),q(!1)),"info"===a.status&&i.Am.info(a.message,{toastId:"infoToast"})}catch(e){console.log(e),z(e.message)}console.log("Prebook List: ",u.productList),console.log("Normal Form List: ",P)},ed=()=>{0===P.length||""!==P[P.length-1].Name.trim()?D([...P,{id:P.length+1+Math.random(),Name:""}]):i.Am.warn("Please fill in all fields for the current phone before adding a new one",{toastId:"emptyfield"}),console.log(P)},eu=e=>{D(P.filter(t=>t.id!==e))},em=(e,t,a)=>{D(P.map(l=>l.id===e?{...l,[t]:a}:l))},eh=async e=>{let{protocol:t,hostname:a,port:l}=window.location;if(!/^([^=&]+=[^=&]+)(&[^=&]+=[^=&]+)*$/.test(W)){B("Invalid slug format. Must be in 'key=value' format.");return}let s="".concat(t,"//").concat(a).concat(l?":".concat(l):"","/upgrade/").concat(""===u.slug?u.productTitle.toLowerCase().split(" ").join("-"):u.slug,"?").concat(W).split(" ").join("");if(navigator.clipboard&&"function"==typeof navigator.clipboard.writeText)navigator.clipboard.writeText(s).then(()=>{B("Copied!"),setTimeout(()=>B(!1),2e3)},()=>{console.error("Failed to copy the text.")});else{let e=document.createElement("textarea");e.value=s,document.body.appendChild(e),e.select();try{document.execCommand("copy"),B("Copied!"),setTimeout(()=>B(!1),2e3)}catch(e){console.error("Failed to copy: ",e),i.Am.warn(e.message,{toastId:"errorToast"})}}};return((0,n.useEffect)(()=>{let{protocol:e,hostname:t,port:a}=window.location;R("".concat(e,"//").concat(t).concat(a?":".concat(a):""))},[]),G)?(0,l.jsxs)("div",{className:"mt-28",children:["error: ",G]}):(0,l.jsxs)("div",{className:"w-screen flex justify-center",children:[(0,l.jsx)(m(),{children:(0,l.jsx)("title",{children:"Offer Unicorn - Add Forms"})}),(0,l.jsxs)("div",{className:"container max-w-screen-xl mt-28 grid grid-cols-2 gap-x-16 gap-y-5",children:[L&&(0,l.jsxs)("div",{className:"rounded border border-green-300 bg-green-100 py-2 col-span-2 px-2",children:[(0,l.jsx)("span",{className:"font-semibold",children:"Slug: "}),(0,l.jsxs)("span",{children:[Q,"/upgrade/",u.slug||u.productTitle.toLowerCase().split(" ").join("-"),"?",W,(0,l.jsxs)("button",{className:"ms-4 text-gray-500 hover:text-gray-800",onClick:eh,children:[(0,l.jsx)("i",{className:"bi bi-copy me-2"}),Z]})]}),(0,l.jsx)("div",{className:"relative col-span-2",children:(0,l.jsx)("input",{type:"text",value:W,onChange:e=>M(e.target.value.split(" ").join("")),className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200",placeholder:"Slug"})})]}),(0,l.jsxs)("div",{className:"col-span-2 grid grid-cols-2 gap-x-16 gap-y-5 ",children:[(0,l.jsxs)("div",{className:"relative col-span-2",children:[(0,l.jsxs)("label",{htmlFor:"productTitle",className:"font-medium text-gray-700",children:["Page Title ",(0,l.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,l.jsx)("input",{type:"text",id:"productTitle",name:"productTitle",value:u.productTitle,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 ".concat(C.productTitle?"border-red-300":""),placeholder:"Title"}),C.productTitle&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:C.productTitle})]}),(0,l.jsx)(r.U,{className:"bg-white border rounded-lg col-span-2",transition:!0,transitionTimeout:250,children:(0,l.jsx)(o.Z,{header:(0,l.jsx)("div",{className:"flex justify-between items-center text-xl font-semibold text-gray-800 cursor-pointer py-2",children:(0,l.jsx)("span",{className:"w-full",children:"SEO data"})}),children:(0,l.jsxs)("div",{className:"col-span-2 grid grid-cols-2 gap-x-16 gap-y-5 px-2",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("label",{htmlFor:"seoTitle",className:"font-medium text-gray-700",children:"SEO Title"}),(0,l.jsx)("input",{type:"text",id:"seoTitle",name:"seoTitle",value:u.seoTitle,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200  ".concat(C.seoTitle?"border-red-300":""),placeholder:"SEO Title"}),C.seoTitle&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:C.seoTitle})]}),(0,l.jsxs)("div",{className:"relative ",children:[(0,l.jsx)("label",{htmlFor:"metaDesc",className:"font-medium text-gray-700",children:"Meta Description"}),(0,l.jsx)("input",{type:"text",id:"metaDesc",name:"metaDesc",value:u.metaDesc,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 ".concat(C.metaDesc?"border-red-300":""),placeholder:"Meta Description"}),C.metaDesc&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:C.metaDesc})]}),(0,l.jsxs)("div",{className:"relative ",children:[(0,l.jsx)("label",{htmlFor:"metaKeyWords",className:"font-medium text-gray-700",children:"Meta Keyword"}),(0,l.jsx)("input",{type:"text",id:"metaKeyWords",name:"metaKeyWords",value:u.metaKeyWords,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 ".concat(C.metaKeyWords?"border-red-300":""),placeholder:"Meta Keywords"}),C.metaKeyWords&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:C.metaKeyWords})]}),(0,l.jsxs)("div",{className:"relative h-fit",children:[(0,l.jsx)("label",{htmlFor:"slug",className:"font-medium text-gray-700",children:"Slug (No spaces allowed)"}),(0,l.jsx)("input",{type:"text",id:"slug",name:"slug",value:u.slug,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 ".concat(C.slug?"border-red-300":""),placeholder:"Slug"}),C.slug&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:C.slug})]})]})})})]}),(0,l.jsxs)("div",{className:"col-span-2 grid grid-cols-1 relative  gap-y-3",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("input",{className:"w-4 h-4 border-gray-300 rounded cursor-pointer",type:"checkbox",name:"normal",id:"normal",checked:!V,onChange:()=>{X(e=>!e),D([{id:1,Name:""}])}}),(0,l.jsx)("label",{htmlFor:"normal",className:"pl-3 font-medium text-gray-700 cursor-pointer",children:"Pre-Book Form?"})]}),V&&(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("label",{className:"block font-medium text-gray-700",children:["Add to Products Dropdown ",(0,l.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,l.jsx)("div",{className:"col-span-2 grid grid-cols-2 gap-x-2",children:P.map((e,t)=>(0,l.jsxs)("div",{className:"flex items-center mb-4 relative",children:[(0,l.jsxs)("div",{className:"flex-1 mr-2",children:[(0,l.jsx)("input",{type:"text",className:"w-full border rounded-md px-3 py-2 focus:outline-none ".concat(C.phone&&0===P[0].Name.length?"border-red-300":"border-gray-300"," "),placeholder:"ex. iPhone 15",value:e.Name,onChange:t=>em(e.id,"Name",t.target.value)}),C.phone&&0===P[0].Name.length&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:C.phone})]}),P.length>1&&0!==t&&(0,l.jsx)("button",{type:"button",className:"text-red-500 p-2 rounded-md hover:bg-red-100",onClick:()=>eu(e.id),children:(0,l.jsx)("i",{className:"bi bi-trash3-fill text-xl"})}),0==t&&(0,l.jsx)("button",{type:"button",className:"flex items-center p-0.5 rounded-md text-blue-500 hover:text-blue-700 hover:bg-blue-100",onClick:ed,children:(0,l.jsx)("span",{className:"",children:(0,l.jsx)("i",{className:"bi bi-plus text-3xl"})})})]},e.id))})]})]}),(0,l.jsxs)("div",{className:"border-2 border-dashed focus-within:border-[#42c8b7] relative min-h-[760px] ".concat(C.s3imageUrlArray?"border-red-300":""),children:[(0,l.jsx)(s.Z,{maxNumber:1,folderName:b||"test",s3imageUrlArray:p,setS3imageUrlArray:x,tag:"creativeImage",imageName:"creativeImage",setImageName:f}),C.s3imageUrlArray&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:C.s3imageUrlArray})]}),(0,l.jsx)("div",{className:"relative",children:(0,l.jsxs)("div",{className:"mx-auto p-6 bg-white border border-gray-300 rounded relative ".concat(C.formID&&""===j?"border-red-300":""),children:[(0,l.jsx)("span",{className:"border rounded block pe-2 w-full outline-none transition-all duration-200 ",children:(0,l.jsxs)("select",{name:"formSelect",id:"formSelect",className:"w-full px-3 py-2 outline-none",value:j,onChange:e=>{N(e.target.value)},children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select a Form"}),V&&(0,l.jsx)("option",{value:"form-1",children:"Form 1"}),!V&&(0,l.jsx)("option",{value:"form-2",children:"Pre-Book Form"})]})}),"form-1"===j&&(0,l.jsx)(c.Z,{formData:t,errors:S,otpSentVisible:v,phoneList:[{label:"iPhone 12",value:"iPhone 12"}],currentStates:F,currentCities:O,currentStores:K,handleChange:Y,handleGetOtp:er,handleStateChange:et,handleCityChange:ea,handleStoreChange:el,handleFormSubmit:en}),"form-2"===j&&(0,l.jsx)(d.Z,{formData:t,errors:S,otpSentVisible:v,currentStates:F,currentCities:O,currentStores:K,handleChange:Y,handleGetOtp:er,handleStateChange:et,handleCityChange:ea,handleStoreChange:el,handleFormSubmit:en}),C.formID&&""===j&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:C.formID})]})}),(0,l.jsx)("div",{className:"col-span-2  grid grid-cols-3",children:(0,l.jsx)("button",{className:"col-start-2 bg-accent text-white text-center py-1 rounded",onClick:ec,children:"Create Page"})})]})]})}}},function(e){e.O(0,[723,68,282,888,774,179],function(){return e(e.s=429)}),_N_E=e.O()}]);