(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),o=a("NmYn"),l=a.n(o),b=a("OKom"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),i=r===n,o=new RegExp(n+"(?!-)"),b=a.replace(o,r);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(d.b)(f.Link,{className:N.link,to:""+b},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},r))))))},n}(i.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,m=s.tabs,j=s.title,f=s.theme,N=s.description,w=s.keywords,k=n.data.site.pathPrefix,A=k?r.pathname.replace(k,""):r.pathname,I=m?A.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:m,homepage:!1,theme:f,pageTitle:j,pageDescription:N,pageKeywords:w,titleType:u},Object(d.b)(g,{title:i?Object(d.b)(i,null):j,label:"label",tabs:m}),m&&Object(d.b)(y,{slug:A,tabs:m,currentTab:I}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:p})),Object(d.b)(h.a,{pageContext:t,location:r,slug:A,tabs:m,currentTab:I}),Object(d.b)(b.a,null))}},E9Nt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},b=l("PageDescription"),c=l("InlineNotification"),s={_frontmatter:o},p=r.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Learning tasks for developers working with Cloud Pak for Integration")),Object(n.b)(c,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Before you proceed, make sure you have an IBM GSI Sandbox invite. It enables you to access an IBM Cloud account with the ",Object(n.b)("a",{target:"_blank",href:"https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/overview"},"Developer Tools environment")," already installed and ready for you to use, including both a Kubernetes cluster and an OpenShift cluster. (The environment is locked down to prevent creating any new services.) Also, before proceeding:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Install the ",Object(n.b)("a",{target:"_blank",href:"https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/getting-started/cli"},"IBM Garage for Cloud CLI")," (again) to ensure you have the latest version"))),Object(n.b)("p",null,"This learning journey focuses on Cloud Pak for Integration (CP4I) and it has been installed with single sign on in the IBM Cloud in the same way a client\nwould have it configured for their account. This gives you access to all the software that is included in the\n",Object(n.b)("strong",{parentName:"p"},"CP4I")," offering, see the welcome screen below.   "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.48523206751055%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAADSElEQVQ4y02S7U+bZRTGbxxQFxG09OnT9mkpbVegK4V2K3SdBYZg4mRxyjJdMlhiJsYPanzBxWhiiC7xZR9GJL5SFrIggw86kaFOv/gP+B8YE0d1bGPt1rWU1/087ZR4J1fOdXKfXOe6r+dR9pYERrQHI9yN4YtguIP4/c0YhgdNc2K1ukrQNIfUIuzCbaVqter3oOnY7S7c7gaUGphAnfoB9fICZZFhdu4a5GFLHM3SLsP7ZLgN3dqG3bZXeBCbHsBhaxTuR9d9Ul1yL0u1ABZLG6qse4QHRn7m/ncv8+DBM1geOYXu7MFmTWDVO8RNHJstTmtLnyzYg8cTJ9x6gF3ednzevbLYS6CpFcMRktl2VLX/GfShL7G9NkVV3xlqet/D8D6O09WD3fUY5pJoouRW06KCsDgKi9OIuNpNrblenNYLb6K2NoLSGvoxR05Q2f0mqu99dj59FiN4BEfjk1R7D+MO9VPfdAizZZ846qLOlcBdt1/QjssVpakxJkJ10ock+04RbD5KuPdFwk+8gufEaWpfTaL1DlMTO0nZ/jeoij7PQ4GnqHY+KqF3iPNOqUXEcBhhESzm7cPlDOL1xlCOPc/yxfRlfvz1Nz6YmEcNvo0a+hh18C3US5PSj3Jf7AVM4ePU6HEs1nZ0o0syjmLRmjGb/djlQ+nyfIulCaW3HcXXNYhX4O4cpCp2jB0Dw5S/fpryD8+x46NJTCffQT8+Qk34GC7PAfyhPoKBHnEnwnoLoeZiFGH5EwKoikAvqqEb5ZP3uxMop8AQRA5Lps+hjgyhOvpRXQOowCGUBF9uj1FRtRuTqYGKCg+VlU5MlQ4qK2yoc7Pf89XsPGMXLvHZzJzUOT6ZvsjZyYuMTV9i7NufGJ1ZYHT+F+nn+PTr7/j8wgLj579hPDlLcmJG6jTj41Mkk1Mo/j2/L+X/oywXIJXd2u6v5WDx1nbLUrbA/8/ttbvbXG1ubpLN5fgjdZVsvsDW1iapG1n+XLrB6toaxfvrt+6QWs6wIbxQKLB4Lc31dJaN9XXyK6tcubpMLp9nfX3jnsOcCGbSaVZXi4J3uZO9TfrmsgyslwRSi1f4+69Uia/JksLKSglFgazMZtI3yWQypeX/AKYlOKpr0l5pAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CP4I Software Console",title:"CP4I Software Console",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/7206d41e1772852ad5a4d01276bf10a2/3cbba/icp4iwelcome.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/7206d41e1772852ad5a4d01276bf10a2/7fc1e/icp4iwelcome.png 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/7206d41e1772852ad5a4d01276bf10a2/a5df1/icp4iwelcome.png 576w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/7206d41e1772852ad5a4d01276bf10a2/3cbba/icp4iwelcome.png 1152w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/7206d41e1772852ad5a4d01276bf10a2/0b124/icp4iwelcome.png 1728w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/7206d41e1772852ad5a4d01276bf10a2/4ea69/icp4iwelcome.png 2304w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/7206d41e1772852ad5a4d01276bf10a2/d4a77/icp4iwelcome.png 2370w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"This learning tasks assumes that you have:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reviewed the content from the Agenda: ",Object(n.b)("a",i({parentName:"li"},{href:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/enablement/agenda#ibm-cloud-pak-for-integration"}),"IBM Cloud Pak for Integration")),Object(n.b)("li",{parentName:"ul"},"Seen a demo of each of the tasks below from the Video Presentation")),Object(n.b)("h3",null,"Learning Tasks"),Object(n.b)("p",null,"The learning tasks help you get a good understanding of the key usecases for Cloud Pak for Integration. "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"Task"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Link"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"Time"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Introduction"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Introduction to IBM Cloud Pak for Integration"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",i({parentName:"td"},{href:"https://www.ibm.com/cloud/cloud-pak-for-integration"}),"Introduction")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"1 hour")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Review"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"IBM Garage Reference Architecture for Integration"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",i({parentName:"td"},{href:"https://www.ibm.com/cloud/garage/architectures/modern-integration"}),"Reference Architecture")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"1 Hour")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Integration Modernization"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Agile Integration Architecture"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",i({parentName:"td"},{href:"https://www.ibm.com/cloud/integration/agile-integration"}),"Agile Architecture")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"1 Hour")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Videos"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Product Tours and Hands on lab for Cloud Pak for Integration"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",i({parentName:"td"},{href:"https://www.ibm.com/demos/collection/Cloud-Pak-for-Integration/"}),"Product Tours")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"4 hours")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Review Asset Repository"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Review the IBM Garage and Solution Engineering teams Asset repository"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",i({parentName:"td"},{href:"https://ibm-cloud-architecture.github.io/deliverables/integration.html"}),"Asset Repository")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"4 hours")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Labs 1"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Enable order processing flow using Event Streams, App Connect, MQ , API Connect and Asset Repository"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",i({parentName:"td"},{href:"https://github.ibm.com/rsundara/cp4i-labs/tree/master/lab1"}),"Lab")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"2 Hours")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Product Education"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Education for products contained in the Cloud Pak for Integration"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",i({parentName:"td"},{href:"https://www.ibm.com/services/learning/ites.wss/zz-en?pageType=journey_category&c=&tag=o-itns-01-02"}),"Product Education")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Self Paced")))),Object(n.b)("p",null,"Once you have completed these tasks, you will have completed these learning tasks. You will now have an understanding of the IBM Cloud\napproach to using ",Object(n.b)("strong",{parentName:"p"},"CP4I")," in Integration Solutions."),Object(n.b)("h3",null,"Review Learning Tasks"),Object(n.b)("p",null,"Working with colleagues review your learning tasks. The GSI team is looking for feedback from three perspectives:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"What went well?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"What needs improvement?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Next steps?"))))}u.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey"}}}')}}]);
//# sourceMappingURL=component---src-pages-enablement-tasks-icp-4-i-index-mdx-e91a4618b0f2c6d22048.js.map