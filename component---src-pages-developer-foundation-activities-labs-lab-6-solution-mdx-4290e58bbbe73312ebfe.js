(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{TGyQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var o=n("7ljp"),l=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var p={},b={_frontmatter:p},c=l.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(o.b)(c,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Solution"),Object(o.b)("p",null,"Update the deployment to the new version like so:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl set image deployment/jedi-deployment jedi-ws=bitnamy/nginx:1.18.1 --record\n")),Object(o.b)("p",null,"Check the progress of the rolling update:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl rollout status deployment/jedi-deployment\n")),Object(o.b)("p",null,"In another terminal window"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl get pods -w\n")),Object(o.b)("p",null,"Get a list of previous revisions."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl rollout history deployment/jedi-deployment\n")),Object(o.b)("p",null,"Undo the last revision."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl rollout undo deployment/jedi-deployment\n")),Object(o.b)("p",null,"Check the status of the rollout."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"kubectl rollout status deployment/jedi-deployment\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-lab-6-solution-mdx-4290e58bbbe73312ebfe.js.map