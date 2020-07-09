(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{scrk:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z"),c=a("T0C+");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p,s={},o=(p="PageDescription",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:s},l=i.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(l,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o,{mdxType:"PageDescription"},Object(n.b)("p",null,"Securing Inventory App with App ID")),Object(n.b)("p",null,"To secure the application we are using the capabilities available within the IBMCloud platform that use\na simple annotation on the ingress to enable integration with AppId. The ",Object(n.b)(c.a,{name:"templates",mdxType:"Globals"})," have already been\nset up to use this feature and all that is required is update the configuration within the ",Object(n.b)("inlineCode",{parentName:"p"},"values.yaml"),"\nfile of the helm chart."),Object(n.b)("h3",null,"Inventory Management UI"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Find the app id binding secret by running the following command from a terminal where the kubernetes context has been set up (i.e. ",Object(n.b)("inlineCode",{parentName:"p"},"oc login")," has been done)"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),'kubectl get -n dev secrets | grep -E "binding.*appid"\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Update the ",Object(n.b)("inlineCode",{parentName:"p"},"values.yaml")," file in the Inventory Management UI chart to set ",Object(n.b)("inlineCode",{parentName:"p"},"ingress.appId.enabled=true")," and to\nset the value for the AppId binding secret from the previous step"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml",metastring:"path=/chart/template-node-react/values.yaml",path:"/chart/template-node-react/values.yaml"}),'...\n\ningress:\n  enabled: true\n  appid:\n    enabled: true\n    # web or app - https://cloud.ibm.com/docs/services/appid?topic=appid-kube-auth\n    requestType: web\n    binding:\n      name: "{binding secret}"\n      namespace: dev\n    ...\n')))),Object(n.b)("h3",null,"AppId redirect url config"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Get the ingress for the UI component by running ",Object(n.b)("inlineCode",{parentName:"p"},"igc ingress -n dev-{initials}"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the IBM Cloud resource list - ",Object(n.b)("inlineCode",{parentName:"p"},"https://cloud.ibm.com/resources"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the AppId instance to the ",Object(n.b)("inlineCode",{parentName:"p"},"Manage Authentication")," -> ",Object(n.b)("inlineCode",{parentName:"p"},"Authentication Settings")," view"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6UlEQVQoz42SYW7DIAyFuf/pdoBJmzZl3dqkEGJsIIE3lyTbmj8r0qdnkHkYg4l5Qa0VNiT01iOEAD8RRKStl1KaPopxE6NUgGNSo4DAosSmHDMkLZvxYxgiwqKB84zLMOJy9RjchEGrJU4IMit50/8xgbkZ9pbw9nHGefB4PTm8dBZuii2JeE2mjX0zHVXzDOvV5qViClGrJHiSZrSaJfDGMV7n+U5jUsNaixoWjNrL9+6E7vML1o24Oq8HBE3WXkr8o3ss+nC/6xIjekcw0JHn0vpE+hi3Sn/g/fR7+BDfep31tzw99/gG+e4gxo2xhqIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId authentication settings",title:"AppId authentication settings",src:"/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/3cbba/appid-authentication-settings.png",srcSet:["/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/7fc1e/appid-authentication-settings.png 288w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/a5df1/appid-authentication-settings.png 576w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/3cbba/appid-authentication-settings.png 1152w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/0b124/appid-authentication-settings.png 1728w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/4ea69/appid-authentication-settings.png 2304w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/4640e/appid-authentication-settings.png 3072w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add the redirect url for the application to the web redirect URLs. The redirect url will have\nthe following form:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"`{ingress url}/appid_callback`\n\ne.g. `https://inventory-manangement-ui-dev.sms-test-oc-cluster.us-east.containers.appdomain.cloud/appid_callback`\n")))),Object(n.b)("h3",null,"Add users to AppId"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the AppId instance to ",Object(n.b)("inlineCode",{parentName:"p"},"Cloud Directory")," -> ",Object(n.b)("inlineCode",{parentName:"p"},"Users")),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABLUlEQVQoz41RWU7DUAzM/W/CJeAGnACEEIUWlTRv35Nh7AjUDyrxMfFzxh5v02IsQkzYtg2zz1isR0wJPkSMMTDWDSTBz78wOe+RS8HKpJAKXEiIubBIVj/kjj5Wim9/QrhrTCFGCFpf8XXxOJ4XnM4GZ75DauQqHOFvQGNSRyqdjXVMi3Eq2Fnt/XPG8+sHXt6OOJxmWK7AuLRD37tvdTVR8SN6sQVnkzFZn6hckWsnUSF+pK1tReK42h0TfNwhybtftcBCuJBx/3jA3cOTdGiZmHVkIRyPMS9W9yc7MS6g1AbnoyKXxtUYCmZ05hQ2YnjI2oY2Nc2L0aOIoI9FA0XE8zgS1PpQTt7qq+W+WES4lKseUP4JP1lH9VrVkXEix4x5qN0Xfgv9117HfgPDfmzKObgiOQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId cloud directory users",title:"AppId cloud directory users",src:"/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/3cbba/appid-cloud-directory-users.png",srcSet:["/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/7fc1e/appid-cloud-directory-users.png 288w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/a5df1/appid-cloud-directory-users.png 576w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/3cbba/appid-cloud-directory-users.png 1152w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/0b124/appid-cloud-directory-users.png 1728w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/4ea69/appid-cloud-directory-users.png 2304w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/ed928/appid-cloud-directory-users.png 3094w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add yourself as a user with an email address, name, and password"))),Object(n.b)("h3",null,"Access the UI"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open a browser to the UI ingress")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You should be met with the AppId login screen. (This screen can be customized from the AppId service console but for now we are showing the default screen.)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Provide the email address and password you configured in the previous steps. You should be granted access to the UI."))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-inventory-appid-index-mdx-c8da0e0be2385c7977ac.js.map