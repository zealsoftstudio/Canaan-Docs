import{f as o,g as t,o as r,c as d,a as p,_ as g}from"./app-21fd3c9b.js";const l=["href","title"],_=["src","alt"],i=o({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,required:!1,default:"next"}},setup(a){const e=a,c=t(()=>`https://www.npmjs.com/package/${e.package}`),n=t(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),s=t(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(n.value)}`);return(m,u)=>(r(),d("a",{class:"npm-badge",href:c.value,title:a.package,target:"_blank",rel:"noopener noreferrer"},[p("img",{src:s.value,alt:a.package},null,8,_)],8,l))}});const k=g(i,[["__scopeId","data-v-fc5dc7d9"],["__file","NpmBadge.vue"]]);export{k as default};
