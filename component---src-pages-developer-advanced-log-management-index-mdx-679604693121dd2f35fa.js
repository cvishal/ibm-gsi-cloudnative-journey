(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+Ile":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z"),i=a("T0C+");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=s("PageDescription"),c=s("AnchorLinks"),b=s("AnchorLink"),g={_frontmatter:l},m=o.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(m,r({},g,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(p,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use LogDNA to manage your running application’s logs")),Object(n.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"}),"automate application monitoring"),", including logging. Imagine your application isn’t working right in production even though the environment is fine. What information would you want in your logs to help you figure out what’s wrong with your application? Build logging messages for that information into your application."),Object(n.b)("p",null,"Given that your application is logging, as are lots of other applications and services in your cloud environment, these logs need to be managed and made accessible. LogDNA adds log management capabilities to a Kubernetes cluster and its deployments. The ",Object(n.b)(i.a,{name:"env",mdxType:"Globals"})," includes an IBM Log Analysis with LogDNA service instance configured with a LogDNA agent installed in the environment’s cluster. Simply by deploying your application into the ",Object(n.b)(i.a,{name:"env",mdxType:"Globals"}),", LogDNA collects the logs, just open the LogDNA web UI from the IBM Cloud dashboard to browse your application’s logs."),Object(n.b)("h2",null,"LogDNA log management"),Object(n.b)("p",null,Object(n.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA"}),"IBM Log Analysis with LogDNA")," explains how to configure and use an instance of the LogDNA service, but the ",Object(n.b)(i.a,{name:"env",mdxType:"Globals"})," has already done this for you. You can skip these steps about provisioning an instance, installing an agent, and user access."),Object(n.b)("h3",null,"LogDNA dashboard"),Object(n.b)("p",null,"Open the LogDNA web UI for your environment’s cluster"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA?topic=LogDNA-view_logs"}),"IBM Log Analysis with LogDNA: Viewing logs"),"\nexplains how to open the web UI"),Object(n.b)("li",{parentName:"ul"},"In the IBM Cloud dashboard, In the navigation menu. Select the ",Object(n.b)("strong",{parentName:"li"},"Observability")," > ",Object(n.b)("strong",{parentName:"li"},"Logging")),Object(n.b)("li",{parentName:"ul"},"Find the logging instance named after your environment’s cluster, such as ",Object(n.b)("inlineCode",{parentName:"li"},"showcase-dev-iks-logdna"),". To help find it,\nyou can filter by your resource group.\n",Object(n.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1026px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAeElEQVQI1z2NQQ7CMBAD+/+XceQDHFAFRUCTpmWzu2nQsOqBg6WxJduDTwndG6oaMtQFtWCzw3tznvnG/X1FbKX3b3gJVZaPMxc9OK2GeWNoj4y4I1KRqv/BGiyiWKuM5cxlPpF0ZG+dXLYo73HWeS3KNAtpsyP7AcmLmfZ/MF6GAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"LogDNA Logging Instance",title:"LogDNA Logging Instance",src:"/ibm-gsi-cloudnative-journey/static/920bfed8a9f8edfb6c874be93adb3784/cb6df/logdna-logging-instance.png",srcSet:["/ibm-gsi-cloudnative-journey/static/920bfed8a9f8edfb6c874be93adb3784/7fc1e/logdna-logging-instance.png 288w","/ibm-gsi-cloudnative-journey/static/920bfed8a9f8edfb6c874be93adb3784/a5df1/logdna-logging-instance.png 576w","/ibm-gsi-cloudnative-journey/static/920bfed8a9f8edfb6c874be93adb3784/cb6df/logdna-logging-instance.png 1026w"],sizes:"(max-width: 1026px) 100vw, 1026px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},"In the logging instance, press the ",Object(n.b)("strong",{parentName:"li"},"View LogDNA")," button to open the LogDNA web UI")),Object(n.b)("h2",null,"Give it a try"),Object(n.b)("p",null,"Before you start to understanding how to look at your application logs, make sure you have ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/developer-intermediate/deploy-app"}),"deployed an app")," into your development cluster. Each of the template apps has a logging framework included, Use this git repo  ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/IBM/template-node-typescript/generate"}),"template-node-typescript")," as an example."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"LogDNA")," service is already created, bound and configured to listen to logs from your development cluster."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the **LogDNA instance that is named the same as your development cluster")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"All Apps")," and enter the name of your app or narrow the app selection using the suffix that you used to create it\n",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"605px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.68055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABA0lEQVQoz6WN0VKDMBRE+f/fUl86VahASbBFCy0wJSSQpA6UwhrS6oMv6piZM7t3s3Ov4y7v4S7vQIIFIn8Bz8yrxwfLhjxhS91fkcQeEqMO26VgaYYmz9EccvD94Yu2KCCL0vCp37nmc49nGfYJhTPUCtA9cDrf6K/zjJrpfkZ3eC85FGdw+q6H1hoDkxhKgbE7YxxHjJfLn5imCUpyOForVNUR7FihFQ3+81RrFkp9gmglpGwheI1GcKPMeiFq1KwCMwdnnZlzXjP7ZzumWxa5zexCGlNEhGC7oaCRjxcaIiYByPrZahh4CH0PUbiyfh0Y9V28JjHKPEVx2OHt5mXD8AHYeQ4VEbpCVgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AllAps",title:"AllAps",src:"/ibm-gsi-cloudnative-journey/static/0c42420d71c996f75d96205ed7b54c39/29a2c/allapps.png",srcSet:["/ibm-gsi-cloudnative-journey/static/0c42420d71c996f75d96205ed7b54c39/7fc1e/allapps.png 288w","/ibm-gsi-cloudnative-journey/static/0c42420d71c996f75d96205ed7b54c39/a5df1/allapps.png 576w","/ibm-gsi-cloudnative-journey/static/0c42420d71c996f75d96205ed7b54c39/29a2c/allapps.png 605w"],sizes:"(max-width: 605px) 100vw, 605px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the app you want to monitor")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You will now see just the logs for your app"))),Object(n.b)("h3",null,"Add some logging to your app"),Object(n.b)("p",null,"All the common logging frameworks support the ability publish different types of log statement. The developer can use the log level to help trap specific information or error conditions. The common log levels are  ",Object(n.b)("inlineCode",{parentName:"p"},"info"),", ",Object(n.b)("inlineCode",{parentName:"p"},"debug"),", ",Object(n.b)("inlineCode",{parentName:"p"},"warn")," and ",Object(n.b)("inlineCode",{parentName:"p"},"fatal"),". It is best practice to add log statements to help operations teams and monitoring services to help identify possible issues quickly."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use this pattern ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/IBM/template-node-typescript/generate"}),"template-node-typescript")," for the following implementation.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add the following ",Object(n.b)("inlineCode",{parentName:"p"},"debug")," statement and ",Object(n.b)("inlineCode",{parentName:"p"},"error")," condition to the ",Object(n.b)("inlineCode",{parentName:"p"},"greetings")," implementation in your app."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript",metastring:"src=/src/services/hello-world.service",src:"/src/services/hello-world.service"}),"\n  async greeting(name: string = 'World'): Promise<string> {\n    this.logger.info(`Generating greeting for ${name}`);\n\n    this.logger.debug('This is a debug message from inside my API');\n\n    // Only Trigger error if the name passed in matches ERROR\n    if (name === 'ERROR' ) {\n        try {\n          throw new Error('\"Throwing an error');\n        } catch (e) {\n          this.logger.error(e);\n          throw new Error('\"Catching and Throwing errors');\n        } finally {\n          throw new Error('Last chance to trap this Error');\n        }\n    }\n\n    return `Hello, ${name}!`;\n  }\n\n")))),Object(n.b)("p",null,"Now that we have introduced some debug messages, let’s adjust the log level for the application."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To add ",Object(n.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," settings to you app, edit the ",Object(n.b)("inlineCode",{parentName:"p"},"deployment.yaml")," in your ",Object(n.b)("inlineCode",{parentName:"p"},"chart")," folder and add the following ",Object(n.b)("inlineCode",{parentName:"p"},"debug")," value to the ",Object(n.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," env property"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml",metastring:"src=/chart/template-node-typescript/templates/deployment.yaml",src:"/chart/template-node-typescript/templates/deployment.yaml"}),"-env:\n    name: LOG_LEVEL\n    value: debug\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Test the app changes locally first before deploying"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run start\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Push your changes back to your server repo and wait for your CI pipeline to complete build and deploy")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open up the ",Object(n.b)("strong",{parentName:"p"},"LogDNA")," console and narrow the logs to just your app"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Retrieve the app ingress endpoint using commands below in your terminal."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"oc endpoints\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Switch to ",Object(n.b)("inlineCode",{parentName:"p"},"HTTPS")," and test the ",Object(n.b)("inlineCode",{parentName:"p"},"/hello/{name}")," API and pass in some data. You have introduced a ",Object(n.b)("inlineCode",{parentName:"p"},"DEBUG")," message and an ",Object(n.b)("inlineCode",{parentName:"p"},"ERROR")," into this API logic. Click the ",Object(n.b)("strong",{parentName:"p"},"Execute")," button a few times to simulate some API calls.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Try the API with your own name, and you will see just the ",Object(n.b)("inlineCode",{parentName:"p"},"DEBUG")," message appearing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Try the API with ",Object(n.b)("inlineCode",{parentName:"p"},"ERROR")," as the name , and this will trigger the error code we put in the API service")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You will see the errors appearing in ",Object(n.b)("strong",{parentName:"p"},"LogDNA")," triggered by your application"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABUklEQVQoz42S3VLDIBCF8xpJgJTfhJCGJP3RmTpeeeP7P9BxF622M3X04gMW2AMcthrSiDxFbL3GJRmsYw83Lni9XHA8bNjWFWneY5oS1iVTvGBPY45znnHYVoR5hs0ZylpULgTEMSIFi9wbDM7C+Yj30xnWGoJirdF1HXa7XYHHJf6ak9QLpdA0DSrRtmWREw1xTVK0gZFSQgiBlvZxwl9UnNCRgDYGhriezmIsdAuLPqK5woJKSVh6kqfb8ROvgnxQ2za/ijwUZkEeeBKa44ApDRh6j+AdHHtJ81qzBZ83/pdgTY0SEtGRCD+bBHSnyHDykG7JsM/tt0/1nWd1TXF94+E+Ory9bIhDwPH5iLQeEOcFISZ4qgAfeqQ8Fazz9HHuB+MwUMn53tGaLT5XKUWcnzbyTyOfZvQUh3EoP26dK31aUkFxeQh5h6Q/KJUgReEDcNb6JUYz8PwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Error",title:"Error",src:"/ibm-gsi-cloudnative-journey/static/bba5aa64c3be95d578cf0aea68bf3f49/3cbba/errorcondition.png",srcSet:["/ibm-gsi-cloudnative-journey/static/bba5aa64c3be95d578cf0aea68bf3f49/7fc1e/errorcondition.png 288w","/ibm-gsi-cloudnative-journey/static/bba5aa64c3be95d578cf0aea68bf3f49/a5df1/errorcondition.png 576w","/ibm-gsi-cloudnative-journey/static/bba5aa64c3be95d578cf0aea68bf3f49/3cbba/errorcondition.png 1152w","/ibm-gsi-cloudnative-journey/static/bba5aa64c3be95d578cf0aea68bf3f49/a9016/errorcondition.png 1430w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Try scaling you pods for the app and calling the API again and come and watch the logs and see where the API call is being routed and which pod is triggering the error")),Object(n.b)("p",null,"There is lots more information around how to use ",Object(n.b)("strong",{parentName:"p"},"LogDNA"),", these links will help:"),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(b,{to:"https://docs.logdna.com/docs/filters",mdxType:"AnchorLink"},"More information on using LogDNA log filtering"),Object(n.b)(b,{to:"https://docs.logdna.com/docs/time",mdxType:"AnchorLink"},"Understand how to jump to a specific timeframe")),Object(n.b)("h2",null,"Conclusion"),Object(n.b)("p",null,"It’s important to be able to manage the logs of your deployed applications to help identify issues and quickly understand how to resolve them. The Developer Tools configures LogDNA directly to your development cluster to make it easy to get the log you data you need as a developer. Just deploy your application into your ",Object(n.b)(i.a,{name:"env",mdxType:"Globals"})," and its logs start appearing automatically, open the LogDNA web UI and browse your logs."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-log-management-index-mdx-679604693121dd2f35fa.js.map