(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var i=a("pOBw"),r=a("q1tI"),s=a.n(r),o=a("NmYn"),n=a.n(o),c=a("OKom"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),h=a("qKvR"),u=function(e){var t,a=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(h.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:m.text},a)))))},d=a("pEPl"),g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,i=d.data.site.siteMetadata.repository,r=a||i,s=r.baseUrl,o=r.subDirectory,n=s+"/edit/"+r.branch+o+"/src/pages"+t;return s?Object(h.b)("div",{className:"bx--row "+g.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:g.link,href:n},"Edit this page on GitHub"))):null},y=a("FCXl"),j=(a("Oyvg"),a("Wbzz")),O=a("I8xM");var A=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=n()(e,{lower:!0}),s=r===i,o=new RegExp(i+"(?!-)"),c=a.replace(o,r);return Object(h.b)("li",{key:e,className:p()((t={},t[O.selectedItem]=s,t),O.listItem)},Object(h.b)(j.Link,{className:O.link,to:""+c},e))}));return Object(h.b)("div",{className:O.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",null,Object(h.b)("ul",{className:O.list},r))))))},i}(s.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,s=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,m=t.titleType,d=b.tabs,g=b.title,j=b.theme,O=b.description,v=b.keywords,w=i.data.site.pathPrefix,x=w?r.pathname.replace(w,""):r.pathname,k=d?x.split("/").filter(Boolean).slice(-1)[0]||n()(d[0],{lower:!0}):"";return Object(h.b)(l.a,{tabs:d,homepage:!1,theme:j,pageTitle:g,pageDescription:O,pageKeywords:v,titleType:m},Object(h.b)(u,{title:s?Object(h.b)(s,null):g,label:"label",tabs:d}),d&&Object(h.b)(A,{slug:x,tabs:d,currentTab:k}),Object(h.b)(N.a,{padded:!0},a,Object(h.b)(f,{relativePagePath:p})),Object(h.b)(y.a,{pageContext:t,location:r,slug:x,tabs:d,currentTab:k}),Object(h.b)(c.a,null))}},T2eJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),r=a("013z"),s=a("T0C+");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var n={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=c("PageDescription"),b=c("AnchorLinks"),p=c("AnchorLink"),m={_frontmatter:n},h=r.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(i.b)(h,o({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"Use Artifactory to store artifacts such as Helm charts")),Object(i.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(i.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/deliver/practice_delivery_pipeline/"}),"automate continuous delivery through a delivery pipeline"),", in part by using an artifact repository for storing output of the build stage. The ",Object(i.b)(s.a,{name:"env",mdxType:"Globals"})," uses Artifactory as an artifact repository manager, which it uses to host its Helm repository."),Object(i.b)("h2",null,"What is Artifactory"),Object(i.b)("p",null,Object(i.b)("a",o({parentName:"p"},{href:"https://jfrog.com/artifactory/"}),"Artifactory")," is an artifact management repository."),Object(i.b)("p",null,"An artifact repository manager hosts multiple binary repositories, like a database management system for artifacts. The binary repository compliments the source code repository: the code from an SCM is the input to the build process, whereas a binary repository stores the output of the build process, often called artifacts. The artifacts are often individual application components that can later be assembled into a full product."),Object(i.b)("p",null,"An artifact repository manager is an integral part of a CI/CD solution, a companion to the pipeline. As the pipeline builds artifacts, they’re stored in the repositories. When the pipeline later needs artifacts that have already been built, they’re retrieved from the repositories. This enables a build to be broken into smaller stages with well-defined inputs and outputs and provides better tracking of each stage’s results. Often a failed pipeline can restart in the middle using artifacts that were already built and stored."),Object(i.b)("p",null,"An artifact repository often serves as the storage for a package manager, which assembles an application from artifacts. Here are some common package managers and their repositories:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"https://maven.apache.org"}),Object(i.b)("strong",{parentName:"a"},"Maven")),": Builds Java artifacts (such as Jar, War, Ear, etc.) and projects stored in ",Object(i.b)("a",o({parentName:"li"},{href:"https://maven.apache.org/guides/introduction/introduction-to-repositories.html"}),"Maven repositories")," such as ",Object(i.b)("a",o({parentName:"li"},{href:"https://maven.apache.org/repository/index.html"}),"Maven Central")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"https://docs.npmjs.com/about-npm/"}),Object(i.b)("strong",{parentName:"a"},"npm")),": Assembles programs from JavaScript packages stored in ",Object(i.b)("a",o({parentName:"li"},{href:"https://docs.npmjs.com/misc/registry"}),"npm-registries")," such as the ",Object(i.b)("a",o({parentName:"li"},{href:"https://docs.npmjs.com/about-the-public-npm-registry"}),"public npm registry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"https://pypi.org/project/pip/"}),Object(i.b)("strong",{parentName:"a"},"PIP")),": Installs Python packages from ",Object(i.b)("a",o({parentName:"li"},{href:"https://packaging.python.org/guides/hosting-your-own-index/"}),"index repositories")," such as the ",Object(i.b)("a",o({parentName:"li"},{href:"https://pypi.org/"}),"Python Package Index (PyPI)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"https://helm.sh"}),Object(i.b)("strong",{parentName:"a"},"Helm")),": Deploys applications to Kubernetes using charts stored in ",Object(i.b)("a",o({parentName:"li"},{href:"https://helm.sh/docs/chart_repository/"}),"Helm repositories")," such as the ",Object(i.b)("a",o({parentName:"li"},{href:"https://helm.sh/blog/intro-helm-hub/"}),"Helm Hub")," catalog of repositories")),Object(i.b)("p",null,"Docker is not a package manager, but its architecture includes an artifact repository:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"https://www.docker.com/"}),Object(i.b)("strong",{parentName:"a"},"Docker")),": Stores images in ",Object(i.b)("a",o({parentName:"li"},{href:"https://docs.docker.com/registry/"}),"Docker registries")," such as ",Object(i.b)("a",o({parentName:"li"},{href:"https://docs.docker.com/docker-hub/"}),"Docker Hub"))),Object(i.b)("p",null,"Note that you do not need a very large team to start reaping benefits from an artifact repository manager. The initial investment is not very large and the benefits are felt immediately."),Object(i.b)("h2",null,"Artifact management in the Pipeline"),Object(i.b)("p",null,"Note: Be sure to ",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/getting-started/artifactory-setup"}),"set up Artifactory")," before using it in the Development Tools environment."),Object(i.b)("p",null,"The ",Object(i.b)(s.a,{name:"env",mdxType:"Globals"})," will eventually be extended to store a number of artifact types in Artifactory. Thus far, the CI and CD pipelines exchange two types of artifacts: Docker images and Helm charts. The CI pipeline (",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/guides/continuous-integration"}),"Jenkins"),", ",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/guides/continuous-integration-tekton"}),"Tekton"),", etc.) builds these artifacts and ArgoCD deploys them. To store and share the artifacts, the pipeline uses two repositories:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Docker images"),": The ",Object(i.b)("a",o({parentName:"li"},{href:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/guides/image-registry"}),"Developer Tools Image Registry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Helm charts"),": A Helm repository in Artifactory")),Object(i.b)("p",null,"The ",Object(i.b)("a",o({parentName:"p"},{href:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/codepatterns/overview"}),Object(i.b)(s.a,{name:"templates",mdxType:"Globals"}))," have also been configured to store their Helm charts in Artificatory."),Object(i.b)("p",null,"Artifactory is part of the ",Object(i.b)(s.a,{name:"env",mdxType:"Globals"}),"’s complete CI/CD solution:"),Object(i.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(i.b)(p,{to:"../../guides/continuous-integration",mdxType:"AnchorLink"},"Continuous Integration"),Object(i.b)(p,{to:"../../guides/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery")),Object(i.b)("h3",null,"Artifactory dashboard"),Object(i.b)("p",null,"Use the Artifactory dashboard to browse the repositories and their artifacts."),Object(i.b)("p",null,"Open the Artifactory web UI for your environment."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("a",o({parentName:"li"},{href:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/getting-started/dashboard"}),Object(i.b)(s.a,{name:"dashboard",mdxType:"Globals"}))," to open the Artifactory dashboard")),Object(i.b)("p",null,"Browse the Helm repository."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to the Artifact Repository Browser page"),Object(i.b)("li",{parentName:"ul"},"Expand the tree for the ",Object(i.b)("inlineCode",{parentName:"li"},"generic-local")," repository, which is the Helm repository"),Object(i.b)("li",{parentName:"ul"},"Expand the branch for your environment’s cluster, such as ",Object(i.b)("inlineCode",{parentName:"li"},"showcase-dev-iks"))),Object(i.b)("p",null,"The artifacts in the cluster’s branch follow the ",Object(i.b)("a",o({parentName:"p"},{href:"https://helm.sh/docs/chart_repository/"}),"Helm chart repository")," structure:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"index.yaml"),": Helm’s index of all of the charts in the repository"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"charts"),": The ",Object(i.b)("inlineCode",{parentName:"li"},"tgz")," files named for the application they deploy\n",Object(i.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"461px"}}),"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.32321041214749%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACzklEQVQ4y4WT60tTcRjHz3/jDY2BYbtZKIkJkhhaWb1MCCKxgijoRWbLPyEKonCbli96UwmGSS96IV02zSBZkivXNtl2tnPdznbOt9/zm2ed6cAffPld9jyf89wmDM4O4Ux4FIPBIYwtXMTp0DBGX5zHhYVLGJ4b4RqYHcTJZ/3oe37qUAlnX41hfPEKhl+OYPLtDdxauo2rrydwffEm269h4s0kRubP4eijY/A88cP92FcnenNK6Lvbj/47A7j8dByBDzOYfh/A1PI07i3f5+fplQAerDxEYGWmtjs19Y7ZLk0x3ecSTviOw3XEhfngHNKJNFY/rmLtyxo2v28i8imC6Oco1r+uc8V+xNg9gm+RdWxEN5hdFEpeAcqAWTJhGiYEr8+L1tZWBINBKIqC7fg2VzKZxE5iB7GfMcTj8ap+x/kb7fZdkiVougZZliErMgS/34/Ozk4OpJXRszDKBiSJGWoaDluGYUAURW6fzWZZhF4v2traakBZlTmIvkgR67qOYrHI91KpBNM0D6hcLsOyLA7lwJaWFoTDYQ4kmKqqyOfzXIVCoXYmKC1ybrQoCMHn89UBCUZfKjAAwSnKekAD2N7vHEg17OjoQDAUgsEedyUVOxkRW39T2EqkEPuTYHuS33+ldpFVdWQUh+y7WkRGzEPo7u6Gy+Wq1VDSdMh6ETlZQSqTQzorIp1jyuaQV1RoRgWqUebS9vbquQKxIFUjbG9vr6VsVio8BdNkjqoCeS992i3L5O8Wa8R+kQ9PuaenB263GyGWMi3qGHWOOiqyFKiG1BCqK42HLd4sJqo5gWybA122gTRf5ETGuVyurtt290nUOALVgL29vejq6qqLkLpKQDKyR4iMnbLnlIDkQ/YNx2Y/kJwpQhtkR2YD6a1uDj0eD5qamhqmTMbOGjpF7ySCWM45pBo2NzcfAFab8v8/akdm14+c7YidwH832cIwuW/ueAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Artifact Repository Browser",title:"Artifact Repository Browser",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a6d2b6618e0df652d9f9d60f9f5f6a9f/9b127/artifact-repo-browser.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a6d2b6618e0df652d9f9d60f9f5f6a9f/7fc1e/artifact-repo-browser.png 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a6d2b6618e0df652d9f9d60f9f5f6a9f/9b127/artifact-repo-browser.png 461w"],sizes:"(max-width: 461px) 100vw, 461px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("p",null,"Browse the artifacts to see how a Helm repository is organized."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select the ",Object(i.b)("inlineCode",{parentName:"li"},"index.yaml")," file and View it to see its contents\n",Object(i.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"873px"}}),"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.57044673539518%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABuUlEQVQ4y6VSi26DMAzk/z9xWllpGd3aQgkhIS/wfC7puoc2aUM6nROU8/lR9H1P+/2eDocDjeP4LwzDQIVzjowxNE0ThRDIe/8nZJ2C+IsxEpxCdJ5nXNGyLBJn4Pwd8j+8BYp8yGWfz2fquk7sIxEA578hpSQokAFB27a03W7pdDpJP5AEZVhrRTQ/yMiJMn8QxCVcwWXTNMJ1XdNut6PNZiPtQBKt9Y2R8N79J8FAl0snYigb3DQHiVE6BIZBMQ/ceC3s3MQCcP5JED0MIdHLi6Nt5aiqApfu2KWnaufZqZf4eIzsbiY1JBa8slI8TAWXGOTCxlZB5yKV5YUeHl6ZO+6n45ISu4krBxbzAq39GvOd3GPVIuVZSMmw3LYndvckPI6ah2EEKA8tWRasR1qBVbqWi7K/9PAq2MkQ6vqZhasbyrKUgfW9kuEoNUhsjOV3PwxFqQv36Sh7iNUBsEpYG8AYrJLh9ljhGL24hdP7tSpg35iJp6p5RTQ7MvS4MXc88v3Izi0nmDjRtLJlGDZhuEXTTVSGktIszXcuMUcBBpU5x9ZGGRT4HUlKhyC0WJD+/V1XL0j8BqfRidaOH+8pAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Helm Repository Index",title:"Helm Repository Index",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/0ef6e45f1e00327f32f533f9b20c7329/e4f79/helm-repo-index.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/0ef6e45f1e00327f32f533f9b20c7329/7fc1e/helm-repo-index.png 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/0ef6e45f1e00327f32f533f9b20c7329/a5df1/helm-repo-index.png 576w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/0ef6e45f1e00327f32f533f9b20c7329/e4f79/helm-repo-index.png 873w"],sizes:"(max-width: 873px) 100vw, 873px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ul"},"Expand a chart’s branch to see that the ",Object(i.b)("inlineCode",{parentName:"li"},"tgz")," file contains the chart directory structure\n",Object(i.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"480px"}}),"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"125.41666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAsSAAALEgHS3X78AAADKklEQVQ4y51Ua08TQRTdnwRNoRTagppo9ItRUBKDQkw0IsHHJ/0VChKe8QsxRo2amNAWDF+I8tBEHhFI0MYYaQu0S/fVx7bbhePcqdMsVCVlkpN7d3bm7Jl77qx0/tkFXHzehrYXl9HxphOtLF5904Vrb7vQ/uoKLr1sx5nxczg9ftYRBc5VQOoIduLm+260vr6Mu+H7uBO+h+vvbqAn2ItbE7fRPdGDpqcB1I02oH7Ui/oxL8tLqP8LpBN3T+FE70k8ePEQgwtDeDzTj74PT/Bopg/9HwcwMDuIodlhDM+PcgyyfGRhDKMMw3MjGDoEKeAJwF/vx/TENKKRKBbnFrGxsoHIagRL80v4/vUbVj6vYH1pHZG1CNa+rPJ8+dMyktEk+Cgy2CVIHq8HLrcLwXAIpmVCVmTsKrtQNRXbiW3spko5zckpGZquIaWkeG5kDOTMHItpaIbGITU3N8Pn9yEUDPGPqaYK0zShazoKhQKOGsViEZqmIZ1O8yh5PB7U1NQgHA7zBdlsloNeUsxkMtB1ncO2bezv72Nvb68MeqZBH5dlGVJjYyPq6uowOTnJXxABgb4o8nw+zzeIzc4h5mh9NBqF1NDQAJfLVSbM5XJcnaqqB5Q51VB0QgiJxWKQ/H4/mpqaykemjaRIHFWopVzU9L+EXq8Xbre7rNC2izxaVoHX0DAMRmjAOsIgWssJW1paQE4HQyHQFtnIQsnmEZNT+LmVwI/YFiKbcfzaSTLIPG4mZESTu2yNwmKKI86e4/E4JJ/PB6pjiB2ZxGtZE+m8BSWdxU5KxRYjJtAGirFEkkHmOb1PqjpHIqWUCAOBAMjpcg1t29FjFkxmks5M0phJBMozrKYGq2malUOsLx+ZCKmOgpAa1VnwfKFUS103uPOHm73CFNHYU1NTFYSiVWiOzCFQS1EXON0+QEj1q62tLbt8mJBAc3QdxfWi+E+FRxFStCyr4gbR0cVVPJZC2qAoCgfVkkCqxahaofNuE+w/7latUMwJIjKG1NHcsQjpmVwVRGSK889TFSGBNtNxqRdFdDpctULhsOhBIj38G6tKoTBENDbhf4S/AdHkyYvConYvAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Helm Chart Structure",title:"Helm Chart Structure",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6a53b5961d67badb27d55d9b510dec16/c9161/helm-chart-structure.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6a53b5961d67badb27d55d9b510dec16/7fc1e/helm-chart-structure.png 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6a53b5961d67badb27d55d9b510dec16/c9161/helm-chart-structure.png 480w"],sizes:"(max-width: 480px) 100vw, 480px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("p",null,"Notice that each chart has its own URL in Artifactory, and index lists the URL for a chart."),Object(i.b)("h2",null,"Conclusion"),Object(i.b)("p",null,"The ",Object(i.b)(s.a,{name:"env",mdxType:"Globals"})," includes an artifact repository manager called Artifactory, which it uses to host a Helm repository.\nAs the CI pipeline builds the Helm chart for an application, it stores the chart in the Artifactory repository. When the ArgoCD pipeline deploys an application, it retrieves the chart from the Artifactory repository."))}u.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey"}}}')}}]);
//# sourceMappingURL=component---src-pages-practical-artifact-management-index-mdx-c76a3315bc68920bcee4.js.map