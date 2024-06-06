import{d as v,o as i,c as r,r as l,n as V,a as R,t as m,b as g,w as s,T as Lv,e as I,_ as x,u as T,i as tI,f as cI,g as wv,h as L,j as d,k as h,p as B,l as F,m as ta,q as Iv,s as z,v as W,x as rv,y as oa,z as Cv,A as Bv,B as oI,C as nI,D as N,F as f,E as A,G as Fv,H as yv,I as M,J as aa,K as Dv,L as lv,M as ha,N as pv,O as iI,P as Tv,Q as hI,R as dI,S as Rv,U as kv,V as rI,W as $v,X as Uv,Y as yI,Z as lI,$ as pI,a0 as kI,a1 as mv}from"./framework.DSGGXnHx.js";const sI=v({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(c){return(a,t)=>(i(),r("span",{class:V(["VPBadge",a.type])},[l(a.$slots,"default",{},()=>[R(m(a.text),1)])],2))}}),uI={key:0,class:"VPBackdrop"},MI=v({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(c){return(a,t)=>(i(),g(Lv,{name:"fade"},{default:s(()=>[a.show?(i(),r("div",uI)):I("",!0)]),_:1}))}}),vI=x(MI,[["__scopeId","data-v-c79a1216"]]),S=T;function II(c,a){let t,n=!1;return()=>{t&&clearTimeout(t),n?t=setTimeout(c,a):(c(),(n=!0)&&setTimeout(()=>n=!1,a))}}function gv(c){return/^\//.test(c)?c:`/${c}`}function bv(c){const{pathname:a,search:t,hash:n,protocol:o}=new URL(c,"http://a.com");if(tI(c)||c.startsWith("#")||!o.startsWith("http")||!cI(a))return c;const{site:y}=S(),p=a.endsWith("/")||a.endsWith(".html")?c:c.replace(/(?:(^\.+)\/)?.*$/,`$1${a.replace(/(\.md)?$/,y.value.cleanUrls?"":".html")}${t}${n}`);return wv(p)}function na({correspondingLink:c=!1}={}){const{site:a,localeIndex:t,page:n,theme:o,hash:y}=S(),p=L(()=>{var k,w;return{label:(k=a.value.locales[t.value])==null?void 0:k.label,link:((w=a.value.locales[t.value])==null?void 0:w.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:L(()=>Object.entries(a.value.locales).flatMap(([k,w])=>p.value.label===w.label?[]:{text:w.label,link:mI(w.link||(k==="root"?"/":`/${k}/`),o.value.i18nRouting!==!1&&c,n.value.relativePath.slice(p.value.link.length-1),!a.value.cleanUrls)+y.value})),currentLang:p}}function mI(c,a,t,n){return a?c.replace(/\/$/,"")+gv(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,n?".html":"")):c}const gI=c=>(B("data-v-d6be1790"),c=c(),F(),c),xI={class:"NotFound"},fI={class:"code"},LI={class:"title"},wI=gI(()=>d("div",{class:"divider"},null,-1)),CI={class:"quote"},bI={class:"action"},SI=["href","aria-label"],qI=v({__name:"NotFound",setup(c){const{theme:a}=S(),{currentLang:t}=na();return(n,o)=>{var y,p,u,k,w;return i(),r("div",xI,[d("p",fI,m(((y=h(a).notFound)==null?void 0:y.code)??"404"),1),d("h1",LI,m(((p=h(a).notFound)==null?void 0:p.title)??"PAGE NOT FOUND"),1),wI,d("blockquote",CI,m(((u=h(a).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),d("div",bI,[d("a",{class:"link",href:h(wv)(h(t).link),"aria-label":((k=h(a).notFound)==null?void 0:k.linkLabel)??"go to home"},m(((w=h(a).notFound)==null?void 0:w.linkText)??"Take me home"),9,SI)])])}}}),HI=x(qI,[["__scopeId","data-v-d6be1790"]]);function Ov(c,a){if(Array.isArray(c))return da(c);if(c==null)return[];a=gv(a);const t=Object.keys(c).sort((o,y)=>y.split("/").length-o.split("/").length).find(o=>a.startsWith(gv(o))),n=t?c[t]:[];return Array.isArray(n)?da(n):da(n.items,n.base)}function AI(c){const a=[];let t=0;for(const n in c){const o=c[n];if(o.items){t=a.push(o);continue}a[t]||a.push({items:[]}),a[t].items.push(o)}return a}function VI(c){const a=[];function t(n){for(const o of n)o.text&&o.link&&a.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(c),a}function xv(c,a){return Array.isArray(a)?a.some(t=>xv(c,t)):ta(c,a.link)?!0:a.items?xv(c,a.items):!1}function da(c,a){return[...c].map(t=>{const n={...t},o=n.base||a;return o&&n.link&&(n.link=o+n.link),n.items&&(n.items=da(n.items,o)),n})}function O(){const{frontmatter:c,page:a,theme:t}=S(),n=Iv("(min-width: 960px)"),o=z(!1),y=L(()=>{const j=t.value.sidebar,H=a.value.relativePath;return j?Ov(j,H):[]}),p=z(y.value);W(y,(j,H)=>{JSON.stringify(j)!==JSON.stringify(H)&&(p.value=y.value)});const u=L(()=>c.value.sidebar!==!1&&p.value.length>0&&c.value.layout!=="home"),k=L(()=>w?c.value.aside==null?t.value.aside==="left":c.value.aside==="left":!1),w=L(()=>c.value.layout==="home"?!1:c.value.aside!=null?!!c.value.aside:t.value.aside!==!1),b=L(()=>u.value&&n.value),C=L(()=>u.value?AI(p.value):[]);function q(){o.value=!0}function P(){o.value=!1}function _(){o.value?P():q()}return{isOpen:o,sidebar:p,sidebarGroups:C,hasSidebar:u,hasAside:w,leftAside:k,isSidebarEnabled:b,open:q,close:P,toggle:_}}function zI(c,a){let t;rv(()=>{t=c.value?document.activeElement:void 0}),oa(()=>{window.addEventListener("keyup",n)}),Cv(()=>{window.removeEventListener("keyup",n)});function n(o){o.key==="Escape"&&c.value&&(a(),t==null||t.focus())}}function PI(c){const{page:a,hash:t}=S(),n=z(!1),o=L(()=>c.value.collapsed!=null),y=L(()=>!!c.value.link),p=z(!1),u=()=>{p.value=ta(a.value.relativePath,c.value.link)};W([a,c,t],u),oa(u);const k=L(()=>p.value?!0:c.value.items?xv(a.value.relativePath,c.value.items):!1),w=L(()=>!!(c.value.items&&c.value.items.length));rv(()=>{n.value=!!(o.value&&c.value.collapsed)}),Bv(()=>{(p.value||k.value)&&(n.value=!1)});function b(){o.value&&(n.value=!n.value)}return{collapsed:n,collapsible:o,isLink:y,isActiveLink:p,hasActiveLink:k,hasChildren:w,toggle:b}}function _I(){const{hasSidebar:c}=O(),a=Iv("(min-width: 960px)"),t=Iv("(min-width: 1280px)");return{isAsideEnabled:L(()=>!t.value&&!a.value?!1:c.value?t.value:a.value)}}const fv=[];function Zv(c){return typeof c.outline=="object"&&!Array.isArray(c.outline)&&c.outline.label||c.outlineTitle||"On this page"}function Sv(c){const a=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const n=Number(t.tagName[1]);return{element:t,title:jI(t),link:"#"+t.id,level:n}});return BI(a,c)}function jI(c){let a="";for(const t of c.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor")||t.classList.contains("ignore-header"))continue;a+=t.textContent}else t.nodeType===3&&(a+=t.textContent);return a.trim()}function BI(c,a){if(a===!1)return[];const t=(typeof a=="object"&&!Array.isArray(a)?a.level:a)||2,[n,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;c=c.filter(p=>p.level>=n&&p.level<=o),fv.length=0;for(const{element:p,link:u}of c)fv.push({element:p,link:u});const y=[];e:for(let p=0;p<c.length;p++){const u=c[p];if(p===0)y.push(u);else{for(let k=p-1;k>=0;k--){const w=c[k];if(w.level<u.level){(w.children||(w.children=[])).push(u);continue e}}y.push(u)}}return y}function FI(c,a){const{isAsideEnabled:t}=_I(),n=II(y,100);let o=null;oa(()=>{requestAnimationFrame(y),window.addEventListener("scroll",n)}),oI(()=>{p(location.hash)}),Cv(()=>{window.removeEventListener("scroll",n)});function y(){if(!t.value)return;const u=window.scrollY,k=window.innerHeight,w=document.body.offsetHeight,b=Math.abs(u+k-w)<1,C=fv.map(({element:P,link:_})=>({link:_,top:DI(P)})).filter(({top:P})=>!Number.isNaN(P)).sort((P,_)=>P.top-_.top);if(!C.length){p(null);return}if(u<1){p(null);return}if(b){p(C[C.length-1].link);return}let q=null;for(const{link:P,top:_}of C){if(_>u+nI()+4)break;q=P}p(q)}function p(u){o&&o.classList.remove("active"),u==null?o=null:o=c.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const k=o;k?(k.classList.add("active"),a.value.style.top=k.offsetTop+39+"px",a.value.style.opacity="1"):(a.value.style.top="33px",a.value.style.opacity="0")}}function DI(c){let a=0;for(;c!==document.body;){if(c===null)return NaN;a+=c.offsetTop,c=c.offsetParent}return a}const TI=["href","title"],RI=v({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(c){function a({target:t}){const n=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(n));o==null||o.focus({preventScroll:!0})}return(t,n)=>{const o=N("VPDocOutlineItem",!0);return i(),r("ul",{class:V(["VPDocOutlineItem",t.root?"root":"nested"])},[(i(!0),r(f,null,A(t.headers,({children:y,link:p,title:u})=>(i(),r("li",null,[d("a",{class:"outline-link",href:p,onClick:a,title:u},m(u),9,TI),y!=null&&y.length?(i(),g(o,{key:0,headers:y},null,8,["headers"])):I("",!0)]))),256))],2)}}}),Gv=x(RI,[["__scopeId","data-v-b933a997"]]),$I={class:"content"},UI={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},OI=v({__name:"VPDocAsideOutline",setup(c){const{frontmatter:a,theme:t}=S(),n=Fv([]);yv(()=>{n.value=Sv(a.value.outline??t.value.outline)});const o=z(),y=z();return FI(o,y),(p,u)=>(i(),r("nav",{"aria-labelledby":"doc-outline-aria-label",class:V(["VPDocAsideOutline",{"has-outline":n.value.length>0}]),ref_key:"container",ref:o},[d("div",$I,[d("div",{class:"outline-marker",ref_key:"marker",ref:y},null,512),d("div",UI,m(h(Zv)(h(t))),1),M(Gv,{headers:n.value,root:!0},null,8,["headers"])])],2))}}),ZI=x(OI,[["__scopeId","data-v-a5bbad30"]]),GI={class:"VPDocAsideCarbonAds"},EI=v({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(c){const a=()=>null;return(t,n)=>(i(),r("div",GI,[M(h(a),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),WI=c=>(B("data-v-3f215769"),c=c(),F(),c),NI={class:"VPDocAside"},XI=WI(()=>d("div",{class:"spacer"},null,-1)),KI=v({__name:"VPDocAside",setup(c){const{theme:a}=S();return(t,n)=>(i(),r("div",NI,[l(t.$slots,"aside-top",{},void 0,!0),l(t.$slots,"aside-outline-before",{},void 0,!0),M(ZI),l(t.$slots,"aside-outline-after",{},void 0,!0),XI,l(t.$slots,"aside-ads-before",{},void 0,!0),h(a).carbonAds?(i(),g(EI,{key:0,"carbon-ads":h(a).carbonAds},null,8,["carbon-ads"])):I("",!0),l(t.$slots,"aside-ads-after",{},void 0,!0),l(t.$slots,"aside-bottom",{},void 0,!0)]))}}),JI=x(KI,[["__scopeId","data-v-3f215769"]]);function QI(){const{theme:c,page:a}=S();return L(()=>{const{text:t="Edit this page",pattern:n=""}=c.value.editLink||{};let o;return typeof n=="function"?o=n(a.value):o=n.replace(/:path/g,a.value.filePath),{url:o,text:t}})}function YI(){const{page:c,theme:a,frontmatter:t}=S();return L(()=>{var w,b,C,q,P,_,j,H;const n=Ov(a.value.sidebar,c.value.relativePath),o=VI(n),y=em(o,Z=>Z.link.replace(/[?#].*$/,"")),p=y.findIndex(Z=>ta(c.value.relativePath,Z.link)),u=((w=a.value.docFooter)==null?void 0:w.prev)===!1&&!t.value.prev||t.value.prev===!1,k=((b=a.value.docFooter)==null?void 0:b.next)===!1&&!t.value.next||t.value.next===!1;return{prev:u?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((C=y[p-1])==null?void 0:C.docFooterText)??((q=y[p-1])==null?void 0:q.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((P=y[p-1])==null?void 0:P.link)},next:k?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((_=y[p+1])==null?void 0:_.docFooterText)??((j=y[p+1])==null?void 0:j.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((H=y[p+1])==null?void 0:H.link)}}})}function em(c,a){const t=new Set;return c.filter(n=>{const o=a(n);return t.has(o)?!1:t.add(o)})}const U=v({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(c){const a=c,t=L(()=>a.tag??(a.href?"a":"span")),n=L(()=>a.href&&Dv.test(a.href)||a.target==="_blank");return(o,y)=>(i(),g(aa(t.value),{class:V(["VPLink",{link:o.href,"vp-external-link-icon":n.value,"no-icon":o.noIcon}]),href:o.href?h(bv)(o.href):void 0,target:o.target??(n.value?"_blank":void 0),rel:o.rel??(n.value?"noreferrer":void 0)},{default:s(()=>[l(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),am={class:"VPLastUpdated"},tm=["datetime"],cm=v({__name:"VPDocFooterLastUpdated",setup(c){const{theme:a,page:t,frontmatter:n,lang:o}=S(),y=L(()=>new Date(n.value.lastUpdated??t.value.lastUpdated)),p=L(()=>y.value.toISOString()),u=z("");return oa(()=>{rv(()=>{var k,w,b;u.value=new Intl.DateTimeFormat((w=(k=a.value.lastUpdated)==null?void 0:k.formatOptions)!=null&&w.forceLocale?o.value:void 0,((b=a.value.lastUpdated)==null?void 0:b.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(y.value)})}),(k,w)=>{var b;return i(),r("p",am,[R(m(((b=h(a).lastUpdated)==null?void 0:b.text)||h(a).lastUpdatedText||"Last updated")+": ",1),d("time",{datetime:p.value},m(u.value),9,tm)])}}}),om=x(cm,[["__scopeId","data-v-7e05ebdb"]]),Ev=c=>(B("data-v-d4a0bba5"),c=c(),F(),c),nm={key:0,class:"VPDocFooter"},im={key:0,class:"edit-info"},hm={key:0,class:"edit-link"},dm=Ev(()=>d("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),rm={key:1,class:"last-updated"},ym={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},lm=Ev(()=>d("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),pm={class:"pager"},km=["innerHTML"],sm=["innerHTML"],um={class:"pager"},Mm=["innerHTML"],vm=["innerHTML"],Im=v({__name:"VPDocFooter",setup(c){const{theme:a,page:t,frontmatter:n}=S(),o=QI(),y=YI(),p=L(()=>a.value.editLink&&n.value.editLink!==!1),u=L(()=>t.value.lastUpdated&&n.value.lastUpdated!==!1),k=L(()=>p.value||u.value||y.value.prev||y.value.next);return(w,b)=>{var C,q,P,_;return k.value?(i(),r("footer",nm,[l(w.$slots,"doc-footer-before",{},void 0,!0),p.value||u.value?(i(),r("div",im,[p.value?(i(),r("div",hm,[M(U,{class:"edit-link-button",href:h(o).url,"no-icon":!0},{default:s(()=>[dm,R(" "+m(h(o).text),1)]),_:1},8,["href"])])):I("",!0),u.value?(i(),r("div",rm,[M(om)])):I("",!0)])):I("",!0),(C=h(y).prev)!=null&&C.link||(q=h(y).next)!=null&&q.link?(i(),r("nav",ym,[lm,d("div",pm,[(P=h(y).prev)!=null&&P.link?(i(),g(U,{key:0,class:"pager-link prev",href:h(y).prev.link},{default:s(()=>{var j;return[d("span",{class:"desc",innerHTML:((j=h(a).docFooter)==null?void 0:j.prev)||"Previous page"},null,8,km),d("span",{class:"title",innerHTML:h(y).prev.text},null,8,sm)]}),_:1},8,["href"])):I("",!0)]),d("div",um,[(_=h(y).next)!=null&&_.link?(i(),g(U,{key:0,class:"pager-link next",href:h(y).next.link},{default:s(()=>{var j;return[d("span",{class:"desc",innerHTML:((j=h(a).docFooter)==null?void 0:j.next)||"Next page"},null,8,Mm),d("span",{class:"title",innerHTML:h(y).next.text},null,8,vm)]}),_:1},8,["href"])):I("",!0)])])):I("",!0)])):I("",!0)}}}),mm=x(Im,[["__scopeId","data-v-d4a0bba5"]]),gm=c=>(B("data-v-39a288b8"),c=c(),F(),c),xm={class:"container"},fm=gm(()=>d("div",{class:"aside-curtain"},null,-1)),Lm={class:"aside-container"},wm={class:"aside-content"},Cm={class:"content"},bm={class:"content-container"},Sm={class:"main"},qm=v({__name:"VPDoc",setup(c){const{theme:a}=S(),t=lv(),{hasSidebar:n,hasAside:o,leftAside:y}=O(),p=L(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,k)=>{const w=N("Content");return i(),r("div",{class:V(["VPDoc",{"has-sidebar":h(n),"has-aside":h(o)}])},[l(u.$slots,"doc-top",{},void 0,!0),d("div",xm,[h(o)?(i(),r("div",{key:0,class:V(["aside",{"left-aside":h(y)}])},[fm,d("div",Lm,[d("div",wm,[M(JI,null,{"aside-top":s(()=>[l(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":s(()=>[l(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":s(()=>[l(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":s(()=>[l(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":s(()=>[l(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":s(()=>[l(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):I("",!0),d("div",Cm,[d("div",bm,[l(u.$slots,"doc-before",{},void 0,!0),d("main",Sm,[M(w,{class:V(["vp-doc",[p.value,h(a).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),M(mm,null,{"doc-footer-before":s(()=>[l(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),l(u.$slots,"doc-after",{},void 0,!0)])])]),l(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Hm=x(qm,[["__scopeId","data-v-39a288b8"]]),Am=v({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(c){const a=c,t=L(()=>a.href&&Dv.test(a.href)),n=L(()=>a.tag||a.href?"a":"button");return(o,y)=>(i(),g(aa(n.value),{class:V(["VPButton",[o.size,o.theme]]),href:o.href?h(bv)(o.href):void 0,target:a.target??(t.value?"_blank":void 0),rel:a.rel??(t.value?"noreferrer":void 0)},{default:s(()=>[R(m(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),Vm=x(Am,[["__scopeId","data-v-cad61b99"]]),zm=["src","alt"],Pm=v({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(c){return(a,t)=>{const n=N("VPImage",!0);return a.image?(i(),r(f,{key:0},[typeof a.image=="string"||"src"in a.image?(i(),r("img",ha({key:0,class:"VPImage"},typeof a.image=="string"?a.$attrs:{...a.image,...a.$attrs},{src:h(wv)(typeof a.image=="string"?a.image:a.image.src),alt:a.alt??(typeof a.image=="string"?"":a.image.alt||"")}),null,16,zm)):(i(),r(f,{key:1},[M(n,ha({class:"dark",image:a.image.dark,alt:a.image.alt},a.$attrs),null,16,["image","alt"]),M(n,ha({class:"light",image:a.image.light,alt:a.image.alt},a.$attrs),null,16,["image","alt"])],64))],64)):I("",!0)}}}),dv=x(Pm,[["__scopeId","data-v-8426fc1a"]]),_m=c=>(B("data-v-303bb580"),c=c(),F(),c),jm={class:"container"},Bm={class:"main"},Fm={key:0,class:"name"},Dm=["innerHTML"],Tm=["innerHTML"],Rm=["innerHTML"],$m={key:0,class:"actions"},Um={key:0,class:"image"},Om={class:"image-container"},Zm=_m(()=>d("div",{class:"image-bg"},null,-1)),Gm=v({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(c){const a=pv("hero-image-slot-exists");return(t,n)=>(i(),r("div",{class:V(["VPHero",{"has-image":t.image||h(a)}])},[d("div",jm,[d("div",Bm,[l(t.$slots,"home-hero-info-before",{},void 0,!0),l(t.$slots,"home-hero-info",{},()=>[t.name?(i(),r("h1",Fm,[d("span",{innerHTML:t.name,class:"clip"},null,8,Dm)])):I("",!0),t.text?(i(),r("p",{key:1,innerHTML:t.text,class:"text"},null,8,Tm)):I("",!0),t.tagline?(i(),r("p",{key:2,innerHTML:t.tagline,class:"tagline"},null,8,Rm)):I("",!0)],!0),l(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(i(),r("div",$m,[(i(!0),r(f,null,A(t.actions,o=>(i(),r("div",{key:o.link,class:"action"},[M(Vm,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):I("",!0),l(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||h(a)?(i(),r("div",Um,[d("div",Om,[Zm,l(t.$slots,"home-hero-image",{},()=>[t.image?(i(),g(dv,{key:0,class:"image-src",image:t.image},null,8,["image"])):I("",!0)],!0)])])):I("",!0)])],2))}}),Em=x(Gm,[["__scopeId","data-v-303bb580"]]),Wm=v({__name:"VPHomeHero",setup(c){const{frontmatter:a}=S();return(t,n)=>h(a).hero?(i(),g(Em,{key:0,class:"VPHomeHero",name:h(a).hero.name,text:h(a).hero.text,tagline:h(a).hero.tagline,image:h(a).hero.image,actions:h(a).hero.actions},{"home-hero-info-before":s(()=>[l(t.$slots,"home-hero-info-before")]),"home-hero-info":s(()=>[l(t.$slots,"home-hero-info")]),"home-hero-info-after":s(()=>[l(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":s(()=>[l(t.$slots,"home-hero-actions-after")]),"home-hero-image":s(()=>[l(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):I("",!0)}}),Nm=c=>(B("data-v-a3976bdc"),c=c(),F(),c),Xm={class:"box"},Km={key:0,class:"icon"},Jm=["innerHTML"],Qm=["innerHTML"],Ym=["innerHTML"],eg={key:4,class:"link-text"},ag={class:"link-text-value"},tg=Nm(()=>d("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),cg=v({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(c){return(a,t)=>(i(),g(U,{class:"VPFeature",href:a.link,rel:a.rel,target:a.target,"no-icon":!0,tag:a.link?"a":"div"},{default:s(()=>[d("article",Xm,[typeof a.icon=="object"&&a.icon.wrap?(i(),r("div",Km,[M(dv,{image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])])):typeof a.icon=="object"?(i(),g(dv,{key:1,image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])):a.icon?(i(),r("div",{key:2,class:"icon",innerHTML:a.icon},null,8,Jm)):I("",!0),d("h2",{class:"title",innerHTML:a.title},null,8,Qm),a.details?(i(),r("p",{key:3,class:"details",innerHTML:a.details},null,8,Ym)):I("",!0),a.linkText?(i(),r("div",eg,[d("p",ag,[R(m(a.linkText)+" ",1),tg])])):I("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),og=x(cg,[["__scopeId","data-v-a3976bdc"]]),ng={key:0,class:"VPFeatures"},ig={class:"container"},hg={class:"items"},dg=v({__name:"VPFeatures",props:{features:{}},setup(c){const a=c,t=L(()=>{const n=a.features.length;if(n){if(n===2)return"grid-2";if(n===3)return"grid-3";if(n%3===0)return"grid-6";if(n>3)return"grid-4"}else return});return(n,o)=>n.features?(i(),r("div",ng,[d("div",ig,[d("div",hg,[(i(!0),r(f,null,A(n.features,y=>(i(),r("div",{key:y.title,class:V(["item",[t.value]])},[M(og,{icon:y.icon,title:y.title,details:y.details,link:y.link,"link-text":y.linkText,rel:y.rel,target:y.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):I("",!0)}}),rg=x(dg,[["__scopeId","data-v-a6181336"]]),yg=v({__name:"VPHomeFeatures",setup(c){const{frontmatter:a}=S();return(t,n)=>h(a).features?(i(),g(rg,{key:0,class:"VPHomeFeatures",features:h(a).features},null,8,["features"])):I("",!0)}}),lg=v({__name:"VPHomeContent",setup(c){const{width:a}=iI({initialWidth:0,includeScrollbar:!1});return(t,n)=>(i(),r("div",{class:"vp-doc container",style:Tv(h(a)?{"--vp-offset":`calc(50% - ${h(a)/2}px)`}:{})},[l(t.$slots,"default",{},void 0,!0)],4))}}),pg=x(lg,[["__scopeId","data-v-8e2d4988"]]),kg={class:"VPHome"},sg=v({__name:"VPHome",setup(c){const{frontmatter:a}=S();return(t,n)=>{const o=N("Content");return i(),r("div",kg,[l(t.$slots,"home-hero-before",{},void 0,!0),M(Wm,null,{"home-hero-info-before":s(()=>[l(t.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":s(()=>[l(t.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":s(()=>[l(t.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":s(()=>[l(t.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":s(()=>[l(t.$slots,"home-hero-image",{},void 0,!0)]),_:3}),l(t.$slots,"home-hero-after",{},void 0,!0),l(t.$slots,"home-features-before",{},void 0,!0),M(yg),l(t.$slots,"home-features-after",{},void 0,!0),h(a).markdownStyles!==!1?(i(),g(pg,{key:0},{default:s(()=>[M(o)]),_:1})):(i(),g(o,{key:1}))])}}}),ug=x(sg,[["__scopeId","data-v-686f80a6"]]),Mg={},vg={class:"VPPage"};function Ig(c,a){const t=N("Content");return i(),r("div",vg,[l(c.$slots,"page-top"),M(t),l(c.$slots,"page-bottom")])}const mg=x(Mg,[["render",Ig]]),gg=v({__name:"VPContent",setup(c){const{page:a,frontmatter:t}=S(),{hasSidebar:n}=O();return(o,y)=>(i(),r("div",{class:V(["VPContent",{"has-sidebar":h(n),"is-home":h(t).layout==="home"}]),id:"VPContent"},[h(a).isNotFound?l(o.$slots,"not-found",{key:0},()=>[M(HI)],!0):h(t).layout==="page"?(i(),g(mg,{key:1},{"page-top":s(()=>[l(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":s(()=>[l(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):h(t).layout==="home"?(i(),g(ug,{key:2},{"home-hero-before":s(()=>[l(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":s(()=>[l(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":s(()=>[l(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":s(()=>[l(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":s(()=>[l(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":s(()=>[l(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":s(()=>[l(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":s(()=>[l(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":s(()=>[l(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):h(t).layout&&h(t).layout!=="doc"?(i(),g(aa(h(t).layout),{key:3})):(i(),g(Hm,{key:4},{"doc-top":s(()=>[l(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":s(()=>[l(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":s(()=>[l(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":s(()=>[l(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":s(()=>[l(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":s(()=>[l(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":s(()=>[l(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":s(()=>[l(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":s(()=>[l(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":s(()=>[l(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":s(()=>[l(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),xg=x(gg,[["__scopeId","data-v-1428d186"]]),fg={class:"container"},Lg=["innerHTML"],wg=["innerHTML"],Cg=v({__name:"VPFooter",setup(c){const{theme:a,frontmatter:t}=S(),{hasSidebar:n}=O();return(o,y)=>h(a).footer&&h(t).footer!==!1?(i(),r("footer",{key:0,class:V(["VPFooter",{"has-sidebar":h(n)}])},[d("div",fg,[h(a).footer.message?(i(),r("p",{key:0,class:"message",innerHTML:h(a).footer.message},null,8,Lg)):I("",!0),h(a).footer.copyright?(i(),r("p",{key:1,class:"copyright",innerHTML:h(a).footer.copyright},null,8,wg)):I("",!0)])],2)):I("",!0)}}),bg=x(Cg,[["__scopeId","data-v-e315a0ad"]]);function Sg(){const{theme:c,frontmatter:a}=S(),t=Fv([]),n=L(()=>t.value.length>0);return yv(()=>{t.value=Sv(a.value.outline??c.value.outline)}),{headers:t,hasLocalNav:n}}const qg=c=>(B("data-v-17a5e62e"),c=c(),F(),c),Hg={class:"menu-text"},Ag=qg(()=>d("span",{class:"vpi-chevron-right icon"},null,-1)),Vg={class:"header"},zg={class:"outline"},Pg=v({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(c){const a=c,{theme:t}=S(),n=z(!1),o=z(0),y=z(),p=z();function u(C){var q;(q=y.value)!=null&&q.contains(C.target)||(n.value=!1)}W(n,C=>{if(C){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),hI("Escape",()=>{n.value=!1}),yv(()=>{n.value=!1});function k(){n.value=!n.value,o.value=window.innerHeight+Math.min(window.scrollY-a.navHeight,0)}function w(C){C.target.classList.contains("outline-link")&&(p.value&&(p.value.style.transition="none"),dI(()=>{n.value=!1}))}function b(){n.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(C,q)=>(i(),r("div",{class:"VPLocalNavOutlineDropdown",style:Tv({"--vp-vh":o.value+"px"}),ref_key:"main",ref:y},[C.headers.length>0?(i(),r("button",{key:0,onClick:k,class:V({open:n.value})},[d("span",Hg,m(h(Zv)(h(t))),1),Ag],2)):(i(),r("button",{key:1,onClick:b},m(h(t).returnToTopLabel||"Return to top"),1)),M(Lv,{name:"flyout"},{default:s(()=>[n.value?(i(),r("div",{key:0,ref_key:"items",ref:p,class:"items",onClick:w},[d("div",Vg,[d("a",{class:"top-link",href:"#",onClick:b},m(h(t).returnToTopLabel||"Return to top"),1)]),d("div",zg,[M(Gv,{headers:C.headers},null,8,["headers"])])],512)):I("",!0)]),_:1})],4))}}),_g=x(Pg,[["__scopeId","data-v-17a5e62e"]]),jg=c=>(B("data-v-a6f0e41e"),c=c(),F(),c),Bg={class:"container"},Fg=["aria-expanded"],Dg=jg(()=>d("span",{class:"vpi-align-left menu-icon"},null,-1)),Tg={class:"menu-text"},Rg=v({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(c){const{theme:a,frontmatter:t}=S(),{hasSidebar:n}=O(),{headers:o}=Sg(),{y}=Rv(),p=z(0);oa(()=>{p.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),yv(()=>{o.value=Sv(t.value.outline??a.value.outline)});const u=L(()=>o.value.length===0),k=L(()=>u.value&&!n.value),w=L(()=>({VPLocalNav:!0,"has-sidebar":n.value,empty:u.value,fixed:k.value}));return(b,C)=>h(t).layout!=="home"&&(!k.value||h(y)>=p.value)?(i(),r("div",{key:0,class:V(w.value)},[d("div",Bg,[h(n)?(i(),r("button",{key:0,class:"menu","aria-expanded":b.open,"aria-controls":"VPSidebarNav",onClick:C[0]||(C[0]=q=>b.$emit("open-menu"))},[Dg,d("span",Tg,m(h(a).sidebarMenuLabel||"Menu"),1)],8,Fg)):I("",!0),M(_g,{headers:h(o),navHeight:p.value},null,8,["headers","navHeight"])])],2)):I("",!0)}}),$g=x(Rg,[["__scopeId","data-v-a6f0e41e"]]);function Ug(){const c=z(!1);function a(){c.value=!0,window.addEventListener("resize",o)}function t(){c.value=!1,window.removeEventListener("resize",o)}function n(){c.value?t():a()}function o(){window.outerWidth>=768&&t()}const y=lv();return W(()=>y.path,t),{isScreenOpen:c,openScreen:a,closeScreen:t,toggleScreen:n}}const Og={},Zg={class:"VPSwitch",type:"button",role:"switch"},Gg={class:"check"},Eg={key:0,class:"icon"};function Wg(c,a){return i(),r("button",Zg,[d("span",Gg,[c.$slots.default?(i(),r("span",Eg,[l(c.$slots,"default",{},void 0,!0)])):I("",!0)])])}const Ng=x(Og,[["render",Wg],["__scopeId","data-v-1d5665e3"]]),Wv=c=>(B("data-v-d1f28634"),c=c(),F(),c),Xg=Wv(()=>d("span",{class:"vpi-sun sun"},null,-1)),Kg=Wv(()=>d("span",{class:"vpi-moon moon"},null,-1)),Jg=v({__name:"VPSwitchAppearance",setup(c){const{isDark:a,theme:t}=S(),n=pv("toggle-appearance",()=>{a.value=!a.value}),o=L(()=>a.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme");return(y,p)=>(i(),g(Ng,{title:o.value,class:"VPSwitchAppearance","aria-checked":h(a),onClick:h(n)},{default:s(()=>[Xg,Kg]),_:1},8,["title","aria-checked","onClick"]))}}),qv=x(Jg,[["__scopeId","data-v-d1f28634"]]),Qg={key:0,class:"VPNavBarAppearance"},Yg=v({__name:"VPNavBarAppearance",setup(c){const{site:a}=S();return(t,n)=>h(a).appearance&&h(a).appearance!=="force-dark"?(i(),r("div",Qg,[M(qv)])):I("",!0)}}),ex=x(Yg,[["__scopeId","data-v-e6aabb21"]]),Hv=z();let Nv=!1,vv=0;function ax(c){const a=z(!1);if(kv){!Nv&&tx(),vv++;const t=W(Hv,n=>{var o,y,p;n===c.el.value||(o=c.el.value)!=null&&o.contains(n)?(a.value=!0,(y=c.onFocus)==null||y.call(c)):(a.value=!1,(p=c.onBlur)==null||p.call(c))});Cv(()=>{t(),vv--,vv||cx()})}return rI(a)}function tx(){document.addEventListener("focusin",Xv),Nv=!0,Hv.value=document.activeElement}function cx(){document.removeEventListener("focusin",Xv)}function Xv(){Hv.value=document.activeElement}const ox={class:"VPMenuLink"},nx=v({__name:"VPMenuLink",props:{item:{}},setup(c){const{page:a}=S();return(t,n)=>(i(),r("div",ox,[M(U,{class:V({active:h(ta)(h(a).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:s(()=>[R(m(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),sv=x(nx,[["__scopeId","data-v-43f1e123"]]),ix={class:"VPMenuGroup"},hx={key:0,class:"title"},dx=v({__name:"VPMenuGroup",props:{text:{},items:{}},setup(c){return(a,t)=>(i(),r("div",ix,[a.text?(i(),r("p",hx,m(a.text),1)):I("",!0),(i(!0),r(f,null,A(a.items,n=>(i(),r(f,null,["link"in n?(i(),g(sv,{key:0,item:n},null,8,["item"])):I("",!0)],64))),256))]))}}),rx=x(dx,[["__scopeId","data-v-69e747b5"]]),yx={class:"VPMenu"},lx={key:0,class:"items"},px=v({__name:"VPMenu",props:{items:{}},setup(c){return(a,t)=>(i(),r("div",yx,[a.items?(i(),r("div",lx,[(i(!0),r(f,null,A(a.items,n=>(i(),r(f,{key:n.text},["link"in n?(i(),g(sv,{key:0,item:n},null,8,["item"])):(i(),g(rx,{key:1,text:n.text,items:n.items},null,8,["text","items"]))],64))),128))])):I("",!0),l(a.$slots,"default",{},void 0,!0)]))}}),kx=x(px,[["__scopeId","data-v-e7ea1737"]]),sx=c=>(B("data-v-b6c34ac9"),c=c(),F(),c),ux=["aria-expanded","aria-label"],Mx={key:0,class:"text"},vx=["innerHTML"],Ix=sx(()=>d("span",{class:"vpi-chevron-down text-icon"},null,-1)),mx={key:1,class:"vpi-more-horizontal icon"},gx={class:"menu"},xx=v({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(c){const a=z(!1),t=z();ax({el:t,onBlur:n});function n(){a.value=!1}return(o,y)=>(i(),r("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:y[1]||(y[1]=p=>a.value=!0),onMouseleave:y[2]||(y[2]=p=>a.value=!1)},[d("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":a.value,"aria-label":o.label,onClick:y[0]||(y[0]=p=>a.value=!a.value)},[o.button||o.icon?(i(),r("span",Mx,[o.icon?(i(),r("span",{key:0,class:V([o.icon,"option-icon"])},null,2)):I("",!0),o.button?(i(),r("span",{key:1,innerHTML:o.button},null,8,vx)):I("",!0),Ix])):(i(),r("span",mx))],8,ux),d("div",gx,[M(kx,{items:o.items},{default:s(()=>[l(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Av=x(xx,[["__scopeId","data-v-b6c34ac9"]]),fx=["href","aria-label","innerHTML"],Lx=v({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(c){const a=c,t=L(()=>typeof a.icon=="object"?a.icon.svg:`<span class="vpi-social-${a.icon}" />`);return(n,o)=>(i(),r("a",{class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:t.value},null,8,fx))}}),wx=x(Lx,[["__scopeId","data-v-eee4e7cb"]]),Cx={class:"VPSocialLinks"},bx=v({__name:"VPSocialLinks",props:{links:{}},setup(c){return(a,t)=>(i(),r("div",Cx,[(i(!0),r(f,null,A(a.links,({link:n,icon:o,ariaLabel:y})=>(i(),g(wx,{key:n,icon:o,link:n,ariaLabel:y},null,8,["icon","link","ariaLabel"]))),128))]))}}),Vv=x(bx,[["__scopeId","data-v-7bc22406"]]),Sx={key:0,class:"group translations"},qx={class:"trans-title"},Hx={key:1,class:"group"},Ax={class:"item appearance"},Vx={class:"label"},zx={class:"appearance-action"},Px={key:2,class:"group"},_x={class:"item social-links"},jx=v({__name:"VPNavBarExtra",setup(c){const{site:a,theme:t}=S(),{localeLinks:n,currentLang:o}=na({correspondingLink:!0}),y=L(()=>n.value.length&&o.value.label||a.value.appearance||t.value.socialLinks);return(p,u)=>y.value?(i(),g(Av,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:s(()=>[h(n).length&&h(o).label?(i(),r("div",Sx,[d("p",qx,m(h(o).label),1),(i(!0),r(f,null,A(h(n),k=>(i(),g(sv,{key:k.link,item:k},null,8,["item"]))),128))])):I("",!0),h(a).appearance&&h(a).appearance!=="force-dark"?(i(),r("div",Hx,[d("div",Ax,[d("p",Vx,m(h(t).darkModeSwitchLabel||"Appearance"),1),d("div",zx,[M(qv)])])])):I("",!0),h(t).socialLinks?(i(),r("div",Px,[d("div",_x,[M(Vv,{class:"social-links-list",links:h(t).socialLinks},null,8,["links"])])])):I("",!0)]),_:1})):I("",!0)}}),Bx=x(jx,[["__scopeId","data-v-d0bd9dde"]]),Fx=c=>(B("data-v-e5dd9c1c"),c=c(),F(),c),Dx=["aria-expanded"],Tx=Fx(()=>d("span",{class:"container"},[d("span",{class:"top"}),d("span",{class:"middle"}),d("span",{class:"bottom"})],-1)),Rx=[Tx],$x=v({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(c){return(a,t)=>(i(),r("button",{type:"button",class:V(["VPNavBarHamburger",{active:a.active}]),"aria-label":"mobile navigation","aria-expanded":a.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=n=>a.$emit("click"))},Rx,10,Dx))}}),Ux=x($x,[["__scopeId","data-v-e5dd9c1c"]]),Ox=["innerHTML"],Zx=v({__name:"VPNavBarMenuLink",props:{item:{}},setup(c){const{page:a}=S();return(t,n)=>(i(),g(U,{class:V({VPNavBarMenuLink:!0,active:h(ta)(h(a).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,noIcon:t.item.noIcon,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:s(()=>[d("span",{innerHTML:t.item.text},null,8,Ox)]),_:1},8,["class","href","noIcon","target","rel"]))}}),Gx=x(Zx,[["__scopeId","data-v-9c663999"]]),Ex=v({__name:"VPNavBarMenuGroup",props:{item:{}},setup(c){const a=c,{page:t}=S(),n=y=>"link"in y?ta(t.value.relativePath,y.link,!!a.item.activeMatch):y.items.some(n),o=L(()=>n(a.item));return(y,p)=>(i(),g(Av,{class:V({VPNavBarMenuGroup:!0,active:h(ta)(h(t).relativePath,y.item.activeMatch,!!y.item.activeMatch)||o.value}),button:y.item.text,items:y.item.items},null,8,["class","button","items"]))}}),Wx=c=>(B("data-v-7f418b0f"),c=c(),F(),c),Nx={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Xx=Wx(()=>d("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Kx=v({__name:"VPNavBarMenu",setup(c){const{theme:a}=S();return(t,n)=>h(a).nav?(i(),r("nav",Nx,[Xx,(i(!0),r(f,null,A(h(a).nav,o=>(i(),r(f,{key:o.text},["link"in o?(i(),g(Gx,{key:0,item:o},null,8,["item"])):(i(),g(Ex,{key:1,item:o},null,8,["item"]))],64))),128))])):I("",!0)}}),Jx=x(Kx,[["__scopeId","data-v-7f418b0f"]]);function Qx(c){const{localeIndex:a,theme:t}=S();function n(o){var _,j,H;const y=o.split("."),p=(_=t.value.search)==null?void 0:_.options,u=p&&typeof p=="object",k=u&&((H=(j=p.locales)==null?void 0:j[a.value])==null?void 0:H.translations)||null,w=u&&p.translations||null;let b=k,C=w,q=c;const P=y.pop();for(const Z of y){let G=null;const ca=q==null?void 0:q[Z];ca&&(G=q=ca);const uv=C==null?void 0:C[Z];uv&&(G=C=uv);const Mv=b==null?void 0:b[Z];Mv&&(G=b=Mv),ca||(q=G),uv||(C=G),Mv||(b=G)}return(b==null?void 0:b[P])??(C==null?void 0:C[P])??(q==null?void 0:q[P])??""}return n}const Yx=["aria-label"],ef={class:"DocSearch-Button-Container"},af=d("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),tf={class:"DocSearch-Button-Placeholder"},cf=d("span",{class:"DocSearch-Button-Keys"},[d("kbd",{class:"DocSearch-Button-Key"}),d("kbd",{class:"DocSearch-Button-Key"},"K")],-1),jv=v({__name:"VPNavBarSearchButton",setup(c){const t=Qx({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(n,o)=>(i(),r("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":h(t)("button.buttonAriaLabel")},[d("span",ef,[af,d("span",tf,m(h(t)("button.buttonText")),1)]),cf],8,Yx))}}),of={class:"VPNavBarSearch"},nf={id:"local-search"},hf={key:1,id:"docsearch"},df=v({__name:"VPNavBarSearch",setup(c){const a=()=>null,t=()=>null,{theme:n}=S(),o=z(!1),y=z(!1);oa(()=>{});function p(){o.value||(o.value=!0,setTimeout(u,16))}function u(){const b=new Event("keydown");b.key="k",b.metaKey=!0,window.dispatchEvent(b),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}const k=z(!1),w="";return(b,C)=>{var q;return i(),r("div",of,[h(w)==="local"?(i(),r(f,{key:0},[k.value?(i(),g(h(a),{key:0,onClose:C[0]||(C[0]=P=>k.value=!1)})):I("",!0),d("div",nf,[M(jv,{onClick:C[1]||(C[1]=P=>k.value=!0)})])],64)):h(w)==="algolia"?(i(),r(f,{key:1},[o.value?(i(),g(h(t),{key:0,algolia:((q=h(n).search)==null?void 0:q.options)??h(n).algolia,onVnodeBeforeMount:C[2]||(C[2]=P=>y.value=!0)},null,8,["algolia"])):I("",!0),y.value?I("",!0):(i(),r("div",hf,[M(jv,{onClick:p})]))],64)):I("",!0)])}}}),rf=v({__name:"VPNavBarSocialLinks",setup(c){const{theme:a}=S();return(t,n)=>h(a).socialLinks?(i(),g(Vv,{key:0,class:"VPNavBarSocialLinks",links:h(a).socialLinks},null,8,["links"])):I("",!0)}}),yf=x(rf,[["__scopeId","data-v-0394ad82"]]),lf=["href","rel","target"],pf={key:1},kf={key:2},sf=v({__name:"VPNavBarTitle",setup(c){const{site:a,theme:t}=S(),{hasSidebar:n}=O(),{currentLang:o}=na(),y=L(()=>{var k;return typeof t.value.logoLink=="string"?t.value.logoLink:(k=t.value.logoLink)==null?void 0:k.link}),p=L(()=>{var k;return typeof t.value.logoLink=="string"||(k=t.value.logoLink)==null?void 0:k.rel}),u=L(()=>{var k;return typeof t.value.logoLink=="string"||(k=t.value.logoLink)==null?void 0:k.target});return(k,w)=>(i(),r("div",{class:V(["VPNavBarTitle",{"has-sidebar":h(n)}])},[d("a",{class:"title",href:y.value??h(bv)(h(o).link),rel:p.value,target:u.value},[l(k.$slots,"nav-bar-title-before",{},void 0,!0),h(t).logo?(i(),g(dv,{key:0,class:"logo",image:h(t).logo},null,8,["image"])):I("",!0),h(t).siteTitle?(i(),r("span",pf,m(h(t).siteTitle),1)):h(t).siteTitle===void 0?(i(),r("span",kf,m(h(a).title),1)):I("",!0),l(k.$slots,"nav-bar-title-after",{},void 0,!0)],8,lf)],2))}}),uf=x(sf,[["__scopeId","data-v-ab179fa1"]]),Mf={class:"items"},vf={class:"title"},If=v({__name:"VPNavBarTranslations",setup(c){const{theme:a}=S(),{localeLinks:t,currentLang:n}=na({correspondingLink:!0});return(o,y)=>h(t).length&&h(n).label?(i(),g(Av,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:h(a).langMenuLabel||"Change language"},{default:s(()=>[d("div",Mf,[d("p",vf,m(h(n).label),1),(i(!0),r(f,null,A(h(t),p=>(i(),g(sv,{key:p.link,item:p},null,8,["item"]))),128))])]),_:1},8,["label"])):I("",!0)}}),mf=x(If,[["__scopeId","data-v-88af2de4"]]),gf=c=>(B("data-v-ccf7ddec"),c=c(),F(),c),xf={class:"wrapper"},ff={class:"container"},Lf={class:"title"},wf={class:"content"},Cf={class:"content-body"},bf=gf(()=>d("div",{class:"divider"},[d("div",{class:"divider-line"})],-1)),Sf=v({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(c){const{y:a}=Rv(),{hasSidebar:t}=O(),{frontmatter:n}=S(),o=z({});return Bv(()=>{o.value={"has-sidebar":t.value,home:n.value.layout==="home",top:a.value===0}}),(y,p)=>(i(),r("div",{class:V(["VPNavBar",o.value])},[d("div",xf,[d("div",ff,[d("div",Lf,[M(uf,null,{"nav-bar-title-before":s(()=>[l(y.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":s(()=>[l(y.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),d("div",wf,[d("div",Cf,[l(y.$slots,"nav-bar-content-before",{},void 0,!0),M(df,{class:"search"}),M(Jx,{class:"menu"}),M(mf,{class:"translations"}),M(ex,{class:"appearance"}),M(yf,{class:"social-links"}),M(Bx,{class:"extra"}),l(y.$slots,"nav-bar-content-after",{},void 0,!0),M(Ux,{class:"hamburger",active:y.isScreenOpen,onClick:p[0]||(p[0]=u=>y.$emit("toggle-screen"))},null,8,["active"])])])])]),bf],2))}}),qf=x(Sf,[["__scopeId","data-v-ccf7ddec"]]),Hf={key:0,class:"VPNavScreenAppearance"},Af={class:"text"},Vf=v({__name:"VPNavScreenAppearance",setup(c){const{site:a,theme:t}=S();return(n,o)=>h(a).appearance&&h(a).appearance!=="force-dark"?(i(),r("div",Hf,[d("p",Af,m(h(t).darkModeSwitchLabel||"Appearance"),1),M(qv)])):I("",!0)}}),zf=x(Vf,[["__scopeId","data-v-2d7af913"]]),Pf=v({__name:"VPNavScreenMenuLink",props:{item:{}},setup(c){const a=pv("close-screen");return(t,n)=>(i(),g(U,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:h(a),innerHTML:t.item.text},null,8,["href","target","rel","onClick","innerHTML"]))}}),_f=x(Pf,[["__scopeId","data-v-7f31e1f6"]]),jf=v({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(c){const a=pv("close-screen");return(t,n)=>(i(),g(U,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:h(a)},{default:s(()=>[R(m(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Kv=x(jf,[["__scopeId","data-v-19976ae1"]]),Bf={class:"VPNavScreenMenuGroupSection"},Ff={key:0,class:"title"},Df=v({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(c){return(a,t)=>(i(),r("div",Bf,[a.text?(i(),r("p",Ff,m(a.text),1)):I("",!0),(i(!0),r(f,null,A(a.items,n=>(i(),g(Kv,{key:n.text,item:n},null,8,["item"]))),128))]))}}),Tf=x(Df,[["__scopeId","data-v-8133b170"]]),Rf=c=>(B("data-v-ff6087d4"),c=c(),F(),c),$f=["aria-controls","aria-expanded"],Uf=["innerHTML"],Of=Rf(()=>d("span",{class:"vpi-plus button-icon"},null,-1)),Zf=["id"],Gf={key:1,class:"group"},Ef=v({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(c){const a=c,t=z(!1),n=L(()=>`NavScreenGroup-${a.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(y,p)=>(i(),r("div",{class:V(["VPNavScreenMenuGroup",{open:t.value}])},[d("button",{class:"button","aria-controls":n.value,"aria-expanded":t.value,onClick:o},[d("span",{class:"button-text",innerHTML:y.text},null,8,Uf),Of],8,$f),d("div",{id:n.value,class:"items"},[(i(!0),r(f,null,A(y.items,u=>(i(),r(f,{key:u.text},["link"in u?(i(),r("div",{key:u.text,class:"item"},[M(Kv,{item:u},null,8,["item"])])):(i(),r("div",Gf,[M(Tf,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,Zf)],2))}}),Wf=x(Ef,[["__scopeId","data-v-ff6087d4"]]),Nf={key:0,class:"VPNavScreenMenu"},Xf=v({__name:"VPNavScreenMenu",setup(c){const{theme:a}=S();return(t,n)=>h(a).nav?(i(),r("nav",Nf,[(i(!0),r(f,null,A(h(a).nav,o=>(i(),r(f,{key:o.text},["link"in o?(i(),g(_f,{key:0,item:o},null,8,["item"])):(i(),g(Wf,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):I("",!0)}}),Kf=v({__name:"VPNavScreenSocialLinks",setup(c){const{theme:a}=S();return(t,n)=>h(a).socialLinks?(i(),g(Vv,{key:0,class:"VPNavScreenSocialLinks",links:h(a).socialLinks},null,8,["links"])):I("",!0)}}),Jv=c=>(B("data-v-858fe1a4"),c=c(),F(),c),Jf=Jv(()=>d("span",{class:"vpi-languages icon lang"},null,-1)),Qf=Jv(()=>d("span",{class:"vpi-chevron-down icon chevron"},null,-1)),Yf={class:"list"},eL=v({__name:"VPNavScreenTranslations",setup(c){const{localeLinks:a,currentLang:t}=na({correspondingLink:!0}),n=z(!1);function o(){n.value=!n.value}return(y,p)=>h(a).length&&h(t).label?(i(),r("div",{key:0,class:V(["VPNavScreenTranslations",{open:n.value}])},[d("button",{class:"title",onClick:o},[Jf,R(" "+m(h(t).label)+" ",1),Qf]),d("ul",Yf,[(i(!0),r(f,null,A(h(a),u=>(i(),r("li",{key:u.link,class:"item"},[M(U,{class:"link",href:u.link},{default:s(()=>[R(m(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):I("",!0)}}),aL=x(eL,[["__scopeId","data-v-858fe1a4"]]),tL={class:"container"},cL=v({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(c){const a=z(null),t=$v(kv?document.body:null);return(n,o)=>(i(),g(Lv,{name:"fade",onEnter:o[0]||(o[0]=y=>t.value=!0),onAfterLeave:o[1]||(o[1]=y=>t.value=!1)},{default:s(()=>[n.open?(i(),r("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:a,id:"VPNavScreen"},[d("div",tL,[l(n.$slots,"nav-screen-content-before",{},void 0,!0),M(Xf,{class:"menu"}),M(aL,{class:"translations"}),M(zf,{class:"appearance"}),M(Kf,{class:"social-links"}),l(n.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):I("",!0)]),_:3}))}}),oL=x(cL,[["__scopeId","data-v-cc5739dd"]]),nL={key:0,class:"VPNav"},iL=v({__name:"VPNav",setup(c){const{isScreenOpen:a,closeScreen:t,toggleScreen:n}=Ug(),{frontmatter:o}=S(),y=L(()=>o.value.navbar!==!1);return Uv("close-screen",t),rv(()=>{kv&&document.documentElement.classList.toggle("hide-nav",!y.value)}),(p,u)=>y.value?(i(),r("header",nL,[M(qf,{"is-screen-open":h(a),onToggleScreen:h(n)},{"nav-bar-title-before":s(()=>[l(p.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":s(()=>[l(p.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":s(()=>[l(p.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":s(()=>[l(p.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),M(oL,{open:h(a)},{"nav-screen-content-before":s(()=>[l(p.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":s(()=>[l(p.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):I("",!0)}}),hL=x(iL,[["__scopeId","data-v-ae24b3ad"]]),Qv=c=>(B("data-v-b8d55f3b"),c=c(),F(),c),dL=["role","tabindex"],rL=Qv(()=>d("div",{class:"indicator"},null,-1)),yL=Qv(()=>d("span",{class:"vpi-chevron-right caret-icon"},null,-1)),lL=[yL],pL={key:1,class:"items"},kL=v({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(c){const a=c,{collapsed:t,collapsible:n,isLink:o,isActiveLink:y,hasActiveLink:p,hasChildren:u,toggle:k}=PI(L(()=>a.item)),w=L(()=>u.value?"section":"div"),b=L(()=>o.value?"a":"div"),C=L(()=>u.value?a.depth+2===7?"p":`h${a.depth+2}`:"p"),q=L(()=>o.value?void 0:"button"),P=L(()=>[[`level-${a.depth}`],{collapsible:n.value},{collapsed:t.value},{"is-link":o.value},{"is-active":y.value},{"has-active":p.value}]);function _(H){"key"in H&&H.key!=="Enter"||!a.item.link&&k()}function j(){a.item.link&&k()}return(H,Z)=>{const G=N("VPSidebarItem",!0);return i(),g(aa(w.value),{class:V(["VPSidebarItem",P.value])},{default:s(()=>[H.item.text?(i(),r("div",ha({key:0,class:"item",role:q.value},lI(H.item.items?{click:_,keydown:_}:{},!0),{tabindex:H.item.items&&0}),[rL,H.item.link?(i(),g(U,{key:0,tag:b.value,class:"link",href:H.item.link,rel:H.item.rel,target:H.item.target},{default:s(()=>[(i(),g(aa(C.value),{class:"text",innerHTML:H.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),g(aa(C.value),{key:1,class:"text",innerHTML:H.item.text},null,8,["innerHTML"])),H.item.collapsed!=null&&H.item.items&&H.item.items.length?(i(),r("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:j,onKeydown:yI(j,["enter"]),tabindex:"0"},lL,32)):I("",!0)],16,dL)):I("",!0),H.item.items&&H.item.items.length?(i(),r("div",pL,[H.depth<5?(i(!0),r(f,{key:0},A(H.item.items,ca=>(i(),g(G,{key:ca.text,item:ca,depth:H.depth+1},null,8,["item","depth"]))),128)):I("",!0)])):I("",!0)]),_:1},8,["class"])}}}),sL=x(kL,[["__scopeId","data-v-b8d55f3b"]]),Yv=c=>(B("data-v-575e6a36"),c=c(),F(),c),uL=Yv(()=>d("div",{class:"curtain"},null,-1)),ML={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},vL=Yv(()=>d("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),IL=v({__name:"VPSidebar",props:{open:{type:Boolean}},setup(c){const{sidebarGroups:a,hasSidebar:t}=O(),n=c,o=z(null),y=$v(kv?document.body:null);return W([n,o],()=>{var p;n.open?(y.value=!0,(p=o.value)==null||p.focus()):y.value=!1},{immediate:!0,flush:"post"}),(p,u)=>h(t)?(i(),r("aside",{key:0,class:V(["VPSidebar",{open:p.open}]),ref_key:"navEl",ref:o,onClick:u[0]||(u[0]=pI(()=>{},["stop"]))},[uL,d("nav",ML,[vL,l(p.$slots,"sidebar-nav-before",{},void 0,!0),(i(!0),r(f,null,A(h(a),k=>(i(),r("div",{key:k.text,class:"group"},[M(sL,{item:k,depth:0},null,8,["item"])]))),128)),l(p.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):I("",!0)}}),mL=x(IL,[["__scopeId","data-v-575e6a36"]]),gL=v({__name:"VPSkipLink",setup(c){const a=lv(),t=z();W(()=>a.path,()=>t.value.focus());function n({target:o}){const y=document.getElementById(decodeURIComponent(o.hash).slice(1));if(y){const p=()=>{y.removeAttribute("tabindex"),y.removeEventListener("blur",p)};y.setAttribute("tabindex","-1"),y.addEventListener("blur",p),y.focus(),window.scrollTo(0,0)}}return(o,y)=>(i(),r(f,null,[d("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),d("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:n}," Skip to content ")],64))}}),xL=x(gL,[["__scopeId","data-v-0f60ec36"]]),fL=v({__name:"Layout",setup(c){const{isOpen:a,open:t,close:n}=O(),o=lv();W(()=>o.path,n),zI(a,n);const{frontmatter:y}=S(),p=kI(),u=L(()=>!!p["home-hero-image"]);return Uv("hero-image-slot-exists",u),(k,w)=>{const b=N("Content");return h(y).layout!==!1?(i(),r("div",{key:0,class:V(["Layout",h(y).pageClass])},[l(k.$slots,"layout-top",{},void 0,!0),M(xL),M(vI,{class:"backdrop",show:h(a),onClick:h(n)},null,8,["show","onClick"]),M(hL,null,{"nav-bar-title-before":s(()=>[l(k.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":s(()=>[l(k.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":s(()=>[l(k.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":s(()=>[l(k.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":s(()=>[l(k.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":s(()=>[l(k.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),M($g,{open:h(a),onOpenMenu:h(t)},null,8,["open","onOpenMenu"]),M(mL,{open:h(a)},{"sidebar-nav-before":s(()=>[l(k.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":s(()=>[l(k.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),M(xg,null,{"page-top":s(()=>[l(k.$slots,"page-top",{},void 0,!0)]),"page-bottom":s(()=>[l(k.$slots,"page-bottom",{},void 0,!0)]),"not-found":s(()=>[l(k.$slots,"not-found",{},void 0,!0)]),"home-hero-before":s(()=>[l(k.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":s(()=>[l(k.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":s(()=>[l(k.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":s(()=>[l(k.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":s(()=>[l(k.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":s(()=>[l(k.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":s(()=>[l(k.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":s(()=>[l(k.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":s(()=>[l(k.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":s(()=>[l(k.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":s(()=>[l(k.$slots,"doc-before",{},void 0,!0)]),"doc-after":s(()=>[l(k.$slots,"doc-after",{},void 0,!0)]),"doc-top":s(()=>[l(k.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":s(()=>[l(k.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":s(()=>[l(k.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":s(()=>[l(k.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":s(()=>[l(k.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":s(()=>[l(k.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":s(()=>[l(k.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":s(()=>[l(k.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),M(bg),l(k.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),g(b,{key:1}))}}}),LL=x(fL,[["__scopeId","data-v-5d98c3a5"]]),wL={Layout:LL,enhanceApp:({app:c})=>{c.component("Badge",sI)}},CL={class:"fixed top-4 left-4 right-4 py-4 px-6 flex justify-between items-center backdrop-blur-sm gap-4 z-10"},bL={href:"/#home"},SL=["src"],qL={key:0,class:"text-xl flex gap-6"},HL=["href"],AL=v({__name:"Navbar",setup(c){const{theme:a}=T();return(t,n)=>(i(),r("header",CL,[d("a",bL,[d("img",{class:"icon",src:h(a).navbar.logo,width:"50",height:"50"},null,8,SL)]),t.$frontmatter.layout==="home"?(i(),r("nav",qL,[(i(!0),r(f,null,A(h(a).navbar.links,o=>(i(),r("a",{key:o.href,href:o.href},m(o.text),9,HL))),128))])):I("",!0)]))}}),eI=x(AL,[["__scopeId","data-v-81e3c0be"]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VL=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ia={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=({size:c,strokeWidth:a=2,absoluteStrokeWidth:t,color:n,iconNode:o,name:y,class:p,...u},{slots:k})=>mv("svg",{...ia,width:c||ia.width,height:c||ia.height,stroke:n||ia.stroke,"stroke-width":t?Number(a)*24/Number(c):a,class:["lucide",`lucide-${VL(y??"icon")}`],...u},[...o.map(w=>mv(...w)),...k.default?[k.default()]:[]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e=(c,a)=>(t,{slots:n})=>mv(aI,{...t,iconNode:a,name:c},n);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=e("AArrowDownIcon",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=e("AArrowUpIcon",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=e("ALargeSmallIcon",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=e("AccessibilityIcon",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=e("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=e("AirVentIcon",[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=e("AirplayIcon",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=e("AlarmClockCheckIcon",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=e("AlarmClockMinusIcon",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=e("AlarmClockOffIcon",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=e("AlarmClockPlusIcon",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=e("AlarmClockIcon",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=e("AlarmSmokeIcon",[["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",key:"1bvca4"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",key:"x3qr1j"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=e("AlbumIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=e("AlignCenterHorizontalIcon",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=e("AlignCenterVerticalIcon",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=e("AlignCenterIcon",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=e("AlignEndHorizontalIcon",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=e("AlignEndVerticalIcon",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=e("AlignHorizontalDistributeCenterIcon",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=e("AlignHorizontalDistributeEndIcon",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=e("AlignHorizontalDistributeStartIcon",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=e("AlignHorizontalJustifyCenterIcon",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=e("AlignHorizontalJustifyEndIcon",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=e("AlignHorizontalJustifyStartIcon",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=e("AlignHorizontalSpaceAroundIcon",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=e("AlignHorizontalSpaceBetweenIcon",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=e("AlignJustifyIcon",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=e("AlignLeftIcon",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=e("AlignRightIcon",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=e("AlignStartHorizontalIcon",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=e("AlignStartVerticalIcon",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=e("AlignVerticalDistributeCenterIcon",[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=e("AlignVerticalDistributeEndIcon",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=e("AlignVerticalDistributeStartIcon",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=e("AlignVerticalJustifyCenterIcon",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=e("AlignVerticalJustifyEndIcon",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=e("AlignVerticalJustifyStartIcon",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=e("AlignVerticalSpaceAroundIcon",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=e("AlignVerticalSpaceBetweenIcon",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=e("AmbulanceIcon",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=e("AmpersandIcon",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=e("AmpersandsIcon",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=e("AnchorIcon",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=e("AngryIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h0",key:"1vxvly"}],["path",{d:"M15 10h0",key:"1j6oav"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=e("AnnoyedIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=e("AntennaIcon",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=e("AnvilIcon",[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=e("ApertureIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=e("AppWindowMacIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M14 8h.01",key:"1primd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=e("AppWindowIcon",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=e("AppleIcon",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=e("ArchiveRestoreIcon",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=e("ArchiveXIcon",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=e("ArchiveIcon",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=e("AreaChartIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z",key:"zxz28u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=e("ArmchairIcon",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=e("ArrowBigDownDashIcon",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=e("ArrowBigDownIcon",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=e("ArrowBigLeftDashIcon",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=e("ArrowBigLeftIcon",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=e("ArrowBigRightDashIcon",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=e("ArrowBigRightIcon",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=e("ArrowBigUpDashIcon",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=e("ArrowBigUpIcon",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=e("ArrowDown01Icon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=e("ArrowDown10Icon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=e("ArrowDownAZIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=e("ArrowDownFromLineIcon",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=e("ArrowDownLeftIcon",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=e("ArrowDownNarrowWideIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=e("ArrowDownRightIcon",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=e("ArrowDownToDotIcon",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=e("ArrowDownToLineIcon",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=e("ArrowDownUpIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=e("ArrowDownWideNarrowIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=e("ArrowDownZAIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=e("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=e("ArrowLeftFromLineIcon",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=e("ArrowLeftRightIcon",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=e("ArrowLeftToLineIcon",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=e("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=e("ArrowRightFromLineIcon",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=e("ArrowRightLeftIcon",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=e("ArrowRightToLineIcon",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=e("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=e("ArrowUp01Icon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=e("ArrowUp10Icon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=e("ArrowUpAZIcon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=e("ArrowUpDownIcon",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=e("ArrowUpFromDotIcon",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=e("ArrowUpFromLineIcon",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=e("ArrowUpLeftIcon",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=e("ArrowUpNarrowWideIcon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=e("ArrowUpRightIcon",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=e("ArrowUpToLineIcon",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=e("ArrowUpWideNarrowIcon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=e("ArrowUpZAIcon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=e("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=e("ArrowsUpFromLineIcon",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=e("AsteriskIcon",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=e("AtSignIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=e("AtomIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=e("AudioLinesIcon",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=e("AudioWaveformIcon",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=e("AwardIcon",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=e("AxeIcon",[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=e("Axis3dIcon",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=e("BabyIcon",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=e("BackpackIcon",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=e("BadgeAlertIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=e("BadgeCentIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=e("BadgeCheckIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=e("BadgeDollarSignIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=e("BadgeEuroIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=e("BadgeHelpIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=e("BadgeIndianRupeeIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=e("BadgeInfoIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=e("BadgeJapaneseYenIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=e("BadgeMinusIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=e("BadgePercentIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=e("BadgePlusIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=e("BadgePoundSterlingIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=e("BadgeRussianRubleIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=e("BadgeSwissFrancIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=e("BadgeXIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=e("BadgeIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=e("BaggageClaimIcon",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=e("BanIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=e("BananaIcon",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=e("BanknoteIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=e("BarChart2Icon",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=e("BarChart3Icon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=e("BarChart4Icon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=e("BarChartBigIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1",key:"14u6mf"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1",key:"b3pek6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=e("BarChartHorizontalBigIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1",key:"936jl1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1",key:"jqfkpy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=e("BarChartHorizontalIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=e("BarChartIcon",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=e("BarcodeIcon",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=e("BaselineIcon",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=e("BathIcon",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=e("BatteryChargingIcon",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=e("BatteryFullIcon",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=e("BatteryLowIcon",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=e("BatteryMediumIcon",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=e("BatteryWarningIcon",[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2",key:"1if82c"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2",key:"2pdlyl"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13",key:"1uzyus"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01",key:"1y8k4g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=e("BatteryIcon",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=e("BeakerIcon",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=e("BeanOffIcon",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=e("BeanIcon",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=e("BedDoubleIcon",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=e("BedSingleIcon",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=e("BedIcon",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=e("BeefIcon",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=e("BeerOffIcon",[["path",{d:"M13 13v5",key:"igwfh0"}],["path",{d:"M17 11.47V8",key:"16yw0g"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211",key:"1xbt65"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",key:"c55o3e"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",key:"1ydug7"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",key:"q81o7q"}],["path",{d:"M9 14.6V18",key:"20ek98"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=e("BeerIcon",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=e("BellDotIcon",[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",key:"xcehk"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=e("BellElectricIcon",[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=e("BellMinusIcon",[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",key:"eck70s"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=e("BellOffIcon",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=e("BellPlusIcon",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=e("BellRingIcon",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=e("BellIcon",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=e("BetweenHorizontalEndIcon",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=e("BetweenHorizontalStartIcon",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=e("BetweenVerticalEndIcon",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=e("BetweenVerticalStartIcon",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=e("BikeIcon",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=e("BinaryIcon",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=e("BiohazardIcon",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=e("BirdIcon",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=e("BitcoinIcon",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=e("BlendIcon",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=e("BlindsIcon",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=e("BlocksIcon",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=e("BluetoothConnectedIcon",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=e("BluetoothOffIcon",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=e("BluetoothSearchingIcon",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=e("BluetoothIcon",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=e("BoldIcon",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=e("BoltIcon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=e("BombIcon",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=e("BoneIcon",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=e("BookAIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=e("BookAudioIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 8v3",key:"1qzp49"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=e("BookCheckIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=e("BookCopyIcon",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=e("BookDashedIcon",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=e("BookDownIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=e("BookHeadphonesIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=e("BookHeartIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",key:"1dlbw1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=e("BookImageIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17",key:"160say"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=e("BookKeyIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20",key:"zb0ngp"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"m19 3 1 1",key:"ze14oc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=e("BookLockIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20",key:"dpch1j"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1",key:"9nqwug"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=e("BookMarkedIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=e("BookMinusIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=e("BookOpenCheckIcon",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=e("BookOpenTextIcon",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=e("BookOpenIcon",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=e("BookPlusIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=e("BookTextIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 7h6",key:"1f0q6e"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=e("BookTypeIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M10 13h4",key:"ytezjc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=e("BookUp2Icon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"1nfm9i"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=e("BookUpIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=e("BookUserIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=e("BookXIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=e("BookIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=e("BookmarkCheckIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=e("BookmarkMinusIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=e("BookmarkPlusIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=e("BookmarkXIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=e("BookmarkIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=e("BoomBoxIcon",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=e("BotMessageSquareIcon",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=e("BotOffIcon",[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33",key:"7az073"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",key:"s09a7a"}],["path",{d:"M9 13v2",key:"rq6x2g"}],["path",{d:"M9.67 4H12v2.33",key:"110xot"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=e("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=e("BoxSelectIcon",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=e("BoxIcon",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=e("BoxesIcon",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=e("BracesIcon",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=e("BracketsIcon",[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=e("BrainCircuitIcon",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=e("BrainCogIcon",[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=e("BrainIcon",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=e("BrickWallIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=e("BriefcaseBusinessIcon",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=e("BriefcaseMedicalIcon",[["path",{d:"M12 11v4",key:"a6ujw6"}],["path",{d:"M14 13h-4",key:"1pl8zg"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M18 6v14",key:"1mu4gy"}],["path",{d:"M6 6v14",key:"1s15cj"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=e("BriefcaseIcon",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=e("BringToFrontIcon",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=e("BrushIcon",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=e("BugOffIcon",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=e("BugPlayIcon",[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"17shqo"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=e("BugIcon",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=e("Building2Icon",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=e("BuildingIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=e("BusFrontIcon",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=e("BusIcon",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=e("CableCarIcon",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=e("CableIcon",[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=e("CakeSliceIcon",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=e("CakeIcon",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=e("CalculatorIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=e("CalendarCheck2Icon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=e("CalendarCheckIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=e("CalendarClockIcon",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=e("CalendarDaysIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=e("CalendarFoldIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=e("CalendarHeartIcon",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=e("CalendarMinus2Icon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=e("CalendarMinusIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=e("CalendarOffIcon",[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=e("CalendarPlus2Icon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=e("CalendarPlusIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=e("CalendarRangeIcon",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=e("CalendarSearchIcon",[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5",key:"1e09qw"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=e("CalendarX2Icon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=e("CalendarXIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=e("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=e("CameraOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=e("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=e("CandlestickChartIcon",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=e("CandyCaneIcon",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=e("CandyOffIcon",[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=e("CandyIcon",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=e("CannabisIcon",[["path",{d:"M12 22v-4",key:"1utk9m"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",key:"1mezod"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=e("CaptionsOffIcon",[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=e("CaptionsIcon",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=e("CarFrontIcon",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=e("CarTaxiFrontIcon",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=e("CarIcon",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=e("CaravanIcon",[["rect",{width:"4",height:"4",x:"2",y:"9",key:"1vcvhd"}],["rect",{width:"4",height:"10",x:"10",y:"9",key:"1b7ev2"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}],["path",{d:"M10 19h12v-2",key:"1yu2qx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=e("CarrotIcon",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=e("CaseLowerIcon",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=e("CaseSensitiveIcon",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=e("CaseUpperIcon",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=e("CassetteTapeIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=e("CastIcon",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=e("CastleIcon",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4",key:"jdggr9"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=e("CatIcon",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=e("CctvIcon",[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",key:"ir91b5"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",key:"jlp8i1"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}],["path",{d:"M7 9h.01",key:"19b3jx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=e("CheckCheckIcon",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=e("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=e("ChefHatIcon",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=e("CherryIcon",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=e("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=e("ChevronFirstIcon",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=e("ChevronLastIcon",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=e("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=e("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=e("ChevronUpIcon",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=e("ChevronsDownUpIcon",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=e("ChevronsDownIcon",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=e("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=e("ChevronsLeftIcon",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=e("ChevronsRightLeftIcon",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=e("ChevronsRightIcon",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=e("ChevronsUpDownIcon",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=e("ChevronsUpIcon",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=e("ChromeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=e("ChurchIcon",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=e("CigaretteOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M12 12H2v4h14",key:"91gsaq"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M18 12h-.5",key:"12ymji"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=e("CigaretteIcon",[["path",{d:"M18 12H2v4h16",key:"2rt1hm"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=e("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=e("CircleArrowDownIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=e("CircleArrowLeftIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=e("CircleArrowOutDownLeftIcon",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=e("CircleArrowOutDownRightIcon",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=e("CircleArrowOutUpLeftIcon",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=e("CircleArrowOutUpRightIcon",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=e("CircleArrowRightIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=e("CircleArrowUpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=e("CircleCheckBigIcon",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=e("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=e("CircleChevronDownIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=e("CircleChevronLeftIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=e("CircleChevronRightIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=e("CircleChevronUpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=e("CircleDashedIcon",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=e("CircleDivideIcon",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=e("CircleDollarSignIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=e("CircleDotDashedIcon",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=e("CircleDotIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=e("CircleEllipsisIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=e("CircleEqualIcon",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=e("CircleFadingPlusIcon",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=e("CircleGaugeIcon",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=e("CircleHelpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=e("CircleMinusIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=e("CircleOffIcon",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=e("CircleParkingOffIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=e("CircleParkingIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=e("CirclePauseIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=e("CirclePercentIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=e("CirclePlayIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=e("CirclePlusIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=e("CirclePowerIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 12V7",key:"1tf3mz"}],["path",{d:"M16 9a5 5 0 1 1-8 0",key:"174bae"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=e("CircleSlash2Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=e("CircleSlashIcon",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=e("CircleStopIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=e("CircleUserRoundIcon",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=e("CircleUserIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=e("CircleXIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=e("CircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=e("CircuitBoardIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=e("CitrusIcon",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=e("ClapperboardIcon",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=e("ClipboardCheckIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=e("ClipboardCopyIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=e("ClipboardListIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=e("ClipboardMinusIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=e("ClipboardPasteIcon",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=e("ClipboardPenLineIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z",key:"yg2pdb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=e("ClipboardPenIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z",key:"hnx206"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=e("ClipboardPlusIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=e("ClipboardTypeIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=e("ClipboardXIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=e("ClipboardIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=e("Clock1Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=e("Clock10Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=e("Clock11Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=e("Clock12Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=e("Clock2Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=e("Clock3Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=e("Clock4Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=e("Clock5Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=e("Clock6Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=e("Clock7Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=e("Clock8Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=e("Clock9Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=e("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=e("CloudCogIcon",[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=e("CloudDownloadIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=e("CloudDrizzleIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=e("CloudFogIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=e("CloudHailIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=e("CloudLightningIcon",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=e("CloudMoonRainIcon",[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",key:"u82z8m"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=e("CloudMoonIcon",[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"16nha0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=e("CloudOffIcon",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=e("CloudRainWindIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=e("CloudRainIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=e("CloudSnowIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=e("CloudSunRainIcon",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=e("CloudSunIcon",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=e("CloudUploadIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=e("CloudIcon",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=e("CloudyIcon",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=e("CloverIcon",[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=e("ClubIcon",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=e("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=e("CodeIcon",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=e("CodepenIcon",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=e("CodesandboxIcon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=e("CoffeeIcon",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=e("CogIcon",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=e("CoinsIcon",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=e("Columns2Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=e("Columns3Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=e("Columns4Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=e("CombineIcon",[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2",key:"z1hh3n"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"83orz6"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"k86dmt"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1",key:"6vokjl"}],["polyline",{points:"7 21 10 18 7 15",key:"1k02g0"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=e("CommandIcon",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=e("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=e("ComponentIcon",[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",key:"1kciei"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",key:"1ome0g"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",key:"vbupec"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",key:"16csic"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=e("ComputerIcon",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=e("ConciergeBellIcon",[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=e("ConeIcon",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=e("ConstructionIcon",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=e("ContactRoundIcon",[["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=e("ContactIcon",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=e("ContainerIcon",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=e("ContrastIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=e("CookieIcon",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=e("CookingPotIcon",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=e("CopyCheckIcon",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=e("CopyMinusIcon",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=e("CopyPlusIcon",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=e("CopySlashIcon",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=e("CopyXIcon",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=e("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=e("CopyleftIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=e("CopyrightIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=e("CornerDownLeftIcon",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=e("CornerDownRightIcon",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=e("CornerLeftDownIcon",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=e("CornerLeftUpIcon",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=e("CornerRightDownIcon",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=e("CornerRightUpIcon",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=e("CornerUpLeftIcon",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=e("CornerUpRightIcon",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=e("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=e("CreativeCommonsIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=e("CreditCardIcon",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=e("CroissantIcon",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=e("CropIcon",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=e("CrossIcon",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=e("CrosshairIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=e("CrownIcon",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=e("CuboidIcon",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=e("CupSodaIcon",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=e("CurrencyIcon",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=e("CylinderIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=e("DatabaseBackupIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=e("DatabaseZapIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=e("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=e("DeleteIcon",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=e("DessertIcon",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=e("DiameterIcon",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=e("DiamondMinusIcon",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=e("DiamondPercentIcon",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=e("DiamondPlusIcon",[["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=e("DiamondIcon",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=e("Dice1Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=e("Dice2Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=e("Dice3Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=e("Dice4Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=e("Dice5Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=e("Dice6Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=e("DicesIcon",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=e("DiffIcon",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=e("Disc2Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=e("Disc3Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=e("DiscAlbumIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=e("DiscIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=e("DivideIcon",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=e("DnaOffIcon",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",key:"sxiaad"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",key:"yn4bs1"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=e("DnaIcon",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=e("DockIcon",[["path",{d:"M2 8h20",key:"d11cs7"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 16h12",key:"u522kt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=e("DogIcon",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=e("DollarSignIcon",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=e("DonutIcon",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=e("DoorClosedIcon",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=e("DoorOpenIcon",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=e("DotIcon",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=e("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=e("DraftingCompassIcon",[["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0",key:"1tsu18"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=e("DramaIcon",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=e("DribbbleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=e("DrillIcon",[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",key:"b6nnkj"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8",key:"mwpjnk"}],["path",{d:"m7 18 2-8",key:"1bzku2"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",key:"117add"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=e("DropletIcon",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=e("DropletsIcon",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=e("DrumIcon",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=e("DrumstickIcon",[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",key:"1dtqwm"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",key:"1oq1fw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=e("DumbbellIcon",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=e("EarOffIcon",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=e("EarIcon",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=e("EarthLockIcon",[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=e("EarthIcon",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=e("EclipseIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=e("EggFriedIcon",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=e("EggOffIcon",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=e("EggIcon",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=e("EllipsisVerticalIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=e("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=e("EqualNotIcon",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=e("EqualIcon",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=e("EraserIcon",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=e("EuroIcon",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=e("ExpandIcon",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=e("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=e("EyeOffIcon",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=e("EyeIcon",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=e("FacebookIcon",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=e("FactoryIcon",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=e("FanIcon",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=e("FastForwardIcon",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=e("FeatherIcon",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=e("FenceIcon",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=e("FerrisWheelIcon",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=e("FigmaIcon",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=e("FileArchiveIcon",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18",key:"1oywqq"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=e("FileAudio2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=e("FileAudioIcon",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=e("FileAxis3dIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=e("FileBadge2Icon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=e("FileBadgeIcon",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=e("FileBarChart2Icon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=e("FileBarChartIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=e("FileBoxIcon",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=e("FileCheck2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=e("FileCheckIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=e("FileClockIcon",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=e("FileCode2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=e("FileCodeIcon",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=e("FileCogIcon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}],["path",{d:"M6 10v1",key:"xs0f9j"}],["path",{d:"M6 17v1",key:"idyhc0"}],["path",{d:"M10 14H9",key:"m5fm2q"}],["path",{d:"M3 14H2",key:"19ot09"}],["path",{d:"m9 11-.88.88",key:"lhul2b"}],["path",{d:"M3.88 16.12 3 17",key:"169z9n"}],["path",{d:"m9 17-.88-.88",key:"5io96w"}],["path",{d:"M3.88 11.88 3 11",key:"1ynhy1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=e("FileDiffIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=e("FileDigitIcon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=e("FileDownIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=e("FileHeartIcon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=e("FileImageIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=e("FileInputIcon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=e("FileJson2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=e("FileJsonIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=e("FileKey2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=e("FileKeyIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=e("FileLineChartIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=e("FileLock2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=e("FileLockIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=e("FileMinus2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=e("FileMinusIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=e("FileMusicIcon",[["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",key:"skc018"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=e("FileOutputIcon",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=e("FilePenLineIcon",[["path",{d:"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"h0fsxq"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z",key:"dyo8mm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=e("FilePenIcon",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10",key:"x7tsz2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z",key:"o3xyfb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=e("FilePieChartIcon",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5",key:"13ddob"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475",key:"s6vs5t"}],["path",{d:"M8 16v-6a6 6 0 0 1 6 6z",key:"zfixgv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=e("FilePlus2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=e("FilePlusIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=e("FileQuestionIcon",[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=e("FileScanIcon",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=e("FileSearch2Icon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=e("FileSearchIcon",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=e("FileSlidersIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=e("FileSpreadsheetIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=e("FileStackIcon",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=e("FileSymlinkIcon",[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=e("FileTerminalIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=e("FileTextIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=e("FileType2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=e("FileTypeIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=e("FileUpIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=e("FileVideo2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=e("FileVideoIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=e("FileVolume2Icon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=e("FileVolumeIcon",[["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1x9xgf"}],["path",{d:"m7 10-3 2H2v4h2l3 2z",key:"1ln807"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=e("FileWarningIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=e("FileX2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=e("FileXIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=e("FileIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=e("FilesIcon",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=e("FilmIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=e("FilterXIcon",[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=e("FilterIcon",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=e("FingerprintIcon",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=e("FireExtinguisherIcon",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=e("FishOffIcon",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=e("FishSymbolIcon",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=e("FishIcon",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=e("FlagOffIcon",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=e("FlagTriangleLeftIcon",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=e("FlagTriangleRightIcon",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=e("FlagIcon",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=e("FlameKindlingIcon",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=e("FlameIcon",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=e("FlashlightOffIcon",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=e("FlashlightIcon",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=e("FlaskConicalOffIcon",[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",key:"59ek9y"}],["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h9",key:"t5njau"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=e("FlaskConicalIcon",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=e("FlaskRoundIcon",[["path",{d:"M10 2v7.31",key:"5d1hyh"}],["path",{d:"M14 9.3V1.99",key:"14k4l0"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0",key:"1r8fvy"}],["path",{d:"M5.52 16h12.96",key:"46hh1i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=e("FlipHorizontal2Icon",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=e("FlipHorizontalIcon",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=e("FlipVertical2Icon",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=e("FlipVerticalIcon",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=e("Flower2Icon",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=e("FlowerIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=e("FocusIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=e("FoldHorizontalIcon",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=e("FoldVerticalIcon",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=e("FolderArchiveIcon",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=e("FolderCheckIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=e("FolderClockIcon",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=e("FolderClosedIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=e("FolderCogIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=e("FolderDotIcon",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=e("FolderDownIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=e("FolderGit2Icon",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=e("FolderGitIcon",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=e("FolderHeartIcon",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"vgq86i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=e("FolderInputIcon",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=e("FolderKanbanIcon",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=e("FolderKeyIcon",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=e("FolderLockIcon",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=e("FolderMinusIcon",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=e("FolderOpenDotIcon",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=e("FolderOpenIcon",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=e("FolderOutputIcon",[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=e("FolderPenIcon",[["path",{d:"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z",key:"dakro8"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=e("FolderPlusIcon",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=e("FolderRootIcon",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=e("FolderSearch2Icon",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=e("FolderSearchIcon",[["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.5-1.5",key:"3sg1j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=e("FolderSymlinkIcon",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=e("FolderSyncIcon",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=e("FolderTreeIcon",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=e("FolderUpIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=e("FolderXIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=e("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=e("FoldersIcon",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=e("FootprintsIcon",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=e("ForkliftIcon",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=e("ForwardIcon",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=e("FrameIcon",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=e("FramerIcon",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=e("FrownIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=e("FuelIcon",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=e("FullscreenIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=e("GalleryHorizontalEndIcon",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=e("GalleryHorizontalIcon",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=e("GalleryThumbnailsIcon",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=e("GalleryVerticalEndIcon",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=e("GalleryVerticalIcon",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=e("Gamepad2Icon",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=e("GamepadIcon",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=e("GanttChartIcon",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=e("GaugeIcon",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=e("GavelIcon",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=e("GemIcon",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=e("GhostIcon",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=e("GiftIcon",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=e("GitBranchPlusIcon",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=e("GitBranchIcon",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=e("GitCommitHorizontalIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=e("GitCommitVerticalIcon",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=e("GitCompareArrowsIcon",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=e("GitCompareIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=e("GitForkIcon",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=e("GitGraphIcon",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=e("GitMergeIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=e("GitPullRequestArrowIcon",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=e("GitPullRequestClosedIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=e("GitPullRequestCreateArrowIcon",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=e("GitPullRequestCreateIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=e("GitPullRequestDraftIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=e("GitPullRequestIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=e("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=e("GitlabIcon",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=e("GlassWaterIcon",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=e("GlassesIcon",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=e("GlobeLockIcon",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=e("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=e("GoalIcon",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=e("GrabIcon",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"n5nng"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"185i9d"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"11pz95"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"16yk7l"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"nzvb1c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=e("GraduationCapIcon",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=e("GrapeIcon",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=e("Grid2x2CheckIcon",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=e("Grid2x2XIcon",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 16 5 5",key:"8tpb07"}],["path",{d:"m16 21 5-5",key:"193jll"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=e("Grid2x2Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e("Grid3x3Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=e("GripHorizontalIcon",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=e("GripVerticalIcon",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=e("GripIcon",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=e("GroupIcon",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=e("GuitarIcon",[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z",key:"15ixgv"}],["path",{d:"m17 7-5.1 5.1",key:"l9guh7"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",key:"x9fguj"}],["path",{d:"m6 16 2 2",key:"16qmzd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=e("HamIcon",[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",key:"1k1t7q"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",key:"153t1g"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",key:"gzrt0n"}],["path",{d:"m8.5 16.5-1-1",key:"otr954"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=e("HammerIcon",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=e("HandCoinsIcon",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=e("HandHeartIcon",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=e("HandHelpingIcon",[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=e("HandMetalIcon",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=e("HandPlatterIcon",[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0",key:"1t9y3n"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2",key:"loyjft"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18",key:"1rixiy"}],["path",{d:"M5 14v7H2",key:"3mujks"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=e("HandIcon",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=e("HandshakeIcon",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=e("HardDriveDownloadIcon",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=e("HardDriveUploadIcon",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=e("HardDriveIcon",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=e("HardHatIcon",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=e("HashIcon",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=e("HazeIcon",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=e("HdmiPortIcon",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=e("Heading1Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=e("Heading2Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=e("Heading3Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=e("Heading4Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v4h4",key:"13sv97"}],["path",{d:"M21 10v8",key:"1kdml4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=e("Heading5Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=e("Heading6Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=e("HeadingIcon",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=e("HeadphonesIcon",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=e("HeadsetIcon",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=e("HeartCrackIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=e("HeartHandshakeIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=e("HeartOffIcon",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=e("HeartPulseIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=e("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=e("HeaterIcon",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=e("HexagonIcon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=e("HighlighterIcon",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=e("HistoryIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=e("HomeIcon",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=e("HopOffIcon",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=e("HopIcon",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=e("HospitalIcon",[["path",{d:"M12 6v4",key:"16clxf"}],["path",{d:"M14 14h-4",key:"esezmu"}],["path",{d:"M14 18h-4",key:"16mqa2"}],["path",{d:"M14 8h-4",key:"z8ypaz"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"b1k337"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",key:"16g51d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=e("HotelIcon",[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=e("HourglassIcon",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=e("IceCreamBowlIcon",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"1uxfcu"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=e("IceCreamConeIcon",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=e("ImageDownIcon",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=e("ImageMinusIcon",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=e("ImageOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=e("ImagePlayIcon",[["path",{d:"m11 16-5 5",key:"j5f7ct"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5",key:"7s81lt"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"1omb6s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=e("ImagePlusIcon",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=e("ImageUpIcon",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=e("ImageIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=e("ImagesIcon",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=e("ImportIcon",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=e("InboxIcon",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=e("IndentDecreaseIcon",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=e("IndentIncreaseIcon",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=e("IndianRupeeIcon",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=e("InfinityIcon",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=e("InfoIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=e("InspectionPanelIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=e("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=e("ItalicIcon",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=e("IterationCcwIcon",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=e("IterationCwIcon",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=e("JapaneseYenIcon",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=e("JoystickIcon",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=e("KanbanIcon",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=e("KeyRoundIcon",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=e("KeySquareIcon",[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",key:"9li5bk"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4",key:"1ym3zm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=e("KeyIcon",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=e("KeyboardMusicIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=e("KeyboardOffIcon",[["path",{d:"M 20 4 A2 2 0 0 1 22 6",key:"1g1fkt"}],["path",{d:"M 22 6 L 22 16.41",key:"1qjg3w"}],["path",{d:"M 7 16 L 16 16",key:"n0yqwb"}],["path",{d:"M 9.69 4 L 20 4",key:"kbpcgx"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M8 12h.01",key:"czm47f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=e("KeyboardIcon",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=e("LampCeilingIcon",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=e("LampDeskIcon",[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=e("LampFloorIcon",[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=e("LampWallDownIcon",[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=e("LampWallUpIcon",[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=e("LampIcon",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=e("LandPlotIcon",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=e("LandmarkIcon",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=e("LanguagesIcon",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=e("LaptopMinimalIcon",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=e("LaptopIcon",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=e("LassoSelectIcon",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",key:"1bawls"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=e("LassoIcon",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=e("LaughIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=e("Layers2Icon",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=e("Layers3Icon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=e("LayersIcon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=e("LayoutDashboardIcon",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=e("LayoutGridIcon",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=e("LayoutListIcon",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=e("LayoutPanelLeftIcon",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=e("LayoutPanelTopIcon",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=e("LayoutTemplateIcon",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=e("LeafIcon",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=e("LeafyGreenIcon",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=e("LecternIcon",[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",key:"13jjxg"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3",key:"1550fe"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1",key:"qmu8b6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=e("LibraryBigIcon",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=e("LibraryIcon",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=e("LifeBuoyIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=e("LigatureIcon",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=e("LightbulbOffIcon",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=e("LightbulbIcon",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=e("LineChartIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=e("Link2OffIcon",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=e("Link2Icon",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=e("LinkIcon",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=e("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=e("ListChecksIcon",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=e("ListCollapseIcon",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=e("ListEndIcon",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=e("ListFilterIcon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=e("ListMinusIcon",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=e("ListMusicIcon",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=e("ListOrderedIcon",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=e("ListPlusIcon",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=e("ListRestartIcon",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=e("ListStartIcon",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=e("ListTodoIcon",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=e("ListTreeIcon",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=e("ListVideoIcon",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=e("ListXIcon",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=e("ListIcon",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=e("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=e("LoaderPinwheelIcon",[["path",{d:"M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5",key:"1cg5zf"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",key:"1gnrpi"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",key:"u9yy5q"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=e("LoaderIcon",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=e("LocateFixedIcon",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=e("LocateOffIcon",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=e("LocateIcon",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=e("LockKeyholeOpenIcon",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=e("LockKeyholeIcon",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=e("LockOpenIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=e("LockIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=e("LogInIcon",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=e("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=e("LollipopIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=e("LuggageIcon",[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",key:"1h5fkc"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=e("MagnetIcon",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=e("MailCheckIcon",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=e("MailMinusIcon",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=e("MailOpenIcon",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=e("MailPlusIcon",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=e("MailQuestionIcon",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=e("MailSearchIcon",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=e("MailWarningIcon",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=e("MailXIcon",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=e("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=e("MailboxIcon",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0",key:"n6nfvi"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=e("MailsIcon",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=e("MapPinOffIcon",[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",key:"12a8pk"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",key:"1r9f6y"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",key:"erynq7"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16",key:"1hwwmx"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=e("MapPinIcon",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=e("MapPinnedIcon",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=e("MapIcon",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=e("MartiniIcon",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=e("Maximize2Icon",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=e("MaximizeIcon",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=e("MedalIcon",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=e("MegaphoneOffIcon",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=e("MegaphoneIcon",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=e("MehIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=e("MemoryStickIcon",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=e("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=e("MergeIcon",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=e("MessageCircleCodeIcon",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z",key:"k85zhp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=e("MessageCircleDashedIcon",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=e("MessageCircleHeartIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=e("MessageCircleMoreIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=e("MessageCircleOffIcon",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=e("MessageCirclePlusIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=e("MessageCircleQuestionIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=e("MessageCircleReplyIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=e("MessageCircleWarningIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=e("MessageCircleXIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=e("MessageCircleIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=e("MessageSquareCodeIcon",[["path",{d:"M10 7.5 8 10l2 2.5",key:"xb17xw"}],["path",{d:"m14 7.5 2 2.5-2 2.5",key:"5rap1v"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=e("MessageSquareDashedIcon",[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2",key:"9usibi"}],["path",{d:"M11 3h3",key:"1c3ji7"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2",key:"19esxn"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1",key:"1fo1j8"}],["path",{d:"M14 17h-3",key:"1w4p2m"}],["path",{d:"m7 17-4 4v-5",key:"ph9x1h"}],["path",{d:"M3 12v-2",key:"856n1q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=e("MessageSquareDiffIcon",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=e("MessageSquareDotIcon",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=e("MessageSquareHeartIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=e("MessageSquareMoreIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=e("MessageSquareOffIcon",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=e("MessageSquarePlusIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=e("MessageSquareQuoteIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=e("MessageSquareReplyIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=e("MessageSquareShareIcon",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=e("MessageSquareTextIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=e("MessageSquareWarningIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=e("MessageSquareXIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=e("MessageSquareIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=e("MessagesSquareIcon",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z",key:"jj09z8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=e("MicOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=e("MicVocalIcon",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=e("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=e("MicroscopeIcon",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=e("MicrowaveIcon",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=e("MilestoneIcon",[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",key:"1mp5s7"}],["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=e("MilkOffIcon",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=e("MilkIcon",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=e("Minimize2Icon",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=e("MinimizeIcon",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=e("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=e("MonitorCheckIcon",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=e("MonitorDotIcon",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=e("MonitorDownIcon",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=e("MonitorOffIcon",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=e("MonitorPauseIcon",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=e("MonitorPlayIcon",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=e("MonitorSmartphoneIcon",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=e("MonitorSpeakerIcon",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=e("MonitorStopIcon",[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1",key:"5m2oou"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=e("MonitorUpIcon",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=e("MonitorXIcon",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=e("MonitorIcon",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=e("MoonStarIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=e("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=e("MountainSnowIcon",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=e("MountainIcon",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=e("MouseOffIcon",[["path",{d:"M12 6v.343",key:"1gyhex"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",key:"ukzz01"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902",key:"104jy9"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=e("MousePointer2Icon",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=e("MousePointerBanIcon",[["path",{d:"m2 2 4 11 2-5 5-2Z",key:"i586l5"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"m11.8 11.8 8.4 8.4",key:"oogvdj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=e("MousePointerClickIcon",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=e("MousePointerIcon",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=e("MouseIcon",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=e("Move3dIcon",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=e("MoveDiagonal2Icon",[["polyline",{points:"5 11 5 5 11 5",key:"ncfzxk"}],["polyline",{points:"19 13 19 19 13 19",key:"1mk7hk"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19",key:"mcyte3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=e("MoveDiagonalIcon",[["polyline",{points:"13 5 19 5 19 11",key:"11219e"}],["polyline",{points:"11 19 5 19 5 13",key:"sfq3wq"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=e("MoveDownLeftIcon",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=e("MoveDownRightIcon",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=e("MoveDownIcon",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=e("MoveHorizontalIcon",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=e("MoveLeftIcon",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=e("MoveRightIcon",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=e("MoveUpLeftIcon",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=e("MoveUpRightIcon",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=e("MoveUpIcon",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=e("MoveVerticalIcon",[["polyline",{points:"8 18 12 22 16 18",key:"1uutw3"}],["polyline",{points:"8 6 12 2 16 6",key:"d60sxy"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=e("MoveIcon",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=e("Music2Icon",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=e("Music3Icon",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=e("Music4Icon",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=e("MusicIcon",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=e("Navigation2OffIcon",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=e("Navigation2Icon",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=e("NavigationOffIcon",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=e("NavigationIcon",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=e("NetworkIcon",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=e("NewspaperIcon",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=e("NfcIcon",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=e("NotebookPenIcon",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z",key:"1dba1m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=e("NotebookTabsIcon",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=e("NotebookTextIcon",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=e("NotebookIcon",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=e("NotepadTextDashedIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=e("NotepadTextIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=e("NutOffIcon",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=e("NutIcon",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=e("OctagonAlertIcon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=e("OctagonPauseIcon",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714z",key:"p5imkh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=e("OctagonXIcon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=e("OctagonIcon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=e("OptionIcon",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=e("OrbitIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=e("OrigamiIcon",[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",key:"1bx4vc"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",key:"1h3km6"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",key:"1hj4wg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=e("Package2Icon",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=e("PackageCheckIcon",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=e("PackageMinusIcon",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=e("PackageOpenIcon",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=e("PackagePlusIcon",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=e("PackageSearchIcon",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=e("PackageXIcon",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=e("PackageIcon",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=e("PaintBucketIcon",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=e("PaintRollerIcon",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=e("PaintbrushVerticalIcon",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=e("PaintbrushIcon",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=e("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=e("PanelBottomCloseIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=e("PanelBottomDashedIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=e("PanelBottomOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=e("PanelBottomIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=e("PanelLeftCloseIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=e("PanelLeftDashedIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=e("PanelLeftOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=e("PanelLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=e("PanelRightCloseIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=e("PanelRightDashedIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=e("PanelRightOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=e("PanelRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=e("PanelTopCloseIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=e("PanelTopDashedIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=e("PanelTopOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=e("PanelTopIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=e("PanelsLeftBottomIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=e("PanelsRightBottomIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=e("PanelsTopLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=e("PaperclipIcon",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=e("ParenthesesIcon",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=e("ParkingMeterIcon",[["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",key:"1l50wn"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=e("PartyPopperIcon",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=e("PauseIcon",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=e("PawPrintIcon",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=e("PcCaseIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=e("PenLineIcon",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=e("PenToolIcon",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=e("PenIcon",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=e("PencilLineIcon",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=e("PencilRulerIcon",[["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",key:"hes763"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=e("PencilIcon",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=e("PentagonIcon",[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",key:"hsj90r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=e("PercentIcon",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=e("PersonStandingIcon",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=e("PhoneCallIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=e("PhoneForwardedIcon",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=e("PhoneIncomingIcon",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=e("PhoneMissedIcon",[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=e("PhoneOffIcon",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=e("PhoneOutgoingIcon",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=e("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=e("PiIcon",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=e("PianoIcon",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=e("PickaxeIcon",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=e("PictureInPicture2Icon",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=e("PictureInPictureIcon",[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",key:"bcd8fb"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2",key:"136fx3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=e("PieChartIcon",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=e("PiggyBankIcon",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=e("PilcrowLeftIcon",[["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9",key:"1ulc19"}],["path",{d:"M18 3v11",key:"1phi0r"}],["path",{d:"M22 18H2l4-4",key:"yt65j9"}],["path",{d:"m6 22-4-4",key:"6jgyf5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=e("PilcrowRightIcon",[["path",{d:"M10 3v11",key:"o3l5kj"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8",key:"1wb1nc"}],["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"m18 14 4 4H2",key:"4r8io1"}],["path",{d:"m22 18-4 4",key:"1hjjrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=e("PilcrowIcon",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=e("PillBottleIcon",[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",key:"17ldeb"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",key:"nc37y6"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1",key:"3jeezo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=e("PillIcon",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=e("PinOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=e("PinIcon",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=e("PipetteIcon",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=e("PizzaIcon",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=e("PlaneLandingIcon",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=e("PlaneTakeoffIcon",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=e("PlaneIcon",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=e("PlayIcon",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=e("Plug2Icon",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z",key:"nd4hoy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=e("PlugZap2Icon",[["path",{d:"m13 2-2 2.5h3L12 7",key:"1me98u"}],["path",{d:"M10 14v-3",key:"1mllf3"}],["path",{d:"M14 14v-3",key:"1l3fkq"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z",key:"jd5pat"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=e("PlugZapIcon",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=e("PlugIcon",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=e("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=e("PocketKnifeIcon",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=e("PocketIcon",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=e("PodcastIcon",[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0",key:"d71mpg"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z",key:"za5kbj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=e("PointerOffIcon",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=e("PointerIcon",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"1pp0yd"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",key:"u654g"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",key:"1e2dtv"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=e("PopcornIcon",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=e("PopsicleIcon",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=e("PoundSterlingIcon",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=e("PowerOffIcon",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=e("PowerIcon",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=e("PresentationIcon",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=e("PrinterIcon",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=e("ProjectorIcon",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=e("ProportionsIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M12 9v11",key:"1fnkrn"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9",key:"11z3ex"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=e("PuzzleIcon",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=e("PyramidIcon",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=e("QrCodeIcon",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=e("QuoteIcon",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=e("RabbitIcon",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=e("RadarIcon",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=e("RadiationIcon",[["path",{d:"M12 12h0.01",key:"6ztbls"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=e("RadicalIcon",[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",key:"1mqj8i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=e("RadioReceiverIcon",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=e("RadioTowerIcon",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=e("RadioIcon",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=e("RadiusIcon",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=e("RailSymbolIcon",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=e("RainbowIcon",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=e("RatIcon",[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",key:"16aj0u"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",key:"1crdmb"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5",key:"1ol3lk"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M16 9h.01",key:"1bdo4e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=e("RatioIcon",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=e("ReceiptCentIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=e("ReceiptEuroIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=e("ReceiptIndianRupeeIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=e("ReceiptJapaneseYenIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=e("ReceiptPoundSterlingIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=e("ReceiptRussianRubleIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=e("ReceiptSwissFrancIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=e("ReceiptTextIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=e("ReceiptIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=e("RectangleEllipsisIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=e("RectangleHorizontalIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=e("RectangleVerticalIcon",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=e("RecycleIcon",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=e("Redo2Icon",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",key:"19mnr4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=e("RedoDotIcon",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=e("RedoIcon",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=e("RefreshCcwDotIcon",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=e("RefreshCcwIcon",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=e("RefreshCwOffIcon",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=e("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=e("RefrigeratorIcon",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=e("RegexIcon",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=e("RemoveFormattingIcon",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=e("Repeat1Icon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=e("Repeat2Icon",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=e("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=e("ReplaceAllIcon",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"1w9p8c"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"m45eaa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=e("ReplaceIcon",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=e("ReplyAllIcon",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=e("ReplyIcon",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=e("RewindIcon",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=e("RibbonIcon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=e("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=e("RockingChairIcon",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=e("RollerCoasterIcon",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=e("Rotate3dIcon",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=e("RotateCcwSquareIcon",[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6",key:"19z8uc"}],["path",{d:"m15 2-3 3 3 3",key:"177bxs"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",key:"d36hnl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=e("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=e("RotateCwSquareIcon",[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3",key:"l96uqu"}],["path",{d:"m9 8 3-3-3-3",key:"1gzgc3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1w2k5h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=e("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=e("RouteOffIcon",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=e("RouteIcon",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=e("RouterIcon",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=e("Rows2Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=e("Rows3Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=e("Rows4Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=e("RssIcon",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=e("RulerIcon",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=e("RussianRubleIcon",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=e("SailboatIcon",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=e("SaladIcon",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=e("SandwichIcon",[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3",key:"34v9d7"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",key:"1k5vfb"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z",key:"1oe7l6"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",key:"1ts2ri"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=e("SatelliteDishIcon",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=e("SatelliteIcon",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=e("SaveAllIcon",[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5",key:"1xspal"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",key:"1ra60u"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",key:"1yve0x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=e("SaveIcon",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=e("Scale3dIcon",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M5 7v12h12",key:"vtaa4r"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=e("ScaleIcon",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=e("ScalingIcon",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=e("ScanBarcodeIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=e("ScanEyeIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=e("ScanFaceIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=e("ScanLineIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=e("ScanSearchIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=e("ScanTextIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=e("ScanIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=e("ScatterChartIcon",[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=e("SchoolIcon",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=e("ScissorsLineDashedIcon",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=e("ScissorsIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=e("ScreenShareOffIcon",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=e("ScreenShareIcon",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=e("ScrollTextIcon",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=e("ScrollIcon",[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=e("SearchCheckIcon",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=e("SearchCodeIcon",[["path",{d:"m13 13.5 2-2.5-2-2.5",key:"1rvxrh"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M9 8.5 7 11l2 2.5",key:"6ffwbx"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=e("SearchSlashIcon",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=e("SearchXIcon",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=e("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=e("SectionIcon",[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",key:"vqan6v"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",key:"wdjd8o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=e("SendHorizontalIcon",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=e("SendToBackIcon",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=e("SendIcon",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=e("SeparatorHorizontalIcon",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=e("SeparatorVerticalIcon",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=e("ServerCogIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=e("ServerCrashIcon",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=e("ServerOffIcon",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=e("ServerIcon",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=e("Settings2Icon",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=e("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=e("ShapesIcon",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=e("Share2Icon",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=e("ShareIcon",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=e("SheetIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=e("ShellIcon",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=e("ShieldAlertIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=e("ShieldBanIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=e("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=e("ShieldEllipsisIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=e("ShieldHalfIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=e("ShieldMinusIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=e("ShieldOffIcon",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=e("ShieldPlusIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=e("ShieldQuestionIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=e("ShieldXIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=e("ShieldIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=e("ShipWheelIcon",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=e("ShipIcon",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=e("ShirtIcon",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=e("ShoppingBagIcon",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=e("ShoppingBasketIcon",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=e("ShoppingCartIcon",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=e("ShovelIcon",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=e("ShowerHeadIcon",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=e("ShrinkIcon",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=e("ShrubIcon",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",key:"12jcau"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=e("ShuffleIcon",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=e("SigmaIcon",[["path",{d:"M18 7V4H6l6 8-6 8h12v-3",key:"zis8ev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=e("SignalHighIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=e("SignalLowIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=e("SignalMediumIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=e("SignalZeroIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=e("SignalIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=e("SignpostBigIcon",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=e("SignpostIcon",[["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z",key:"27os56"}],["path",{d:"M12 13v8",key:"1l5pq0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=e("SirenIcon",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=e("SkipBackIcon",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=e("SkipForwardIcon",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=e("SkullIcon",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=e("SlackIcon",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=e("SlashIcon",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=e("SliceIcon",[["path",{d:"m8 14-6 6h9v-3",key:"zo3j9a"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",key:"1dzx0j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=e("SlidersHorizontalIcon",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=e("SlidersVerticalIcon",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=e("SmartphoneChargingIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=e("SmartphoneNfcIcon",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=e("SmartphoneIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=e("SmilePlusIcon",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=e("SmileIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=e("SnailIcon",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=e("SnowflakeIcon",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=e("SofaIcon",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",key:"u5qfb7"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=e("SoupIcon",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=e("SpaceIcon",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=e("SpadeIcon",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=e("SparkleIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=e("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=e("SpeakerIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=e("SpeechIcon",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=e("SpellCheck2Icon",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=e("SpellCheckIcon",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=e("SplineIcon",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=e("SplitIcon",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=e("SprayCanIcon",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=e("SproutIcon",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=e("SquareActivityIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=e("SquareArrowDownLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=e("SquareArrowDownRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=e("SquareArrowDownIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=e("SquareArrowLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=e("SquareArrowOutDownLeftIcon",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=e("SquareArrowOutDownRightIcon",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=e("SquareArrowOutUpLeftIcon",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=e("SquareArrowOutUpRightIcon",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=e("SquareArrowRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=e("SquareArrowUpLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=e("SquareArrowUpRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=e("SquareArrowUpIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=e("SquareAsteriskIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=e("SquareBottomDashedScissorsIcon",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=e("SquareCheckBigIcon",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=e("SquareCheckIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=e("SquareChevronDownIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=e("SquareChevronLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=e("SquareChevronRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=e("SquareChevronUpIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=e("SquareCodeIcon",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=e("SquareDashedBottomCodeIcon",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=e("SquareDashedBottomIcon",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=e("SquareDashedKanbanIcon",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=e("SquareDashedMousePointerIcon",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=e("SquareDivideIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=e("SquareDotIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=e("SquareEqualIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=e("SquareFunctionIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=e("SquareGanttChartIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=e("SquareKanbanIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=e("SquareLibraryIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=e("SquareMIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=e("SquareMenuIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=e("SquareMinusIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=e("SquareMousePointerIcon",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=e("SquareParkingOffIcon",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=e("SquareParkingIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=e("SquarePenIcon",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=e("SquarePercentIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=e("SquarePiIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=e("SquarePilcrowIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=e("SquarePlayIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=e("SquarePlusIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=e("SquarePowerIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8",key:"15eubv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=e("SquareRadicalIcon",[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=e("SquareScissorsIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=e("SquareSigmaIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=e("SquareSlashIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=e("SquareSplitHorizontalIcon",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=e("SquareSplitVerticalIcon",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=e("SquareStackIcon",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=e("SquareTerminalIcon",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=e("SquareUserRoundIcon",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=e("SquareUserIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=e("SquareXIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=e("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=e("SquircleIcon",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=e("SquirrelIcon",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=e("StampIcon",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=e("StarHalfIcon",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=e("StarOffIcon",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=e("StarIcon",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=e("StepBackIcon",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=e("StepForwardIcon",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=e("StethoscopeIcon",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=e("StickerIcon",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h0",key:"jdup5h"}],["path",{d:"M16 13h0",key:"l4i2ga"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=e("StickyNoteIcon",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=e("StoreIcon",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=e("StretchHorizontalIcon",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=e("StretchVerticalIcon",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=e("StrikethroughIcon",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=e("SubscriptIcon",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=e("SunDimIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=e("SunMediumIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=e("SunMoonIcon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=e("SunSnowIcon",[["path",{d:"M10 9a3 3 0 1 0 0 6",key:"6zmtdl"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M14 21V3",key:"1llu3z"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 4-3 3",key:"15jcng"}],["path",{d:"m14 17 3 3",key:"6tlq38"}],["path",{d:"m21 15-3-3 3-3",key:"1nlnje"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=e("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=e("SunriseIcon",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=e("SunsetIcon",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=e("SuperscriptIcon",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=e("SwatchBookIcon",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h0.01",key:"10821z"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=e("SwissFrancIcon",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=e("SwitchCameraIcon",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=e("SwordIcon",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=e("SwordsIcon",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=e("SyringeIcon",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=e("Table2Icon",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=e("TableCellsMergeIcon",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=e("TableCellsSplitIcon",[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=e("TableColumnsSplitIcon",[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=e("TablePropertiesIcon",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=e("TableRowsSplitIcon",[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=e("TableIcon",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=e("TabletSmartphoneIcon",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=e("TabletIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=e("TabletsIcon",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=e("TagIcon",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=e("TagsIcon",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=e("Tally1Icon",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=e("Tally2Icon",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=e("Tally3Icon",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=e("Tally4Icon",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=e("Tally5Icon",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=e("TangentIcon",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=e("TargetIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=e("TelescopeIcon",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=e("TentTreeIcon",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=e("TentIcon",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=e("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=e("TestTubeDiagonalIcon",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3",key:"dg8b2p"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=e("TestTubeIcon",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=e("TestTubesIcon",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2",key:"12z67u"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2",key:"1q2nfy"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=e("TextCursorInputIcon",[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=e("TextCursorIcon",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=e("TextQuoteIcon",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=e("TextSearchIcon",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=e("TextSelectIcon",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=e("TextIcon",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=e("TheaterIcon",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=e("ThermometerSnowflakeIcon",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=e("ThermometerSunIcon",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=e("ThermometerIcon",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=e("ThumbsDownIcon",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=e("ThumbsUpIcon",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=e("TicketCheckIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=e("TicketMinusIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=e("TicketPercentIcon",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=e("TicketPlusIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=e("TicketSlashIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=e("TicketXIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=e("TicketIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=e("TimerOffIcon",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=e("TimerResetIcon",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=e("TimerIcon",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=e("ToggleLeftIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=e("ToggleRightIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=e("TornadoIcon",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=e("TorusIcon",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=e("TouchpadOffIcon",[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=e("TouchpadIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=e("TowerControlIcon",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=e("ToyBrickIcon",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=e("TractorIcon",[["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h9l1 7.246",key:"d639it"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=e("TrafficConeIcon",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=e("TrainFrontTunnelIcon",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=e("TrainFrontIcon",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=e("TrainTrackIcon",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=e("TramFrontIcon",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=e("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=e("TrashIcon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=e("TreeDeciduousIcon",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=e("TreePalmIcon",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=e("TreePineIcon",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=e("TreesIcon",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=e("TrelloIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=e("TrendingDownIcon",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=e("TrendingUpIcon",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=e("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=e("TriangleRightIcon",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=e("TriangleIcon",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=e("TrophyIcon",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=e("TruckIcon",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=e("TurtleIcon",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=e("Tv2Icon",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=e("TvIcon",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=e("TwitchIcon",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=e("TwitterIcon",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=e("TypeIcon",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=e("UmbrellaOffIcon",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=e("UmbrellaIcon",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=e("UnderlineIcon",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=e("Undo2Icon",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=e("UndoDotIcon",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=e("UndoIcon",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=e("UnfoldHorizontalIcon",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=e("UnfoldVerticalIcon",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=e("UngroupIcon",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=e("UniversityIcon",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"1qj5sn"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"jfgdp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=e("Unlink2Icon",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=e("UnlinkIcon",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=e("UnplugIcon",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=e("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=e("UsbIcon",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=e("UserCheckIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=e("UserCogIcon",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=e("UserMinusIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=e("UserPlusIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=e("UserRoundCheckIcon",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=e("UserRoundCogIcon",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=e("UserRoundMinusIcon",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=e("UserRoundPlusIcon",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=e("UserRoundSearchIcon",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=e("UserRoundXIcon",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=e("UserRoundIcon",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=e("UserSearchIcon",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=e("UserXIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=e("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=e("UsersRoundIcon",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=e("UsersIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=e("UtensilsCrossedIcon",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=e("UtensilsIcon",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=e("UtilityPoleIcon",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=e("VariableIcon",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=e("VaultIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=e("VeganIcon",[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6",key:"n7eohy"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3",key:"1dion0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=e("VenetianMaskIcon",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=e("VibrateOffIcon",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=e("VibrateIcon",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=e("VideoOffIcon",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=e("VideoIcon",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=e("VideotapeIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=e("ViewIcon",[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",key:"vptub8"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",key:"10lhjs"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=e("VoicemailIcon",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=e("Volume1Icon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=e("Volume2Icon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=e("VolumeXIcon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=e("VolumeIcon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=e("VoteIcon",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=e("WalletCardsIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=e("WalletMinimalIcon",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=e("WalletIcon",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=e("WallpaperIcon",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=e("WandSparklesIcon",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=e("WandIcon",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h0",key:"kg5t1u"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=e("WarehouseIcon",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=e("WashingMachineIcon",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=e("WatchIcon",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=e("WavesIcon",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=e("WaypointsIcon",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=e("WebcamIcon",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=e("WebhookOffIcon",[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=e("WebhookIcon",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=e("WeightIcon",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=e("WheatOffIcon",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=e("WheatIcon",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=e("WholeWordIcon",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=e("WifiOffIcon",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=e("WifiIcon",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=e("WindIcon",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=e("WineOffIcon",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=e("WineIcon",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=e("WorkflowIcon",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=e("WormIcon",[["path",{d:"m19 12-1.5 3",key:"9bcu4o"}],["path",{d:"M19.63 18.81 22 20",key:"121v98"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",key:"1tij6q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=e("WrapTextIcon",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=e("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=e("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=e("YoutubeIcon",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=e("ZapOffIcon",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=e("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=e("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=e("ZoomOutIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:ra,AArrowUp:ya,ALargeSmall:la,Accessibility:pa,Activity:ka,AirVent:sa,Airplay:ua,AlarmClock:va,AlarmClockCheck:X,AlarmClockMinus:K,AlarmClockOff:Ma,AlarmClockPlus:J,AlarmSmoke:Ia,Album:ma,AlignCenter:fa,AlignCenterHorizontal:ga,AlignCenterVertical:xa,AlignEndHorizontal:La,AlignEndVertical:wa,AlignHorizontalDistributeCenter:Ca,AlignHorizontalDistributeEnd:ba,AlignHorizontalDistributeStart:Sa,AlignHorizontalJustifyCenter:qa,AlignHorizontalJustifyEnd:Ha,AlignHorizontalJustifyStart:Aa,AlignHorizontalSpaceAround:Va,AlignHorizontalSpaceBetween:za,AlignJustify:Pa,AlignLeft:_a,AlignRight:ja,AlignStartHorizontal:Ba,AlignStartVertical:Fa,AlignVerticalDistributeCenter:Da,AlignVerticalDistributeEnd:Ta,AlignVerticalDistributeStart:Ra,AlignVerticalJustifyCenter:$a,AlignVerticalJustifyEnd:Ua,AlignVerticalJustifyStart:Oa,AlignVerticalSpaceAround:Za,AlignVerticalSpaceBetween:Ga,Ambulance:Ea,Ampersand:Wa,Ampersands:Na,Anchor:Xa,Angry:Ka,Annoyed:Ja,Antenna:Qa,Anvil:Ya,Aperture:et,AppWindow:tt,AppWindowMac:at,Apple:ct,Archive:it,ArchiveRestore:ot,ArchiveX:nt,AreaChart:ht,Armchair:dt,ArrowBigDown:yt,ArrowBigDownDash:rt,ArrowBigLeft:pt,ArrowBigLeftDash:lt,ArrowBigRight:st,ArrowBigRightDash:kt,ArrowBigUp:Mt,ArrowBigUpDash:ut,ArrowDown:bt,ArrowDown01:vt,ArrowDown10:It,ArrowDownAZ:Q,ArrowDownFromLine:mt,ArrowDownLeft:gt,ArrowDownNarrowWide:xt,ArrowDownRight:ft,ArrowDownToDot:Lt,ArrowDownToLine:wt,ArrowDownUp:Ct,ArrowDownWideNarrow:Y,ArrowDownZA:e1,ArrowLeft:At,ArrowLeftFromLine:St,ArrowLeftRight:qt,ArrowLeftToLine:Ht,ArrowRight:_t,ArrowRightFromLine:Vt,ArrowRightLeft:zt,ArrowRightToLine:Pt,ArrowUp:Zt,ArrowUp01:jt,ArrowUp10:Bt,ArrowUpAZ:a1,ArrowUpDown:Ft,ArrowUpFromDot:Dt,ArrowUpFromLine:Tt,ArrowUpLeft:Rt,ArrowUpNarrowWide:t1,ArrowUpRight:$t,ArrowUpToLine:Ut,ArrowUpWideNarrow:Ot,ArrowUpZA:c1,ArrowsUpFromLine:Gt,Asterisk:Et,AtSign:Wt,Atom:Nt,AudioLines:Xt,AudioWaveform:Kt,Award:Jt,Axe:Qt,Axis3d:o1,Baby:Yt,Backpack:ec,Badge:Mc,BadgeAlert:ac,BadgeCent:tc,BadgeCheck:n1,BadgeDollarSign:cc,BadgeEuro:oc,BadgeHelp:nc,BadgeIndianRupee:ic,BadgeInfo:hc,BadgeJapaneseYen:dc,BadgeMinus:rc,BadgePercent:yc,BadgePlus:lc,BadgePoundSterling:pc,BadgeRussianRuble:kc,BadgeSwissFranc:sc,BadgeX:uc,BaggageClaim:vc,Ban:Ic,Banana:mc,Banknote:gc,BarChart:Sc,BarChart2:xc,BarChart3:fc,BarChart4:Lc,BarChartBig:wc,BarChartHorizontal:bc,BarChartHorizontalBig:Cc,Barcode:qc,Baseline:Hc,Bath:Ac,Battery:Bc,BatteryCharging:Vc,BatteryFull:zc,BatteryLow:Pc,BatteryMedium:_c,BatteryWarning:jc,Beaker:Fc,Bean:Tc,BeanOff:Dc,Bed:Uc,BedDouble:Rc,BedSingle:$c,Beef:Oc,Beer:Gc,BeerOff:Zc,Bell:Qc,BellDot:Ec,BellElectric:Wc,BellMinus:Nc,BellOff:Xc,BellPlus:Kc,BellRing:Jc,BetweenHorizontalEnd:i1,BetweenHorizontalStart:h1,BetweenVerticalEnd:Yc,BetweenVerticalStart:e0,Bike:a0,Binary:t0,Biohazard:c0,Bird:o0,Bitcoin:n0,Blend:i0,Blinds:h0,Blocks:d0,Bluetooth:p0,BluetoothConnected:r0,BluetoothOff:y0,BluetoothSearching:l0,Bold:k0,Bolt:s0,Bomb:u0,Bone:M0,Book:T0,BookA:v0,BookAudio:I0,BookCheck:m0,BookCopy:g0,BookDashed:d1,BookDown:x0,BookHeadphones:f0,BookHeart:L0,BookImage:w0,BookKey:C0,BookLock:b0,BookMarked:S0,BookMinus:q0,BookOpen:V0,BookOpenCheck:H0,BookOpenText:A0,BookPlus:z0,BookText:P0,BookType:_0,BookUp:B0,BookUp2:j0,BookUser:F0,BookX:D0,Bookmark:Z0,BookmarkCheck:R0,BookmarkMinus:$0,BookmarkPlus:U0,BookmarkX:O0,BoomBox:G0,Bot:N0,BotMessageSquare:E0,BotOff:W0,Box:K0,BoxSelect:X0,Boxes:J0,Braces:r1,Brackets:Q0,Brain:ao,BrainCircuit:Y0,BrainCog:eo,BrickWall:to,Briefcase:no,BriefcaseBusiness:co,BriefcaseMedical:oo,BringToFront:io,Brush:ho,Bug:lo,BugOff:ro,BugPlay:yo,Building:ko,Building2:po,Bus:uo,BusFront:so,Cable:vo,CableCar:Mo,Cake:mo,CakeSlice:Io,Calculator:go,Calendar:Bo,CalendarCheck:fo,CalendarCheck2:xo,CalendarClock:Lo,CalendarDays:wo,CalendarFold:Co,CalendarHeart:bo,CalendarMinus:qo,CalendarMinus2:So,CalendarOff:Ho,CalendarPlus:Vo,CalendarPlus2:Ao,CalendarRange:zo,CalendarSearch:Po,CalendarX:jo,CalendarX2:_o,Camera:Do,CameraOff:Fo,CandlestickChart:To,Candy:Uo,CandyCane:Ro,CandyOff:$o,Cannabis:Oo,Captions:y1,CaptionsOff:Zo,Car:Wo,CarFront:Go,CarTaxiFront:Eo,Caravan:No,Carrot:Xo,CaseLower:Ko,CaseSensitive:Jo,CaseUpper:Qo,CassetteTape:Yo,Cast:en,Castle:an,Cat:tn,Cctv:cn,Check:nn,CheckCheck:on,ChefHat:hn,Cherry:dn,ChevronDown:rn,ChevronFirst:yn,ChevronLast:ln,ChevronLeft:pn,ChevronRight:kn,ChevronUp:sn,ChevronsDown:Mn,ChevronsDownUp:un,ChevronsLeft:In,ChevronsLeftRight:vn,ChevronsRight:gn,ChevronsRightLeft:mn,ChevronsUp:fn,ChevronsUpDown:xn,Chrome:Ln,Church:wn,Cigarette:bn,CigaretteOff:Cn,Circle:Bn,CircleAlert:l1,CircleArrowDown:p1,CircleArrowLeft:k1,CircleArrowOutDownLeft:s1,CircleArrowOutDownRight:u1,CircleArrowOutUpLeft:M1,CircleArrowOutUpRight:v1,CircleArrowRight:I1,CircleArrowUp:m1,CircleCheck:x1,CircleCheckBig:g1,CircleChevronDown:f1,CircleChevronLeft:L1,CircleChevronRight:w1,CircleChevronUp:C1,CircleDashed:Sn,CircleDivide:b1,CircleDollarSign:qn,CircleDot:An,CircleDotDashed:Hn,CircleEllipsis:Vn,CircleEqual:zn,CircleFadingPlus:Pn,CircleGauge:S1,CircleHelp:q1,CircleMinus:H1,CircleOff:_n,CircleParking:V1,CircleParkingOff:A1,CirclePause:z1,CirclePercent:P1,CirclePlay:_1,CirclePlus:j1,CirclePower:B1,CircleSlash:jn,CircleSlash2:F1,CircleStop:D1,CircleUser:R1,CircleUserRound:T1,CircleX:$1,CircuitBoard:Fn,Citrus:Dn,Clapperboard:Tn,Clipboard:Nn,ClipboardCheck:Rn,ClipboardCopy:$n,ClipboardList:Un,ClipboardMinus:On,ClipboardPaste:Zn,ClipboardPen:O1,ClipboardPenLine:U1,ClipboardPlus:Gn,ClipboardType:En,ClipboardX:Wn,Clock:hi,Clock1:Xn,Clock10:Kn,Clock11:Jn,Clock12:Qn,Clock2:Yn,Clock3:ei,Clock4:ai,Clock5:ti,Clock6:ci,Clock7:oi,Clock8:ni,Clock9:ii,Cloud:xi,CloudCog:di,CloudDownload:Z1,CloudDrizzle:ri,CloudFog:yi,CloudHail:li,CloudLightning:pi,CloudMoon:si,CloudMoonRain:ki,CloudOff:ui,CloudRain:vi,CloudRainWind:Mi,CloudSnow:Ii,CloudSun:gi,CloudSunRain:mi,CloudUpload:G1,Cloudy:fi,Clover:Li,Club:wi,Code:Ci,CodeXml:E1,Codepen:bi,Codesandbox:Si,Coffee:qi,Cog:Hi,Coins:Ai,Columns2:W1,Columns3:N1,Columns4:Vi,Combine:zi,Command:Pi,Compass:_i,Component:ji,Computer:Bi,ConciergeBell:Fi,Cone:Di,Construction:Ti,Contact:Ri,ContactRound:X1,Container:$i,Contrast:Ui,Cookie:Oi,CookingPot:Zi,Copy:Ki,CopyCheck:Gi,CopyMinus:Ei,CopyPlus:Wi,CopySlash:Ni,CopyX:Xi,Copyleft:Ji,Copyright:Qi,CornerDownLeft:Yi,CornerDownRight:eh,CornerLeftDown:ah,CornerLeftUp:th,CornerRightDown:ch,CornerRightUp:oh,CornerUpLeft:nh,CornerUpRight:ih,Cpu:hh,CreativeCommons:dh,CreditCard:rh,Croissant:yh,Crop:lh,Cross:ph,Crosshair:kh,Crown:sh,Cuboid:uh,CupSoda:Mh,Currency:vh,Cylinder:Ih,Database:xh,DatabaseBackup:mh,DatabaseZap:gh,Delete:fh,Dessert:Lh,Diameter:wh,Diamond:Sh,DiamondMinus:Ch,DiamondPercent:K1,DiamondPlus:bh,Dice1:qh,Dice2:Hh,Dice3:Ah,Dice4:Vh,Dice5:zh,Dice6:Ph,Dices:_h,Diff:jh,Disc:Th,Disc2:Bh,Disc3:Fh,DiscAlbum:Dh,Divide:Rh,Dna:Uh,DnaOff:$h,Dock:Oh,Dog:Zh,DollarSign:Gh,Donut:Eh,DoorClosed:Wh,DoorOpen:Nh,Dot:Xh,Download:Kh,DraftingCompass:Jh,Drama:Qh,Dribbble:Yh,Drill:ed,Droplet:ad,Droplets:td,Drum:cd,Drumstick:od,Dumbbell:nd,Ear:hd,EarOff:id,Earth:J1,EarthLock:dd,Eclipse:rd,Egg:pd,EggFried:yd,EggOff:ld,Ellipsis:Y1,EllipsisVertical:Q1,Equal:sd,EqualNot:kd,Eraser:ud,Euro:Md,Expand:vd,ExternalLink:Id,Eye:gd,EyeOff:md,Facebook:xd,Factory:fd,Fan:Ld,FastForward:wd,Feather:Cd,Fence:bd,FerrisWheel:Sd,Figma:qd,File:qr,FileArchive:Hd,FileAudio:Vd,FileAudio2:Ad,FileAxis3d:ee,FileBadge:Pd,FileBadge2:zd,FileBarChart:jd,FileBarChart2:_d,FileBox:Bd,FileCheck:Dd,FileCheck2:Fd,FileClock:Td,FileCode:$d,FileCode2:Rd,FileCog:ae,FileDiff:Ud,FileDigit:Od,FileDown:Zd,FileHeart:Gd,FileImage:Ed,FileInput:Wd,FileJson:Xd,FileJson2:Nd,FileKey:Jd,FileKey2:Kd,FileLineChart:Qd,FileLock:er,FileLock2:Yd,FileMinus:tr,FileMinus2:ar,FileMusic:cr,FileOutput:or,FilePen:ce,FilePenLine:te,FilePieChart:nr,FilePlus:hr,FilePlus2:ir,FileQuestion:dr,FileScan:rr,FileSearch:lr,FileSearch2:yr,FileSliders:pr,FileSpreadsheet:kr,FileStack:sr,FileSymlink:ur,FileTerminal:Mr,FileText:vr,FileType:mr,FileType2:Ir,FileUp:gr,FileVideo:fr,FileVideo2:xr,FileVolume:wr,FileVolume2:Lr,FileWarning:Cr,FileX:Sr,FileX2:br,Files:Hr,Film:Ar,Filter:zr,FilterX:Vr,Fingerprint:Pr,FireExtinguisher:_r,Fish:Fr,FishOff:jr,FishSymbol:Br,Flag:$r,FlagOff:Dr,FlagTriangleLeft:Tr,FlagTriangleRight:Rr,Flame:Or,FlameKindling:Ur,Flashlight:Gr,FlashlightOff:Zr,FlaskConical:Wr,FlaskConicalOff:Er,FlaskRound:Nr,FlipHorizontal:Kr,FlipHorizontal2:Xr,FlipVertical:Qr,FlipVertical2:Jr,Flower:ey,Flower2:Yr,Focus:ay,FoldHorizontal:ty,FoldVertical:cy,Folder:Ay,FolderArchive:oy,FolderCheck:ny,FolderClock:iy,FolderClosed:hy,FolderCog:oe,FolderDot:dy,FolderDown:ry,FolderGit:ly,FolderGit2:yy,FolderHeart:py,FolderInput:ky,FolderKanban:sy,FolderKey:uy,FolderLock:My,FolderMinus:vy,FolderOpen:my,FolderOpenDot:Iy,FolderOutput:gy,FolderPen:ne,FolderPlus:xy,FolderRoot:fy,FolderSearch:wy,FolderSearch2:Ly,FolderSymlink:Cy,FolderSync:by,FolderTree:Sy,FolderUp:qy,FolderX:Hy,Folders:Vy,Footprints:zy,Forklift:Py,Forward:_y,Frame:jy,Framer:By,Frown:Fy,Fuel:Dy,Fullscreen:Ty,GalleryHorizontal:$y,GalleryHorizontalEnd:Ry,GalleryThumbnails:Uy,GalleryVertical:Zy,GalleryVerticalEnd:Oy,Gamepad:Ey,Gamepad2:Gy,GanttChart:Wy,Gauge:Ny,Gavel:Xy,Gem:Ky,Ghost:Jy,Gift:Qy,GitBranch:el,GitBranchPlus:Yy,GitCommitHorizontal:ie,GitCommitVertical:al,GitCompare:cl,GitCompareArrows:tl,GitFork:ol,GitGraph:nl,GitMerge:il,GitPullRequest:pl,GitPullRequestArrow:hl,GitPullRequestClosed:dl,GitPullRequestCreate:yl,GitPullRequestCreateArrow:rl,GitPullRequestDraft:ll,Github:kl,Gitlab:sl,GlassWater:ul,Glasses:Ml,Globe:Il,GlobeLock:vl,Goal:ml,Grab:gl,GraduationCap:xl,Grape:fl,Grid2x2:he,Grid2x2Check:Ll,Grid2x2X:wl,Grid3x3:$,Grip:Sl,GripHorizontal:Cl,GripVertical:bl,Group:ql,Guitar:Hl,Ham:Al,Hammer:Vl,Hand:Bl,HandCoins:zl,HandHeart:Pl,HandHelping:de,HandMetal:_l,HandPlatter:jl,Handshake:Fl,HardDrive:Rl,HardDriveDownload:Dl,HardDriveUpload:Tl,HardHat:$l,Hash:Ul,Haze:Ol,HdmiPort:Zl,Heading:Jl,Heading1:Gl,Heading2:El,Heading3:Wl,Heading4:Nl,Heading5:Xl,Heading6:Kl,Headphones:Ql,Headset:Yl,Heart:op,HeartCrack:ep,HeartHandshake:ap,HeartOff:tp,HeartPulse:cp,Heater:np,Hexagon:ip,Highlighter:hp,History:dp,Home:rp,Hop:lp,HopOff:yp,Hospital:pp,Hotel:kp,Hourglass:sp,IceCreamBowl:re,IceCreamCone:ye,Image:xp,ImageDown:up,ImageMinus:Mp,ImageOff:vp,ImagePlay:Ip,ImagePlus:mp,ImageUp:gp,Images:fp,Import:Lp,Inbox:wp,IndentDecrease:le,IndentIncrease:pe,IndianRupee:Cp,Infinity:bp,Info:Sp,InspectionPanel:qp,Instagram:Hp,Italic:Ap,IterationCcw:Vp,IterationCw:zp,JapaneseYen:Pp,Joystick:_p,Kanban:jp,Key:Dp,KeyRound:Bp,KeySquare:Fp,Keyboard:$p,KeyboardMusic:Tp,KeyboardOff:Rp,Lamp:Wp,LampCeiling:Up,LampDesk:Op,LampFloor:Zp,LampWallDown:Gp,LampWallUp:Ep,LandPlot:Np,Landmark:Xp,Languages:Kp,Laptop:Jp,LaptopMinimal:ke,Lasso:Yp,LassoSelect:Qp,Laugh:ek,Layers:ck,Layers2:ak,Layers3:tk,LayoutDashboard:ok,LayoutGrid:nk,LayoutList:ik,LayoutPanelLeft:hk,LayoutPanelTop:dk,LayoutTemplate:rk,Leaf:yk,LeafyGreen:lk,Lectern:pk,Library:sk,LibraryBig:kk,LifeBuoy:uk,Ligature:Mk,Lightbulb:Ik,LightbulbOff:vk,LineChart:mk,Link:fk,Link2:xk,Link2Off:gk,Linkedin:Lk,List:Dk,ListChecks:wk,ListCollapse:Ck,ListEnd:bk,ListFilter:Sk,ListMinus:qk,ListMusic:Hk,ListOrdered:Ak,ListPlus:Vk,ListRestart:zk,ListStart:Pk,ListTodo:_k,ListTree:jk,ListVideo:Bk,ListX:Fk,Loader:Rk,LoaderCircle:se,LoaderPinwheel:Tk,Locate:Ok,LocateFixed:$k,LocateOff:Uk,Lock:Gk,LockKeyhole:Zk,LockKeyholeOpen:ue,LockOpen:Me,LogIn:Ek,LogOut:Wk,Lollipop:Nk,Luggage:Xk,Magnet:Kk,Mail:ns,MailCheck:Jk,MailMinus:Qk,MailOpen:Yk,MailPlus:es,MailQuestion:as,MailSearch:ts,MailWarning:cs,MailX:os,Mailbox:is,Mails:hs,Map:ls,MapPin:rs,MapPinOff:ds,MapPinned:ys,Martini:ps,Maximize:ss,Maximize2:ks,Medal:us,Megaphone:vs,MegaphoneOff:Ms,Meh:Is,MemoryStick:ms,Menu:gs,Merge:xs,MessageCircle:zs,MessageCircleCode:fs,MessageCircleDashed:Ls,MessageCircleHeart:ws,MessageCircleMore:Cs,MessageCircleOff:bs,MessageCirclePlus:Ss,MessageCircleQuestion:qs,MessageCircleReply:Hs,MessageCircleWarning:As,MessageCircleX:Vs,MessageSquare:Ws,MessageSquareCode:Ps,MessageSquareDashed:_s,MessageSquareDiff:js,MessageSquareDot:Bs,MessageSquareHeart:Fs,MessageSquareMore:Ds,MessageSquareOff:Ts,MessageSquarePlus:Rs,MessageSquareQuote:$s,MessageSquareReply:Us,MessageSquareShare:Os,MessageSquareText:Zs,MessageSquareWarning:Gs,MessageSquareX:Es,MessagesSquare:Ns,Mic:Ks,MicOff:Xs,MicVocal:ve,Microscope:Js,Microwave:Qs,Milestone:Ys,Milk:a4,MilkOff:e4,Minimize:c4,Minimize2:t4,Minus:o4,Monitor:M4,MonitorCheck:n4,MonitorDot:i4,MonitorDown:h4,MonitorOff:d4,MonitorPause:r4,MonitorPlay:y4,MonitorSmartphone:l4,MonitorSpeaker:p4,MonitorStop:k4,MonitorUp:s4,MonitorX:u4,Moon:I4,MoonStar:v4,Mountain:g4,MountainSnow:m4,Mouse:b4,MouseOff:x4,MousePointer:C4,MousePointer2:f4,MousePointerBan:L4,MousePointerClick:w4,Move:T4,Move3d:Ie,MoveDiagonal:q4,MoveDiagonal2:S4,MoveDown:V4,MoveDownLeft:H4,MoveDownRight:A4,MoveHorizontal:z4,MoveLeft:P4,MoveRight:_4,MoveUp:F4,MoveUpLeft:j4,MoveUpRight:B4,MoveVertical:D4,Music:O4,Music2:R4,Music3:$4,Music4:U4,Navigation:W4,Navigation2:G4,Navigation2Off:Z4,NavigationOff:E4,Network:N4,Newspaper:X4,Nfc:K4,Notebook:e5,NotebookPen:J4,NotebookTabs:Q4,NotebookText:Y4,NotepadText:t5,NotepadTextDashed:a5,Nut:o5,NutOff:c5,Octagon:n5,OctagonAlert:me,OctagonPause:ge,OctagonX:xe,Option:i5,Orbit:h5,Origami:d5,Package:M5,Package2:r5,PackageCheck:y5,PackageMinus:l5,PackageOpen:p5,PackagePlus:k5,PackageSearch:s5,PackageX:u5,PaintBucket:v5,PaintRoller:I5,Paintbrush:m5,PaintbrushVertical:fe,Palette:g5,PanelBottom:L5,PanelBottomClose:x5,PanelBottomDashed:Le,PanelBottomOpen:f5,PanelLeft:Se,PanelLeftClose:we,PanelLeftDashed:Ce,PanelLeftOpen:be,PanelRight:b5,PanelRightClose:w5,PanelRightDashed:qe,PanelRightOpen:C5,PanelTop:H5,PanelTopClose:S5,PanelTopDashed:He,PanelTopOpen:q5,PanelsLeftBottom:A5,PanelsRightBottom:V5,PanelsTopLeft:Ae,Paperclip:z5,Parentheses:P5,ParkingMeter:_5,PartyPopper:j5,Pause:B5,PawPrint:F5,PcCase:D5,Pen:ze,PenLine:Ve,PenTool:T5,Pencil:U5,PencilLine:R5,PencilRuler:$5,Pentagon:O5,Percent:Z5,PersonStanding:G5,Phone:Q5,PhoneCall:E5,PhoneForwarded:W5,PhoneIncoming:N5,PhoneMissed:X5,PhoneOff:K5,PhoneOutgoing:J5,Pi:Y5,Piano:e3,Pickaxe:a3,PictureInPicture:c3,PictureInPicture2:t3,PieChart:o3,PiggyBank:n3,Pilcrow:d3,PilcrowLeft:i3,PilcrowRight:h3,Pill:y3,PillBottle:r3,Pin:p3,PinOff:l3,Pipette:k3,Pizza:s3,Plane:v3,PlaneLanding:u3,PlaneTakeoff:M3,Play:I3,Plug:f3,Plug2:m3,PlugZap:x3,PlugZap2:g3,Plus:L3,Pocket:C3,PocketKnife:w3,Podcast:b3,Pointer:q3,PointerOff:S3,Popcorn:H3,Popsicle:A3,PoundSterling:V3,Power:P3,PowerOff:z3,Presentation:_3,Printer:j3,Projector:B3,Proportions:F3,Puzzle:D3,Pyramid:T3,QrCode:R3,Quote:$3,Rabbit:U3,Radar:O3,Radiation:Z3,Radical:G3,Radio:N3,RadioReceiver:E3,RadioTower:W3,Radius:X3,RailSymbol:K3,Rainbow:J3,Rat:Q3,Ratio:Y3,Receipt:du,ReceiptCent:eu,ReceiptEuro:au,ReceiptIndianRupee:tu,ReceiptJapaneseYen:cu,ReceiptPoundSterling:ou,ReceiptRussianRuble:nu,ReceiptSwissFranc:iu,ReceiptText:hu,RectangleEllipsis:Pe,RectangleHorizontal:ru,RectangleVertical:yu,Recycle:lu,Redo:su,Redo2:pu,RedoDot:ku,RefreshCcw:Mu,RefreshCcwDot:uu,RefreshCw:Iu,RefreshCwOff:vu,Refrigerator:mu,Regex:gu,RemoveFormatting:xu,Repeat:wu,Repeat1:fu,Repeat2:Lu,Replace:bu,ReplaceAll:Cu,Reply:qu,ReplyAll:Su,Rewind:Hu,Ribbon:Au,Rocket:Vu,RockingChair:zu,RollerCoaster:Pu,Rotate3d:_e,RotateCcw:ju,RotateCcwSquare:_u,RotateCw:Fu,RotateCwSquare:Bu,Route:Tu,RouteOff:Du,Router:Ru,Rows2:je,Rows3:Be,Rows4:$u,Rss:Uu,Ruler:Ou,RussianRuble:Zu,Sailboat:Gu,Salad:Eu,Sandwich:Wu,Satellite:Xu,SatelliteDish:Nu,Save:Ju,SaveAll:Ku,Scale:Qu,Scale3d:Fe,Scaling:Yu,Scan:i6,ScanBarcode:e6,ScanEye:a6,ScanFace:t6,ScanLine:c6,ScanSearch:o6,ScanText:n6,ScatterChart:h6,School:d6,Scissors:y6,ScissorsLineDashed:r6,ScreenShare:p6,ScreenShareOff:l6,Scroll:s6,ScrollText:k6,Search:m6,SearchCheck:u6,SearchCode:M6,SearchSlash:v6,SearchX:I6,Section:g6,Send:f6,SendHorizontal:De,SendToBack:x6,SeparatorHorizontal:L6,SeparatorVertical:w6,Server:q6,ServerCog:C6,ServerCrash:b6,ServerOff:S6,Settings:A6,Settings2:H6,Shapes:V6,Share:P6,Share2:z6,Sheet:_6,Shell:j6,Shield:G6,ShieldAlert:B6,ShieldBan:F6,ShieldCheck:D6,ShieldEllipsis:T6,ShieldHalf:R6,ShieldMinus:$6,ShieldOff:U6,ShieldPlus:O6,ShieldQuestion:Z6,ShieldX:Te,Ship:W6,ShipWheel:E6,Shirt:N6,ShoppingBag:X6,ShoppingBasket:K6,ShoppingCart:J6,Shovel:Q6,ShowerHead:Y6,Shrink:e8,Shrub:a8,Shuffle:t8,Sigma:c8,Signal:d8,SignalHigh:o8,SignalLow:n8,SignalMedium:i8,SignalZero:h8,Signpost:y8,SignpostBig:r8,Siren:l8,SkipBack:p8,SkipForward:k8,Skull:s8,Slack:u8,Slash:M8,Slice:v8,SlidersHorizontal:I8,SlidersVertical:Re,Smartphone:x8,SmartphoneCharging:m8,SmartphoneNfc:g8,Smile:L8,SmilePlus:f8,Snail:w8,Snowflake:C8,Sofa:b8,Soup:S8,Space:q8,Spade:H8,Sparkle:A8,Sparkles:$e,Speaker:V8,Speech:z8,SpellCheck:_8,SpellCheck2:P8,Spline:j8,Split:B8,SprayCan:F8,Sprout:D8,Square:O8,SquareActivity:Ue,SquareArrowDown:Ge,SquareArrowDownLeft:Oe,SquareArrowDownRight:Ze,SquareArrowLeft:Ee,SquareArrowOutDownLeft:We,SquareArrowOutDownRight:Ne,SquareArrowOutUpLeft:Xe,SquareArrowOutUpRight:Ke,SquareArrowRight:Je,SquareArrowUp:e2,SquareArrowUpLeft:Qe,SquareArrowUpRight:Ye,SquareAsterisk:a2,SquareBottomDashedScissors:t2,SquareCheck:o2,SquareCheckBig:c2,SquareChevronDown:n2,SquareChevronLeft:i2,SquareChevronRight:h2,SquareChevronUp:d2,SquareCode:r2,SquareDashedBottom:R8,SquareDashedBottomCode:T8,SquareDashedKanban:y2,SquareDashedMousePointer:l2,SquareDivide:p2,SquareDot:k2,SquareEqual:s2,SquareFunction:u2,SquareGanttChart:M2,SquareKanban:v2,SquareLibrary:I2,SquareM:m2,SquareMenu:g2,SquareMinus:x2,SquareMousePointer:f2,SquareParking:w2,SquareParkingOff:L2,SquarePen:D,SquarePercent:C2,SquarePi:b2,SquarePilcrow:S2,SquarePlay:q2,SquarePlus:H2,SquarePower:A2,SquareRadical:$8,SquareScissors:V2,SquareSigma:z2,SquareSlash:P2,SquareSplitHorizontal:_2,SquareSplitVertical:j2,SquareStack:U8,SquareTerminal:B2,SquareUser:D2,SquareUserRound:F2,SquareX:T2,Squircle:Z8,Squirrel:G8,Stamp:E8,Star:X8,StarHalf:W8,StarOff:N8,StepBack:K8,StepForward:J8,Stethoscope:Q8,Sticker:Y8,StickyNote:e7,Store:a7,StretchHorizontal:t7,StretchVertical:c7,Strikethrough:o7,Subscript:n7,Sun:y7,SunDim:i7,SunMedium:h7,SunMoon:d7,SunSnow:r7,Sunrise:l7,Sunset:p7,Superscript:k7,SwatchBook:s7,SwissFranc:u7,SwitchCamera:M7,Sword:v7,Swords:I7,Syringe:m7,Table:b7,Table2:g7,TableCellsMerge:x7,TableCellsSplit:f7,TableColumnsSplit:L7,TableProperties:w7,TableRowsSplit:C7,Tablet:q7,TabletSmartphone:S7,Tablets:H7,Tag:A7,Tags:V7,Tally1:z7,Tally2:P7,Tally3:_7,Tally4:j7,Tally5:B7,Tangent:F7,Target:D7,Telescope:T7,Tent:$7,TentTree:R7,Terminal:U7,TestTube:O7,TestTubeDiagonal:R2,TestTubes:Z7,Text:X7,TextCursor:E7,TextCursorInput:G7,TextQuote:W7,TextSearch:N7,TextSelect:$2,Theater:K7,Thermometer:Y7,ThermometerSnowflake:J7,ThermometerSun:Q7,ThumbsDown:e9,ThumbsUp:a9,Ticket:d9,TicketCheck:t9,TicketMinus:c9,TicketPercent:o9,TicketPlus:n9,TicketSlash:i9,TicketX:h9,Timer:l9,TimerOff:r9,TimerReset:y9,ToggleLeft:p9,ToggleRight:k9,Tornado:s9,Torus:u9,Touchpad:v9,TouchpadOff:M9,TowerControl:I9,ToyBrick:m9,Tractor:g9,TrafficCone:x9,TrainFront:L9,TrainFrontTunnel:f9,TrainTrack:w9,TramFront:U2,Trash:b9,Trash2:C9,TreeDeciduous:S9,TreePalm:O2,TreePine:q9,Trees:H9,Trello:A9,TrendingDown:V9,TrendingUp:z9,Triangle:_9,TriangleAlert:Z2,TriangleRight:P9,Trophy:j9,Truck:B9,Turtle:F9,Tv:T9,Tv2:D9,Twitch:R9,Twitter:$9,Type:U9,Umbrella:Z9,UmbrellaOff:O9,Underline:G9,Undo:N9,Undo2:E9,UndoDot:W9,UnfoldHorizontal:X9,UnfoldVertical:K9,Ungroup:J9,University:G2,Unlink:Y9,Unlink2:Q9,Unplug:eM,Upload:aM,Usb:tM,User:yM,UserCheck:cM,UserCog:oM,UserMinus:nM,UserPlus:iM,UserRound:J2,UserRoundCheck:E2,UserRoundCog:W2,UserRoundMinus:N2,UserRoundPlus:X2,UserRoundSearch:hM,UserRoundX:K2,UserSearch:dM,UserX:rM,Users:lM,UsersRound:Q2,Utensils:kM,UtensilsCrossed:pM,UtilityPole:sM,Variable:uM,Vault:MM,Vegan:vM,VenetianMask:IM,Vibrate:gM,VibrateOff:mM,Video:fM,VideoOff:xM,Videotape:LM,View:wM,Voicemail:CM,Volume:HM,Volume1:bM,Volume2:SM,VolumeX:qM,Vote:AM,Wallet:zM,WalletCards:VM,WalletMinimal:Y2,Wallpaper:PM,Wand:_M,WandSparkles:ea,Warehouse:jM,WashingMachine:BM,Watch:FM,Waves:DM,Waypoints:TM,Webcam:RM,Webhook:UM,WebhookOff:$M,Weight:OM,Wheat:GM,WheatOff:ZM,WholeWord:EM,Wifi:NM,WifiOff:WM,Wind:XM,Wine:JM,WineOff:KM,Workflow:QM,Worm:YM,WrapText:ev,Wrench:av,X:tv,Youtube:cv,Zap:nv,ZapOff:ov,ZoomIn:iv,ZoomOut:hv},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PL=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:ra,AArrowDownIcon:ra,AArrowUp:ya,AArrowUpIcon:ya,ALargeSmall:la,ALargeSmallIcon:la,Accessibility:pa,AccessibilityIcon:pa,Activity:ka,ActivityIcon:ka,ActivitySquare:Ue,ActivitySquareIcon:Ue,AirVent:sa,AirVentIcon:sa,Airplay:ua,AirplayIcon:ua,AlarmCheck:X,AlarmCheckIcon:X,AlarmClock:va,AlarmClockCheck:X,AlarmClockCheckIcon:X,AlarmClockIcon:va,AlarmClockMinus:K,AlarmClockMinusIcon:K,AlarmClockOff:Ma,AlarmClockOffIcon:Ma,AlarmClockPlus:J,AlarmClockPlusIcon:J,AlarmMinus:K,AlarmMinusIcon:K,AlarmPlus:J,AlarmPlusIcon:J,AlarmSmoke:Ia,AlarmSmokeIcon:Ia,Album:ma,AlbumIcon:ma,AlertCircle:l1,AlertCircleIcon:l1,AlertOctagon:me,AlertOctagonIcon:me,AlertTriangle:Z2,AlertTriangleIcon:Z2,AlignCenter:fa,AlignCenterHorizontal:ga,AlignCenterHorizontalIcon:ga,AlignCenterIcon:fa,AlignCenterVertical:xa,AlignCenterVerticalIcon:xa,AlignEndHorizontal:La,AlignEndHorizontalIcon:La,AlignEndVertical:wa,AlignEndVerticalIcon:wa,AlignHorizontalDistributeCenter:Ca,AlignHorizontalDistributeCenterIcon:Ca,AlignHorizontalDistributeEnd:ba,AlignHorizontalDistributeEndIcon:ba,AlignHorizontalDistributeStart:Sa,AlignHorizontalDistributeStartIcon:Sa,AlignHorizontalJustifyCenter:qa,AlignHorizontalJustifyCenterIcon:qa,AlignHorizontalJustifyEnd:Ha,AlignHorizontalJustifyEndIcon:Ha,AlignHorizontalJustifyStart:Aa,AlignHorizontalJustifyStartIcon:Aa,AlignHorizontalSpaceAround:Va,AlignHorizontalSpaceAroundIcon:Va,AlignHorizontalSpaceBetween:za,AlignHorizontalSpaceBetweenIcon:za,AlignJustify:Pa,AlignJustifyIcon:Pa,AlignLeft:_a,AlignLeftIcon:_a,AlignRight:ja,AlignRightIcon:ja,AlignStartHorizontal:Ba,AlignStartHorizontalIcon:Ba,AlignStartVertical:Fa,AlignStartVerticalIcon:Fa,AlignVerticalDistributeCenter:Da,AlignVerticalDistributeCenterIcon:Da,AlignVerticalDistributeEnd:Ta,AlignVerticalDistributeEndIcon:Ta,AlignVerticalDistributeStart:Ra,AlignVerticalDistributeStartIcon:Ra,AlignVerticalJustifyCenter:$a,AlignVerticalJustifyCenterIcon:$a,AlignVerticalJustifyEnd:Ua,AlignVerticalJustifyEndIcon:Ua,AlignVerticalJustifyStart:Oa,AlignVerticalJustifyStartIcon:Oa,AlignVerticalSpaceAround:Za,AlignVerticalSpaceAroundIcon:Za,AlignVerticalSpaceBetween:Ga,AlignVerticalSpaceBetweenIcon:Ga,Ambulance:Ea,AmbulanceIcon:Ea,Ampersand:Wa,AmpersandIcon:Wa,Ampersands:Na,AmpersandsIcon:Na,Anchor:Xa,AnchorIcon:Xa,Angry:Ka,AngryIcon:Ka,Annoyed:Ja,AnnoyedIcon:Ja,Antenna:Qa,AntennaIcon:Qa,Anvil:Ya,AnvilIcon:Ya,Aperture:et,ApertureIcon:et,AppWindow:tt,AppWindowIcon:tt,AppWindowMac:at,AppWindowMacIcon:at,Apple:ct,AppleIcon:ct,Archive:it,ArchiveIcon:it,ArchiveRestore:ot,ArchiveRestoreIcon:ot,ArchiveX:nt,ArchiveXIcon:nt,AreaChart:ht,AreaChartIcon:ht,Armchair:dt,ArmchairIcon:dt,ArrowBigDown:yt,ArrowBigDownDash:rt,ArrowBigDownDashIcon:rt,ArrowBigDownIcon:yt,ArrowBigLeft:pt,ArrowBigLeftDash:lt,ArrowBigLeftDashIcon:lt,ArrowBigLeftIcon:pt,ArrowBigRight:st,ArrowBigRightDash:kt,ArrowBigRightDashIcon:kt,ArrowBigRightIcon:st,ArrowBigUp:Mt,ArrowBigUpDash:ut,ArrowBigUpDashIcon:ut,ArrowBigUpIcon:Mt,ArrowDown:bt,ArrowDown01:vt,ArrowDown01Icon:vt,ArrowDown10:It,ArrowDown10Icon:It,ArrowDownAZ:Q,ArrowDownAZIcon:Q,ArrowDownAz:Q,ArrowDownAzIcon:Q,ArrowDownCircle:p1,ArrowDownCircleIcon:p1,ArrowDownFromLine:mt,ArrowDownFromLineIcon:mt,ArrowDownIcon:bt,ArrowDownLeft:gt,ArrowDownLeftFromCircle:s1,ArrowDownLeftFromCircleIcon:s1,ArrowDownLeftFromSquare:We,ArrowDownLeftFromSquareIcon:We,ArrowDownLeftIcon:gt,ArrowDownLeftSquare:Oe,ArrowDownLeftSquareIcon:Oe,ArrowDownNarrowWide:xt,ArrowDownNarrowWideIcon:xt,ArrowDownRight:ft,ArrowDownRightFromCircle:u1,ArrowDownRightFromCircleIcon:u1,ArrowDownRightFromSquare:Ne,ArrowDownRightFromSquareIcon:Ne,ArrowDownRightIcon:ft,ArrowDownRightSquare:Ze,ArrowDownRightSquareIcon:Ze,ArrowDownSquare:Ge,ArrowDownSquareIcon:Ge,ArrowDownToDot:Lt,ArrowDownToDotIcon:Lt,ArrowDownToLine:wt,ArrowDownToLineIcon:wt,ArrowDownUp:Ct,ArrowDownUpIcon:Ct,ArrowDownWideNarrow:Y,ArrowDownWideNarrowIcon:Y,ArrowDownZA:e1,ArrowDownZAIcon:e1,ArrowDownZa:e1,ArrowDownZaIcon:e1,ArrowLeft:At,ArrowLeftCircle:k1,ArrowLeftCircleIcon:k1,ArrowLeftFromLine:St,ArrowLeftFromLineIcon:St,ArrowLeftIcon:At,ArrowLeftRight:qt,ArrowLeftRightIcon:qt,ArrowLeftSquare:Ee,ArrowLeftSquareIcon:Ee,ArrowLeftToLine:Ht,ArrowLeftToLineIcon:Ht,ArrowRight:_t,ArrowRightCircle:I1,ArrowRightCircleIcon:I1,ArrowRightFromLine:Vt,ArrowRightFromLineIcon:Vt,ArrowRightIcon:_t,ArrowRightLeft:zt,ArrowRightLeftIcon:zt,ArrowRightSquare:Je,ArrowRightSquareIcon:Je,ArrowRightToLine:Pt,ArrowRightToLineIcon:Pt,ArrowUp:Zt,ArrowUp01:jt,ArrowUp01Icon:jt,ArrowUp10:Bt,ArrowUp10Icon:Bt,ArrowUpAZ:a1,ArrowUpAZIcon:a1,ArrowUpAz:a1,ArrowUpAzIcon:a1,ArrowUpCircle:m1,ArrowUpCircleIcon:m1,ArrowUpDown:Ft,ArrowUpDownIcon:Ft,ArrowUpFromDot:Dt,ArrowUpFromDotIcon:Dt,ArrowUpFromLine:Tt,ArrowUpFromLineIcon:Tt,ArrowUpIcon:Zt,ArrowUpLeft:Rt,ArrowUpLeftFromCircle:M1,ArrowUpLeftFromCircleIcon:M1,ArrowUpLeftFromSquare:Xe,ArrowUpLeftFromSquareIcon:Xe,ArrowUpLeftIcon:Rt,ArrowUpLeftSquare:Qe,ArrowUpLeftSquareIcon:Qe,ArrowUpNarrowWide:t1,ArrowUpNarrowWideIcon:t1,ArrowUpRight:$t,ArrowUpRightFromCircle:v1,ArrowUpRightFromCircleIcon:v1,ArrowUpRightFromSquare:Ke,ArrowUpRightFromSquareIcon:Ke,ArrowUpRightIcon:$t,ArrowUpRightSquare:Ye,ArrowUpRightSquareIcon:Ye,ArrowUpSquare:e2,ArrowUpSquareIcon:e2,ArrowUpToLine:Ut,ArrowUpToLineIcon:Ut,ArrowUpWideNarrow:Ot,ArrowUpWideNarrowIcon:Ot,ArrowUpZA:c1,ArrowUpZAIcon:c1,ArrowUpZa:c1,ArrowUpZaIcon:c1,ArrowsUpFromLine:Gt,ArrowsUpFromLineIcon:Gt,Asterisk:Et,AsteriskIcon:Et,AsteriskSquare:a2,AsteriskSquareIcon:a2,AtSign:Wt,AtSignIcon:Wt,Atom:Nt,AtomIcon:Nt,AudioLines:Xt,AudioLinesIcon:Xt,AudioWaveform:Kt,AudioWaveformIcon:Kt,Award:Jt,AwardIcon:Jt,Axe:Qt,AxeIcon:Qt,Axis3D:o1,Axis3DIcon:o1,Axis3d:o1,Axis3dIcon:o1,Baby:Yt,BabyIcon:Yt,Backpack:ec,BackpackIcon:ec,Badge:Mc,BadgeAlert:ac,BadgeAlertIcon:ac,BadgeCent:tc,BadgeCentIcon:tc,BadgeCheck:n1,BadgeCheckIcon:n1,BadgeDollarSign:cc,BadgeDollarSignIcon:cc,BadgeEuro:oc,BadgeEuroIcon:oc,BadgeHelp:nc,BadgeHelpIcon:nc,BadgeIcon:Mc,BadgeIndianRupee:ic,BadgeIndianRupeeIcon:ic,BadgeInfo:hc,BadgeInfoIcon:hc,BadgeJapaneseYen:dc,BadgeJapaneseYenIcon:dc,BadgeMinus:rc,BadgeMinusIcon:rc,BadgePercent:yc,BadgePercentIcon:yc,BadgePlus:lc,BadgePlusIcon:lc,BadgePoundSterling:pc,BadgePoundSterlingIcon:pc,BadgeRussianRuble:kc,BadgeRussianRubleIcon:kc,BadgeSwissFranc:sc,BadgeSwissFrancIcon:sc,BadgeX:uc,BadgeXIcon:uc,BaggageClaim:vc,BaggageClaimIcon:vc,Ban:Ic,BanIcon:Ic,Banana:mc,BananaIcon:mc,Banknote:gc,BanknoteIcon:gc,BarChart:Sc,BarChart2:xc,BarChart2Icon:xc,BarChart3:fc,BarChart3Icon:fc,BarChart4:Lc,BarChart4Icon:Lc,BarChartBig:wc,BarChartBigIcon:wc,BarChartHorizontal:bc,BarChartHorizontalBig:Cc,BarChartHorizontalBigIcon:Cc,BarChartHorizontalIcon:bc,BarChartIcon:Sc,Barcode:qc,BarcodeIcon:qc,Baseline:Hc,BaselineIcon:Hc,Bath:Ac,BathIcon:Ac,Battery:Bc,BatteryCharging:Vc,BatteryChargingIcon:Vc,BatteryFull:zc,BatteryFullIcon:zc,BatteryIcon:Bc,BatteryLow:Pc,BatteryLowIcon:Pc,BatteryMedium:_c,BatteryMediumIcon:_c,BatteryWarning:jc,BatteryWarningIcon:jc,Beaker:Fc,BeakerIcon:Fc,Bean:Tc,BeanIcon:Tc,BeanOff:Dc,BeanOffIcon:Dc,Bed:Uc,BedDouble:Rc,BedDoubleIcon:Rc,BedIcon:Uc,BedSingle:$c,BedSingleIcon:$c,Beef:Oc,BeefIcon:Oc,Beer:Gc,BeerIcon:Gc,BeerOff:Zc,BeerOffIcon:Zc,Bell:Qc,BellDot:Ec,BellDotIcon:Ec,BellElectric:Wc,BellElectricIcon:Wc,BellIcon:Qc,BellMinus:Nc,BellMinusIcon:Nc,BellOff:Xc,BellOffIcon:Xc,BellPlus:Kc,BellPlusIcon:Kc,BellRing:Jc,BellRingIcon:Jc,BetweenHorizonalEnd:i1,BetweenHorizonalEndIcon:i1,BetweenHorizonalStart:h1,BetweenHorizonalStartIcon:h1,BetweenHorizontalEnd:i1,BetweenHorizontalEndIcon:i1,BetweenHorizontalStart:h1,BetweenHorizontalStartIcon:h1,BetweenVerticalEnd:Yc,BetweenVerticalEndIcon:Yc,BetweenVerticalStart:e0,BetweenVerticalStartIcon:e0,Bike:a0,BikeIcon:a0,Binary:t0,BinaryIcon:t0,Biohazard:c0,BiohazardIcon:c0,Bird:o0,BirdIcon:o0,Bitcoin:n0,BitcoinIcon:n0,Blend:i0,BlendIcon:i0,Blinds:h0,BlindsIcon:h0,Blocks:d0,BlocksIcon:d0,Bluetooth:p0,BluetoothConnected:r0,BluetoothConnectedIcon:r0,BluetoothIcon:p0,BluetoothOff:y0,BluetoothOffIcon:y0,BluetoothSearching:l0,BluetoothSearchingIcon:l0,Bold:k0,BoldIcon:k0,Bolt:s0,BoltIcon:s0,Bomb:u0,BombIcon:u0,Bone:M0,BoneIcon:M0,Book:T0,BookA:v0,BookAIcon:v0,BookAudio:I0,BookAudioIcon:I0,BookCheck:m0,BookCheckIcon:m0,BookCopy:g0,BookCopyIcon:g0,BookDashed:d1,BookDashedIcon:d1,BookDown:x0,BookDownIcon:x0,BookHeadphones:f0,BookHeadphonesIcon:f0,BookHeart:L0,BookHeartIcon:L0,BookIcon:T0,BookImage:w0,BookImageIcon:w0,BookKey:C0,BookKeyIcon:C0,BookLock:b0,BookLockIcon:b0,BookMarked:S0,BookMarkedIcon:S0,BookMinus:q0,BookMinusIcon:q0,BookOpen:V0,BookOpenCheck:H0,BookOpenCheckIcon:H0,BookOpenIcon:V0,BookOpenText:A0,BookOpenTextIcon:A0,BookPlus:z0,BookPlusIcon:z0,BookTemplate:d1,BookTemplateIcon:d1,BookText:P0,BookTextIcon:P0,BookType:_0,BookTypeIcon:_0,BookUp:B0,BookUp2:j0,BookUp2Icon:j0,BookUpIcon:B0,BookUser:F0,BookUserIcon:F0,BookX:D0,BookXIcon:D0,Bookmark:Z0,BookmarkCheck:R0,BookmarkCheckIcon:R0,BookmarkIcon:Z0,BookmarkMinus:$0,BookmarkMinusIcon:$0,BookmarkPlus:U0,BookmarkPlusIcon:U0,BookmarkX:O0,BookmarkXIcon:O0,BoomBox:G0,BoomBoxIcon:G0,Bot:N0,BotIcon:N0,BotMessageSquare:E0,BotMessageSquareIcon:E0,BotOff:W0,BotOffIcon:W0,Box:K0,BoxIcon:K0,BoxSelect:X0,BoxSelectIcon:X0,Boxes:J0,BoxesIcon:J0,Braces:r1,BracesIcon:r1,Brackets:Q0,BracketsIcon:Q0,Brain:ao,BrainCircuit:Y0,BrainCircuitIcon:Y0,BrainCog:eo,BrainCogIcon:eo,BrainIcon:ao,BrickWall:to,BrickWallIcon:to,Briefcase:no,BriefcaseBusiness:co,BriefcaseBusinessIcon:co,BriefcaseIcon:no,BriefcaseMedical:oo,BriefcaseMedicalIcon:oo,BringToFront:io,BringToFrontIcon:io,Brush:ho,BrushIcon:ho,Bug:lo,BugIcon:lo,BugOff:ro,BugOffIcon:ro,BugPlay:yo,BugPlayIcon:yo,Building:ko,Building2:po,Building2Icon:po,BuildingIcon:ko,Bus:uo,BusFront:so,BusFrontIcon:so,BusIcon:uo,Cable:vo,CableCar:Mo,CableCarIcon:Mo,CableIcon:vo,Cake:mo,CakeIcon:mo,CakeSlice:Io,CakeSliceIcon:Io,Calculator:go,CalculatorIcon:go,Calendar:Bo,CalendarCheck:fo,CalendarCheck2:xo,CalendarCheck2Icon:xo,CalendarCheckIcon:fo,CalendarClock:Lo,CalendarClockIcon:Lo,CalendarDays:wo,CalendarDaysIcon:wo,CalendarFold:Co,CalendarFoldIcon:Co,CalendarHeart:bo,CalendarHeartIcon:bo,CalendarIcon:Bo,CalendarMinus:qo,CalendarMinus2:So,CalendarMinus2Icon:So,CalendarMinusIcon:qo,CalendarOff:Ho,CalendarOffIcon:Ho,CalendarPlus:Vo,CalendarPlus2:Ao,CalendarPlus2Icon:Ao,CalendarPlusIcon:Vo,CalendarRange:zo,CalendarRangeIcon:zo,CalendarSearch:Po,CalendarSearchIcon:Po,CalendarX:jo,CalendarX2:_o,CalendarX2Icon:_o,CalendarXIcon:jo,Camera:Do,CameraIcon:Do,CameraOff:Fo,CameraOffIcon:Fo,CandlestickChart:To,CandlestickChartIcon:To,Candy:Uo,CandyCane:Ro,CandyCaneIcon:Ro,CandyIcon:Uo,CandyOff:$o,CandyOffIcon:$o,Cannabis:Oo,CannabisIcon:Oo,Captions:y1,CaptionsIcon:y1,CaptionsOff:Zo,CaptionsOffIcon:Zo,Car:Wo,CarFront:Go,CarFrontIcon:Go,CarIcon:Wo,CarTaxiFront:Eo,CarTaxiFrontIcon:Eo,Caravan:No,CaravanIcon:No,Carrot:Xo,CarrotIcon:Xo,CaseLower:Ko,CaseLowerIcon:Ko,CaseSensitive:Jo,CaseSensitiveIcon:Jo,CaseUpper:Qo,CaseUpperIcon:Qo,CassetteTape:Yo,CassetteTapeIcon:Yo,Cast:en,CastIcon:en,Castle:an,CastleIcon:an,Cat:tn,CatIcon:tn,Cctv:cn,CctvIcon:cn,Check:nn,CheckCheck:on,CheckCheckIcon:on,CheckCircle:g1,CheckCircle2:x1,CheckCircle2Icon:x1,CheckCircleIcon:g1,CheckIcon:nn,CheckSquare:c2,CheckSquare2:o2,CheckSquare2Icon:o2,CheckSquareIcon:c2,ChefHat:hn,ChefHatIcon:hn,Cherry:dn,CherryIcon:dn,ChevronDown:rn,ChevronDownCircle:f1,ChevronDownCircleIcon:f1,ChevronDownIcon:rn,ChevronDownSquare:n2,ChevronDownSquareIcon:n2,ChevronFirst:yn,ChevronFirstIcon:yn,ChevronLast:ln,ChevronLastIcon:ln,ChevronLeft:pn,ChevronLeftCircle:L1,ChevronLeftCircleIcon:L1,ChevronLeftIcon:pn,ChevronLeftSquare:i2,ChevronLeftSquareIcon:i2,ChevronRight:kn,ChevronRightCircle:w1,ChevronRightCircleIcon:w1,ChevronRightIcon:kn,ChevronRightSquare:h2,ChevronRightSquareIcon:h2,ChevronUp:sn,ChevronUpCircle:C1,ChevronUpCircleIcon:C1,ChevronUpIcon:sn,ChevronUpSquare:d2,ChevronUpSquareIcon:d2,ChevronsDown:Mn,ChevronsDownIcon:Mn,ChevronsDownUp:un,ChevronsDownUpIcon:un,ChevronsLeft:In,ChevronsLeftIcon:In,ChevronsLeftRight:vn,ChevronsLeftRightIcon:vn,ChevronsRight:gn,ChevronsRightIcon:gn,ChevronsRightLeft:mn,ChevronsRightLeftIcon:mn,ChevronsUp:fn,ChevronsUpDown:xn,ChevronsUpDownIcon:xn,ChevronsUpIcon:fn,Chrome:Ln,ChromeIcon:Ln,Church:wn,ChurchIcon:wn,Cigarette:bn,CigaretteIcon:bn,CigaretteOff:Cn,CigaretteOffIcon:Cn,Circle:Bn,CircleAlert:l1,CircleAlertIcon:l1,CircleArrowDown:p1,CircleArrowDownIcon:p1,CircleArrowLeft:k1,CircleArrowLeftIcon:k1,CircleArrowOutDownLeft:s1,CircleArrowOutDownLeftIcon:s1,CircleArrowOutDownRight:u1,CircleArrowOutDownRightIcon:u1,CircleArrowOutUpLeft:M1,CircleArrowOutUpLeftIcon:M1,CircleArrowOutUpRight:v1,CircleArrowOutUpRightIcon:v1,CircleArrowRight:I1,CircleArrowRightIcon:I1,CircleArrowUp:m1,CircleArrowUpIcon:m1,CircleCheck:x1,CircleCheckBig:g1,CircleCheckBigIcon:g1,CircleCheckIcon:x1,CircleChevronDown:f1,CircleChevronDownIcon:f1,CircleChevronLeft:L1,CircleChevronLeftIcon:L1,CircleChevronRight:w1,CircleChevronRightIcon:w1,CircleChevronUp:C1,CircleChevronUpIcon:C1,CircleDashed:Sn,CircleDashedIcon:Sn,CircleDivide:b1,CircleDivideIcon:b1,CircleDollarSign:qn,CircleDollarSignIcon:qn,CircleDot:An,CircleDotDashed:Hn,CircleDotDashedIcon:Hn,CircleDotIcon:An,CircleEllipsis:Vn,CircleEllipsisIcon:Vn,CircleEqual:zn,CircleEqualIcon:zn,CircleFadingPlus:Pn,CircleFadingPlusIcon:Pn,CircleGauge:S1,CircleGaugeIcon:S1,CircleHelp:q1,CircleHelpIcon:q1,CircleIcon:Bn,CircleMinus:H1,CircleMinusIcon:H1,CircleOff:_n,CircleOffIcon:_n,CircleParking:V1,CircleParkingIcon:V1,CircleParkingOff:A1,CircleParkingOffIcon:A1,CirclePause:z1,CirclePauseIcon:z1,CirclePercent:P1,CirclePercentIcon:P1,CirclePlay:_1,CirclePlayIcon:_1,CirclePlus:j1,CirclePlusIcon:j1,CirclePower:B1,CirclePowerIcon:B1,CircleSlash:jn,CircleSlash2:F1,CircleSlash2Icon:F1,CircleSlashIcon:jn,CircleSlashed:F1,CircleSlashedIcon:F1,CircleStop:D1,CircleStopIcon:D1,CircleUser:R1,CircleUserIcon:R1,CircleUserRound:T1,CircleUserRoundIcon:T1,CircleX:$1,CircleXIcon:$1,CircuitBoard:Fn,CircuitBoardIcon:Fn,Citrus:Dn,CitrusIcon:Dn,Clapperboard:Tn,ClapperboardIcon:Tn,Clipboard:Nn,ClipboardCheck:Rn,ClipboardCheckIcon:Rn,ClipboardCopy:$n,ClipboardCopyIcon:$n,ClipboardEdit:O1,ClipboardEditIcon:O1,ClipboardIcon:Nn,ClipboardList:Un,ClipboardListIcon:Un,ClipboardMinus:On,ClipboardMinusIcon:On,ClipboardPaste:Zn,ClipboardPasteIcon:Zn,ClipboardPen:O1,ClipboardPenIcon:O1,ClipboardPenLine:U1,ClipboardPenLineIcon:U1,ClipboardPlus:Gn,ClipboardPlusIcon:Gn,ClipboardSignature:U1,ClipboardSignatureIcon:U1,ClipboardType:En,ClipboardTypeIcon:En,ClipboardX:Wn,ClipboardXIcon:Wn,Clock:hi,Clock1:Xn,Clock10:Kn,Clock10Icon:Kn,Clock11:Jn,Clock11Icon:Jn,Clock12:Qn,Clock12Icon:Qn,Clock1Icon:Xn,Clock2:Yn,Clock2Icon:Yn,Clock3:ei,Clock3Icon:ei,Clock4:ai,Clock4Icon:ai,Clock5:ti,Clock5Icon:ti,Clock6:ci,Clock6Icon:ci,Clock7:oi,Clock7Icon:oi,Clock8:ni,Clock8Icon:ni,Clock9:ii,Clock9Icon:ii,ClockIcon:hi,Cloud:xi,CloudCog:di,CloudCogIcon:di,CloudDownload:Z1,CloudDownloadIcon:Z1,CloudDrizzle:ri,CloudDrizzleIcon:ri,CloudFog:yi,CloudFogIcon:yi,CloudHail:li,CloudHailIcon:li,CloudIcon:xi,CloudLightning:pi,CloudLightningIcon:pi,CloudMoon:si,CloudMoonIcon:si,CloudMoonRain:ki,CloudMoonRainIcon:ki,CloudOff:ui,CloudOffIcon:ui,CloudRain:vi,CloudRainIcon:vi,CloudRainWind:Mi,CloudRainWindIcon:Mi,CloudSnow:Ii,CloudSnowIcon:Ii,CloudSun:gi,CloudSunIcon:gi,CloudSunRain:mi,CloudSunRainIcon:mi,CloudUpload:G1,CloudUploadIcon:G1,Cloudy:fi,CloudyIcon:fi,Clover:Li,CloverIcon:Li,Club:wi,ClubIcon:wi,Code:Ci,Code2:E1,Code2Icon:E1,CodeIcon:Ci,CodeSquare:r2,CodeSquareIcon:r2,CodeXml:E1,CodeXmlIcon:E1,Codepen:bi,CodepenIcon:bi,Codesandbox:Si,CodesandboxIcon:Si,Coffee:qi,CoffeeIcon:qi,Cog:Hi,CogIcon:Hi,Coins:Ai,CoinsIcon:Ai,Columns:W1,Columns2:W1,Columns2Icon:W1,Columns3:N1,Columns3Icon:N1,Columns4:Vi,Columns4Icon:Vi,ColumnsIcon:W1,Combine:zi,CombineIcon:zi,Command:Pi,CommandIcon:Pi,Compass:_i,CompassIcon:_i,Component:ji,ComponentIcon:ji,Computer:Bi,ComputerIcon:Bi,ConciergeBell:Fi,ConciergeBellIcon:Fi,Cone:Di,ConeIcon:Di,Construction:Ti,ConstructionIcon:Ti,Contact:Ri,Contact2:X1,Contact2Icon:X1,ContactIcon:Ri,ContactRound:X1,ContactRoundIcon:X1,Container:$i,ContainerIcon:$i,Contrast:Ui,ContrastIcon:Ui,Cookie:Oi,CookieIcon:Oi,CookingPot:Zi,CookingPotIcon:Zi,Copy:Ki,CopyCheck:Gi,CopyCheckIcon:Gi,CopyIcon:Ki,CopyMinus:Ei,CopyMinusIcon:Ei,CopyPlus:Wi,CopyPlusIcon:Wi,CopySlash:Ni,CopySlashIcon:Ni,CopyX:Xi,CopyXIcon:Xi,Copyleft:Ji,CopyleftIcon:Ji,Copyright:Qi,CopyrightIcon:Qi,CornerDownLeft:Yi,CornerDownLeftIcon:Yi,CornerDownRight:eh,CornerDownRightIcon:eh,CornerLeftDown:ah,CornerLeftDownIcon:ah,CornerLeftUp:th,CornerLeftUpIcon:th,CornerRightDown:ch,CornerRightDownIcon:ch,CornerRightUp:oh,CornerRightUpIcon:oh,CornerUpLeft:nh,CornerUpLeftIcon:nh,CornerUpRight:ih,CornerUpRightIcon:ih,Cpu:hh,CpuIcon:hh,CreativeCommons:dh,CreativeCommonsIcon:dh,CreditCard:rh,CreditCardIcon:rh,Croissant:yh,CroissantIcon:yh,Crop:lh,CropIcon:lh,Cross:ph,CrossIcon:ph,Crosshair:kh,CrosshairIcon:kh,Crown:sh,CrownIcon:sh,Cuboid:uh,CuboidIcon:uh,CupSoda:Mh,CupSodaIcon:Mh,CurlyBraces:r1,CurlyBracesIcon:r1,Currency:vh,CurrencyIcon:vh,Cylinder:Ih,CylinderIcon:Ih,Database:xh,DatabaseBackup:mh,DatabaseBackupIcon:mh,DatabaseIcon:xh,DatabaseZap:gh,DatabaseZapIcon:gh,Delete:fh,DeleteIcon:fh,Dessert:Lh,DessertIcon:Lh,Diameter:wh,DiameterIcon:wh,Diamond:Sh,DiamondIcon:Sh,DiamondMinus:Ch,DiamondMinusIcon:Ch,DiamondPercent:K1,DiamondPercentIcon:K1,DiamondPlus:bh,DiamondPlusIcon:bh,Dice1:qh,Dice1Icon:qh,Dice2:Hh,Dice2Icon:Hh,Dice3:Ah,Dice3Icon:Ah,Dice4:Vh,Dice4Icon:Vh,Dice5:zh,Dice5Icon:zh,Dice6:Ph,Dice6Icon:Ph,Dices:_h,DicesIcon:_h,Diff:jh,DiffIcon:jh,Disc:Th,Disc2:Bh,Disc2Icon:Bh,Disc3:Fh,Disc3Icon:Fh,DiscAlbum:Dh,DiscAlbumIcon:Dh,DiscIcon:Th,Divide:Rh,DivideCircle:b1,DivideCircleIcon:b1,DivideIcon:Rh,DivideSquare:p2,DivideSquareIcon:p2,Dna:Uh,DnaIcon:Uh,DnaOff:$h,DnaOffIcon:$h,Dock:Oh,DockIcon:Oh,Dog:Zh,DogIcon:Zh,DollarSign:Gh,DollarSignIcon:Gh,Donut:Eh,DonutIcon:Eh,DoorClosed:Wh,DoorClosedIcon:Wh,DoorOpen:Nh,DoorOpenIcon:Nh,Dot:Xh,DotIcon:Xh,DotSquare:k2,DotSquareIcon:k2,Download:Kh,DownloadCloud:Z1,DownloadCloudIcon:Z1,DownloadIcon:Kh,DraftingCompass:Jh,DraftingCompassIcon:Jh,Drama:Qh,DramaIcon:Qh,Dribbble:Yh,DribbbleIcon:Yh,Drill:ed,DrillIcon:ed,Droplet:ad,DropletIcon:ad,Droplets:td,DropletsIcon:td,Drum:cd,DrumIcon:cd,Drumstick:od,DrumstickIcon:od,Dumbbell:nd,DumbbellIcon:nd,Ear:hd,EarIcon:hd,EarOff:id,EarOffIcon:id,Earth:J1,EarthIcon:J1,EarthLock:dd,EarthLockIcon:dd,Eclipse:rd,EclipseIcon:rd,Edit:D,Edit2:ze,Edit2Icon:ze,Edit3:Ve,Edit3Icon:Ve,EditIcon:D,Egg:pd,EggFried:yd,EggFriedIcon:yd,EggIcon:pd,EggOff:ld,EggOffIcon:ld,Ellipsis:Y1,EllipsisIcon:Y1,EllipsisVertical:Q1,EllipsisVerticalIcon:Q1,Equal:sd,EqualIcon:sd,EqualNot:kd,EqualNotIcon:kd,EqualSquare:s2,EqualSquareIcon:s2,Eraser:ud,EraserIcon:ud,Euro:Md,EuroIcon:Md,Expand:vd,ExpandIcon:vd,ExternalLink:Id,ExternalLinkIcon:Id,Eye:gd,EyeIcon:gd,EyeOff:md,EyeOffIcon:md,Facebook:xd,FacebookIcon:xd,Factory:fd,FactoryIcon:fd,Fan:Ld,FanIcon:Ld,FastForward:wd,FastForwardIcon:wd,Feather:Cd,FeatherIcon:Cd,Fence:bd,FenceIcon:bd,FerrisWheel:Sd,FerrisWheelIcon:Sd,Figma:qd,FigmaIcon:qd,File:qr,FileArchive:Hd,FileArchiveIcon:Hd,FileAudio:Vd,FileAudio2:Ad,FileAudio2Icon:Ad,FileAudioIcon:Vd,FileAxis3D:ee,FileAxis3DIcon:ee,FileAxis3d:ee,FileAxis3dIcon:ee,FileBadge:Pd,FileBadge2:zd,FileBadge2Icon:zd,FileBadgeIcon:Pd,FileBarChart:jd,FileBarChart2:_d,FileBarChart2Icon:_d,FileBarChartIcon:jd,FileBox:Bd,FileBoxIcon:Bd,FileCheck:Dd,FileCheck2:Fd,FileCheck2Icon:Fd,FileCheckIcon:Dd,FileClock:Td,FileClockIcon:Td,FileCode:$d,FileCode2:Rd,FileCode2Icon:Rd,FileCodeIcon:$d,FileCog:ae,FileCog2:ae,FileCog2Icon:ae,FileCogIcon:ae,FileDiff:Ud,FileDiffIcon:Ud,FileDigit:Od,FileDigitIcon:Od,FileDown:Zd,FileDownIcon:Zd,FileEdit:ce,FileEditIcon:ce,FileHeart:Gd,FileHeartIcon:Gd,FileIcon:qr,FileImage:Ed,FileImageIcon:Ed,FileInput:Wd,FileInputIcon:Wd,FileJson:Xd,FileJson2:Nd,FileJson2Icon:Nd,FileJsonIcon:Xd,FileKey:Jd,FileKey2:Kd,FileKey2Icon:Kd,FileKeyIcon:Jd,FileLineChart:Qd,FileLineChartIcon:Qd,FileLock:er,FileLock2:Yd,FileLock2Icon:Yd,FileLockIcon:er,FileMinus:tr,FileMinus2:ar,FileMinus2Icon:ar,FileMinusIcon:tr,FileMusic:cr,FileMusicIcon:cr,FileOutput:or,FileOutputIcon:or,FilePen:ce,FilePenIcon:ce,FilePenLine:te,FilePenLineIcon:te,FilePieChart:nr,FilePieChartIcon:nr,FilePlus:hr,FilePlus2:ir,FilePlus2Icon:ir,FilePlusIcon:hr,FileQuestion:dr,FileQuestionIcon:dr,FileScan:rr,FileScanIcon:rr,FileSearch:lr,FileSearch2:yr,FileSearch2Icon:yr,FileSearchIcon:lr,FileSignature:te,FileSignatureIcon:te,FileSliders:pr,FileSlidersIcon:pr,FileSpreadsheet:kr,FileSpreadsheetIcon:kr,FileStack:sr,FileStackIcon:sr,FileSymlink:ur,FileSymlinkIcon:ur,FileTerminal:Mr,FileTerminalIcon:Mr,FileText:vr,FileTextIcon:vr,FileType:mr,FileType2:Ir,FileType2Icon:Ir,FileTypeIcon:mr,FileUp:gr,FileUpIcon:gr,FileVideo:fr,FileVideo2:xr,FileVideo2Icon:xr,FileVideoIcon:fr,FileVolume:wr,FileVolume2:Lr,FileVolume2Icon:Lr,FileVolumeIcon:wr,FileWarning:Cr,FileWarningIcon:Cr,FileX:Sr,FileX2:br,FileX2Icon:br,FileXIcon:Sr,Files:Hr,FilesIcon:Hr,Film:Ar,FilmIcon:Ar,Filter:zr,FilterIcon:zr,FilterX:Vr,FilterXIcon:Vr,Fingerprint:Pr,FingerprintIcon:Pr,FireExtinguisher:_r,FireExtinguisherIcon:_r,Fish:Fr,FishIcon:Fr,FishOff:jr,FishOffIcon:jr,FishSymbol:Br,FishSymbolIcon:Br,Flag:$r,FlagIcon:$r,FlagOff:Dr,FlagOffIcon:Dr,FlagTriangleLeft:Tr,FlagTriangleLeftIcon:Tr,FlagTriangleRight:Rr,FlagTriangleRightIcon:Rr,Flame:Or,FlameIcon:Or,FlameKindling:Ur,FlameKindlingIcon:Ur,Flashlight:Gr,FlashlightIcon:Gr,FlashlightOff:Zr,FlashlightOffIcon:Zr,FlaskConical:Wr,FlaskConicalIcon:Wr,FlaskConicalOff:Er,FlaskConicalOffIcon:Er,FlaskRound:Nr,FlaskRoundIcon:Nr,FlipHorizontal:Kr,FlipHorizontal2:Xr,FlipHorizontal2Icon:Xr,FlipHorizontalIcon:Kr,FlipVertical:Qr,FlipVertical2:Jr,FlipVertical2Icon:Jr,FlipVerticalIcon:Qr,Flower:ey,Flower2:Yr,Flower2Icon:Yr,FlowerIcon:ey,Focus:ay,FocusIcon:ay,FoldHorizontal:ty,FoldHorizontalIcon:ty,FoldVertical:cy,FoldVerticalIcon:cy,Folder:Ay,FolderArchive:oy,FolderArchiveIcon:oy,FolderCheck:ny,FolderCheckIcon:ny,FolderClock:iy,FolderClockIcon:iy,FolderClosed:hy,FolderClosedIcon:hy,FolderCog:oe,FolderCog2:oe,FolderCog2Icon:oe,FolderCogIcon:oe,FolderDot:dy,FolderDotIcon:dy,FolderDown:ry,FolderDownIcon:ry,FolderEdit:ne,FolderEditIcon:ne,FolderGit:ly,FolderGit2:yy,FolderGit2Icon:yy,FolderGitIcon:ly,FolderHeart:py,FolderHeartIcon:py,FolderIcon:Ay,FolderInput:ky,FolderInputIcon:ky,FolderKanban:sy,FolderKanbanIcon:sy,FolderKey:uy,FolderKeyIcon:uy,FolderLock:My,FolderLockIcon:My,FolderMinus:vy,FolderMinusIcon:vy,FolderOpen:my,FolderOpenDot:Iy,FolderOpenDotIcon:Iy,FolderOpenIcon:my,FolderOutput:gy,FolderOutputIcon:gy,FolderPen:ne,FolderPenIcon:ne,FolderPlus:xy,FolderPlusIcon:xy,FolderRoot:fy,FolderRootIcon:fy,FolderSearch:wy,FolderSearch2:Ly,FolderSearch2Icon:Ly,FolderSearchIcon:wy,FolderSymlink:Cy,FolderSymlinkIcon:Cy,FolderSync:by,FolderSyncIcon:by,FolderTree:Sy,FolderTreeIcon:Sy,FolderUp:qy,FolderUpIcon:qy,FolderX:Hy,FolderXIcon:Hy,Folders:Vy,FoldersIcon:Vy,Footprints:zy,FootprintsIcon:zy,Forklift:Py,ForkliftIcon:Py,FormInput:Pe,FormInputIcon:Pe,Forward:_y,ForwardIcon:_y,Frame:jy,FrameIcon:jy,Framer:By,FramerIcon:By,Frown:Fy,FrownIcon:Fy,Fuel:Dy,FuelIcon:Dy,Fullscreen:Ty,FullscreenIcon:Ty,FunctionSquare:u2,FunctionSquareIcon:u2,GalleryHorizontal:$y,GalleryHorizontalEnd:Ry,GalleryHorizontalEndIcon:Ry,GalleryHorizontalIcon:$y,GalleryThumbnails:Uy,GalleryThumbnailsIcon:Uy,GalleryVertical:Zy,GalleryVerticalEnd:Oy,GalleryVerticalEndIcon:Oy,GalleryVerticalIcon:Zy,Gamepad:Ey,Gamepad2:Gy,Gamepad2Icon:Gy,GamepadIcon:Ey,GanttChart:Wy,GanttChartIcon:Wy,GanttChartSquare:M2,GanttChartSquareIcon:M2,Gauge:Ny,GaugeCircle:S1,GaugeCircleIcon:S1,GaugeIcon:Ny,Gavel:Xy,GavelIcon:Xy,Gem:Ky,GemIcon:Ky,Ghost:Jy,GhostIcon:Jy,Gift:Qy,GiftIcon:Qy,GitBranch:el,GitBranchIcon:el,GitBranchPlus:Yy,GitBranchPlusIcon:Yy,GitCommit:ie,GitCommitHorizontal:ie,GitCommitHorizontalIcon:ie,GitCommitIcon:ie,GitCommitVertical:al,GitCommitVerticalIcon:al,GitCompare:cl,GitCompareArrows:tl,GitCompareArrowsIcon:tl,GitCompareIcon:cl,GitFork:ol,GitForkIcon:ol,GitGraph:nl,GitGraphIcon:nl,GitMerge:il,GitMergeIcon:il,GitPullRequest:pl,GitPullRequestArrow:hl,GitPullRequestArrowIcon:hl,GitPullRequestClosed:dl,GitPullRequestClosedIcon:dl,GitPullRequestCreate:yl,GitPullRequestCreateArrow:rl,GitPullRequestCreateArrowIcon:rl,GitPullRequestCreateIcon:yl,GitPullRequestDraft:ll,GitPullRequestDraftIcon:ll,GitPullRequestIcon:pl,Github:kl,GithubIcon:kl,Gitlab:sl,GitlabIcon:sl,GlassWater:ul,GlassWaterIcon:ul,Glasses:Ml,GlassesIcon:Ml,Globe:Il,Globe2:J1,Globe2Icon:J1,GlobeIcon:Il,GlobeLock:vl,GlobeLockIcon:vl,Goal:ml,GoalIcon:ml,Grab:gl,GrabIcon:gl,GraduationCap:xl,GraduationCapIcon:xl,Grape:fl,GrapeIcon:fl,Grid:$,Grid2X2:he,Grid2X2Icon:he,Grid2x2:he,Grid2x2Check:Ll,Grid2x2CheckIcon:Ll,Grid2x2Icon:he,Grid2x2X:wl,Grid2x2XIcon:wl,Grid3X3:$,Grid3X3Icon:$,Grid3x3:$,Grid3x3Icon:$,GridIcon:$,Grip:Sl,GripHorizontal:Cl,GripHorizontalIcon:Cl,GripIcon:Sl,GripVertical:bl,GripVerticalIcon:bl,Group:ql,GroupIcon:ql,Guitar:Hl,GuitarIcon:Hl,Ham:Al,HamIcon:Al,Hammer:Vl,HammerIcon:Vl,Hand:Bl,HandCoins:zl,HandCoinsIcon:zl,HandHeart:Pl,HandHeartIcon:Pl,HandHelping:de,HandHelpingIcon:de,HandIcon:Bl,HandMetal:_l,HandMetalIcon:_l,HandPlatter:jl,HandPlatterIcon:jl,Handshake:Fl,HandshakeIcon:Fl,HardDrive:Rl,HardDriveDownload:Dl,HardDriveDownloadIcon:Dl,HardDriveIcon:Rl,HardDriveUpload:Tl,HardDriveUploadIcon:Tl,HardHat:$l,HardHatIcon:$l,Hash:Ul,HashIcon:Ul,Haze:Ol,HazeIcon:Ol,HdmiPort:Zl,HdmiPortIcon:Zl,Heading:Jl,Heading1:Gl,Heading1Icon:Gl,Heading2:El,Heading2Icon:El,Heading3:Wl,Heading3Icon:Wl,Heading4:Nl,Heading4Icon:Nl,Heading5:Xl,Heading5Icon:Xl,Heading6:Kl,Heading6Icon:Kl,HeadingIcon:Jl,Headphones:Ql,HeadphonesIcon:Ql,Headset:Yl,HeadsetIcon:Yl,Heart:op,HeartCrack:ep,HeartCrackIcon:ep,HeartHandshake:ap,HeartHandshakeIcon:ap,HeartIcon:op,HeartOff:tp,HeartOffIcon:tp,HeartPulse:cp,HeartPulseIcon:cp,Heater:np,HeaterIcon:np,HelpCircle:q1,HelpCircleIcon:q1,HelpingHand:de,HelpingHandIcon:de,Hexagon:ip,HexagonIcon:ip,Highlighter:hp,HighlighterIcon:hp,History:dp,HistoryIcon:dp,Home:rp,HomeIcon:rp,Hop:lp,HopIcon:lp,HopOff:yp,HopOffIcon:yp,Hospital:pp,HospitalIcon:pp,Hotel:kp,HotelIcon:kp,Hourglass:sp,HourglassIcon:sp,IceCream:ye,IceCream2:re,IceCream2Icon:re,IceCreamBowl:re,IceCreamBowlIcon:re,IceCreamCone:ye,IceCreamConeIcon:ye,IceCreamIcon:ye,Icon:aI,Image:xp,ImageDown:up,ImageDownIcon:up,ImageIcon:xp,ImageMinus:Mp,ImageMinusIcon:Mp,ImageOff:vp,ImageOffIcon:vp,ImagePlay:Ip,ImagePlayIcon:Ip,ImagePlus:mp,ImagePlusIcon:mp,ImageUp:gp,ImageUpIcon:gp,Images:fp,ImagesIcon:fp,Import:Lp,ImportIcon:Lp,Inbox:wp,InboxIcon:wp,Indent:pe,IndentDecrease:le,IndentDecreaseIcon:le,IndentIcon:pe,IndentIncrease:pe,IndentIncreaseIcon:pe,IndianRupee:Cp,IndianRupeeIcon:Cp,Infinity:bp,InfinityIcon:bp,Info:Sp,InfoIcon:Sp,Inspect:f2,InspectIcon:f2,InspectionPanel:qp,InspectionPanelIcon:qp,Instagram:Hp,InstagramIcon:Hp,Italic:Ap,ItalicIcon:Ap,IterationCcw:Vp,IterationCcwIcon:Vp,IterationCw:zp,IterationCwIcon:zp,JapaneseYen:Pp,JapaneseYenIcon:Pp,Joystick:_p,JoystickIcon:_p,Kanban:jp,KanbanIcon:jp,KanbanSquare:v2,KanbanSquareDashed:y2,KanbanSquareDashedIcon:y2,KanbanSquareIcon:v2,Key:Dp,KeyIcon:Dp,KeyRound:Bp,KeyRoundIcon:Bp,KeySquare:Fp,KeySquareIcon:Fp,Keyboard:$p,KeyboardIcon:$p,KeyboardMusic:Tp,KeyboardMusicIcon:Tp,KeyboardOff:Rp,KeyboardOffIcon:Rp,Lamp:Wp,LampCeiling:Up,LampCeilingIcon:Up,LampDesk:Op,LampDeskIcon:Op,LampFloor:Zp,LampFloorIcon:Zp,LampIcon:Wp,LampWallDown:Gp,LampWallDownIcon:Gp,LampWallUp:Ep,LampWallUpIcon:Ep,LandPlot:Np,LandPlotIcon:Np,Landmark:Xp,LandmarkIcon:Xp,Languages:Kp,LanguagesIcon:Kp,Laptop:Jp,Laptop2:ke,Laptop2Icon:ke,LaptopIcon:Jp,LaptopMinimal:ke,LaptopMinimalIcon:ke,Lasso:Yp,LassoIcon:Yp,LassoSelect:Qp,LassoSelectIcon:Qp,Laugh:ek,LaughIcon:ek,Layers:ck,Layers2:ak,Layers2Icon:ak,Layers3:tk,Layers3Icon:tk,LayersIcon:ck,Layout:Ae,LayoutDashboard:ok,LayoutDashboardIcon:ok,LayoutGrid:nk,LayoutGridIcon:nk,LayoutIcon:Ae,LayoutList:ik,LayoutListIcon:ik,LayoutPanelLeft:hk,LayoutPanelLeftIcon:hk,LayoutPanelTop:dk,LayoutPanelTopIcon:dk,LayoutTemplate:rk,LayoutTemplateIcon:rk,Leaf:yk,LeafIcon:yk,LeafyGreen:lk,LeafyGreenIcon:lk,Lectern:pk,LecternIcon:pk,Library:sk,LibraryBig:kk,LibraryBigIcon:kk,LibraryIcon:sk,LibrarySquare:I2,LibrarySquareIcon:I2,LifeBuoy:uk,LifeBuoyIcon:uk,Ligature:Mk,LigatureIcon:Mk,Lightbulb:Ik,LightbulbIcon:Ik,LightbulbOff:vk,LightbulbOffIcon:vk,LineChart:mk,LineChartIcon:mk,Link:fk,Link2:xk,Link2Icon:xk,Link2Off:gk,Link2OffIcon:gk,LinkIcon:fk,Linkedin:Lk,LinkedinIcon:Lk,List:Dk,ListChecks:wk,ListChecksIcon:wk,ListCollapse:Ck,ListCollapseIcon:Ck,ListEnd:bk,ListEndIcon:bk,ListFilter:Sk,ListFilterIcon:Sk,ListIcon:Dk,ListMinus:qk,ListMinusIcon:qk,ListMusic:Hk,ListMusicIcon:Hk,ListOrdered:Ak,ListOrderedIcon:Ak,ListPlus:Vk,ListPlusIcon:Vk,ListRestart:zk,ListRestartIcon:zk,ListStart:Pk,ListStartIcon:Pk,ListTodo:_k,ListTodoIcon:_k,ListTree:jk,ListTreeIcon:jk,ListVideo:Bk,ListVideoIcon:Bk,ListX:Fk,ListXIcon:Fk,Loader:Rk,Loader2:se,Loader2Icon:se,LoaderCircle:se,LoaderCircleIcon:se,LoaderIcon:Rk,LoaderPinwheel:Tk,LoaderPinwheelIcon:Tk,Locate:Ok,LocateFixed:$k,LocateFixedIcon:$k,LocateIcon:Ok,LocateOff:Uk,LocateOffIcon:Uk,Lock:Gk,LockIcon:Gk,LockKeyhole:Zk,LockKeyholeIcon:Zk,LockKeyholeOpen:ue,LockKeyholeOpenIcon:ue,LockOpen:Me,LockOpenIcon:Me,LogIn:Ek,LogInIcon:Ek,LogOut:Wk,LogOutIcon:Wk,Lollipop:Nk,LollipopIcon:Nk,LucideAArrowDown:ra,LucideAArrowUp:ya,LucideALargeSmall:la,LucideAccessibility:pa,LucideActivity:ka,LucideActivitySquare:Ue,LucideAirVent:sa,LucideAirplay:ua,LucideAlarmCheck:X,LucideAlarmClock:va,LucideAlarmClockCheck:X,LucideAlarmClockMinus:K,LucideAlarmClockOff:Ma,LucideAlarmClockPlus:J,LucideAlarmMinus:K,LucideAlarmPlus:J,LucideAlarmSmoke:Ia,LucideAlbum:ma,LucideAlertCircle:l1,LucideAlertOctagon:me,LucideAlertTriangle:Z2,LucideAlignCenter:fa,LucideAlignCenterHorizontal:ga,LucideAlignCenterVertical:xa,LucideAlignEndHorizontal:La,LucideAlignEndVertical:wa,LucideAlignHorizontalDistributeCenter:Ca,LucideAlignHorizontalDistributeEnd:ba,LucideAlignHorizontalDistributeStart:Sa,LucideAlignHorizontalJustifyCenter:qa,LucideAlignHorizontalJustifyEnd:Ha,LucideAlignHorizontalJustifyStart:Aa,LucideAlignHorizontalSpaceAround:Va,LucideAlignHorizontalSpaceBetween:za,LucideAlignJustify:Pa,LucideAlignLeft:_a,LucideAlignRight:ja,LucideAlignStartHorizontal:Ba,LucideAlignStartVertical:Fa,LucideAlignVerticalDistributeCenter:Da,LucideAlignVerticalDistributeEnd:Ta,LucideAlignVerticalDistributeStart:Ra,LucideAlignVerticalJustifyCenter:$a,LucideAlignVerticalJustifyEnd:Ua,LucideAlignVerticalJustifyStart:Oa,LucideAlignVerticalSpaceAround:Za,LucideAlignVerticalSpaceBetween:Ga,LucideAmbulance:Ea,LucideAmpersand:Wa,LucideAmpersands:Na,LucideAnchor:Xa,LucideAngry:Ka,LucideAnnoyed:Ja,LucideAntenna:Qa,LucideAnvil:Ya,LucideAperture:et,LucideAppWindow:tt,LucideAppWindowMac:at,LucideApple:ct,LucideArchive:it,LucideArchiveRestore:ot,LucideArchiveX:nt,LucideAreaChart:ht,LucideArmchair:dt,LucideArrowBigDown:yt,LucideArrowBigDownDash:rt,LucideArrowBigLeft:pt,LucideArrowBigLeftDash:lt,LucideArrowBigRight:st,LucideArrowBigRightDash:kt,LucideArrowBigUp:Mt,LucideArrowBigUpDash:ut,LucideArrowDown:bt,LucideArrowDown01:vt,LucideArrowDown10:It,LucideArrowDownAZ:Q,LucideArrowDownAz:Q,LucideArrowDownCircle:p1,LucideArrowDownFromLine:mt,LucideArrowDownLeft:gt,LucideArrowDownLeftFromCircle:s1,LucideArrowDownLeftFromSquare:We,LucideArrowDownLeftSquare:Oe,LucideArrowDownNarrowWide:xt,LucideArrowDownRight:ft,LucideArrowDownRightFromCircle:u1,LucideArrowDownRightFromSquare:Ne,LucideArrowDownRightSquare:Ze,LucideArrowDownSquare:Ge,LucideArrowDownToDot:Lt,LucideArrowDownToLine:wt,LucideArrowDownUp:Ct,LucideArrowDownWideNarrow:Y,LucideArrowDownZA:e1,LucideArrowDownZa:e1,LucideArrowLeft:At,LucideArrowLeftCircle:k1,LucideArrowLeftFromLine:St,LucideArrowLeftRight:qt,LucideArrowLeftSquare:Ee,LucideArrowLeftToLine:Ht,LucideArrowRight:_t,LucideArrowRightCircle:I1,LucideArrowRightFromLine:Vt,LucideArrowRightLeft:zt,LucideArrowRightSquare:Je,LucideArrowRightToLine:Pt,LucideArrowUp:Zt,LucideArrowUp01:jt,LucideArrowUp10:Bt,LucideArrowUpAZ:a1,LucideArrowUpAz:a1,LucideArrowUpCircle:m1,LucideArrowUpDown:Ft,LucideArrowUpFromDot:Dt,LucideArrowUpFromLine:Tt,LucideArrowUpLeft:Rt,LucideArrowUpLeftFromCircle:M1,LucideArrowUpLeftFromSquare:Xe,LucideArrowUpLeftSquare:Qe,LucideArrowUpNarrowWide:t1,LucideArrowUpRight:$t,LucideArrowUpRightFromCircle:v1,LucideArrowUpRightFromSquare:Ke,LucideArrowUpRightSquare:Ye,LucideArrowUpSquare:e2,LucideArrowUpToLine:Ut,LucideArrowUpWideNarrow:Ot,LucideArrowUpZA:c1,LucideArrowUpZa:c1,LucideArrowsUpFromLine:Gt,LucideAsterisk:Et,LucideAsteriskSquare:a2,LucideAtSign:Wt,LucideAtom:Nt,LucideAudioLines:Xt,LucideAudioWaveform:Kt,LucideAward:Jt,LucideAxe:Qt,LucideAxis3D:o1,LucideAxis3d:o1,LucideBaby:Yt,LucideBackpack:ec,LucideBadge:Mc,LucideBadgeAlert:ac,LucideBadgeCent:tc,LucideBadgeCheck:n1,LucideBadgeDollarSign:cc,LucideBadgeEuro:oc,LucideBadgeHelp:nc,LucideBadgeIndianRupee:ic,LucideBadgeInfo:hc,LucideBadgeJapaneseYen:dc,LucideBadgeMinus:rc,LucideBadgePercent:yc,LucideBadgePlus:lc,LucideBadgePoundSterling:pc,LucideBadgeRussianRuble:kc,LucideBadgeSwissFranc:sc,LucideBadgeX:uc,LucideBaggageClaim:vc,LucideBan:Ic,LucideBanana:mc,LucideBanknote:gc,LucideBarChart:Sc,LucideBarChart2:xc,LucideBarChart3:fc,LucideBarChart4:Lc,LucideBarChartBig:wc,LucideBarChartHorizontal:bc,LucideBarChartHorizontalBig:Cc,LucideBarcode:qc,LucideBaseline:Hc,LucideBath:Ac,LucideBattery:Bc,LucideBatteryCharging:Vc,LucideBatteryFull:zc,LucideBatteryLow:Pc,LucideBatteryMedium:_c,LucideBatteryWarning:jc,LucideBeaker:Fc,LucideBean:Tc,LucideBeanOff:Dc,LucideBed:Uc,LucideBedDouble:Rc,LucideBedSingle:$c,LucideBeef:Oc,LucideBeer:Gc,LucideBeerOff:Zc,LucideBell:Qc,LucideBellDot:Ec,LucideBellElectric:Wc,LucideBellMinus:Nc,LucideBellOff:Xc,LucideBellPlus:Kc,LucideBellRing:Jc,LucideBetweenHorizonalEnd:i1,LucideBetweenHorizonalStart:h1,LucideBetweenHorizontalEnd:i1,LucideBetweenHorizontalStart:h1,LucideBetweenVerticalEnd:Yc,LucideBetweenVerticalStart:e0,LucideBike:a0,LucideBinary:t0,LucideBiohazard:c0,LucideBird:o0,LucideBitcoin:n0,LucideBlend:i0,LucideBlinds:h0,LucideBlocks:d0,LucideBluetooth:p0,LucideBluetoothConnected:r0,LucideBluetoothOff:y0,LucideBluetoothSearching:l0,LucideBold:k0,LucideBolt:s0,LucideBomb:u0,LucideBone:M0,LucideBook:T0,LucideBookA:v0,LucideBookAudio:I0,LucideBookCheck:m0,LucideBookCopy:g0,LucideBookDashed:d1,LucideBookDown:x0,LucideBookHeadphones:f0,LucideBookHeart:L0,LucideBookImage:w0,LucideBookKey:C0,LucideBookLock:b0,LucideBookMarked:S0,LucideBookMinus:q0,LucideBookOpen:V0,LucideBookOpenCheck:H0,LucideBookOpenText:A0,LucideBookPlus:z0,LucideBookTemplate:d1,LucideBookText:P0,LucideBookType:_0,LucideBookUp:B0,LucideBookUp2:j0,LucideBookUser:F0,LucideBookX:D0,LucideBookmark:Z0,LucideBookmarkCheck:R0,LucideBookmarkMinus:$0,LucideBookmarkPlus:U0,LucideBookmarkX:O0,LucideBoomBox:G0,LucideBot:N0,LucideBotMessageSquare:E0,LucideBotOff:W0,LucideBox:K0,LucideBoxSelect:X0,LucideBoxes:J0,LucideBraces:r1,LucideBrackets:Q0,LucideBrain:ao,LucideBrainCircuit:Y0,LucideBrainCog:eo,LucideBrickWall:to,LucideBriefcase:no,LucideBriefcaseBusiness:co,LucideBriefcaseMedical:oo,LucideBringToFront:io,LucideBrush:ho,LucideBug:lo,LucideBugOff:ro,LucideBugPlay:yo,LucideBuilding:ko,LucideBuilding2:po,LucideBus:uo,LucideBusFront:so,LucideCable:vo,LucideCableCar:Mo,LucideCake:mo,LucideCakeSlice:Io,LucideCalculator:go,LucideCalendar:Bo,LucideCalendarCheck:fo,LucideCalendarCheck2:xo,LucideCalendarClock:Lo,LucideCalendarDays:wo,LucideCalendarFold:Co,LucideCalendarHeart:bo,LucideCalendarMinus:qo,LucideCalendarMinus2:So,LucideCalendarOff:Ho,LucideCalendarPlus:Vo,LucideCalendarPlus2:Ao,LucideCalendarRange:zo,LucideCalendarSearch:Po,LucideCalendarX:jo,LucideCalendarX2:_o,LucideCamera:Do,LucideCameraOff:Fo,LucideCandlestickChart:To,LucideCandy:Uo,LucideCandyCane:Ro,LucideCandyOff:$o,LucideCannabis:Oo,LucideCaptions:y1,LucideCaptionsOff:Zo,LucideCar:Wo,LucideCarFront:Go,LucideCarTaxiFront:Eo,LucideCaravan:No,LucideCarrot:Xo,LucideCaseLower:Ko,LucideCaseSensitive:Jo,LucideCaseUpper:Qo,LucideCassetteTape:Yo,LucideCast:en,LucideCastle:an,LucideCat:tn,LucideCctv:cn,LucideCheck:nn,LucideCheckCheck:on,LucideCheckCircle:g1,LucideCheckCircle2:x1,LucideCheckSquare:c2,LucideCheckSquare2:o2,LucideChefHat:hn,LucideCherry:dn,LucideChevronDown:rn,LucideChevronDownCircle:f1,LucideChevronDownSquare:n2,LucideChevronFirst:yn,LucideChevronLast:ln,LucideChevronLeft:pn,LucideChevronLeftCircle:L1,LucideChevronLeftSquare:i2,LucideChevronRight:kn,LucideChevronRightCircle:w1,LucideChevronRightSquare:h2,LucideChevronUp:sn,LucideChevronUpCircle:C1,LucideChevronUpSquare:d2,LucideChevronsDown:Mn,LucideChevronsDownUp:un,LucideChevronsLeft:In,LucideChevronsLeftRight:vn,LucideChevronsRight:gn,LucideChevronsRightLeft:mn,LucideChevronsUp:fn,LucideChevronsUpDown:xn,LucideChrome:Ln,LucideChurch:wn,LucideCigarette:bn,LucideCigaretteOff:Cn,LucideCircle:Bn,LucideCircleAlert:l1,LucideCircleArrowDown:p1,LucideCircleArrowLeft:k1,LucideCircleArrowOutDownLeft:s1,LucideCircleArrowOutDownRight:u1,LucideCircleArrowOutUpLeft:M1,LucideCircleArrowOutUpRight:v1,LucideCircleArrowRight:I1,LucideCircleArrowUp:m1,LucideCircleCheck:x1,LucideCircleCheckBig:g1,LucideCircleChevronDown:f1,LucideCircleChevronLeft:L1,LucideCircleChevronRight:w1,LucideCircleChevronUp:C1,LucideCircleDashed:Sn,LucideCircleDivide:b1,LucideCircleDollarSign:qn,LucideCircleDot:An,LucideCircleDotDashed:Hn,LucideCircleEllipsis:Vn,LucideCircleEqual:zn,LucideCircleFadingPlus:Pn,LucideCircleGauge:S1,LucideCircleHelp:q1,LucideCircleMinus:H1,LucideCircleOff:_n,LucideCircleParking:V1,LucideCircleParkingOff:A1,LucideCirclePause:z1,LucideCirclePercent:P1,LucideCirclePlay:_1,LucideCirclePlus:j1,LucideCirclePower:B1,LucideCircleSlash:jn,LucideCircleSlash2:F1,LucideCircleSlashed:F1,LucideCircleStop:D1,LucideCircleUser:R1,LucideCircleUserRound:T1,LucideCircleX:$1,LucideCircuitBoard:Fn,LucideCitrus:Dn,LucideClapperboard:Tn,LucideClipboard:Nn,LucideClipboardCheck:Rn,LucideClipboardCopy:$n,LucideClipboardEdit:O1,LucideClipboardList:Un,LucideClipboardMinus:On,LucideClipboardPaste:Zn,LucideClipboardPen:O1,LucideClipboardPenLine:U1,LucideClipboardPlus:Gn,LucideClipboardSignature:U1,LucideClipboardType:En,LucideClipboardX:Wn,LucideClock:hi,LucideClock1:Xn,LucideClock10:Kn,LucideClock11:Jn,LucideClock12:Qn,LucideClock2:Yn,LucideClock3:ei,LucideClock4:ai,LucideClock5:ti,LucideClock6:ci,LucideClock7:oi,LucideClock8:ni,LucideClock9:ii,LucideCloud:xi,LucideCloudCog:di,LucideCloudDownload:Z1,LucideCloudDrizzle:ri,LucideCloudFog:yi,LucideCloudHail:li,LucideCloudLightning:pi,LucideCloudMoon:si,LucideCloudMoonRain:ki,LucideCloudOff:ui,LucideCloudRain:vi,LucideCloudRainWind:Mi,LucideCloudSnow:Ii,LucideCloudSun:gi,LucideCloudSunRain:mi,LucideCloudUpload:G1,LucideCloudy:fi,LucideClover:Li,LucideClub:wi,LucideCode:Ci,LucideCode2:E1,LucideCodeSquare:r2,LucideCodeXml:E1,LucideCodepen:bi,LucideCodesandbox:Si,LucideCoffee:qi,LucideCog:Hi,LucideCoins:Ai,LucideColumns:W1,LucideColumns2:W1,LucideColumns3:N1,LucideColumns4:Vi,LucideCombine:zi,LucideCommand:Pi,LucideCompass:_i,LucideComponent:ji,LucideComputer:Bi,LucideConciergeBell:Fi,LucideCone:Di,LucideConstruction:Ti,LucideContact:Ri,LucideContact2:X1,LucideContactRound:X1,LucideContainer:$i,LucideContrast:Ui,LucideCookie:Oi,LucideCookingPot:Zi,LucideCopy:Ki,LucideCopyCheck:Gi,LucideCopyMinus:Ei,LucideCopyPlus:Wi,LucideCopySlash:Ni,LucideCopyX:Xi,LucideCopyleft:Ji,LucideCopyright:Qi,LucideCornerDownLeft:Yi,LucideCornerDownRight:eh,LucideCornerLeftDown:ah,LucideCornerLeftUp:th,LucideCornerRightDown:ch,LucideCornerRightUp:oh,LucideCornerUpLeft:nh,LucideCornerUpRight:ih,LucideCpu:hh,LucideCreativeCommons:dh,LucideCreditCard:rh,LucideCroissant:yh,LucideCrop:lh,LucideCross:ph,LucideCrosshair:kh,LucideCrown:sh,LucideCuboid:uh,LucideCupSoda:Mh,LucideCurlyBraces:r1,LucideCurrency:vh,LucideCylinder:Ih,LucideDatabase:xh,LucideDatabaseBackup:mh,LucideDatabaseZap:gh,LucideDelete:fh,LucideDessert:Lh,LucideDiameter:wh,LucideDiamond:Sh,LucideDiamondMinus:Ch,LucideDiamondPercent:K1,LucideDiamondPlus:bh,LucideDice1:qh,LucideDice2:Hh,LucideDice3:Ah,LucideDice4:Vh,LucideDice5:zh,LucideDice6:Ph,LucideDices:_h,LucideDiff:jh,LucideDisc:Th,LucideDisc2:Bh,LucideDisc3:Fh,LucideDiscAlbum:Dh,LucideDivide:Rh,LucideDivideCircle:b1,LucideDivideSquare:p2,LucideDna:Uh,LucideDnaOff:$h,LucideDock:Oh,LucideDog:Zh,LucideDollarSign:Gh,LucideDonut:Eh,LucideDoorClosed:Wh,LucideDoorOpen:Nh,LucideDot:Xh,LucideDotSquare:k2,LucideDownload:Kh,LucideDownloadCloud:Z1,LucideDraftingCompass:Jh,LucideDrama:Qh,LucideDribbble:Yh,LucideDrill:ed,LucideDroplet:ad,LucideDroplets:td,LucideDrum:cd,LucideDrumstick:od,LucideDumbbell:nd,LucideEar:hd,LucideEarOff:id,LucideEarth:J1,LucideEarthLock:dd,LucideEclipse:rd,LucideEdit:D,LucideEdit2:ze,LucideEdit3:Ve,LucideEgg:pd,LucideEggFried:yd,LucideEggOff:ld,LucideEllipsis:Y1,LucideEllipsisVertical:Q1,LucideEqual:sd,LucideEqualNot:kd,LucideEqualSquare:s2,LucideEraser:ud,LucideEuro:Md,LucideExpand:vd,LucideExternalLink:Id,LucideEye:gd,LucideEyeOff:md,LucideFacebook:xd,LucideFactory:fd,LucideFan:Ld,LucideFastForward:wd,LucideFeather:Cd,LucideFence:bd,LucideFerrisWheel:Sd,LucideFigma:qd,LucideFile:qr,LucideFileArchive:Hd,LucideFileAudio:Vd,LucideFileAudio2:Ad,LucideFileAxis3D:ee,LucideFileAxis3d:ee,LucideFileBadge:Pd,LucideFileBadge2:zd,LucideFileBarChart:jd,LucideFileBarChart2:_d,LucideFileBox:Bd,LucideFileCheck:Dd,LucideFileCheck2:Fd,LucideFileClock:Td,LucideFileCode:$d,LucideFileCode2:Rd,LucideFileCog:ae,LucideFileCog2:ae,LucideFileDiff:Ud,LucideFileDigit:Od,LucideFileDown:Zd,LucideFileEdit:ce,LucideFileHeart:Gd,LucideFileImage:Ed,LucideFileInput:Wd,LucideFileJson:Xd,LucideFileJson2:Nd,LucideFileKey:Jd,LucideFileKey2:Kd,LucideFileLineChart:Qd,LucideFileLock:er,LucideFileLock2:Yd,LucideFileMinus:tr,LucideFileMinus2:ar,LucideFileMusic:cr,LucideFileOutput:or,LucideFilePen:ce,LucideFilePenLine:te,LucideFilePieChart:nr,LucideFilePlus:hr,LucideFilePlus2:ir,LucideFileQuestion:dr,LucideFileScan:rr,LucideFileSearch:lr,LucideFileSearch2:yr,LucideFileSignature:te,LucideFileSliders:pr,LucideFileSpreadsheet:kr,LucideFileStack:sr,LucideFileSymlink:ur,LucideFileTerminal:Mr,LucideFileText:vr,LucideFileType:mr,LucideFileType2:Ir,LucideFileUp:gr,LucideFileVideo:fr,LucideFileVideo2:xr,LucideFileVolume:wr,LucideFileVolume2:Lr,LucideFileWarning:Cr,LucideFileX:Sr,LucideFileX2:br,LucideFiles:Hr,LucideFilm:Ar,LucideFilter:zr,LucideFilterX:Vr,LucideFingerprint:Pr,LucideFireExtinguisher:_r,LucideFish:Fr,LucideFishOff:jr,LucideFishSymbol:Br,LucideFlag:$r,LucideFlagOff:Dr,LucideFlagTriangleLeft:Tr,LucideFlagTriangleRight:Rr,LucideFlame:Or,LucideFlameKindling:Ur,LucideFlashlight:Gr,LucideFlashlightOff:Zr,LucideFlaskConical:Wr,LucideFlaskConicalOff:Er,LucideFlaskRound:Nr,LucideFlipHorizontal:Kr,LucideFlipHorizontal2:Xr,LucideFlipVertical:Qr,LucideFlipVertical2:Jr,LucideFlower:ey,LucideFlower2:Yr,LucideFocus:ay,LucideFoldHorizontal:ty,LucideFoldVertical:cy,LucideFolder:Ay,LucideFolderArchive:oy,LucideFolderCheck:ny,LucideFolderClock:iy,LucideFolderClosed:hy,LucideFolderCog:oe,LucideFolderCog2:oe,LucideFolderDot:dy,LucideFolderDown:ry,LucideFolderEdit:ne,LucideFolderGit:ly,LucideFolderGit2:yy,LucideFolderHeart:py,LucideFolderInput:ky,LucideFolderKanban:sy,LucideFolderKey:uy,LucideFolderLock:My,LucideFolderMinus:vy,LucideFolderOpen:my,LucideFolderOpenDot:Iy,LucideFolderOutput:gy,LucideFolderPen:ne,LucideFolderPlus:xy,LucideFolderRoot:fy,LucideFolderSearch:wy,LucideFolderSearch2:Ly,LucideFolderSymlink:Cy,LucideFolderSync:by,LucideFolderTree:Sy,LucideFolderUp:qy,LucideFolderX:Hy,LucideFolders:Vy,LucideFootprints:zy,LucideForklift:Py,LucideFormInput:Pe,LucideForward:_y,LucideFrame:jy,LucideFramer:By,LucideFrown:Fy,LucideFuel:Dy,LucideFullscreen:Ty,LucideFunctionSquare:u2,LucideGalleryHorizontal:$y,LucideGalleryHorizontalEnd:Ry,LucideGalleryThumbnails:Uy,LucideGalleryVertical:Zy,LucideGalleryVerticalEnd:Oy,LucideGamepad:Ey,LucideGamepad2:Gy,LucideGanttChart:Wy,LucideGanttChartSquare:M2,LucideGauge:Ny,LucideGaugeCircle:S1,LucideGavel:Xy,LucideGem:Ky,LucideGhost:Jy,LucideGift:Qy,LucideGitBranch:el,LucideGitBranchPlus:Yy,LucideGitCommit:ie,LucideGitCommitHorizontal:ie,LucideGitCommitVertical:al,LucideGitCompare:cl,LucideGitCompareArrows:tl,LucideGitFork:ol,LucideGitGraph:nl,LucideGitMerge:il,LucideGitPullRequest:pl,LucideGitPullRequestArrow:hl,LucideGitPullRequestClosed:dl,LucideGitPullRequestCreate:yl,LucideGitPullRequestCreateArrow:rl,LucideGitPullRequestDraft:ll,LucideGithub:kl,LucideGitlab:sl,LucideGlassWater:ul,LucideGlasses:Ml,LucideGlobe:Il,LucideGlobe2:J1,LucideGlobeLock:vl,LucideGoal:ml,LucideGrab:gl,LucideGraduationCap:xl,LucideGrape:fl,LucideGrid:$,LucideGrid2X2:he,LucideGrid2x2:he,LucideGrid2x2Check:Ll,LucideGrid2x2X:wl,LucideGrid3X3:$,LucideGrid3x3:$,LucideGrip:Sl,LucideGripHorizontal:Cl,LucideGripVertical:bl,LucideGroup:ql,LucideGuitar:Hl,LucideHam:Al,LucideHammer:Vl,LucideHand:Bl,LucideHandCoins:zl,LucideHandHeart:Pl,LucideHandHelping:de,LucideHandMetal:_l,LucideHandPlatter:jl,LucideHandshake:Fl,LucideHardDrive:Rl,LucideHardDriveDownload:Dl,LucideHardDriveUpload:Tl,LucideHardHat:$l,LucideHash:Ul,LucideHaze:Ol,LucideHdmiPort:Zl,LucideHeading:Jl,LucideHeading1:Gl,LucideHeading2:El,LucideHeading3:Wl,LucideHeading4:Nl,LucideHeading5:Xl,LucideHeading6:Kl,LucideHeadphones:Ql,LucideHeadset:Yl,LucideHeart:op,LucideHeartCrack:ep,LucideHeartHandshake:ap,LucideHeartOff:tp,LucideHeartPulse:cp,LucideHeater:np,LucideHelpCircle:q1,LucideHelpingHand:de,LucideHexagon:ip,LucideHighlighter:hp,LucideHistory:dp,LucideHome:rp,LucideHop:lp,LucideHopOff:yp,LucideHospital:pp,LucideHotel:kp,LucideHourglass:sp,LucideIceCream:ye,LucideIceCream2:re,LucideIceCreamBowl:re,LucideIceCreamCone:ye,LucideImage:xp,LucideImageDown:up,LucideImageMinus:Mp,LucideImageOff:vp,LucideImagePlay:Ip,LucideImagePlus:mp,LucideImageUp:gp,LucideImages:fp,LucideImport:Lp,LucideInbox:wp,LucideIndent:pe,LucideIndentDecrease:le,LucideIndentIncrease:pe,LucideIndianRupee:Cp,LucideInfinity:bp,LucideInfo:Sp,LucideInspect:f2,LucideInspectionPanel:qp,LucideInstagram:Hp,LucideItalic:Ap,LucideIterationCcw:Vp,LucideIterationCw:zp,LucideJapaneseYen:Pp,LucideJoystick:_p,LucideKanban:jp,LucideKanbanSquare:v2,LucideKanbanSquareDashed:y2,LucideKey:Dp,LucideKeyRound:Bp,LucideKeySquare:Fp,LucideKeyboard:$p,LucideKeyboardMusic:Tp,LucideKeyboardOff:Rp,LucideLamp:Wp,LucideLampCeiling:Up,LucideLampDesk:Op,LucideLampFloor:Zp,LucideLampWallDown:Gp,LucideLampWallUp:Ep,LucideLandPlot:Np,LucideLandmark:Xp,LucideLanguages:Kp,LucideLaptop:Jp,LucideLaptop2:ke,LucideLaptopMinimal:ke,LucideLasso:Yp,LucideLassoSelect:Qp,LucideLaugh:ek,LucideLayers:ck,LucideLayers2:ak,LucideLayers3:tk,LucideLayout:Ae,LucideLayoutDashboard:ok,LucideLayoutGrid:nk,LucideLayoutList:ik,LucideLayoutPanelLeft:hk,LucideLayoutPanelTop:dk,LucideLayoutTemplate:rk,LucideLeaf:yk,LucideLeafyGreen:lk,LucideLectern:pk,LucideLibrary:sk,LucideLibraryBig:kk,LucideLibrarySquare:I2,LucideLifeBuoy:uk,LucideLigature:Mk,LucideLightbulb:Ik,LucideLightbulbOff:vk,LucideLineChart:mk,LucideLink:fk,LucideLink2:xk,LucideLink2Off:gk,LucideLinkedin:Lk,LucideList:Dk,LucideListChecks:wk,LucideListCollapse:Ck,LucideListEnd:bk,LucideListFilter:Sk,LucideListMinus:qk,LucideListMusic:Hk,LucideListOrdered:Ak,LucideListPlus:Vk,LucideListRestart:zk,LucideListStart:Pk,LucideListTodo:_k,LucideListTree:jk,LucideListVideo:Bk,LucideListX:Fk,LucideLoader:Rk,LucideLoader2:se,LucideLoaderCircle:se,LucideLoaderPinwheel:Tk,LucideLocate:Ok,LucideLocateFixed:$k,LucideLocateOff:Uk,LucideLock:Gk,LucideLockKeyhole:Zk,LucideLockKeyholeOpen:ue,LucideLockOpen:Me,LucideLogIn:Ek,LucideLogOut:Wk,LucideLollipop:Nk,LucideLuggage:Xk,LucideMSquare:m2,LucideMagnet:Kk,LucideMail:ns,LucideMailCheck:Jk,LucideMailMinus:Qk,LucideMailOpen:Yk,LucideMailPlus:es,LucideMailQuestion:as,LucideMailSearch:ts,LucideMailWarning:cs,LucideMailX:os,LucideMailbox:is,LucideMails:hs,LucideMap:ls,LucideMapPin:rs,LucideMapPinOff:ds,LucideMapPinned:ys,LucideMartini:ps,LucideMaximize:ss,LucideMaximize2:ks,LucideMedal:us,LucideMegaphone:vs,LucideMegaphoneOff:Ms,LucideMeh:Is,LucideMemoryStick:ms,LucideMenu:gs,LucideMenuSquare:g2,LucideMerge:xs,LucideMessageCircle:zs,LucideMessageCircleCode:fs,LucideMessageCircleDashed:Ls,LucideMessageCircleHeart:ws,LucideMessageCircleMore:Cs,LucideMessageCircleOff:bs,LucideMessageCirclePlus:Ss,LucideMessageCircleQuestion:qs,LucideMessageCircleReply:Hs,LucideMessageCircleWarning:As,LucideMessageCircleX:Vs,LucideMessageSquare:Ws,LucideMessageSquareCode:Ps,LucideMessageSquareDashed:_s,LucideMessageSquareDiff:js,LucideMessageSquareDot:Bs,LucideMessageSquareHeart:Fs,LucideMessageSquareMore:Ds,LucideMessageSquareOff:Ts,LucideMessageSquarePlus:Rs,LucideMessageSquareQuote:$s,LucideMessageSquareReply:Us,LucideMessageSquareShare:Os,LucideMessageSquareText:Zs,LucideMessageSquareWarning:Gs,LucideMessageSquareX:Es,LucideMessagesSquare:Ns,LucideMic:Ks,LucideMic2:ve,LucideMicOff:Xs,LucideMicVocal:ve,LucideMicroscope:Js,LucideMicrowave:Qs,LucideMilestone:Ys,LucideMilk:a4,LucideMilkOff:e4,LucideMinimize:c4,LucideMinimize2:t4,LucideMinus:o4,LucideMinusCircle:H1,LucideMinusSquare:x2,LucideMonitor:M4,LucideMonitorCheck:n4,LucideMonitorDot:i4,LucideMonitorDown:h4,LucideMonitorOff:d4,LucideMonitorPause:r4,LucideMonitorPlay:y4,LucideMonitorSmartphone:l4,LucideMonitorSpeaker:p4,LucideMonitorStop:k4,LucideMonitorUp:s4,LucideMonitorX:u4,LucideMoon:I4,LucideMoonStar:v4,LucideMoreHorizontal:Y1,LucideMoreVertical:Q1,LucideMountain:g4,LucideMountainSnow:m4,LucideMouse:b4,LucideMouseOff:x4,LucideMousePointer:C4,LucideMousePointer2:f4,LucideMousePointerBan:L4,LucideMousePointerClick:w4,LucideMousePointerSquareDashed:l2,LucideMove:T4,LucideMove3D:Ie,LucideMove3d:Ie,LucideMoveDiagonal:q4,LucideMoveDiagonal2:S4,LucideMoveDown:V4,LucideMoveDownLeft:H4,LucideMoveDownRight:A4,LucideMoveHorizontal:z4,LucideMoveLeft:P4,LucideMoveRight:_4,LucideMoveUp:F4,LucideMoveUpLeft:j4,LucideMoveUpRight:B4,LucideMoveVertical:D4,LucideMusic:O4,LucideMusic2:R4,LucideMusic3:$4,LucideMusic4:U4,LucideNavigation:W4,LucideNavigation2:G4,LucideNavigation2Off:Z4,LucideNavigationOff:E4,LucideNetwork:N4,LucideNewspaper:X4,LucideNfc:K4,LucideNotebook:e5,LucideNotebookPen:J4,LucideNotebookTabs:Q4,LucideNotebookText:Y4,LucideNotepadText:t5,LucideNotepadTextDashed:a5,LucideNut:o5,LucideNutOff:c5,LucideOctagon:n5,LucideOctagonAlert:me,LucideOctagonPause:ge,LucideOctagonX:xe,LucideOption:i5,LucideOrbit:h5,LucideOrigami:d5,LucideOutdent:le,LucidePackage:M5,LucidePackage2:r5,LucidePackageCheck:y5,LucidePackageMinus:l5,LucidePackageOpen:p5,LucidePackagePlus:k5,LucidePackageSearch:s5,LucidePackageX:u5,LucidePaintBucket:v5,LucidePaintRoller:I5,LucidePaintbrush:m5,LucidePaintbrush2:fe,LucidePaintbrushVertical:fe,LucidePalette:g5,LucidePalmtree:O2,LucidePanelBottom:L5,LucidePanelBottomClose:x5,LucidePanelBottomDashed:Le,LucidePanelBottomInactive:Le,LucidePanelBottomOpen:f5,LucidePanelLeft:Se,LucidePanelLeftClose:we,LucidePanelLeftDashed:Ce,LucidePanelLeftInactive:Ce,LucidePanelLeftOpen:be,LucidePanelRight:b5,LucidePanelRightClose:w5,LucidePanelRightDashed:qe,LucidePanelRightInactive:qe,LucidePanelRightOpen:C5,LucidePanelTop:H5,LucidePanelTopClose:S5,LucidePanelTopDashed:He,LucidePanelTopInactive:He,LucidePanelTopOpen:q5,LucidePanelsLeftBottom:A5,LucidePanelsLeftRight:N1,LucidePanelsRightBottom:V5,LucidePanelsTopBottom:Be,LucidePanelsTopLeft:Ae,LucidePaperclip:z5,LucideParentheses:P5,LucideParkingCircle:V1,LucideParkingCircleOff:A1,LucideParkingMeter:_5,LucideParkingSquare:w2,LucideParkingSquareOff:L2,LucidePartyPopper:j5,LucidePause:B5,LucidePauseCircle:z1,LucidePauseOctagon:ge,LucidePawPrint:F5,LucidePcCase:D5,LucidePen:ze,LucidePenBox:D,LucidePenLine:Ve,LucidePenSquare:D,LucidePenTool:T5,LucidePencil:U5,LucidePencilLine:R5,LucidePencilRuler:$5,LucidePentagon:O5,LucidePercent:Z5,LucidePercentCircle:P1,LucidePercentDiamond:K1,LucidePercentSquare:C2,LucidePersonStanding:G5,LucidePhone:Q5,LucidePhoneCall:E5,LucidePhoneForwarded:W5,LucidePhoneIncoming:N5,LucidePhoneMissed:X5,LucidePhoneOff:K5,LucidePhoneOutgoing:J5,LucidePi:Y5,LucidePiSquare:b2,LucidePiano:e3,LucidePickaxe:a3,LucidePictureInPicture:c3,LucidePictureInPicture2:t3,LucidePieChart:o3,LucidePiggyBank:n3,LucidePilcrow:d3,LucidePilcrowLeft:i3,LucidePilcrowRight:h3,LucidePilcrowSquare:S2,LucidePill:y3,LucidePillBottle:r3,LucidePin:p3,LucidePinOff:l3,LucidePipette:k3,LucidePizza:s3,LucidePlane:v3,LucidePlaneLanding:u3,LucidePlaneTakeoff:M3,LucidePlay:I3,LucidePlayCircle:_1,LucidePlaySquare:q2,LucidePlug:f3,LucidePlug2:m3,LucidePlugZap:x3,LucidePlugZap2:g3,LucidePlus:L3,LucidePlusCircle:j1,LucidePlusSquare:H2,LucidePocket:C3,LucidePocketKnife:w3,LucidePodcast:b3,LucidePointer:q3,LucidePointerOff:S3,LucidePopcorn:H3,LucidePopsicle:A3,LucidePoundSterling:V3,LucidePower:P3,LucidePowerCircle:B1,LucidePowerOff:z3,LucidePowerSquare:A2,LucidePresentation:_3,LucidePrinter:j3,LucideProjector:B3,LucideProportions:F3,LucidePuzzle:D3,LucidePyramid:T3,LucideQrCode:R3,LucideQuote:$3,LucideRabbit:U3,LucideRadar:O3,LucideRadiation:Z3,LucideRadical:G3,LucideRadio:N3,LucideRadioReceiver:E3,LucideRadioTower:W3,LucideRadius:X3,LucideRailSymbol:K3,LucideRainbow:J3,LucideRat:Q3,LucideRatio:Y3,LucideReceipt:du,LucideReceiptCent:eu,LucideReceiptEuro:au,LucideReceiptIndianRupee:tu,LucideReceiptJapaneseYen:cu,LucideReceiptPoundSterling:ou,LucideReceiptRussianRuble:nu,LucideReceiptSwissFranc:iu,LucideReceiptText:hu,LucideRectangleEllipsis:Pe,LucideRectangleHorizontal:ru,LucideRectangleVertical:yu,LucideRecycle:lu,LucideRedo:su,LucideRedo2:pu,LucideRedoDot:ku,LucideRefreshCcw:Mu,LucideRefreshCcwDot:uu,LucideRefreshCw:Iu,LucideRefreshCwOff:vu,LucideRefrigerator:mu,LucideRegex:gu,LucideRemoveFormatting:xu,LucideRepeat:wu,LucideRepeat1:fu,LucideRepeat2:Lu,LucideReplace:bu,LucideReplaceAll:Cu,LucideReply:qu,LucideReplyAll:Su,LucideRewind:Hu,LucideRibbon:Au,LucideRocket:Vu,LucideRockingChair:zu,LucideRollerCoaster:Pu,LucideRotate3D:_e,LucideRotate3d:_e,LucideRotateCcw:ju,LucideRotateCcwSquare:_u,LucideRotateCw:Fu,LucideRotateCwSquare:Bu,LucideRoute:Tu,LucideRouteOff:Du,LucideRouter:Ru,LucideRows:je,LucideRows2:je,LucideRows3:Be,LucideRows4:$u,LucideRss:Uu,LucideRuler:Ou,LucideRussianRuble:Zu,LucideSailboat:Gu,LucideSalad:Eu,LucideSandwich:Wu,LucideSatellite:Xu,LucideSatelliteDish:Nu,LucideSave:Ju,LucideSaveAll:Ku,LucideScale:Qu,LucideScale3D:Fe,LucideScale3d:Fe,LucideScaling:Yu,LucideScan:i6,LucideScanBarcode:e6,LucideScanEye:a6,LucideScanFace:t6,LucideScanLine:c6,LucideScanSearch:o6,LucideScanText:n6,LucideScatterChart:h6,LucideSchool:d6,LucideSchool2:G2,LucideScissors:y6,LucideScissorsLineDashed:r6,LucideScissorsSquare:V2,LucideScissorsSquareDashedBottom:t2,LucideScreenShare:p6,LucideScreenShareOff:l6,LucideScroll:s6,LucideScrollText:k6,LucideSearch:m6,LucideSearchCheck:u6,LucideSearchCode:M6,LucideSearchSlash:v6,LucideSearchX:I6,LucideSection:g6,LucideSend:f6,LucideSendHorizonal:De,LucideSendHorizontal:De,LucideSendToBack:x6,LucideSeparatorHorizontal:L6,LucideSeparatorVertical:w6,LucideServer:q6,LucideServerCog:C6,LucideServerCrash:b6,LucideServerOff:S6,LucideSettings:A6,LucideSettings2:H6,LucideShapes:V6,LucideShare:P6,LucideShare2:z6,LucideSheet:_6,LucideShell:j6,LucideShield:G6,LucideShieldAlert:B6,LucideShieldBan:F6,LucideShieldCheck:D6,LucideShieldClose:Te,LucideShieldEllipsis:T6,LucideShieldHalf:R6,LucideShieldMinus:$6,LucideShieldOff:U6,LucideShieldPlus:O6,LucideShieldQuestion:Z6,LucideShieldX:Te,LucideShip:W6,LucideShipWheel:E6,LucideShirt:N6,LucideShoppingBag:X6,LucideShoppingBasket:K6,LucideShoppingCart:J6,LucideShovel:Q6,LucideShowerHead:Y6,LucideShrink:e8,LucideShrub:a8,LucideShuffle:t8,LucideSidebar:Se,LucideSidebarClose:we,LucideSidebarOpen:be,LucideSigma:c8,LucideSigmaSquare:z2,LucideSignal:d8,LucideSignalHigh:o8,LucideSignalLow:n8,LucideSignalMedium:i8,LucideSignalZero:h8,LucideSignpost:y8,LucideSignpostBig:r8,LucideSiren:l8,LucideSkipBack:p8,LucideSkipForward:k8,LucideSkull:s8,LucideSlack:u8,LucideSlash:M8,LucideSlashSquare:P2,LucideSlice:v8,LucideSliders:Re,LucideSlidersHorizontal:I8,LucideSlidersVertical:Re,LucideSmartphone:x8,LucideSmartphoneCharging:m8,LucideSmartphoneNfc:g8,LucideSmile:L8,LucideSmilePlus:f8,LucideSnail:w8,LucideSnowflake:C8,LucideSofa:b8,LucideSortAsc:t1,LucideSortDesc:Y,LucideSoup:S8,LucideSpace:q8,LucideSpade:H8,LucideSparkle:A8,LucideSparkles:$e,LucideSpeaker:V8,LucideSpeech:z8,LucideSpellCheck:_8,LucideSpellCheck2:P8,LucideSpline:j8,LucideSplit:B8,LucideSplitSquareHorizontal:_2,LucideSplitSquareVertical:j2,LucideSprayCan:F8,LucideSprout:D8,LucideSquare:O8,LucideSquareActivity:Ue,LucideSquareArrowDown:Ge,LucideSquareArrowDownLeft:Oe,LucideSquareArrowDownRight:Ze,LucideSquareArrowLeft:Ee,LucideSquareArrowOutDownLeft:We,LucideSquareArrowOutDownRight:Ne,LucideSquareArrowOutUpLeft:Xe,LucideSquareArrowOutUpRight:Ke,LucideSquareArrowRight:Je,LucideSquareArrowUp:e2,LucideSquareArrowUpLeft:Qe,LucideSquareArrowUpRight:Ye,LucideSquareAsterisk:a2,LucideSquareBottomDashedScissors:t2,LucideSquareCheck:o2,LucideSquareCheckBig:c2,LucideSquareChevronDown:n2,LucideSquareChevronLeft:i2,LucideSquareChevronRight:h2,LucideSquareChevronUp:d2,LucideSquareCode:r2,LucideSquareDashedBottom:R8,LucideSquareDashedBottomCode:T8,LucideSquareDashedKanban:y2,LucideSquareDashedMousePointer:l2,LucideSquareDivide:p2,LucideSquareDot:k2,LucideSquareEqual:s2,LucideSquareFunction:u2,LucideSquareGanttChart:M2,LucideSquareKanban:v2,LucideSquareLibrary:I2,LucideSquareM:m2,LucideSquareMenu:g2,LucideSquareMinus:x2,LucideSquareMousePointer:f2,LucideSquareParking:w2,LucideSquareParkingOff:L2,LucideSquarePen:D,LucideSquarePercent:C2,LucideSquarePi:b2,LucideSquarePilcrow:S2,LucideSquarePlay:q2,LucideSquarePlus:H2,LucideSquarePower:A2,LucideSquareRadical:$8,LucideSquareScissors:V2,LucideSquareSigma:z2,LucideSquareSlash:P2,LucideSquareSplitHorizontal:_2,LucideSquareSplitVertical:j2,LucideSquareStack:U8,LucideSquareTerminal:B2,LucideSquareUser:D2,LucideSquareUserRound:F2,LucideSquareX:T2,LucideSquircle:Z8,LucideSquirrel:G8,LucideStamp:E8,LucideStar:X8,LucideStarHalf:W8,LucideStarOff:N8,LucideStars:$e,LucideStepBack:K8,LucideStepForward:J8,LucideStethoscope:Q8,LucideSticker:Y8,LucideStickyNote:e7,LucideStopCircle:D1,LucideStore:a7,LucideStretchHorizontal:t7,LucideStretchVertical:c7,LucideStrikethrough:o7,LucideSubscript:n7,LucideSubtitles:y1,LucideSun:y7,LucideSunDim:i7,LucideSunMedium:h7,LucideSunMoon:d7,LucideSunSnow:r7,LucideSunrise:l7,LucideSunset:p7,LucideSuperscript:k7,LucideSwatchBook:s7,LucideSwissFranc:u7,LucideSwitchCamera:M7,LucideSword:v7,LucideSwords:I7,LucideSyringe:m7,LucideTable:b7,LucideTable2:g7,LucideTableCellsMerge:x7,LucideTableCellsSplit:f7,LucideTableColumnsSplit:L7,LucideTableProperties:w7,LucideTableRowsSplit:C7,LucideTablet:q7,LucideTabletSmartphone:S7,LucideTablets:H7,LucideTag:A7,LucideTags:V7,LucideTally1:z7,LucideTally2:P7,LucideTally3:_7,LucideTally4:j7,LucideTally5:B7,LucideTangent:F7,LucideTarget:D7,LucideTelescope:T7,LucideTent:$7,LucideTentTree:R7,LucideTerminal:U7,LucideTerminalSquare:B2,LucideTestTube:O7,LucideTestTube2:R2,LucideTestTubeDiagonal:R2,LucideTestTubes:Z7,LucideText:X7,LucideTextCursor:E7,LucideTextCursorInput:G7,LucideTextQuote:W7,LucideTextSearch:N7,LucideTextSelect:$2,LucideTextSelection:$2,LucideTheater:K7,LucideThermometer:Y7,LucideThermometerSnowflake:J7,LucideThermometerSun:Q7,LucideThumbsDown:e9,LucideThumbsUp:a9,LucideTicket:d9,LucideTicketCheck:t9,LucideTicketMinus:c9,LucideTicketPercent:o9,LucideTicketPlus:n9,LucideTicketSlash:i9,LucideTicketX:h9,LucideTimer:l9,LucideTimerOff:r9,LucideTimerReset:y9,LucideToggleLeft:p9,LucideToggleRight:k9,LucideTornado:s9,LucideTorus:u9,LucideTouchpad:v9,LucideTouchpadOff:M9,LucideTowerControl:I9,LucideToyBrick:m9,LucideTractor:g9,LucideTrafficCone:x9,LucideTrain:U2,LucideTrainFront:L9,LucideTrainFrontTunnel:f9,LucideTrainTrack:w9,LucideTramFront:U2,LucideTrash:b9,LucideTrash2:C9,LucideTreeDeciduous:S9,LucideTreePalm:O2,LucideTreePine:q9,LucideTrees:H9,LucideTrello:A9,LucideTrendingDown:V9,LucideTrendingUp:z9,LucideTriangle:_9,LucideTriangleAlert:Z2,LucideTriangleRight:P9,LucideTrophy:j9,LucideTruck:B9,LucideTurtle:F9,LucideTv:T9,LucideTv2:D9,LucideTwitch:R9,LucideTwitter:$9,LucideType:U9,LucideUmbrella:Z9,LucideUmbrellaOff:O9,LucideUnderline:G9,LucideUndo:N9,LucideUndo2:E9,LucideUndoDot:W9,LucideUnfoldHorizontal:X9,LucideUnfoldVertical:K9,LucideUngroup:J9,LucideUniversity:G2,LucideUnlink:Y9,LucideUnlink2:Q9,LucideUnlock:Me,LucideUnlockKeyhole:ue,LucideUnplug:eM,LucideUpload:aM,LucideUploadCloud:G1,LucideUsb:tM,LucideUser:yM,LucideUser2:J2,LucideUserCheck:cM,LucideUserCheck2:E2,LucideUserCircle:R1,LucideUserCircle2:T1,LucideUserCog:oM,LucideUserCog2:W2,LucideUserMinus:nM,LucideUserMinus2:N2,LucideUserPlus:iM,LucideUserPlus2:X2,LucideUserRound:J2,LucideUserRoundCheck:E2,LucideUserRoundCog:W2,LucideUserRoundMinus:N2,LucideUserRoundPlus:X2,LucideUserRoundSearch:hM,LucideUserRoundX:K2,LucideUserSearch:dM,LucideUserSquare:D2,LucideUserSquare2:F2,LucideUserX:rM,LucideUserX2:K2,LucideUsers:lM,LucideUsers2:Q2,LucideUsersRound:Q2,LucideUtensils:kM,LucideUtensilsCrossed:pM,LucideUtilityPole:sM,LucideVariable:uM,LucideVault:MM,LucideVegan:vM,LucideVenetianMask:IM,LucideVerified:n1,LucideVibrate:gM,LucideVibrateOff:mM,LucideVideo:fM,LucideVideoOff:xM,LucideVideotape:LM,LucideView:wM,LucideVoicemail:CM,LucideVolume:HM,LucideVolume1:bM,LucideVolume2:SM,LucideVolumeX:qM,LucideVote:AM,LucideWallet:zM,LucideWallet2:Y2,LucideWalletCards:VM,LucideWalletMinimal:Y2,LucideWallpaper:PM,LucideWand:_M,LucideWand2:ea,LucideWandSparkles:ea,LucideWarehouse:jM,LucideWashingMachine:BM,LucideWatch:FM,LucideWaves:DM,LucideWaypoints:TM,LucideWebcam:RM,LucideWebhook:UM,LucideWebhookOff:$M,LucideWeight:OM,LucideWheat:GM,LucideWheatOff:ZM,LucideWholeWord:EM,LucideWifi:NM,LucideWifiOff:WM,LucideWind:XM,LucideWine:JM,LucideWineOff:KM,LucideWorkflow:QM,LucideWorm:YM,LucideWrapText:ev,LucideWrench:av,LucideX:tv,LucideXCircle:$1,LucideXOctagon:xe,LucideXSquare:T2,LucideYoutube:cv,LucideZap:nv,LucideZapOff:ov,LucideZoomIn:iv,LucideZoomOut:hv,Luggage:Xk,LuggageIcon:Xk,MSquare:m2,MSquareIcon:m2,Magnet:Kk,MagnetIcon:Kk,Mail:ns,MailCheck:Jk,MailCheckIcon:Jk,MailIcon:ns,MailMinus:Qk,MailMinusIcon:Qk,MailOpen:Yk,MailOpenIcon:Yk,MailPlus:es,MailPlusIcon:es,MailQuestion:as,MailQuestionIcon:as,MailSearch:ts,MailSearchIcon:ts,MailWarning:cs,MailWarningIcon:cs,MailX:os,MailXIcon:os,Mailbox:is,MailboxIcon:is,Mails:hs,MailsIcon:hs,Map:ls,MapIcon:ls,MapPin:rs,MapPinIcon:rs,MapPinOff:ds,MapPinOffIcon:ds,MapPinned:ys,MapPinnedIcon:ys,Martini:ps,MartiniIcon:ps,Maximize:ss,Maximize2:ks,Maximize2Icon:ks,MaximizeIcon:ss,Medal:us,MedalIcon:us,Megaphone:vs,MegaphoneIcon:vs,MegaphoneOff:Ms,MegaphoneOffIcon:Ms,Meh:Is,MehIcon:Is,MemoryStick:ms,MemoryStickIcon:ms,Menu:gs,MenuIcon:gs,MenuSquare:g2,MenuSquareIcon:g2,Merge:xs,MergeIcon:xs,MessageCircle:zs,MessageCircleCode:fs,MessageCircleCodeIcon:fs,MessageCircleDashed:Ls,MessageCircleDashedIcon:Ls,MessageCircleHeart:ws,MessageCircleHeartIcon:ws,MessageCircleIcon:zs,MessageCircleMore:Cs,MessageCircleMoreIcon:Cs,MessageCircleOff:bs,MessageCircleOffIcon:bs,MessageCirclePlus:Ss,MessageCirclePlusIcon:Ss,MessageCircleQuestion:qs,MessageCircleQuestionIcon:qs,MessageCircleReply:Hs,MessageCircleReplyIcon:Hs,MessageCircleWarning:As,MessageCircleWarningIcon:As,MessageCircleX:Vs,MessageCircleXIcon:Vs,MessageSquare:Ws,MessageSquareCode:Ps,MessageSquareCodeIcon:Ps,MessageSquareDashed:_s,MessageSquareDashedIcon:_s,MessageSquareDiff:js,MessageSquareDiffIcon:js,MessageSquareDot:Bs,MessageSquareDotIcon:Bs,MessageSquareHeart:Fs,MessageSquareHeartIcon:Fs,MessageSquareIcon:Ws,MessageSquareMore:Ds,MessageSquareMoreIcon:Ds,MessageSquareOff:Ts,MessageSquareOffIcon:Ts,MessageSquarePlus:Rs,MessageSquarePlusIcon:Rs,MessageSquareQuote:$s,MessageSquareQuoteIcon:$s,MessageSquareReply:Us,MessageSquareReplyIcon:Us,MessageSquareShare:Os,MessageSquareShareIcon:Os,MessageSquareText:Zs,MessageSquareTextIcon:Zs,MessageSquareWarning:Gs,MessageSquareWarningIcon:Gs,MessageSquareX:Es,MessageSquareXIcon:Es,MessagesSquare:Ns,MessagesSquareIcon:Ns,Mic:Ks,Mic2:ve,Mic2Icon:ve,MicIcon:Ks,MicOff:Xs,MicOffIcon:Xs,MicVocal:ve,MicVocalIcon:ve,Microscope:Js,MicroscopeIcon:Js,Microwave:Qs,MicrowaveIcon:Qs,Milestone:Ys,MilestoneIcon:Ys,Milk:a4,MilkIcon:a4,MilkOff:e4,MilkOffIcon:e4,Minimize:c4,Minimize2:t4,Minimize2Icon:t4,MinimizeIcon:c4,Minus:o4,MinusCircle:H1,MinusCircleIcon:H1,MinusIcon:o4,MinusSquare:x2,MinusSquareIcon:x2,Monitor:M4,MonitorCheck:n4,MonitorCheckIcon:n4,MonitorDot:i4,MonitorDotIcon:i4,MonitorDown:h4,MonitorDownIcon:h4,MonitorIcon:M4,MonitorOff:d4,MonitorOffIcon:d4,MonitorPause:r4,MonitorPauseIcon:r4,MonitorPlay:y4,MonitorPlayIcon:y4,MonitorSmartphone:l4,MonitorSmartphoneIcon:l4,MonitorSpeaker:p4,MonitorSpeakerIcon:p4,MonitorStop:k4,MonitorStopIcon:k4,MonitorUp:s4,MonitorUpIcon:s4,MonitorX:u4,MonitorXIcon:u4,Moon:I4,MoonIcon:I4,MoonStar:v4,MoonStarIcon:v4,MoreHorizontal:Y1,MoreHorizontalIcon:Y1,MoreVertical:Q1,MoreVerticalIcon:Q1,Mountain:g4,MountainIcon:g4,MountainSnow:m4,MountainSnowIcon:m4,Mouse:b4,MouseIcon:b4,MouseOff:x4,MouseOffIcon:x4,MousePointer:C4,MousePointer2:f4,MousePointer2Icon:f4,MousePointerBan:L4,MousePointerBanIcon:L4,MousePointerClick:w4,MousePointerClickIcon:w4,MousePointerIcon:C4,MousePointerSquareDashed:l2,MousePointerSquareDashedIcon:l2,Move:T4,Move3D:Ie,Move3DIcon:Ie,Move3d:Ie,Move3dIcon:Ie,MoveDiagonal:q4,MoveDiagonal2:S4,MoveDiagonal2Icon:S4,MoveDiagonalIcon:q4,MoveDown:V4,MoveDownIcon:V4,MoveDownLeft:H4,MoveDownLeftIcon:H4,MoveDownRight:A4,MoveDownRightIcon:A4,MoveHorizontal:z4,MoveHorizontalIcon:z4,MoveIcon:T4,MoveLeft:P4,MoveLeftIcon:P4,MoveRight:_4,MoveRightIcon:_4,MoveUp:F4,MoveUpIcon:F4,MoveUpLeft:j4,MoveUpLeftIcon:j4,MoveUpRight:B4,MoveUpRightIcon:B4,MoveVertical:D4,MoveVerticalIcon:D4,Music:O4,Music2:R4,Music2Icon:R4,Music3:$4,Music3Icon:$4,Music4:U4,Music4Icon:U4,MusicIcon:O4,Navigation:W4,Navigation2:G4,Navigation2Icon:G4,Navigation2Off:Z4,Navigation2OffIcon:Z4,NavigationIcon:W4,NavigationOff:E4,NavigationOffIcon:E4,Network:N4,NetworkIcon:N4,Newspaper:X4,NewspaperIcon:X4,Nfc:K4,NfcIcon:K4,Notebook:e5,NotebookIcon:e5,NotebookPen:J4,NotebookPenIcon:J4,NotebookTabs:Q4,NotebookTabsIcon:Q4,NotebookText:Y4,NotebookTextIcon:Y4,NotepadText:t5,NotepadTextDashed:a5,NotepadTextDashedIcon:a5,NotepadTextIcon:t5,Nut:o5,NutIcon:o5,NutOff:c5,NutOffIcon:c5,Octagon:n5,OctagonAlert:me,OctagonAlertIcon:me,OctagonIcon:n5,OctagonPause:ge,OctagonPauseIcon:ge,OctagonX:xe,OctagonXIcon:xe,Option:i5,OptionIcon:i5,Orbit:h5,OrbitIcon:h5,Origami:d5,OrigamiIcon:d5,Outdent:le,OutdentIcon:le,Package:M5,Package2:r5,Package2Icon:r5,PackageCheck:y5,PackageCheckIcon:y5,PackageIcon:M5,PackageMinus:l5,PackageMinusIcon:l5,PackageOpen:p5,PackageOpenIcon:p5,PackagePlus:k5,PackagePlusIcon:k5,PackageSearch:s5,PackageSearchIcon:s5,PackageX:u5,PackageXIcon:u5,PaintBucket:v5,PaintBucketIcon:v5,PaintRoller:I5,PaintRollerIcon:I5,Paintbrush:m5,Paintbrush2:fe,Paintbrush2Icon:fe,PaintbrushIcon:m5,PaintbrushVertical:fe,PaintbrushVerticalIcon:fe,Palette:g5,PaletteIcon:g5,Palmtree:O2,PalmtreeIcon:O2,PanelBottom:L5,PanelBottomClose:x5,PanelBottomCloseIcon:x5,PanelBottomDashed:Le,PanelBottomDashedIcon:Le,PanelBottomIcon:L5,PanelBottomInactive:Le,PanelBottomInactiveIcon:Le,PanelBottomOpen:f5,PanelBottomOpenIcon:f5,PanelLeft:Se,PanelLeftClose:we,PanelLeftCloseIcon:we,PanelLeftDashed:Ce,PanelLeftDashedIcon:Ce,PanelLeftIcon:Se,PanelLeftInactive:Ce,PanelLeftInactiveIcon:Ce,PanelLeftOpen:be,PanelLeftOpenIcon:be,PanelRight:b5,PanelRightClose:w5,PanelRightCloseIcon:w5,PanelRightDashed:qe,PanelRightDashedIcon:qe,PanelRightIcon:b5,PanelRightInactive:qe,PanelRightInactiveIcon:qe,PanelRightOpen:C5,PanelRightOpenIcon:C5,PanelTop:H5,PanelTopClose:S5,PanelTopCloseIcon:S5,PanelTopDashed:He,PanelTopDashedIcon:He,PanelTopIcon:H5,PanelTopInactive:He,PanelTopInactiveIcon:He,PanelTopOpen:q5,PanelTopOpenIcon:q5,PanelsLeftBottom:A5,PanelsLeftBottomIcon:A5,PanelsLeftRight:N1,PanelsLeftRightIcon:N1,PanelsRightBottom:V5,PanelsRightBottomIcon:V5,PanelsTopBottom:Be,PanelsTopBottomIcon:Be,PanelsTopLeft:Ae,PanelsTopLeftIcon:Ae,Paperclip:z5,PaperclipIcon:z5,Parentheses:P5,ParenthesesIcon:P5,ParkingCircle:V1,ParkingCircleIcon:V1,ParkingCircleOff:A1,ParkingCircleOffIcon:A1,ParkingMeter:_5,ParkingMeterIcon:_5,ParkingSquare:w2,ParkingSquareIcon:w2,ParkingSquareOff:L2,ParkingSquareOffIcon:L2,PartyPopper:j5,PartyPopperIcon:j5,Pause:B5,PauseCircle:z1,PauseCircleIcon:z1,PauseIcon:B5,PauseOctagon:ge,PauseOctagonIcon:ge,PawPrint:F5,PawPrintIcon:F5,PcCase:D5,PcCaseIcon:D5,Pen:ze,PenBox:D,PenBoxIcon:D,PenIcon:ze,PenLine:Ve,PenLineIcon:Ve,PenSquare:D,PenSquareIcon:D,PenTool:T5,PenToolIcon:T5,Pencil:U5,PencilIcon:U5,PencilLine:R5,PencilLineIcon:R5,PencilRuler:$5,PencilRulerIcon:$5,Pentagon:O5,PentagonIcon:O5,Percent:Z5,PercentCircle:P1,PercentCircleIcon:P1,PercentDiamond:K1,PercentDiamondIcon:K1,PercentIcon:Z5,PercentSquare:C2,PercentSquareIcon:C2,PersonStanding:G5,PersonStandingIcon:G5,Phone:Q5,PhoneCall:E5,PhoneCallIcon:E5,PhoneForwarded:W5,PhoneForwardedIcon:W5,PhoneIcon:Q5,PhoneIncoming:N5,PhoneIncomingIcon:N5,PhoneMissed:X5,PhoneMissedIcon:X5,PhoneOff:K5,PhoneOffIcon:K5,PhoneOutgoing:J5,PhoneOutgoingIcon:J5,Pi:Y5,PiIcon:Y5,PiSquare:b2,PiSquareIcon:b2,Piano:e3,PianoIcon:e3,Pickaxe:a3,PickaxeIcon:a3,PictureInPicture:c3,PictureInPicture2:t3,PictureInPicture2Icon:t3,PictureInPictureIcon:c3,PieChart:o3,PieChartIcon:o3,PiggyBank:n3,PiggyBankIcon:n3,Pilcrow:d3,PilcrowIcon:d3,PilcrowLeft:i3,PilcrowLeftIcon:i3,PilcrowRight:h3,PilcrowRightIcon:h3,PilcrowSquare:S2,PilcrowSquareIcon:S2,Pill:y3,PillBottle:r3,PillBottleIcon:r3,PillIcon:y3,Pin:p3,PinIcon:p3,PinOff:l3,PinOffIcon:l3,Pipette:k3,PipetteIcon:k3,Pizza:s3,PizzaIcon:s3,Plane:v3,PlaneIcon:v3,PlaneLanding:u3,PlaneLandingIcon:u3,PlaneTakeoff:M3,PlaneTakeoffIcon:M3,Play:I3,PlayCircle:_1,PlayCircleIcon:_1,PlayIcon:I3,PlaySquare:q2,PlaySquareIcon:q2,Plug:f3,Plug2:m3,Plug2Icon:m3,PlugIcon:f3,PlugZap:x3,PlugZap2:g3,PlugZap2Icon:g3,PlugZapIcon:x3,Plus:L3,PlusCircle:j1,PlusCircleIcon:j1,PlusIcon:L3,PlusSquare:H2,PlusSquareIcon:H2,Pocket:C3,PocketIcon:C3,PocketKnife:w3,PocketKnifeIcon:w3,Podcast:b3,PodcastIcon:b3,Pointer:q3,PointerIcon:q3,PointerOff:S3,PointerOffIcon:S3,Popcorn:H3,PopcornIcon:H3,Popsicle:A3,PopsicleIcon:A3,PoundSterling:V3,PoundSterlingIcon:V3,Power:P3,PowerCircle:B1,PowerCircleIcon:B1,PowerIcon:P3,PowerOff:z3,PowerOffIcon:z3,PowerSquare:A2,PowerSquareIcon:A2,Presentation:_3,PresentationIcon:_3,Printer:j3,PrinterIcon:j3,Projector:B3,ProjectorIcon:B3,Proportions:F3,ProportionsIcon:F3,Puzzle:D3,PuzzleIcon:D3,Pyramid:T3,PyramidIcon:T3,QrCode:R3,QrCodeIcon:R3,Quote:$3,QuoteIcon:$3,Rabbit:U3,RabbitIcon:U3,Radar:O3,RadarIcon:O3,Radiation:Z3,RadiationIcon:Z3,Radical:G3,RadicalIcon:G3,Radio:N3,RadioIcon:N3,RadioReceiver:E3,RadioReceiverIcon:E3,RadioTower:W3,RadioTowerIcon:W3,Radius:X3,RadiusIcon:X3,RailSymbol:K3,RailSymbolIcon:K3,Rainbow:J3,RainbowIcon:J3,Rat:Q3,RatIcon:Q3,Ratio:Y3,RatioIcon:Y3,Receipt:du,ReceiptCent:eu,ReceiptCentIcon:eu,ReceiptEuro:au,ReceiptEuroIcon:au,ReceiptIcon:du,ReceiptIndianRupee:tu,ReceiptIndianRupeeIcon:tu,ReceiptJapaneseYen:cu,ReceiptJapaneseYenIcon:cu,ReceiptPoundSterling:ou,ReceiptPoundSterlingIcon:ou,ReceiptRussianRuble:nu,ReceiptRussianRubleIcon:nu,ReceiptSwissFranc:iu,ReceiptSwissFrancIcon:iu,ReceiptText:hu,ReceiptTextIcon:hu,RectangleEllipsis:Pe,RectangleEllipsisIcon:Pe,RectangleHorizontal:ru,RectangleHorizontalIcon:ru,RectangleVertical:yu,RectangleVerticalIcon:yu,Recycle:lu,RecycleIcon:lu,Redo:su,Redo2:pu,Redo2Icon:pu,RedoDot:ku,RedoDotIcon:ku,RedoIcon:su,RefreshCcw:Mu,RefreshCcwDot:uu,RefreshCcwDotIcon:uu,RefreshCcwIcon:Mu,RefreshCw:Iu,RefreshCwIcon:Iu,RefreshCwOff:vu,RefreshCwOffIcon:vu,Refrigerator:mu,RefrigeratorIcon:mu,Regex:gu,RegexIcon:gu,RemoveFormatting:xu,RemoveFormattingIcon:xu,Repeat:wu,Repeat1:fu,Repeat1Icon:fu,Repeat2:Lu,Repeat2Icon:Lu,RepeatIcon:wu,Replace:bu,ReplaceAll:Cu,ReplaceAllIcon:Cu,ReplaceIcon:bu,Reply:qu,ReplyAll:Su,ReplyAllIcon:Su,ReplyIcon:qu,Rewind:Hu,RewindIcon:Hu,Ribbon:Au,RibbonIcon:Au,Rocket:Vu,RocketIcon:Vu,RockingChair:zu,RockingChairIcon:zu,RollerCoaster:Pu,RollerCoasterIcon:Pu,Rotate3D:_e,Rotate3DIcon:_e,Rotate3d:_e,Rotate3dIcon:_e,RotateCcw:ju,RotateCcwIcon:ju,RotateCcwSquare:_u,RotateCcwSquareIcon:_u,RotateCw:Fu,RotateCwIcon:Fu,RotateCwSquare:Bu,RotateCwSquareIcon:Bu,Route:Tu,RouteIcon:Tu,RouteOff:Du,RouteOffIcon:Du,Router:Ru,RouterIcon:Ru,Rows:je,Rows2:je,Rows2Icon:je,Rows3:Be,Rows3Icon:Be,Rows4:$u,Rows4Icon:$u,RowsIcon:je,Rss:Uu,RssIcon:Uu,Ruler:Ou,RulerIcon:Ou,RussianRuble:Zu,RussianRubleIcon:Zu,Sailboat:Gu,SailboatIcon:Gu,Salad:Eu,SaladIcon:Eu,Sandwich:Wu,SandwichIcon:Wu,Satellite:Xu,SatelliteDish:Nu,SatelliteDishIcon:Nu,SatelliteIcon:Xu,Save:Ju,SaveAll:Ku,SaveAllIcon:Ku,SaveIcon:Ju,Scale:Qu,Scale3D:Fe,Scale3DIcon:Fe,Scale3d:Fe,Scale3dIcon:Fe,ScaleIcon:Qu,Scaling:Yu,ScalingIcon:Yu,Scan:i6,ScanBarcode:e6,ScanBarcodeIcon:e6,ScanEye:a6,ScanEyeIcon:a6,ScanFace:t6,ScanFaceIcon:t6,ScanIcon:i6,ScanLine:c6,ScanLineIcon:c6,ScanSearch:o6,ScanSearchIcon:o6,ScanText:n6,ScanTextIcon:n6,ScatterChart:h6,ScatterChartIcon:h6,School:d6,School2:G2,School2Icon:G2,SchoolIcon:d6,Scissors:y6,ScissorsIcon:y6,ScissorsLineDashed:r6,ScissorsLineDashedIcon:r6,ScissorsSquare:V2,ScissorsSquareDashedBottom:t2,ScissorsSquareDashedBottomIcon:t2,ScissorsSquareIcon:V2,ScreenShare:p6,ScreenShareIcon:p6,ScreenShareOff:l6,ScreenShareOffIcon:l6,Scroll:s6,ScrollIcon:s6,ScrollText:k6,ScrollTextIcon:k6,Search:m6,SearchCheck:u6,SearchCheckIcon:u6,SearchCode:M6,SearchCodeIcon:M6,SearchIcon:m6,SearchSlash:v6,SearchSlashIcon:v6,SearchX:I6,SearchXIcon:I6,Section:g6,SectionIcon:g6,Send:f6,SendHorizonal:De,SendHorizonalIcon:De,SendHorizontal:De,SendHorizontalIcon:De,SendIcon:f6,SendToBack:x6,SendToBackIcon:x6,SeparatorHorizontal:L6,SeparatorHorizontalIcon:L6,SeparatorVertical:w6,SeparatorVerticalIcon:w6,Server:q6,ServerCog:C6,ServerCogIcon:C6,ServerCrash:b6,ServerCrashIcon:b6,ServerIcon:q6,ServerOff:S6,ServerOffIcon:S6,Settings:A6,Settings2:H6,Settings2Icon:H6,SettingsIcon:A6,Shapes:V6,ShapesIcon:V6,Share:P6,Share2:z6,Share2Icon:z6,ShareIcon:P6,Sheet:_6,SheetIcon:_6,Shell:j6,ShellIcon:j6,Shield:G6,ShieldAlert:B6,ShieldAlertIcon:B6,ShieldBan:F6,ShieldBanIcon:F6,ShieldCheck:D6,ShieldCheckIcon:D6,ShieldClose:Te,ShieldCloseIcon:Te,ShieldEllipsis:T6,ShieldEllipsisIcon:T6,ShieldHalf:R6,ShieldHalfIcon:R6,ShieldIcon:G6,ShieldMinus:$6,ShieldMinusIcon:$6,ShieldOff:U6,ShieldOffIcon:U6,ShieldPlus:O6,ShieldPlusIcon:O6,ShieldQuestion:Z6,ShieldQuestionIcon:Z6,ShieldX:Te,ShieldXIcon:Te,Ship:W6,ShipIcon:W6,ShipWheel:E6,ShipWheelIcon:E6,Shirt:N6,ShirtIcon:N6,ShoppingBag:X6,ShoppingBagIcon:X6,ShoppingBasket:K6,ShoppingBasketIcon:K6,ShoppingCart:J6,ShoppingCartIcon:J6,Shovel:Q6,ShovelIcon:Q6,ShowerHead:Y6,ShowerHeadIcon:Y6,Shrink:e8,ShrinkIcon:e8,Shrub:a8,ShrubIcon:a8,Shuffle:t8,ShuffleIcon:t8,Sidebar:Se,SidebarClose:we,SidebarCloseIcon:we,SidebarIcon:Se,SidebarOpen:be,SidebarOpenIcon:be,Sigma:c8,SigmaIcon:c8,SigmaSquare:z2,SigmaSquareIcon:z2,Signal:d8,SignalHigh:o8,SignalHighIcon:o8,SignalIcon:d8,SignalLow:n8,SignalLowIcon:n8,SignalMedium:i8,SignalMediumIcon:i8,SignalZero:h8,SignalZeroIcon:h8,Signpost:y8,SignpostBig:r8,SignpostBigIcon:r8,SignpostIcon:y8,Siren:l8,SirenIcon:l8,SkipBack:p8,SkipBackIcon:p8,SkipForward:k8,SkipForwardIcon:k8,Skull:s8,SkullIcon:s8,Slack:u8,SlackIcon:u8,Slash:M8,SlashIcon:M8,SlashSquare:P2,SlashSquareIcon:P2,Slice:v8,SliceIcon:v8,Sliders:Re,SlidersHorizontal:I8,SlidersHorizontalIcon:I8,SlidersIcon:Re,SlidersVertical:Re,SlidersVerticalIcon:Re,Smartphone:x8,SmartphoneCharging:m8,SmartphoneChargingIcon:m8,SmartphoneIcon:x8,SmartphoneNfc:g8,SmartphoneNfcIcon:g8,Smile:L8,SmileIcon:L8,SmilePlus:f8,SmilePlusIcon:f8,Snail:w8,SnailIcon:w8,Snowflake:C8,SnowflakeIcon:C8,Sofa:b8,SofaIcon:b8,SortAsc:t1,SortAscIcon:t1,SortDesc:Y,SortDescIcon:Y,Soup:S8,SoupIcon:S8,Space:q8,SpaceIcon:q8,Spade:H8,SpadeIcon:H8,Sparkle:A8,SparkleIcon:A8,Sparkles:$e,SparklesIcon:$e,Speaker:V8,SpeakerIcon:V8,Speech:z8,SpeechIcon:z8,SpellCheck:_8,SpellCheck2:P8,SpellCheck2Icon:P8,SpellCheckIcon:_8,Spline:j8,SplineIcon:j8,Split:B8,SplitIcon:B8,SplitSquareHorizontal:_2,SplitSquareHorizontalIcon:_2,SplitSquareVertical:j2,SplitSquareVerticalIcon:j2,SprayCan:F8,SprayCanIcon:F8,Sprout:D8,SproutIcon:D8,Square:O8,SquareActivity:Ue,SquareActivityIcon:Ue,SquareArrowDown:Ge,SquareArrowDownIcon:Ge,SquareArrowDownLeft:Oe,SquareArrowDownLeftIcon:Oe,SquareArrowDownRight:Ze,SquareArrowDownRightIcon:Ze,SquareArrowLeft:Ee,SquareArrowLeftIcon:Ee,SquareArrowOutDownLeft:We,SquareArrowOutDownLeftIcon:We,SquareArrowOutDownRight:Ne,SquareArrowOutDownRightIcon:Ne,SquareArrowOutUpLeft:Xe,SquareArrowOutUpLeftIcon:Xe,SquareArrowOutUpRight:Ke,SquareArrowOutUpRightIcon:Ke,SquareArrowRight:Je,SquareArrowRightIcon:Je,SquareArrowUp:e2,SquareArrowUpIcon:e2,SquareArrowUpLeft:Qe,SquareArrowUpLeftIcon:Qe,SquareArrowUpRight:Ye,SquareArrowUpRightIcon:Ye,SquareAsterisk:a2,SquareAsteriskIcon:a2,SquareBottomDashedScissors:t2,SquareBottomDashedScissorsIcon:t2,SquareCheck:o2,SquareCheckBig:c2,SquareCheckBigIcon:c2,SquareCheckIcon:o2,SquareChevronDown:n2,SquareChevronDownIcon:n2,SquareChevronLeft:i2,SquareChevronLeftIcon:i2,SquareChevronRight:h2,SquareChevronRightIcon:h2,SquareChevronUp:d2,SquareChevronUpIcon:d2,SquareCode:r2,SquareCodeIcon:r2,SquareDashedBottom:R8,SquareDashedBottomCode:T8,SquareDashedBottomCodeIcon:T8,SquareDashedBottomIcon:R8,SquareDashedKanban:y2,SquareDashedKanbanIcon:y2,SquareDashedMousePointer:l2,SquareDashedMousePointerIcon:l2,SquareDivide:p2,SquareDivideIcon:p2,SquareDot:k2,SquareDotIcon:k2,SquareEqual:s2,SquareEqualIcon:s2,SquareFunction:u2,SquareFunctionIcon:u2,SquareGanttChart:M2,SquareGanttChartIcon:M2,SquareIcon:O8,SquareKanban:v2,SquareKanbanIcon:v2,SquareLibrary:I2,SquareLibraryIcon:I2,SquareM:m2,SquareMIcon:m2,SquareMenu:g2,SquareMenuIcon:g2,SquareMinus:x2,SquareMinusIcon:x2,SquareMousePointer:f2,SquareMousePointerIcon:f2,SquareParking:w2,SquareParkingIcon:w2,SquareParkingOff:L2,SquareParkingOffIcon:L2,SquarePen:D,SquarePenIcon:D,SquarePercent:C2,SquarePercentIcon:C2,SquarePi:b2,SquarePiIcon:b2,SquarePilcrow:S2,SquarePilcrowIcon:S2,SquarePlay:q2,SquarePlayIcon:q2,SquarePlus:H2,SquarePlusIcon:H2,SquarePower:A2,SquarePowerIcon:A2,SquareRadical:$8,SquareRadicalIcon:$8,SquareScissors:V2,SquareScissorsIcon:V2,SquareSigma:z2,SquareSigmaIcon:z2,SquareSlash:P2,SquareSlashIcon:P2,SquareSplitHorizontal:_2,SquareSplitHorizontalIcon:_2,SquareSplitVertical:j2,SquareSplitVerticalIcon:j2,SquareStack:U8,SquareStackIcon:U8,SquareTerminal:B2,SquareTerminalIcon:B2,SquareUser:D2,SquareUserIcon:D2,SquareUserRound:F2,SquareUserRoundIcon:F2,SquareX:T2,SquareXIcon:T2,Squircle:Z8,SquircleIcon:Z8,Squirrel:G8,SquirrelIcon:G8,Stamp:E8,StampIcon:E8,Star:X8,StarHalf:W8,StarHalfIcon:W8,StarIcon:X8,StarOff:N8,StarOffIcon:N8,Stars:$e,StarsIcon:$e,StepBack:K8,StepBackIcon:K8,StepForward:J8,StepForwardIcon:J8,Stethoscope:Q8,StethoscopeIcon:Q8,Sticker:Y8,StickerIcon:Y8,StickyNote:e7,StickyNoteIcon:e7,StopCircle:D1,StopCircleIcon:D1,Store:a7,StoreIcon:a7,StretchHorizontal:t7,StretchHorizontalIcon:t7,StretchVertical:c7,StretchVerticalIcon:c7,Strikethrough:o7,StrikethroughIcon:o7,Subscript:n7,SubscriptIcon:n7,Subtitles:y1,SubtitlesIcon:y1,Sun:y7,SunDim:i7,SunDimIcon:i7,SunIcon:y7,SunMedium:h7,SunMediumIcon:h7,SunMoon:d7,SunMoonIcon:d7,SunSnow:r7,SunSnowIcon:r7,Sunrise:l7,SunriseIcon:l7,Sunset:p7,SunsetIcon:p7,Superscript:k7,SuperscriptIcon:k7,SwatchBook:s7,SwatchBookIcon:s7,SwissFranc:u7,SwissFrancIcon:u7,SwitchCamera:M7,SwitchCameraIcon:M7,Sword:v7,SwordIcon:v7,Swords:I7,SwordsIcon:I7,Syringe:m7,SyringeIcon:m7,Table:b7,Table2:g7,Table2Icon:g7,TableCellsMerge:x7,TableCellsMergeIcon:x7,TableCellsSplit:f7,TableCellsSplitIcon:f7,TableColumnsSplit:L7,TableColumnsSplitIcon:L7,TableIcon:b7,TableProperties:w7,TablePropertiesIcon:w7,TableRowsSplit:C7,TableRowsSplitIcon:C7,Tablet:q7,TabletIcon:q7,TabletSmartphone:S7,TabletSmartphoneIcon:S7,Tablets:H7,TabletsIcon:H7,Tag:A7,TagIcon:A7,Tags:V7,TagsIcon:V7,Tally1:z7,Tally1Icon:z7,Tally2:P7,Tally2Icon:P7,Tally3:_7,Tally3Icon:_7,Tally4:j7,Tally4Icon:j7,Tally5:B7,Tally5Icon:B7,Tangent:F7,TangentIcon:F7,Target:D7,TargetIcon:D7,Telescope:T7,TelescopeIcon:T7,Tent:$7,TentIcon:$7,TentTree:R7,TentTreeIcon:R7,Terminal:U7,TerminalIcon:U7,TerminalSquare:B2,TerminalSquareIcon:B2,TestTube:O7,TestTube2:R2,TestTube2Icon:R2,TestTubeDiagonal:R2,TestTubeDiagonalIcon:R2,TestTubeIcon:O7,TestTubes:Z7,TestTubesIcon:Z7,Text:X7,TextCursor:E7,TextCursorIcon:E7,TextCursorInput:G7,TextCursorInputIcon:G7,TextIcon:X7,TextQuote:W7,TextQuoteIcon:W7,TextSearch:N7,TextSearchIcon:N7,TextSelect:$2,TextSelectIcon:$2,TextSelection:$2,TextSelectionIcon:$2,Theater:K7,TheaterIcon:K7,Thermometer:Y7,ThermometerIcon:Y7,ThermometerSnowflake:J7,ThermometerSnowflakeIcon:J7,ThermometerSun:Q7,ThermometerSunIcon:Q7,ThumbsDown:e9,ThumbsDownIcon:e9,ThumbsUp:a9,ThumbsUpIcon:a9,Ticket:d9,TicketCheck:t9,TicketCheckIcon:t9,TicketIcon:d9,TicketMinus:c9,TicketMinusIcon:c9,TicketPercent:o9,TicketPercentIcon:o9,TicketPlus:n9,TicketPlusIcon:n9,TicketSlash:i9,TicketSlashIcon:i9,TicketX:h9,TicketXIcon:h9,Timer:l9,TimerIcon:l9,TimerOff:r9,TimerOffIcon:r9,TimerReset:y9,TimerResetIcon:y9,ToggleLeft:p9,ToggleLeftIcon:p9,ToggleRight:k9,ToggleRightIcon:k9,Tornado:s9,TornadoIcon:s9,Torus:u9,TorusIcon:u9,Touchpad:v9,TouchpadIcon:v9,TouchpadOff:M9,TouchpadOffIcon:M9,TowerControl:I9,TowerControlIcon:I9,ToyBrick:m9,ToyBrickIcon:m9,Tractor:g9,TractorIcon:g9,TrafficCone:x9,TrafficConeIcon:x9,Train:U2,TrainFront:L9,TrainFrontIcon:L9,TrainFrontTunnel:f9,TrainFrontTunnelIcon:f9,TrainIcon:U2,TrainTrack:w9,TrainTrackIcon:w9,TramFront:U2,TramFrontIcon:U2,Trash:b9,Trash2:C9,Trash2Icon:C9,TrashIcon:b9,TreeDeciduous:S9,TreeDeciduousIcon:S9,TreePalm:O2,TreePalmIcon:O2,TreePine:q9,TreePineIcon:q9,Trees:H9,TreesIcon:H9,Trello:A9,TrelloIcon:A9,TrendingDown:V9,TrendingDownIcon:V9,TrendingUp:z9,TrendingUpIcon:z9,Triangle:_9,TriangleAlert:Z2,TriangleAlertIcon:Z2,TriangleIcon:_9,TriangleRight:P9,TriangleRightIcon:P9,Trophy:j9,TrophyIcon:j9,Truck:B9,TruckIcon:B9,Turtle:F9,TurtleIcon:F9,Tv:T9,Tv2:D9,Tv2Icon:D9,TvIcon:T9,Twitch:R9,TwitchIcon:R9,Twitter:$9,TwitterIcon:$9,Type:U9,TypeIcon:U9,Umbrella:Z9,UmbrellaIcon:Z9,UmbrellaOff:O9,UmbrellaOffIcon:O9,Underline:G9,UnderlineIcon:G9,Undo:N9,Undo2:E9,Undo2Icon:E9,UndoDot:W9,UndoDotIcon:W9,UndoIcon:N9,UnfoldHorizontal:X9,UnfoldHorizontalIcon:X9,UnfoldVertical:K9,UnfoldVerticalIcon:K9,Ungroup:J9,UngroupIcon:J9,University:G2,UniversityIcon:G2,Unlink:Y9,Unlink2:Q9,Unlink2Icon:Q9,UnlinkIcon:Y9,Unlock:Me,UnlockIcon:Me,UnlockKeyhole:ue,UnlockKeyholeIcon:ue,Unplug:eM,UnplugIcon:eM,Upload:aM,UploadCloud:G1,UploadCloudIcon:G1,UploadIcon:aM,Usb:tM,UsbIcon:tM,User:yM,User2:J2,User2Icon:J2,UserCheck:cM,UserCheck2:E2,UserCheck2Icon:E2,UserCheckIcon:cM,UserCircle:R1,UserCircle2:T1,UserCircle2Icon:T1,UserCircleIcon:R1,UserCog:oM,UserCog2:W2,UserCog2Icon:W2,UserCogIcon:oM,UserIcon:yM,UserMinus:nM,UserMinus2:N2,UserMinus2Icon:N2,UserMinusIcon:nM,UserPlus:iM,UserPlus2:X2,UserPlus2Icon:X2,UserPlusIcon:iM,UserRound:J2,UserRoundCheck:E2,UserRoundCheckIcon:E2,UserRoundCog:W2,UserRoundCogIcon:W2,UserRoundIcon:J2,UserRoundMinus:N2,UserRoundMinusIcon:N2,UserRoundPlus:X2,UserRoundPlusIcon:X2,UserRoundSearch:hM,UserRoundSearchIcon:hM,UserRoundX:K2,UserRoundXIcon:K2,UserSearch:dM,UserSearchIcon:dM,UserSquare:D2,UserSquare2:F2,UserSquare2Icon:F2,UserSquareIcon:D2,UserX:rM,UserX2:K2,UserX2Icon:K2,UserXIcon:rM,Users:lM,Users2:Q2,Users2Icon:Q2,UsersIcon:lM,UsersRound:Q2,UsersRoundIcon:Q2,Utensils:kM,UtensilsCrossed:pM,UtensilsCrossedIcon:pM,UtensilsIcon:kM,UtilityPole:sM,UtilityPoleIcon:sM,Variable:uM,VariableIcon:uM,Vault:MM,VaultIcon:MM,Vegan:vM,VeganIcon:vM,VenetianMask:IM,VenetianMaskIcon:IM,Verified:n1,VerifiedIcon:n1,Vibrate:gM,VibrateIcon:gM,VibrateOff:mM,VibrateOffIcon:mM,Video:fM,VideoIcon:fM,VideoOff:xM,VideoOffIcon:xM,Videotape:LM,VideotapeIcon:LM,View:wM,ViewIcon:wM,Voicemail:CM,VoicemailIcon:CM,Volume:HM,Volume1:bM,Volume1Icon:bM,Volume2:SM,Volume2Icon:SM,VolumeIcon:HM,VolumeX:qM,VolumeXIcon:qM,Vote:AM,VoteIcon:AM,Wallet:zM,Wallet2:Y2,Wallet2Icon:Y2,WalletCards:VM,WalletCardsIcon:VM,WalletIcon:zM,WalletMinimal:Y2,WalletMinimalIcon:Y2,Wallpaper:PM,WallpaperIcon:PM,Wand:_M,Wand2:ea,Wand2Icon:ea,WandIcon:_M,WandSparkles:ea,WandSparklesIcon:ea,Warehouse:jM,WarehouseIcon:jM,WashingMachine:BM,WashingMachineIcon:BM,Watch:FM,WatchIcon:FM,Waves:DM,WavesIcon:DM,Waypoints:TM,WaypointsIcon:TM,Webcam:RM,WebcamIcon:RM,Webhook:UM,WebhookIcon:UM,WebhookOff:$M,WebhookOffIcon:$M,Weight:OM,WeightIcon:OM,Wheat:GM,WheatIcon:GM,WheatOff:ZM,WheatOffIcon:ZM,WholeWord:EM,WholeWordIcon:EM,Wifi:NM,WifiIcon:NM,WifiOff:WM,WifiOffIcon:WM,Wind:XM,WindIcon:XM,Wine:JM,WineIcon:JM,WineOff:KM,WineOffIcon:KM,Workflow:QM,WorkflowIcon:QM,Worm:YM,WormIcon:YM,WrapText:ev,WrapTextIcon:ev,Wrench:av,WrenchIcon:av,X:tv,XCircle:$1,XCircleIcon:$1,XIcon:tv,XOctagon:xe,XOctagonIcon:xe,XSquare:T2,XSquareIcon:T2,Youtube:cv,YoutubeIcon:cv,Zap:nv,ZapIcon:nv,ZapOff:ov,ZapOffIcon:ov,ZoomIn:iv,ZoomInIcon:iv,ZoomOut:hv,ZoomOutIcon:hv,createLucideIcon:e,icons:zL},Symbol.toStringTag,{value:"Module"})),E=v({__name:"Icon",props:{name:{},size:{},color:{},strokeWidth:{},defaultClass:{}},setup(c){const a=c,t=L(()=>PL[a.name]);return(n,o)=>(i(),g(aa(t.value),{size:n.size,color:n.color,"stroke-width":n.strokeWidth,"default-class":n.defaultClass},null,8,["size","color","stroke-width","default-class"]))}}),_L={id:"home",class:"min-h-screen flex flex-col items-center justify-center gap-4"},jL={class:"text-9xl"},BL={class:"text-4xl"},FL={class:"mt-4 flex gap-2"},DL=["href"],TL={href:"#about-me",class:"absolute bottom-16"},RL=v({__name:"Teaser",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r("section",_L,[d("h1",jL,m(h(a).teaser.title),1),d("h2",BL,m(h(a).teaser.subtitle),1),d("div",FL,[(i(!0),r(f,null,A(h(a).teaser.links,o=>(i(),r("a",{key:o.href,href:o.href,class:"py-1 px-1.5"},[M(E,{name:o.icon,size:32,"stroke-width":1},null,8,["name"])],8,DL))),128))]),d("a",TL,[M(E,{name:"ChevronDown",size:45,"stroke-width":1})])]))}}),$L={class:"pt-56 pb-36 max-w-6xl flex flex-col lg:flex-row items-center gap-16"},UL=["src"],OL={class:"flex flex-col gap-8"},ZL={class:"flex gap-8"},GL=["src"],EL=d("span",{class:"font-mono text-sm"},"About Me",-1),WL={class:"text-6xl sm:text-8xl"},NL={class:"flex items-center gap-4"},XL=["href"],KL=["href"],JL=v({__name:"Profile",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r("section",$L,[d("img",{class:"hidden lg:block w-80",src:h(a).profile.image},null,8,UL),d("div",OL,[d("div",ZL,[d("img",{class:"h-44 sm:h-56 lg:hidden",src:h(a).profile.image},null,8,GL),d("div",null,[EL,d("h2",WL,m(h(a).profile.title),1)])]),(i(!0),r(f,null,A(h(a).profile.text,o=>(i(),r("p",{key:o,class:"text-xl"},m(o),1))),128)),d("div",NL,[(i(!0),r(f,null,A(h(a).profile.links,o=>(i(),r(f,{key:o.href},[o.type==="button"?(i(),r("a",{key:0,href:o.href,class:"border-1 flex justify-center items-center py-2 px-4 font-mono"},m(o.text),9,XL)):o.type==="icon"?(i(),r("a",{key:1,href:o.href,class:"py-1 px-1.5"},[M(E,{name:o.icon,size:32,"stroke-width":1},null,8,["name"])],8,KL)):I("",!0)],64))),128))])])]))}}),QL=["src"],YL={class:"flex flex-col"},ew={class:"font-mono text-sm"},aw={class:"text-6xl md:text-8xl mb-8"},tw={class:"mt-8 flex items-center gap-4"},cw=["href"],ow=["href"],nw=v({__name:"Project",props:{project:{},reverse:{type:Boolean,default:!1}},setup(c){return(a,t)=>(i(),r("section",{class:V(["pt-56 pb-36 flex items-center gap-12 lg:gap-16 flex-col-reverse",a.reverse?"lg:flex-row-reverse":"lg:flex-row"])},[d("img",{class:"rounded-lg max-w-full",style:{width:"500px"},src:a.project.image},null,8,QL),d("div",YL,[d("span",ew,m(a.project.subtitle),1),d("h2",aw,m(a.project.title),1),(i(!0),r(f,null,A(a.project.text,n=>(i(),r("p",{key:n,class:"mb-2 text-xl"},m(n),1))),128)),d("div",tw,[(i(!0),r(f,null,A(a.project.links,n=>(i(),r(f,{key:n.href},[n.type==="button"?(i(),r("a",{key:0,href:n.href,class:"border-1 flex justify-center items-center py-2 px-4 font-mono"},m(n.text),9,cw)):n.type==="icon"?(i(),r("a",{key:1,href:n.href,class:"py-1 px-1.5"},[M(E,{name:n.icon,size:32,"stroke-width":1},null,8,["name"])],8,ow)):I("",!0)],64))),128))])])],2))}}),iw={class:"px-10 py-5 flex justify-between text-sm"},hw={class:"flex gap-4"},dw=["href"],zv=v({__name:"Footer",setup(c){const{theme:a}=T();function t(){return new Date().getFullYear()}return(n,o)=>(i(),r("footer",iw,[d("span",null," © "+m(t())+" - "+m(h(a).footer.copyright.author),1),d("nav",hw,[(i(!0),r(f,null,A(h(a).footer.links,y=>(i(),r("a",{key:y.href,href:y.href},m(y.text),9,dw))),128))])]))}}),Pv=c=>(B("data-v-d6a49394"),c=c(),F(),c),rw={class:"body font-sans text-white"},yw={class:"min-h-screen pb-24 px-4 max-w-2xl lg:max-w-6xl mx-auto"},lw=Pv(()=>d("div",{id:"about-me"},null,-1)),pw=Pv(()=>d("h1",{id:"open-source",class:"pt-56 text-2xl"},"Open Source",-1)),kw=Pv(()=>d("hr",null,null,-1)),sw=v({__name:"Home",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r("div",rw,[M(eI),d("main",yw,[M(RL),lw,M(JL),pw,kw,(i(!0),r(f,null,A(h(a).projects,(o,y)=>(i(),g(nw,{project:o,reverse:y%2===0},null,8,["project","reverse"]))),256))]),M(zv)]))}}),uw=x(sw,[["__scopeId","data-v-d6a49394"]]),Mw={class:"text-5xl"},vw=v({__name:"Introduction",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r(f,null,[d("h1",Mw,m(h(a).introduction.title),1),d("p",null,m(h(a).introduction.text),1)],64))}}),Iw={class:"text-3xl"},mw={class:"grid grid-cols-3 gap-y-3 gap-x-5"},gw={class:"flex gap-2 items-center"},xw=v({__name:"Skills",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r(f,null,[d("h2",Iw,m(h(a).skills.title),1),d("div",mw,[(i(!0),r(f,null,A(h(a).skills.skills,o=>(i(),r("div",gw,[M(E,{name:o.icon,size:28,"stroke-width":.75,class:"text-orange"},null,8,["name"]),d("span",null,m(o.title),1)]))),256))])],64))}}),fw=["href"],Lw={class:"text-lg"},ww={class:"text-gray"},Cw={class:"font-mono text-sm whitespace-nowrap"},_v=v({__name:"TimedEntry",props:{url:{},title:{},description:{},time:{}},setup(c){return(a,t)=>(i(),r("a",{href:a.url,class:"flex justify-between gap-4"},[d("div",null,[d("h3",Lw,m(a.title),1),d("span",ww,m(a.description),1)]),d("time",Cw,m(a.time),1)],8,fw))}}),bw={class:"text-3xl"},Sw={class:"flex flex-col gap-4"},qw=v({__name:"Experience",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r(f,null,[d("h2",bw,m(h(a).experience.title),1),d("ul",Sw,[(i(!0),r(f,null,A(h(a).experience.jobs,o=>(i(),r("li",null,[M(_v,{url:o.company.url,title:o.position,description:o.company.name,time:o.time},null,8,["url","title","description","time"])]))),256))])],64))}}),Hw={class:"text-3xl"},Aw={class:"flex flex-col gap-4"},Vw={class:"flex items-center gap-2"},zw={class:"text-lg"},Pw=["href"],_w={class:"text-gray"},jw={class:"flex gap-2"},Bw={class:"text-xs font-mono"},Fw=v({__name:"Projects",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r(f,null,[d("h2",Hw,m(h(a).projects.title),1),d("ul",Aw,[(i(!0),r(f,null,A(h(a).projects.projects,o=>(i(),r("li",null,[d("div",Vw,[d("h3",zw,m(o.title)+" –",1),d("a",{href:o.github_link,class:"flex items-center font-mono"},[M(E,{name:"Github",size:16,"stroke-width":1.5,class:"text-darkgray"}),R(" "+m(o.github_link.replace("https://github.com","")),1)],8,Pw)]),d("span",_w,m(o.description),1),d("div",jw,[(i(!0),r(f,null,A(o.tags,y=>(i(),r("span",Bw," #"+m(y),1))),256))])]))),256))])],64))}}),Dw={class:"text-3xl"},Tw={class:"flex flex-col gap-4"},Rw=v({__name:"Academia",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r(f,null,[d("h2",Dw,m(h(a).academia.title),1),d("ul",Tw,[(i(!0),r(f,null,A(h(a).academia.papers,o=>(i(),r("li",null,[M(_v,{url:o.url,title:o.title,description:o.journal,time:o.published_date},null,8,["url","title","description","time"])]))),256))])],64))}}),$w={class:"text-3xl"},Uw={class:"flex flex-col gap-4"},Ow=v({__name:"Education",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r(f,null,[d("h2",$w,m(h(a).education.title),1),d("ul",Uw,[(i(!0),r(f,null,A(h(a).education.degrees,o=>(i(),r("li",null,[M(_v,{url:o.url,title:o.title,description:o.institution,time:o.time},null,8,["url","title","description","time"])]))),256))])],64))}}),Zw={class:"text-3xl"},Gw={class:"flex pt-1"},Ew=["src"],Ww={class:"flex flex-col justify-center gap-1"},Nw={class:"ml-4"},Xw=["href"],Kw=["href"],Jw=["href"],Qw=["href"],Yw=v({__name:"Contact",setup(c){const{frontmatter:a}=T();return(t,n)=>(i(),r(f,null,[d("h2",Zw,m(h(a).contact.title),1),d("div",Gw,[d("div",null,[d("img",{src:h(a).contact.image,class:"rounded-full w-48"},null,8,Ew)]),d("div",Ww,[d("h3",Nw,m(h(a).contact.name),1),d("a",{href:`mailto:${h(a).contact.email}`,class:"ml-7"},m(h(a).contact.email),9,Xw),d("a",{href:`tel:${h(a).contact.phone.replace(" ","")}`,class:"font-mono ml-8"},m(h(a).contact.phone),9,Kw),d("a",{href:h(a).contact.github,class:"flex items-center font-mono ml-7"},[M(E,{name:"Github",size:16,"stroke-width":1.5,class:"text-darkgray"}),R(" "+m(h(a).contact.github.replace("https://github.com","")),1)],8,Jw),d("a",{href:h(a).contact.linkedin,class:"flex items-center font-mono ml-4"},[M(E,{name:"Linkedin",size:16,"stroke-width":1.5,class:"text-darkgray"}),R(" "+m(h(a).contact.linkedin.replace("https://www.linkedin.com/in","")),1)],8,Qw)])])],64))}}),eC={class:"bg-white flex flex-col items-center font-sans p-16 print:p-0"},aC={class:"max-w-2xl"},tC={class:"sections"},cC={class:"projects"},oC={class:"education"},nC=v({__name:"CV",setup(c){return(a,t)=>(i(),r("main",eC,[d("div",aC,[d("ol",tC,[d("li",null,[M(vw)]),d("li",null,[M(xw)]),d("li",null,[M(qw)]),d("li",cC,[M(Fw)]),d("li",null,[M(Rw)]),d("li",oC,[M(Ow)]),d("li",null,[M(Yw)])])]),M(zv,{class:"w-full max-w-2xl px-0 py-0 mt-20 print:hidden"})]))}}),iC=x(nC,[["__scopeId","data-v-966bde48"]]),hC={class:"body font-sans text-white"},dC={class:"min-h-screen px-10 py-28 flex justify-center max-w-3xl mx-auto"},rC=v({__name:"MarkdownBased",setup(c){return(a,t)=>{const n=N("Content");return i(),r("div",hC,[M(eI),d("main",dC,[M(n)]),M(zv)])}}}),yC=x(rC,[["__scopeId","data-v-243f905b"]]),lC={__name:"Layout",setup(c){return(a,t)=>a.$frontmatter.layout==="home"?(i(),g(uw,{key:0})):a.$frontmatter.layout==="cv"?(i(),g(iC,{key:1})):(i(),g(yC,{key:2}))}},kC={...wL,Layout:lC,enhanceApp({app:c}){}};export{kC as R};
