__NUXT_JSONP__("/blog", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{blogContentList:[{slug:"another-approach-staticgen",description:"Static site generators work by generating all of your websites HTML files at build time. The server makes your API calls and generates static HTML files for every and every page of your website.",title:"Another approach: Static-Site Generation",img:"static-generation.png",alt:"Diagram of static generation",createdAt:"2021-02-02T00:00:00.000Z",references:["https:\u002F\u002Fmedium.com\u002Ffrontend-digest\u002Fclient-side-rendering-vs-server-side-rendering-vs-static-site-generation-2a0702cbb08d"],toc:[{id:h,depth:f,text:i},{id:j,depth:f,text:k}],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Static site generators work by generating all of your websites HTML files at build time. The server makes your API calls and generates static HTML files for every and every page of your website. This means that when a client requests one of your webpages, the server doesn’t need to make any API calls, or render any HTML, it only needs to return the pre-rendered HTML file."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let’s say you are building a blog, and you have written ten blog posts. When your static site builds, it will generate one HTML file for each of your blog posts. When you write another post, you need to rebuild your application and deploy the updated static assets."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Gatsby and NextJS are popular ways to make static sites with React. Hugo is another example of a hugely popular static site generator."}]},{type:a,value:c},{type:b,tag:m,props:{id:h},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#advantages-of-static-site-generation",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"They load fast"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since the HTML is already compiled and ready to go, static site’s load faster than both client-side rendered sites, and server-side rendered sites."}]},{type:a,value:c},{type:b,tag:g,props:{start:f},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"They are cheap to host"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since your website is just made up of a bunch of different HTML files, you can host your site on any static file hosting service like S3, or use a CDN."}]},{type:a,value:c},{type:b,tag:m,props:{id:j},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#disadvantages-of-static-site-generation",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"They don’t scale that well"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As your site grows, so will the build time of your static site. This can cause builds of websites with large amounts of posts to slow down to a crawl. Static sites work best for sites with data that doesn’t change that often, like blogs, and not so well for sites with ever-changing data, like shops."}]}]},dir:t,path:"\u002Fblog\u002Fanother-approach-staticgen",extension:u,updatedAt:v},{slug:"spa-usability-heuristcs",description:"This time, the proposal is for a set of usability heuristics specifically compiled for rich internet applications (RIA), whose interfaces currently lack a standard set of principles or best practices.",title:"SPA usability heuristics",img:"ux-design.jpg",alt:"UX stages",createdAt:"2021-02-01T00:00:00.000Z",references:["https:\u002F\u002Fjordisan.net\u002Fblog\u002F2011\u002Fria-rich-internet-applications-usability-heuristics\u002F"],toc:[],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Rich Internet applications (RIA) (or ‘web applications’ as opposed to ‘web pages’) are very common nowadays; they may come from a standard web page that has been improved with extra functionalities, or from a desktop application that has been migrated towards a web platform. In any case, there are very few well-established standards for that kind of interfaces."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That’s why I have compiled a list of RIA-specific usability heuristics (or best practices) that may help when it comes time to develop or to evaluate a rich web application. They are not intended to fully cover all the aspects of the application, but to address issues specific of rich web interfaces; these heuristics should be a complement of more general ones."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As with the psychological usability heuristics, they are in the form of a Google Docs spreadsheet to make it easy to download or clone it for your own work."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"These are some of the sources I have used to compile the heuristics (thanks to them!):"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Usability for Rich Internet Applications (Digital Web Magazine)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Minimizing Usability Risks in Web Applications (Blink UX)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Staff Picks: 10 Usability Favorites for 2006 (Blink UX)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Usability Heuristics for Rich Internet Applications (Boxes and Arrows)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"What do you think of those heuristics? Do you know any other?"}]}]},dir:t,path:"\u002Fblog\u002Fspa-usability-heuristcs",extension:u,updatedAt:v}]}],fetch:[],mutations:void 0}}("text","element","\n","p","li",2,"ol","advantages-of-static-site-generation","Advantages of Static-Site Generation","disadvantages-of-static-site-generation","Disadvantages of Static-Site Generation","root","h2","a","true",-1,"span","icon","icon-link","\u002Fblog",".md","2021-02-05T16:24:55.251Z")));