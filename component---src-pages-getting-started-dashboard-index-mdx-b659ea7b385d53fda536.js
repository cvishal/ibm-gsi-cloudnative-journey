(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),l=a.n(r),b=a("NmYn"),o=a.n(b),i=a("OKom"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},a)))))},g=a("pEPl"),O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=g.data.site.siteMetadata.repository,r=a||n,l=r.baseUrl,b=r.subDirectory,o=l+"/edit/"+r.branch+b+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},N=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),h=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0}),l=r===n,b=new RegExp(n+"(?!-)"),i=a.replace(b,r);return Object(m.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=l,t),h.listItem)},Object(m.b)(f.Link,{className:h.link,to:""+i},e))}));return Object(m.b)("div",{className:h.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:h.list},r))))))},n}(l.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,l=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,p=t.titleType,g=s.tabs,O=s.title,f=s.theme,h=s.description,C=s.keywords,k=n.data.site.pathPrefix,A=k?r.pathname.replace(k,""):r.pathname,w=g?A.split("/").filter(Boolean).slice(-1)[0]||o()(g[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:g,homepage:!1,theme:f,pageTitle:O,pageDescription:h,pageKeywords:C,titleType:p},Object(m.b)(u,{title:l?Object(m.b)(l,null):O,label:"label",tabs:g}),g&&Object(m.b)(y,{slug:A,tabs:g,currentTab:w}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:d})),Object(m.b)(N.a,{pageContext:t,location:r,slug:A,tabs:g,currentTab:w}),Object(m.b)(i.a,null))}},CXVj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return g}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z"),l=a("T0C+");a("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=i("PageDescription"),s=i("Accordion"),d=i("AccordionItem"),p=i("InlineNotification"),m={_frontmatter:o},u=r.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(u,b({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)(l.a,{name:"env",mdxType:"Globals"})," includes the Developer Dashboard")),Object(n.b)("p",null,"The Developer Dashboard is one of the tools running in your ",Object(n.b)(l.a,{name:"env",mdxType:"Globals"}),". It is designed to help you navigate to the installed tools and give you a simple way to perform common developer tasks, such as:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Dashboard"),": Navigate to the tools installed in the cluster"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Activation"),": Links to education to help you learn cloud-native development and deployment using IBM Cloud Kubernetes Service and Red Hat OpenShift on IBM Cloud"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},Object(n.b)(l.a,{name:"templates",mdxType:"Globals"})),": Links to templates that will help accelerate your project")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",b({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"83.44419807834443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAAC/UlEQVQ4y41US08TURi9bMSAEDbCQjeEhWv/i4RCCHWh3bOTjQtfCRsXmrjgpQmI0EploV00JsaEmNiIBktArVroi07pdDqd96M93nuHmbYLEr/k5M537twz32suCYdv4tbtCCKRCGZmZjA9PY1wOIypqanAZ2DPk5OTCIVCdA1hfPwGxXgXJiYmQISKiL9HeZRKReTzeRSLRTQaDZimCV3XYRgGX5vNJnxz3BbOM6KqCioVAZIkwbIsDtd1AzCfWTqdxvb2Nt6+S2D1ZQyvNt/g9VYc8Xic89FoFMlkEkRRFBQKBZTLZSpaR1WUINXrPEpFVQPBubk5DA0NYWxsDMPDlzEwcAn9fX3o7+/H4OAgCCEYHR0FYSmxw7LcoKk16FENulaHomhUzKGpe4Kzs7P8EDt8obcXPT093O/EyMgISGf+mSMJdx/v4XtG72C92qVSKSwvL2N9fZ1jbW0VS89fcKysrGBhYRGxWAyk2fQK/GwzC3JlC+Tae2x8EHD4S8Cd+W/I5DzxcllA9fS0uwN6DVCE7qaYlgvbsfHpsIT7qz+Ra6h4uHQAMryFi9c/IpGq8RfFmkTrW+WNsm0bBi2FqdahSxVYtgOHcbR8ZPdARjR5Ats18WW/yFNMfC5gfiODiq5S3+WClqLClBX+3DobIaMqQjrOwW21R4pYtufce7IPcjWOtYTM/Z29E+x8rXoCTFAzoMmq57dacKioVaURn5WBcSxygrMZ3dkV8ODpH/zIGRBqGh4tZnGY1dqCphGMEDvsizYMjf8EPkco6IEWinIV6UIJp7rcVWS/aRqdTUNtR8hq2Wy5KAoF/ocxYxxhm+0BceCHxIQ8MW/fpdE4jsM9PxrbtqBpGn+F+ez3JP5mywsVnX7AU1NpdNlsFnJDCQIoi79xfLLnBUMbwwXxn8ZrRsfLvyR4yk0vbd94yuwmYV9nhWVFtykMw4JuWMFlwTnTppzDO8k5uvoI3mNdFkWRXwyyLINdFCpFTVLoICvc9zmRchWxzZ2Hf/sdq3dTcpaPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",b({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Developer Dashboard",title:"Developer Dashboard",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/cf11111f799716ea7fbecc5f94c88328/3cbba/developer-dashboard.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/cf11111f799716ea7fbecc5f94c88328/7fc1e/developer-dashboard.png 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/cf11111f799716ea7fbecc5f94c88328/a5df1/developer-dashboard.png 576w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/cf11111f799716ea7fbecc5f94c88328/3cbba/developer-dashboard.png 1152w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/cf11111f799716ea7fbecc5f94c88328/cfd1e/developer-dashboard.png 1353w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,"Opening the Dashboard"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open a terminal"),Object(n.b)("li",{parentName:"ul"},"Make sure you are logged into your Development cluster in a terminal."),Object(n.b)("li",{parentName:"ul"},"To do so, navigate to your cluster in the ",Object(n.b)("em",{parentName:"li"},"IBM Cloud Console"),", click on the ",Object(n.b)("strong",{parentName:"li"},"Access")," tab and\nfollow the instructions to login from the command line"),Object(n.b)("li",{parentName:"ul"},"You can test this with the following simple command.")),Object(n.b)(s,{mdxType:"Accordion"},Object(n.b)(d,{title:"OpenShift",mdxType:"AccordionItem"},Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"oc get pods\n"))),Object(n.b)(d,{title:"Kubernetes",mdxType:"AccordionItem"},Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl get nodes\n")))),Object(n.b)("p",null),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To open the Dashboard, use the ",Object(n.b)("a",b({parentName:"p"},{href:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/guides/cli"}),"IGC CLI"),"."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",b({parentName:"pre"},{}),"igc dashboard\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This will open the Dashboard"))),Object(n.b)("h3",null,"Access the tools URLs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To list the ingress endpoints for all of the installed tools, use the ",Object(n.b)("a",b({parentName:"p"},{href:"../getting-started/cli"}),"Developer Tools CLI")," to run the following command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",b({parentName:"pre"},{className:"language-bash"}),"igc endpoints -n tools\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This will return the ingress URLs for all of the tools installed in the Developer Tools cluster."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",b({parentName:"pre"},{className:"language-bash"}),"? Endpoints in the 'tools' namespace. Select an endpoint to launch the default browser or 'Exit'.\n\n 1) Exit\n 2) developer-dashboard - http://dashboard.garage-dev-ocp4-c-518489-0143c5dd31acd8e030a1d6e0ab1380e3-0000.us-east.containers.appdomain.cloud\n 3) argocd-server - https://argocd-tools.gsi-learning-ocp311-clu-7ec5d722a0ab3f463fdc90eeb94dbc70-0001.eu-gb.containers.appdomain.cloud\n 4) artifactory - https://artifactory-tools.gsi-learning-ocp311-clu-7ec5d722a0ab3f463fdc90eeb94dbc70-0001.eu-gb.containers.appdomain.cloud\n 5) dashboard - https://dashboard-tools.gsi-learning-ocp311-clu-7ec5d722a0ab3f463fdc90eeb94dbc70-0001.eu-gb.containers.appdomain.cloud\n 6) developer-dashboard - http://dashboard.garage-dev-ocp4-c-518489-0143c5dd31acd8e030a1d6e0ab1380e3-0000.us-east.containers.appdomain.cloud\n(Move up and down to reveal more choices)\n Answer:\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can then select the URL to open the tools’ dashboard directly."))),Object(n.b)("h3",null,"Credentials"),Object(n.b)("p",null,"In the future, the tools in the Dashboard will be linked using a single sign-on (SSO) service.\nIn the meantime, the CLI includes a command to list the tools’ logins."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To list the logins for all of the installed tools, use the ",Object(n.b)("a",b({parentName:"p"},{href:"../getting-started/cli"}),"Developer Tools CLI")," to run the following command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",b({parentName:"pre"},{className:"language-bash"}),"igc credentials\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The command lists the ",Object(n.b)("inlineCode",{parentName:"p"},"userid")," and ",Object(n.b)("inlineCode",{parentName:"p"},"password")," for each tool installed. You can use these credentials to log into each of the installed tools."))),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,"If you are using OpenShift, the Jenkins credential\nwill be ",Object(n.b)("inlineCode",{parentName:"p"},"undefined")," because the OpenShift built in Jenkins service uses IBM cloud single sign-on mechanism.")),Object(n.b)("h3",null,"Customizing the Tools view"),Object(n.b)("p",null,"The tools dashboard supports a collection of tools links. These links can be\nadded to the ",Object(n.b)(l.a,{name:"env",mdxType:"Globals"})," using the ",Object(n.b)("inlineCode",{parentName:"p"},"igc")," command line. This\nenables a level of customization for the development. You can use this to\nlink out to your Cloud Pak main dashboards, or you can add a reference to\nyour Github project. "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"To add a tool follow the syntax below.  ",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",b({parentName:"pre"},{className:"language-bash"}),"igc tool-config --name <name of tool> --url <url of tool> \n")))),Object(n.b)("p",null,"The following is a list of supported tools that be configured for displayed."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Tool Name"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Name Parameter"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Pre-Configured"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"GitLab"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"gitlab")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"IBM Cloud GitLab instance for the region you are using"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Yes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Eclipse Che"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"che")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to Eclipse Che instance"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"No")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Jenkins"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"jenkins")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"If IKS configured by default"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Yes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Pipeline"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"pipeline")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"If OCP configured by default"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Yes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"ArgoCD"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"argocd")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to ArgoCD instance in cluster"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Yes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Artifactory"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"artifactory")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to Artifactory instance in cluster"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Yes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"SonarQube"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"sonarqube")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to SonarQube instance in cluster"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Yes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Pact"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"pact")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to Pact Broker instance in cluster"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Yes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Tekton"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"tekton")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to Tekton Dashboard in cluster"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"No")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Transformation Advisor"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"ta")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to Transformation Advisor tool in cluster"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"No")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Swagger Editor"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"apieditor")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to Swagger Editor instance in cluster"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Yes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"CodeReady Workspaces"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"codeready")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to CodeReady Workspaces instance in cluster"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"No")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"GitHub"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"github")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to teams GitHub organization"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Yes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Cloud Pak for Integration"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"integration")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to main console for Cloud Pak for Integration"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"No")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Cloud Pak for Multi Cloud Manager"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"mcm")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to main console for Cloud Pak for Multi Cloud Manager"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"No")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Cloud Pak for Data"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to main console for Cloud Pak for Data"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"No")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Cloud Pak for Automation"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"automation")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Link to main console for Cloud Pak for Automation"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"No")))))}g.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey"}}}')}}]);
//# sourceMappingURL=component---src-pages-getting-started-dashboard-index-mdx-b659ea7b385d53fda536.js.map