(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{6880:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/update-product/[currentFormID]",function(){return a(8747)}])},4133:function(e,t,a){"use strict";var l=a(5893);a(7294);var s=a(4039);t.Z=e=>{let{header:t,...a}=e;return(0,l.jsx)(s.Q,{...a,header:e=>{let{state:{isEnter:a}}=e;return(0,l.jsxs)(l.Fragment,{children:[t,(0,l.jsx)("i",{className:"bi bi-chevron-down ml-auto transition-transform duration-200 ease-out flex items-center ".concat(a&&"rotate-180")})]})},buttonProps:{className:e=>{let{isEnter:t}=e;return"flex items-center w-full px-4 py-1 text-left hover:bg-[#42c8b725] ".concat(t&&"bg-[#42c8b725]")}},contentProps:{className:"transition-height duration-200 ease-out"},panelProps:{className:"py-4"}})}},9722:function(e,t,a){"use strict";var l=a(5893),s=a(7294),r=a(3942),o=a.n(r);t.Z=e=>{let{maxNumber:t=69,onImagesChange:a=()=>{},s3imageUrlArray:r,setS3imageUrlArray:i,tag:n,imageName:c,setImageName:d}=e,[u,m]=(0,s.useState)([]),[p,h]=(0,s.useState)(""),x="http://192.168.1.15:7000";(0,s.useEffect)(()=>{"string"==typeof r&&r.length>0&&(m([{data_url:r}]),h(r))},[r]);let g=e=>{i(null)},f=e=>{let[t,a]=e.split(","),l=t.split(":")[1].split(";")[0],s=atob(a),r=new ArrayBuffer(s.length),o=new Uint8Array(r);for(let e=0;e<s.length;e++)o[e]=s.charCodeAt(e);return new Blob([r],{type:l})},b=(e,t)=>new File([e],t,{type:e.type}),y=async e=>{let t=new FormData;e.forEach(e=>t.append("file",e));try{let e=await fetch("".concat(x,"/upload-image"),{method:"POST",body:t});if(!e.ok)throw Error("Failed to upload images");let a=await e.json();i(a.url),h(a.s3_image),console.log(r)}catch(e){console.error("Error uploading images:",e)}},j=(0,s.useCallback)((e,t)=>{d(n+(c+1)),m(e),a(e,t),y(e.map(e=>b(f(e.data_url),"image_".concat(c,".jpg"))))},[a,n,c,y]),N=async e=>{try{if(!(await fetch("".concat(x,"/remove-image?s3_image=").concat(e),{method:"DELETE"})).ok)throw Error("Failed to delete image")}catch(e){console.error("Error deleting image:",e)}},v=async()=>{await N(p),g(),m([]),i(null)};return(0,l.jsx)("div",{className:"w-full h-full max-h-full relative ",children:(0,l.jsx)(o(),{value:u,onChange:j,dataURLKey:"data_url",children:e=>{let{imageList:t,onImageUpload:a,isDragging:s,dragProps:r}=e;return(0,l.jsxs)("div",{className:"flex flex-col w-full h-full items-center justify-center max-h-full",children:[(0,l.jsx)("button",{onClick:a,...r,className:"w-full h-full content-center absolute top-0 left-0 ".concat(s?"text-red-500":""),children:(0,l.jsx)("span",{className:"".concat(u.length>0?"hidden":""," "),children:"Click here to upload or Drop here"})}),(0,l.jsx)("div",{className:"overflow-y-scroll scrollbar-hidden z-10 w-full",children:(0,l.jsx)("div",{className:"flex items-center justify-center w-full space-y-5",children:t.map((e,t)=>(0,l.jsxs)("div",{className:"flex justify-start md:justify-center ",children:[(0,l.jsx)("div",{className:"flex flex-row absolute right-1 space-x-1 top-1 h-full -z-20",children:(0,l.jsx)("button",{className:"text-red-500 bg-gray-200 rounded px-1 text-xl h-fit sticky top-1",onClick:e=>{e.stopPropagation(),v(t)},children:(0,l.jsx)("i",{className:"bi bi-x-square"})})}),(0,l.jsx)("img",{className:"h-full",src:e.data_url,alt:""})]},t))})})]})}})})}},8747:function(e,t,a){"use strict";a.r(t);var l=a(5893),s=a(9722),r=a(1163),o=a(7294),i=a(9134),n=a(5612),c=a(4133),d=a(9066),u=a(6670),m=a(9008),p=a.n(m);t.default=()=>{let e="http://192.168.1.15:7000",t=(0,r.useRouter)(),{currentFormID:a}=t.query,[m,h]=(0,o.useState)({name:"",email:"",phone:"",otp:"",product:"iPhone 13",state:"",city:"",store:""}),[x,g]=(0,o.useState)({seoTitle:"",productTitle:"",metaDesc:"",metaKeyWords:"",slug:"",productList:[{id:1,Name:""}]}),[f,b]=(0,o.useState)([]),[y,j]=(0,o.useState)(""),[N,v]=(0,o.useState)(),[w,T]=(0,o.useState)(""),[S,C]=(0,o.useState)(!1),[_,k]=(0,o.useState)({}),[D,E]=(0,o.useState)({}),[P,F]=(0,o.useState)(!1),[A,K]=(0,o.useState)([{id:1,Name:""}]),[I,q]=(0,o.useState)([]),[U,O]=(0,o.useState)([]),[W,L]=(0,o.useState)([]),[M,Z]=(0,o.useState)(""),[B,R]=(0,o.useState)(!1),[z,G]=(0,o.useState)(!0),[V,X]=(0,o.useState)([]),[$,J]=(0,o.useState)(""),Q=async()=>{try{let t=await fetch("".concat(e,"/filter-products"));if(!t.ok)throw Error("Could not get phones");let a=await t.json();X(a)}catch(e){i.Am.error(e.message,{toastId:"productError"})}};(0,o.useEffect)(()=>{Q()},[]);let H=async()=>{let t=await fetch("".concat(e,"/get-meta-form-by-id?id=").concat(a)),l=await t.json();g(e=>({...e,seoTitle:l.title,productTitle:l.productTitle,metaDesc:l.description,metaKeyWords:l.keyword,productTitle:l.product_title,slug:l.slug,productList:l.product_name})),T(l.form_type),K(l.product_name),b(l.image_url),"form-2"===l.form_type?G(!1):G(!0)};(0,o.useEffect)(()=>{t.isReady&&H()},[t.isReady]);let Y=e=>{},ee=(e,t)=>{let a=null==e?void 0:e.value;h(e=>({...e,[t]:a})),console.log(m)},et=e=>{ee(e,"state")},ea=e=>{ee(e,"city")},el=e=>{ee(e,"store")},es=e=>{let{name:t,value:a}=e.target;g(e=>({...e,[t]:a})),E(e=>{let l={...e};return"seoTitle"===t&&(a.trim()?delete l.seoTitle:l.seoTitle="SEO Title is required"),"productTitle"===t&&(a.trim()?delete l.productTitle:l.productTitle="Product Title is required"),"metaDesc"===t&&(a.trim()?delete l.metaDesc:l.metaDesc="Meta Description is required"),"metaKeyWords"===t&&(a.trim()?delete l.metaKeyWords:l.metaKeyWords="Meta Keywords is required"),"slug"===t&&(a.trim()?/\s/.test(a)?l.slug="Slug cannot contain spaces":delete l.slug:l.slug="Slug is required"),l})};(0,o.useEffect)(()=>{P&&E(e=>{let t={...e};return(null==f?void 0:f.length)!==0&&f?delete t.s3imageUrlArray:t.s3imageUrlArray="Image is required",t})},[f]);let er=async()=>{C(!0),setTimeout(()=>{C(!1)},2500)},eo=()=>{let e={};return m.name.trim()||(e.name="Name is required"),m.phone.trim()||(e.phone="Phone Number is required"),m.otp.trim()||(e.otp="OTP is required"),m.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email)||(e.email="Email is invalid"):e.email="Email is required",m.state.trim()||(e.state="State is required"),k(e),0===Object.keys(e).length},ei=e=>{e.preventDefault(),eo()},en=()=>{var e;let t={};return(null==x?void 0:null===(e=x.productTitle)||void 0===e?void 0:e.trim())||(t.productTitle="Product Title is required"),/\s/.test(x.slug)&&(t.slug="Slug cannot contain spaces"),(null==w?void 0:w.trim())||(t.formID="Please Select a form"),(null==f?void 0:f.length)!==0&&f||(t.s3imageUrlArray="Image is required"),z&&1===A.length&&""===A[0].Name&&(t.phone="Add atleast one product"),E(t),0===Object.keys(t).length},ec=async()=>{if(F(!0),en())try{let l=await fetch("".concat(e,"/update-meta-form/").concat(a),{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify({title:x.seoTitle,meta_description:x.metaDesc,meta_keyword:x.metaKeyWords,product_name:z?A:x.productList,product_title:x.productTitle,image:f,form_type:w,slug:x.slug})});if(!l.ok)throw Error("Could not create meta form");let s=await l.json();"success"===s.status&&(i.Am.success("Form Updated Successfully!",{toastId:"successToast"}),setTimeout(()=>{t.push("/admin/dashboard")},2e3)),"info"===s.status&&i.Am.info(s.message),"error"===s.status&&i.Am.error(s.message,{toastId:"errorToast"})}catch(e){console.log(e),i.Am.error(e.message)}},ed=()=>{0===A.length||""!==A[A.length-1].Name.trim()?K([...A,{id:A.length+1+Math.random(),Name:""}]):i.Am.warn("Please fill in all fields for the current phone before adding a new one",{toastId:"emptyfield"}),console.log(A)},eu=e=>{K(A.filter(t=>t.id!==e))},em=(e,t,a)=>{K(A.map(l=>l.id===e?{...l,[t]:a}:l))},ep=async e=>{console.log({userSlug:M});let{protocol:t,hostname:a,port:l}=window.location;if(!/^([^=&]+=[^=&]+)(&[^=&]+=[^=&]+)*$/.test(M)){console.log("invalid"),R("Invalid slug format. Must be in 'key=value' format.");return}let s="".concat(t,"//").concat(a).concat(l?":".concat(l):"","/upgrade/").concat(""===x.slug?x.productTitle.toLowerCase().split(" ").join("-"):x.slug,"?").concat(M).split(" ").join("");if(navigator.clipboard&&"function"==typeof navigator.clipboard.writeText)navigator.clipboard.writeText(s).then(()=>{R("Copied!"),setTimeout(()=>R(!1),2e3)},()=>{console.error("Failed to copy the text.")});else{let e=document.createElement("textarea");e.value=s,document.body.appendChild(e),e.select();try{document.execCommand("copy"),R("Copied!"),setTimeout(()=>R(!1),2e3)}catch(e){console.error("Failed to copy: ",e),i.Am.warn(e.message,{toastId:"errorToast"})}}};return(0,o.useEffect)(()=>{let{protocol:e,hostname:t,port:a}=window.location;J("".concat(e,"//").concat(t).concat(a?":".concat(a):""))},[]),(0,l.jsxs)("div",{className:"w-screen flex justify-center",children:[(0,l.jsx)(p(),{children:(0,l.jsx)("title",{children:"Offer Unicorn - Update Form"})}),(0,l.jsxs)("div",{className:"container max-w-screen-xl mt-28 grid grid-cols-2 gap-x-16 gap-y-5",children:[(0,l.jsxs)("div",{className:"rounded border border-green-300 bg-green-100 py-2 col-span-2 px-2",children:[(0,l.jsx)("span",{className:"font-semibold",children:"Slug: "}),(0,l.jsxs)("span",{children:[$,"/upgrade/",x.slug||x.productTitle.split(" ").join("-"),"?",M,(0,l.jsxs)("button",{className:"ms-4 text-gray-500 hover:text-gray-800",onClick:ep,children:[(0,l.jsx)("i",{className:"bi bi-copy me-2"}),B]})]}),(0,l.jsx)("div",{className:"relative col-span-2",children:(0,l.jsx)("input",{type:"text",value:M,onChange:e=>Z(e.target.value.split(" ").join("")),className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200",placeholder:"Slug"})})]}),(0,l.jsxs)("div",{className:"col-span-2 grid grid-cols-2 gap-x-16 gap-y-5 ",children:[(0,l.jsxs)("div",{className:"relative col-span-2",children:[(0,l.jsxs)("label",{htmlFor:"productTitle",className:"font-medium text-gray-700",children:["Page Title ",(0,l.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,l.jsx)("input",{type:"text",id:"productTitle",name:"productTitle",value:x.productTitle,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 ".concat(D.productTitle?"border-red-300":""),placeholder:"Title"}),D.productTitle&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:D.productTitle})]}),(0,l.jsx)(n.U,{className:"bg-white border rounded-lg col-span-2",transition:!0,transitionTimeout:250,children:(0,l.jsx)(c.Z,{header:(0,l.jsx)("div",{className:"flex justify-between items-center text-xl font-semibold text-gray-800 cursor-pointer py-2",children:(0,l.jsx)("span",{className:"w-full",children:"SEO data"})}),children:(0,l.jsxs)("div",{className:"col-span-2 grid grid-cols-2 gap-x-16 gap-y-5 px-2",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("label",{htmlFor:"seoTitle",className:"font-medium text-gray-700",children:"SEO Title"}),(0,l.jsx)("input",{type:"text",id:"seoTitle",name:"seoTitle",value:x.seoTitle,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200  ".concat(D.seoTitle?"border-red-300":""),placeholder:"SEO Title"}),D.seoTitle&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:D.seoTitle})]}),(0,l.jsxs)("div",{className:"relative ",children:[(0,l.jsx)("label",{htmlFor:"metaDesc",className:"font-medium text-gray-700",children:"Meta Description"}),(0,l.jsx)("input",{type:"text",id:"metaDesc",name:"metaDesc",value:x.metaDesc,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 ".concat(D.metaDesc?"border-red-300":""),placeholder:"Meta Description"}),D.metaDesc&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:D.metaDesc})]}),(0,l.jsxs)("div",{className:"relative ",children:[(0,l.jsx)("label",{htmlFor:"metaKeyWords",className:"font-medium text-gray-700",children:"Meta Keyword"}),(0,l.jsx)("input",{type:"text",id:"metaKeyWords",name:"metaKeyWords",value:x.metaKeyWords,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 ".concat(D.metaKeyWords?"border-red-300":""),placeholder:"Meta Keywords"}),D.metaKeyWords&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:D.metaKeyWords})]}),(0,l.jsxs)("div",{className:"relative h-fit",children:[(0,l.jsx)("label",{htmlFor:"slug",className:"font-medium text-gray-700",children:"Slug (No spaces allowed)"}),(0,l.jsx)("input",{type:"text",id:"slug",name:"slug",value:x.slug,onChange:es,className:"border px-3 py-2 rounded w-full outline-none transition-all duration-200 ".concat(D.slug?"border-red-300":""),placeholder:"Slug"}),D.slug&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:D.slug})]})]})})})]}),(0,l.jsxs)("div",{className:"col-span-2 grid grid-cols-1 relative gap-y-3",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("input",{className:"w-4 h-4 border-gray-300 rounded cursor-pointer",type:"checkbox",name:"normal",id:"normal",checked:!z,onChange:()=>{G(e=>!e),K([{id:1,Name:""}])}}),(0,l.jsx)("label",{htmlFor:"normal",className:"pl-3 font-medium text-gray-700 cursor-pointer",children:"Pre-Book Form?"})]}),z&&(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("label",{className:"block font-medium text-gray-700",children:["Add to Products Dropdown ",(0,l.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,l.jsx)("div",{className:"col-span-2 grid grid-cols-2 gap-x-2",children:A.map((e,t)=>(0,l.jsxs)("div",{className:"flex items-center mb-4 relative",children:[(0,l.jsxs)("div",{className:"flex-1 mr-2",children:[(0,l.jsx)("input",{type:"text",className:"w-full border rounded-md px-3 py-2 focus:outline-none ".concat(D.phone&&0===A[0].Name.length?"border-red-300":"border-gray-300"," "),placeholder:"ex. iPhone 15",value:e.Name,onChange:t=>em(e.id,"Name",t.target.value)}),D.phone&&0===A[0].Name.length&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-4 left-0",children:D.phone})]}),A.length>1&&0!==t&&(0,l.jsx)("button",{type:"button",className:"text-red-500 p-2 rounded-md hover:bg-red-100",onClick:()=>eu(e.id),children:(0,l.jsx)("i",{className:"bi bi-trash3-fill text-xl"})}),0==t&&(0,l.jsx)("button",{type:"button",className:"flex items-center p-0.5 rounded-md text-blue-500 hover:text-blue-700 hover:bg-blue-100",onClick:ed,children:(0,l.jsx)("span",{className:"",children:(0,l.jsx)("i",{className:"bi bi-plus text-3xl"})})})]},e.id))})]})]}),(0,l.jsxs)("div",{className:"border-2 border-dashed focus-within:border-[#42c8b7] relative min-h-[760px] ".concat(D.s3imageUrlArray?"border-red-300":""),children:[(0,l.jsx)(s.Z,{maxNumber:1,folderName:N||"test",s3imageUrlArray:f,setS3imageUrlArray:b,tag:"creativeImage",imageName:"creativeImage",setImageName:j}),D.s3imageUrlArray&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-3.5 left-0",children:D.s3imageUrlArray})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:"mx-auto p-6 bg-white border border-gray-300 rounded ".concat(D.formID?"border-red-300":""),children:[(0,l.jsx)("span",{className:"border rounded block pe-2 w-full outline-none transition-all duration-200 ",children:(0,l.jsxs)("select",{name:"formSelect",id:"formSelect",className:"w-full px-3 py-2 outline-none",value:w,onChange:e=>{T(e.target.value)},children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Select a Form"}),z&&(0,l.jsx)("option",{value:"form-1",children:"Form 1"}),!z&&(0,l.jsx)("option",{value:"form-2",children:"Pre-Book Form"})]})}),"form-1"===w&&(0,l.jsx)(d.Z,{formData:m,errors:_,otpSentVisible:S,phoneList:[{label:"iPhone 12",value:1},{label:"iPhone 12",value:2}],currentStates:I,currentCities:U,currentStores:W,handleChange:Y,handleGetOtp:er,handleStateChange:et,handleCityChange:ea,handleStoreChange:el,handleFormSubmit:ei}),"form-2"===w&&(0,l.jsx)(u.Z,{formData:m,errors:_,otpSentVisible:S,phoneList:[{value:1,label:"iPhone 12"},{value:2,label:"iPhone 13"}],currentStates:I,currentCities:U,currentStores:W,handleChange:Y,handleGetOtp:er,handleStateChange:et,handleCityChange:ea,handleStoreChange:el,handleFormSubmit:ei})]}),D.formID&&(0,l.jsx)("span",{className:"text-red-400 text-xs absolute -bottom-3.5 left-0",children:D.formID})]}),(0,l.jsx)("div",{className:"col-span-2  grid grid-cols-3",children:(0,l.jsx)("button",{className:"col-start-2 bg-accent text-white text-center py-1 rounded",onClick:ec,children:"Submit"})})]})]})}}},function(e){e.O(0,[723,68,282,888,774,179],function(){return e(e.s=6880)}),_N_E=e.O()}]);