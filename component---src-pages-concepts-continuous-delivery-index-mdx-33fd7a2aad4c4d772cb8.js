(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),i=a("q1tI"),o=a.n(i),s=a("NmYn"),r=a.n(s),l=a("OKom"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),u=a("qKvR"),A=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(u.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},a)))))},m=a("pEPl"),h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,i=a||n,o=i.baseUrl,s=i.subDirectory,r=o+"/edit/"+i.branch+s+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:r},"Edit this page on GitHub"))):null},y=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),j=a("I8xM");var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=r()(e,{lower:!0}),o=i===n,s=new RegExp(n+"(?!-)"),l=a.replace(s,i);return Object(u.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(u.b)(v.Link,{className:j.link,to:""+l},e))}));return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:j.list},i))))))},n}(o.a.Component),O=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,s=t.frontmatter,b=void 0===s?{}:s,p=t.relativePagePath,d=t.titleType,m=b.tabs,h=b.title,v=b.theme,j=b.description,w=b.keywords,N=n.data.site.pathPrefix,k=N?i.pathname.replace(N,""):i.pathname,D=m?k.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"";return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:v,pageTitle:h,pageDescription:j,pageKeywords:w,titleType:d},Object(u.b)(A,{title:o?Object(u.b)(o,null):h,label:"label",tabs:m}),m&&Object(u.b)(f,{slug:k,tabs:m,currentTab:D}),Object(u.b)(O.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:p})),Object(u.b)(y.a,{pageContext:t,location:i,slug:k,tabs:m,currentTab:D}),Object(u.b)(l.a,null))}},ON0k:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=r("AnchorLinks"),c=r("AnchorLink"),b={_frontmatter:s},p=i.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(p,o({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"AnchorLinks"},Object(n.b)(c,{mdxType:"AnchorLink"},"Introduction"),Object(n.b)(c,{mdxType:"AnchorLink"},"What is continuous delivery"),Object(n.b)(c,{mdxType:"AnchorLink"},"ArgoCD"),Object(n.b)(c,{mdxType:"AnchorLink"},"Continuous Delivery"),Object(n.b)(c,{mdxType:"AnchorLink"},"Continuous Deployment"),Object(n.b)(c,{mdxType:"AnchorLink"},"Activities"),Object(n.b)(c,{mdxType:"AnchorLink"},"References")),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"Continuous Integration, Delivery, and Deployment are important devOps practices and we often hear a lot about them. These processes are valuable and ensures that the software is up to date timely."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Continuous Integration")," is an automation process which allows developers to integrate their work into a repository. When a developer pushes his work into the source code repository, it ensures that the software continues to work properly. It helps to enable collaborative development across the teams and also helps to identify the integration bugs sooner."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Continuous Delivery")," comes after Continuous Integration. It prepares the code for release. It automates the steps that are needed to deploy a build."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Continuoud Deployment")," is the final step which succeeds Continuous Delivery. It automatically deploys the code whenever a code change is done. Entire process of deployment is automated.")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.3%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAdqSgJf/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIDE//aAAgBAQABBQJymc4FnCP/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8BgX//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8BpX//xAAYEAEAAwEAAAAAAAAAAAAAAAAAASExMv/aAAgBAQAGPwLHKof/xAAYEAADAQEAAAAAAAAAAAAAAAAAAREh8f/aAAgBAQABPyFNoXYIZFH/2gAMAwEAAgADAAAAEAPv/8QAFhEBAQEAAAAAAAAAAAAAAAAAERAh/9oACAEDAQE/ENEn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAgEBPxCWlZ//xAAZEAEBAAMBAAAAAAAAAAAAAAABEQAh0XH/2gAIAQEAAT8QGIM9wowF07dyISble5//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cicd",title:"cicd",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/4edc6/cicd.jpg",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/69549/cicd.jpg 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/473e3/cicd.jpg 576w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/4edc6/cicd.jpg 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"What is continuous delivery"),Object(n.b)("p",null,"Continuous delivery is the DevOps approach of frequently making new versions of an application’s components available for deployment to a runtime environment. The process involves automation of the build and validation process and concludes with a new version of the application that is available for promotion to another environment."),Object(n.b)("p",null,"Continuous delivery is closely related to continuous deployment. The distinction is:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Continuous delivery deploys an application when a user manually triggers deployment"),Object(n.b)("li",{parentName:"ul"},"Continuous deployment deploys an application automatically when it is ready")),Object(n.b)("p",null,"An application is ready for deployment when it passes a set of tests that prove it doesn’t contain any significant problems. These tests must be automated so that deployment can be automated. Until you have this set of automated tests and trust them sufficiently, stick with continuous delivery."),Object(n.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(n.b)("iframe",o({parentName:"div"},{src:"https://www.youtube.com/embed/2TTU5BB-k9U",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(n.b)("h2",null,"ArgoCD"),Object(n.b)("p",null,"ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes. In your applications, application definitions, configurations, and environments should be declarative and version controlled. Also application deployment and lifecycle management should be automated, auditable, and easy to understand. All this can be done using Argo."),Object(n.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(n.b)("iframe",o({parentName:"div"},{src:"https://www.youtube.com/embed/KJzgwJrY-mE",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(n.b)("p",null,"Check these guides out if you want to know more about Argo - ",Object(n.b)("a",o({parentName:"p"},{href:"https://argoproj.github.io/argo-cd/"}),"Argo CD - Declarative GitOps CD for Kubernetes"),"."),Object(n.b)("h2",null,"Continuous Delivery"),Object(n.b)("p",null,"Continuous Delivery is the next step for Continuous Integration. The artifacts produced in the Continous Integration stage will be deployed on a production like environment. It is more about making sure that the software is ready to be released and it can be deployed to production like environment at any time."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.82793017456359%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACQElEQVQ4y3VTyZbTMBD0/9+58A0cOMADTuRE4DQMTJbJnsixHe+7FluqaTshyZBMv9eWuiSVe7VabZDWCoVobrQkTSqJ6YphzRzkteyxuFIIy8u9nDQoVM9jaWMgmhYdcaP1RVsDYzTsHNhXQFZUeF7v0YlTAPOgpZ1B954rjUkA5BKw8KaY/quqFJA5kqLGj4lNiADquD+rZdM704kuiVHVsIzpPLmvnWQBg7ObI+Ya44DDdRnmsxE48YzdDHM/R017tnxCnvgXwt6nq1Wf9h7l6ss0xMTLwOIK36YB3g8ZvIzDTjm8XGDq5fi+TMBScRXy/6QnWNHf9wmnVff2IVdYhdXxsG36RdIdn/CuYHc91FQUbY4EBQ9BV084qAAxYXZv88CHyDI0RiEqlh01rIw9IZgMkNRUetKfwzE+vhuA7SIcKDm2u8Ly6wdESQGXvDikLgaTz0jSGLPIwSF0yNEKI3uDT7+msNh2jfHfh3PknFNumI3mVD1RCziTKdr2ZAuF3+MH1LzGYbVB4QfHVvIoz8sdLKUacCHPhN3DsizP4TeUJ931G+FSSigpUBbHHBoibQnT/Y94j1mXmlxyeVUjpEkCL07h+z4WiwX+PM+xXq8QxjHcOKMIqlfda90Sve7DAzW0Ta3hlBKppMkpJO0V5VvBpRF83Cd4tBOMnBTDdXR/Uq4JfXq4pTn1qGChaLGh+WJEynKODfUhI3vrRRivjr355uj9IxRCYLbZYe+4cByH5nmLiMJt6byQ7c27F3FjN8zZWAuUAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cd process",title:"cd process",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/f39f811b9a9ebbcd52a905fbd9bd79dd/32d86/cd_process.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/f39f811b9a9ebbcd52a905fbd9bd79dd/7fc1e/cd_process.png 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/f39f811b9a9ebbcd52a905fbd9bd79dd/a5df1/cd_process.png 576w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/f39f811b9a9ebbcd52a905fbd9bd79dd/32d86/cd_process.png 802w"],sizes:"(max-width: 802px) 100vw, 802px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Developer initially write code to implement a feature or make a change, compile it, and runs all the required tests. If it is running fine and working well, the next thing is to decide the release to the customer. Before doing the release, there are so many things one should take care of. We need to make sure all the configurations are done properly. Respective configuration files should be replaced correctly in the corresponding environments. Also, backups of the previous version of the software should be taken just in case to use them if the system breaks. There may be need to stop some of the services. For example, if your release involves updating the database, you need to stop some of the services which use that database. Also, when this process is done, we need to turn on the maintenance page because we don’t want our users to panic seeing this site can’t be reached. After doing all this, we test the software and if the tests are all working, we can restart the service we stopped previously."),Object(n.b)("p",null,"Initially, we deploy it to staging environment. If everything looks good, we will receive the approval and then we need to deploy it to production like environment. Once you get the approval, we need to do all the steps we did previously again. This process involves so many steps and it is hard to do all of them correctly every time."),Object(n.b)("p",null,"To make lives easier and not to miss any of the steps, automated deployment is necessary. This allows us to deploy more often. Just imagine, if you want to follow all the steps mentioned earlier for every small change, you tend to wait. If we do so and the changes are a lot, then there are more chances of failure and the system may break. So, making the release process automated is very important. By automation, it is easier to deploy smaller changes more frequently. It is also easier to rollback if there is a failure. Moreover, it reduces the overall risk of failure. This allows you to deploy to production like environment at any point of time. To make it possible, the software must all always be in a deliverable state. All your code should be compiled, tested, and the build should succeed."),Object(n.b)("h2",null,"Continuous Deployment"),Object(n.b)("p",null,"Continuous Deployment is the final step. In this stage, every change goes through the pipeline and if it passes all the tests, the code will be deployed into the production automatically. Every step should be automated in this process and the release quality depends mostly on the test suite as everything is automated."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.82793017456359%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACOklEQVQ4y3VTyZLTQAz1/9+58A0cOEABJ3Ji4DQVmMTJZE97iZe4HW+92O2H7IQsJNNVcqvV1mtJT7Ia0yKtNHJZ30lBwkuFyZJhxTxkleptSakRF5f/MpIo1z2OZdoWsm7QAdfGXKRp0bYGTga4JXDIS0xXLrrl5cAsakhr0fkLbWBHQKYAC2+utv/qMgVUBp5X+GE7ZJFAlfR3lar7YLplCkLUFay27SJ5LN06RAzedoZEGIwjAd9nmL2OIAjH3h0wC3NUpLPFCzIeXgD7mK52c9J3VKsvk7h3ZkmJb5MI758YdgcBxqt+nwQZvi84WCqvUv4f9GTW9LrLBe2mPweZxjIub4qjqN5hdiTxYYSGSDHtESAXMTSKkx1EQEI2t3+/dBjKKCISFfb5ooOGdWAviOwBeEXUk/x8GuPjuwHYdo+AiuP4Syy+fsCe5/ApuiD1MbA/g6cJpgGlHjpo6hIjZ41Pvyaw2GaF8Z/nc/hCCDjMQX1iT1YSnj1B05zOUmM4fkZVFSjqY4v1rbTbw15sYWldQ0h1Buwci6I4p183NUzXb2RXSkEriSIvz611JLB7SPQW68LJpZZXHCHlHLskRRiGmM/n+D2dYbVaIk4SeDGHLIsbgqx7oNs+DKihnYzSLhRSRZOTK9I11VvDpxEcuhxDh2PkpXha7R9PyjVgSI4bmtMdERbLBmuaL0agLBNYp9SLdN5Q/cbLY2++OXr/AKWUeF1v4Xo+PM+jed5gT+k2dJ+r5s7vL/MJOCkzPdWoAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cd deploy",title:"cd deploy",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/e30e91814e06b42594bcd499aca35979/32d86/cdply_process.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/e30e91814e06b42594bcd499aca35979/7fc1e/cdply_process.png 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/e30e91814e06b42594bcd499aca35979/a5df1/cdply_process.png 576w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/e30e91814e06b42594bcd499aca35979/32d86/cdply_process.png 802w"],sizes:"(max-width: 802px) 100vw, 802px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"All the steps that apply in Continuous Delivery also applies here. You may do some things manually in case of Continuous Delivery but in Continuous Deployment, everything is automated. So, basically every piece of code that is pushed in to the SCM system gets automatically deployed in production like environment if the build is successful. The rationale behind the process is that you are going to deploy the code to production sooner or later anyway."),Object(n.b)("p",null,"But it is always recommended not to use it. Because there may be many factors that need to be considered before the release like marketing etc. It is hard to achieve this using Continuous Deployment. But, Continuous Delivery is a must as we are enabling the capability to deliver the software to any given environment at any given time."),Object(n.b)("p",null,"To understand continuous delivery and deployment better, feel free to watch this ",Object(n.b)("a",o({parentName:"p"},{href:"https://mediacenter.ibm.com/media/Continuous+delivery+vs.+continuous+deployment/0_lcetzlcd"}),"video"),"."),Object(n.b)("h1",null,"Activities"),Object(n.b)("p",null,"These activites give you a chance to walkthrough building CD pipelines using ArgoCD."),Object(n.b)("p",null,"These tasks assume that you have:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reviewed the Continuous Deployment concept page.")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Task"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Link"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Time"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},Object(n.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:"left"})),Object(n.b)("td",o({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"GitOps"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Introduction to GitOps with OpenShift"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://learn.openshift.com/introduction/gitops-introduction/"}),"Learn OpenShift")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"20 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"GitOps Multi-cluster"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Multi-cluster GitOps with OpenShift"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://learn.openshift.com/introduction/gitops-multicluster/"}),"Learn OpenShift")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"20 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},Object(n.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:"left"})),Object(n.b)("td",o({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"ArgoCD Lab"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Learn how to setup ArgoCD and Deploy Application"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"../concepts/continuous-delivery/activities/"}),"ArgoCD")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"30 min")))),Object(n.b)("p",null,"Once you have completed these tasks, you will have created an ArgoCD deployment and have an understanding of Continuous Deployment."),Object(n.b)("h2",null,"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://learning.oreilly.com/library/view/devops-continuous-delivery/9781789132991/"}),"Sricharan Vadapalli (2018). DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Publisher: Packt Publishing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://learning.oreilly.com/library/view/continuous-integration-delivery/9781787286610/"}),"Sander Rossel (2017). Continuous Integration, Delivery, and Deployment. Publisher: Packt Publishing"))))}d.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey"}}}')}}]);
//# sourceMappingURL=component---src-pages-concepts-continuous-delivery-index-mdx-33fd7a2aad4c4d772cb8.js.map