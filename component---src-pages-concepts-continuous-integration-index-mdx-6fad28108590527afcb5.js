(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var i=a("pOBw"),n=a("q1tI"),o=a.n(n),s=a("NmYn"),r=a.n(s),l=a("OKom"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),h=function(e){var t,a=e.title,i=e.tabs,n=void 0===i?[]:i;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=n.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),A=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,i=m.data.site.siteMetadata.repository,n=a||i,o=n.baseUrl,s=n.subDirectory,r=o+"/edit/"+n.branch+s+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+A.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:A.link,href:r},"Edit this page on GitHub"))):null},y=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),j=a("I8xM");var w=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=r()(e,{lower:!0}),o=n===i,s=new RegExp(i+"(?!-)"),l=a.replace(s,n);return Object(d.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(d.b)(f.Link,{className:j.link,to:""+l},e))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:j.list},n))))))},i}(o.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,s=t.frontmatter,b=void 0===s?{}:s,p=t.relativePagePath,u=t.titleType,m=b.tabs,A=b.title,f=b.theme,j=b.description,O=b.keywords,N=i.data.site.pathPrefix,k=N?n.pathname.replace(N,""):n.pathname,I=m?k.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:m,homepage:!1,theme:f,pageTitle:A,pageDescription:j,pageKeywords:O,titleType:u},Object(d.b)(h,{title:o?Object(d.b)(o,null):A,label:"label",tabs:m}),m&&Object(d.b)(w,{slug:k,tabs:m,currentTab:I}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(y.a,{pageContext:t,location:n,slug:k,tabs:m,currentTab:I}),Object(d.b)(l.a,null))}},JJ4T:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),n=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var s={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=r("AnchorLinks"),c=r("AnchorLink"),b={_frontmatter:s},p=n.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(p,o({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"AnchorLinks"},Object(i.b)(c,{mdxType:"AnchorLink"},"Introduction"),Object(i.b)(c,{mdxType:"AnchorLink"},"What is continuous integration ?"),Object(i.b)(c,{mdxType:"AnchorLink"},"Continuous Integration"),Object(i.b)(c,{mdxType:"AnchorLink"},"Activities"),Object(i.b)(c,{mdxType:"AnchorLink"},"References")),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"Continuous Integration, Delivery, and Deployment are important devOps practices and we often hear a lot about them. These processes are valuable and ensures that the software is up to date timely."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Continuous Integration")," is an automation process which allows developers to integrate their work into a repository. When a developer pushes his work into the source code repository, it ensures that the software continues to work properly. It helps to enable collaborative development across the teams and also helps to identify the integration bugs sooner."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Continuous Delivery")," comes after Continuous Integration. It prepares the code for release. It automates the steps that are needed to deploy a build."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Continuoud Deployment")," is the final step which succeeds Continuous Delivery. It automatically deploys the code whenever a code change is done. Entire process of deployment is automated.")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.3%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAdqSgJf/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIDE//aAAgBAQABBQJymc4FnCP/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8BgX//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8BpX//xAAYEAEAAwEAAAAAAAAAAAAAAAAAASExMv/aAAgBAQAGPwLHKof/xAAYEAADAQEAAAAAAAAAAAAAAAAAAREh8f/aAAgBAQABPyFNoXYIZFH/2gAMAwEAAgADAAAAEAPv/8QAFhEBAQEAAAAAAAAAAAAAAAAAERAh/9oACAEDAQE/ENEn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAgEBPxCWlZ//xAAZEAEBAAMBAAAAAAAAAAAAAAABEQAh0XH/2gAIAQEAAT8QGIM9wowF07dyISble5//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cicd",title:"cicd",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/4edc6/cicd.jpg",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/69549/cicd.jpg 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/473e3/cicd.jpg 576w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/4edc6/cicd.jpg 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"What is continuous integration ?"),Object(i.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion.\nThis quote helps explain it:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Continuous Integration is a software development practice where members of a team integrate their work frequently,\nusually each person integrates at least daily - leading to multiple integrations per day.\nEach integration is verified by an automated build (including test) to\ndetect integration errors as quickly as possible. Many teams find that this approach leads to significantly\nreduced integration problems and allows a team to develop cohesive software more rapidly"),Object(i.b)("cite",null,"– Martin Fowler")),Object(i.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(i.b)("iframe",o({parentName:"div"},{src:"https://www.youtube.com/embed/1er2cjUq1UI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(i.b)("h2",null,"Continuous Integration"),Object(i.b)("p",null,"Continuous Integration is the first step to deliver high quality and efficient software. It is all about making sure that the software is working all the time and it is deployable at all times."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"695px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.82014388489208%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABxklEQVQoz4VS2UrDUBDNg//g5/hLvgu+ik+CP9AXl6oIBXGlgloUcUdt1cSkNG3TxiRNm6Xp7U16vFnadBEcGO5wZ86ZlUMkAwwGqYYSJO+loOGt3kbbozh4a8Dy+jEi8U/bHKU+ZiUYWY/VNmwaWhQ3ZQN2j04QDcmGL5c7ucPKWiaqSLF6UAwb+2e3KNd+oLkUQtNE/uICWxsZFHkeHstVMRwwF7T3PGqFDHzPGpFyYlnG9l4OtuOCsmDHIzi/K0LVTYS1u90udrIbyO5uQv9RImCX0Ci2Vf9Gg79Hr+ukhJbVga5psG171IrdMRH4aWuEEJgtMx5GEI9jwF5VMyDXmww7Rjjef7qY1B4SjJPFa5yUKDYkDBIjGBvwzIoi4tinOwQtlyQJUuxoy9PbVRsKNLXJ5qVCqVVZq8ZExEmpidd6ZyZpWEyHnRT3IJsoiDquJQOFbw3HL2UcPok4epZw8MDj9LUS+W8kHacfKuYWc1hYL+C51mbxOq6YvjB7Nc9jfukIXN8PQNjKiB9r8EfLfnKZlLW4fFhC9rEa/Xt9Hz0aIyTdwTb756bBruvg6+sTpVIRslyBJIoQBB4Cu0Gf9vGf/AJw8EStDaTm7AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ci",title:"ci",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/91bea3ab893c56cc609904f21a0e9c26/03efe/ci.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/91bea3ab893c56cc609904f21a0e9c26/7fc1e/ci.png 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/91bea3ab893c56cc609904f21a0e9c26/a5df1/ci.png 576w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/91bea3ab893c56cc609904f21a0e9c26/03efe/ci.png 695w"],sizes:"(max-width: 695px) 100vw, 695px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"It initially begins with the ",Object(i.b)("strong",{parentName:"p"},"development"),". Developers implement the new features or changes to the existing ones in small, tested batches and commit this code to a ",Object(i.b)("strong",{parentName:"p"},"Source Code Management (SCM)")," system such as Github, SVN, bitbucket etc. The next step will be the ",Object(i.b)("strong",{parentName:"p"},"build"),". This is done by the CI server like Tekton, Jenkins, Travis CI, Circle CI etc. The CI server is linked up with the GitHub repository to trigger the build either using web hook or by polling the repository for changes. When it gets the access to the latest code changes in the SCM system, it executes the build script generating new deployment artifacts. In case of build failures, it generates feedback and send the information to the corresponding members. Once this is completed, developers ",Object(i.b)("strong",{parentName:"p"},"package")," the build using Docker, Cloud Foundry etc. The builds along with their runtimes are packaged as immutable images. These images are later used for deployment in the further stages."),Object(i.b)("p",null,"Let us go through these steps in detail."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"811px"}},"\n      ",Object(i.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.4747225647349%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACBElEQVQ4y3VT2a7aMBTM//c3+g196EOlPrWAGqQrKPsWwhIghKwESDKdMckVum0tjRz7HI9nznGsOI5xv99xu93+C8U/Is9z3DhH+x18x8W9+xW9z59gNYT/Ii2Kwsxpmv6Fx+Nh4nmSIAljVIcVBt+/PAmV4DgOdrsdNpsNTqcTyrI0ZIq32210Oh20Wi3Yto1ut4v9fm9UFlWF/HyGxmTpwDoej4iiCEEQIAzD91lEr0ioRHMTP5PExLgfhRGqskC/34MlVb7vmwRB3z4VXi4Xs9ZhOZBaXSz1zb5ylTebz83c69WESlSCoECjJK6Va+8Viov0er0iyzIE9bch1AHZESIiJIku8LdbuG9vOPD2qN4z9kjWXK5GVqzdnfXWWCwWsBImaJTs2IUNSahAzyGjTcVSksiu1hEbkZI415rKTO1Zgi2blKxW+N3vw2q6KuxmMxy0Zm3ULNkI6lrKgeKhmsFvWZdKEXujERKWbjAYwJrT0oyJejZbKlhxnozHmEwm5tCW1tfrtWnMhodEpsu9+tlcuX8ix5UXDUlsxcnTckY1apAKrAcrSJXqJDKRuq6L5XJpLtK+4sob02pKtdPplIRHEmQ5chKqXrKppKqqnrVlwaVE1hqYB82cZkR1H+TUGn77ifkPGzP7F5zhCN7hYJQK+hsaeJ73jtf9Jk+vRX/SH0uq2Oce+CDAAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ci process",title:"ci process",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/469b948dabf282d6037df2dc01f0cbd0/fde9b/ci_process.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/469b948dabf282d6037df2dc01f0cbd0/7fc1e/ci_process.png 288w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/469b948dabf282d6037df2dc01f0cbd0/a5df1/ci_process.png 576w","/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/469b948dabf282d6037df2dc01f0cbd0/fde9b/ci_process.png 811w"],sizes:"(max-width: 811px) 100vw, 811px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Development")),Object(i.b)("p",null,"During the development, developers initially work in their local environments. They define code for new features or make changes to the existing feature. They make all this changes or additions in their local workspaces which are integrated with an Integrated Development Environment runtime. They may use build tools installed physically in their own workstation or they may use the ones existing on cloud (Web IDEs) based on their convenience. Once the code is defined, they do unit testing. Along with it they also do performance checks, data validations etc. They also test the software locally and validate the code changes using tests. If everything is fine, they push the changes to the source code management. Then a code review will be performed and if everything seems correct, then these changes will be merged into the main stream of the SCM system."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Source Control")),Object(i.b)("p",null,"Continuous Integration starts with source control system. Source Control systems helps us to store all the code in a single place. This source code can be accessed by multiple developers. It is easy to pull the changes, change them and push them back into the source control system. These can be viewed by other developers too."),Object(i.b)("p",null,"If you consider Git, in this source control system, you can have multiple branches of the same software and you can work on different things without conflicting with other parts of the software. For instance, let us say you have three different branches for dev, test and prod. Initially when the code is defined, it goes into dev branch. When the testing is completed, it is moved to test branch. And finally when we get the approval, it goes into prod branch. Or you may have a single main branch and create new branches for every release. These are few examples just for your understanding."),Object(i.b)("p",null,"This gives developers the capability to work on same project. They can work on different things. Even though if they work on the same thing, they need not worry about the overwriting."),Object(i.b)("p",null,"Source Control system is the place where you can store pretty much everything related to the software. Not only code, it is good to store all other things that are required to run your software like build scripts, test scripts, configurations etc in it."),Object(i.b)("p",null,"Whenever a code push is made by the developer to the source control system, it should be validated by the automated build server. It is always a good practice to keep the check-ins small. If you do large check-ins, it is hard to identify any error or bugs if they occur."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"CI Server")),Object(i.b)("p",null,"CI Server is used to automate the builds. There are many CI server software available today like Jenkins, Tavis CI, Bamboo etc."),Object(i.b)("p",null,"The source control repository is monitored by the CI server. The CI server is integrated to the repository and it starts the build whenever a change is pushed into the repository. The build has several steps like compiling the code, running unit tests, checking the code coverage, code linting, validating style guidelines, code minification etc. If the build is passed, it creates the build artifact. Otherwise, it will notify the failure. For instance, if the developer made a syntactical error like may be missing a semi colon and pushed in the code, then the unit tests fail. CI server will report this failure to the team by sending an email or however you configured it to send the information. Also, defining the failure conditions is up to the developer. If it is a compilation error, it obviously fails. You can also add conditions like there must be a code coverage of 80 % for your code etc."),Object(i.b)("p",null,"CI server builds the software. They also inform about the failures and successes. They build artifacts which will be later used to deploy the application."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Testing")),Object(i.b)("p",null,"Whenever a build is done on the CI server, it undergoes many tests to make sure the quality of the software is high. Various tests are performed as part of this process. Some of the important ones are as follows."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unit tests - Unit tests are defined to test small isolated parts of code. It is simple piece of code which calls a method to be tested. It passes the required input and verifies if the output obtained is correct."),Object(i.b)("li",{parentName:"ul"},"Integration tests - Integration tests tests the system as a whole. It validates if the entire system is working as expected. For example, if you want to know if your application properly interacts with the backend or to validate if the frontend properly interacts with the backend these tests will help to resolve them."),Object(i.b)("li",{parentName:"ul"},"Acceptance tests - An acceptance test tests whether a specific functionality works as described in the specification. These tests are written in the perspective of the user and it validates if the created feature is same as the requested one."),Object(i.b)("li",{parentName:"ul"},"Smoke tests - Smoke tests test if your software is working in a production environment. It tests the basic functionality and makes sure the most important parts of your software work properly.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Automation")),Object(i.b)("p",null,"Automation is a very important. When doing CI, the build process is all automated. It also uses automated tests to make sure that software is properly working after new code changes."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Teamwork")),Object(i.b)("p",null,"All the code changes are compiled. To reduce the bugs, we use automation testing as part of CI. Also, if the executable is tested on an environment which resembles your production environment, it makes your life easier."),Object(i.b)("p",null,"All this process cannot be just done by a single person. For suppose, if you develop a code and define unit tests to make sure everything works and other person from your team pushes large pieces of code without any unit tests, then it will be of no use. So, every member of the team should make efforts to successfully define the Continuous Integration for your software."),Object(i.b)("h2",null,"Activities"),Object(i.b)("p",null,"The continuous integration activities focus around Tekton the integration platform. These labs will show you how to build pipelines and test your code before deployment."),Object(i.b)("p",null,"These tasks assume that you have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reviewed the continuous integration concept page."),Object(i.b)("li",{parentName:"ul"},"Installed Tekton into your cluster.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",o({parentName:"tr"},{align:null}),"Task"),Object(i.b)("th",o({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",o({parentName:"tr"},{align:"left"}),"Link"),Object(i.b)("th",o({parentName:"tr"},{align:null}),"Time"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",o({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(i.b)("td",o({parentName:"tr"},{align:null})),Object(i.b)("td",o({parentName:"tr"},{align:"left"})),Object(i.b)("td",o({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",o({parentName:"tr"},{align:null}),"Deploying Applications From Source"),Object(i.b)("td",o({parentName:"tr"},{align:null}),"Using OpenShift 4"),Object(i.b)("td",o({parentName:"tr"},{align:"left"}),Object(i.b)("a",o({parentName:"td"},{href:"https://learn.openshift.com/introduction/deploying-python/"}),"S2I")),Object(i.b)("td",o({parentName:"tr"},{align:null}),"20 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",o({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(i.b)("td",o({parentName:"tr"},{align:null})),Object(i.b)("td",o({parentName:"tr"},{align:"left"})),Object(i.b)("td",o({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",o({parentName:"tr"},{align:null}),"Tekton Lab"),Object(i.b)("td",o({parentName:"tr"},{align:null}),"Using Tekton to test new versions of applications."),Object(i.b)("td",o({parentName:"tr"},{align:"left"}),Object(i.b)("a",o({parentName:"td"},{href:"../concepts/continuous-integration/activities/"}),"Tekton")),Object(i.b)("td",o({parentName:"tr"},{align:null}),"30 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",o({parentName:"tr"},{align:null}),"Jenkins Lab"),Object(i.b)("td",o({parentName:"tr"},{align:null}),"Using Jenkins to test new versions of applications."),Object(i.b)("td",o({parentName:"tr"},{align:"left"}),Object(i.b)("a",o({parentName:"td"},{href:"../concepts/continuous-integration/activities/jenkins-lab/"}),"Jenkins")),Object(i.b)("td",o({parentName:"tr"},{align:null}),"30 min")))),Object(i.b)("p",null,"Once you have completed these tasks, you will have an understanding of continuous integration and how to use Tekton to build a pipeline."),Object(i.b)("h2",null,"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"https://learning.oreilly.com/library/view/devops-continuous-delivery/9781789132991/"}),"Sricharan Vadapalli (2018). DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Publisher: Packt Publishing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"https://learning.oreilly.com/library/view/continuous-integration-delivery/9781787286610/"}),"Sander Rossel (2017). Continuous Integration, Delivery, and Deployment. Publisher: Packt Publishing"))))}u.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey"}}}')}}]);
//# sourceMappingURL=component---src-pages-concepts-continuous-integration-index-mdx-6fad28108590527afcb5.js.map