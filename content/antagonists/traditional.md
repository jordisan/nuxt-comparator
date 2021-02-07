--- 
title: Traditional server-side rendering
description: Server-side rendered applications return the full HTML page of your application ready to be rendered, making server roundtrips as you navigate around the site.
img: traditional.png
alt: Diagram of traditional web
order: 1
references: [https://medium.com/frontend-digest/client-side-rendering-vs-server-side-rendering-vs-static-site-generation-2a0702cbb08d]

features:
    loading: very fast (every page)
    browser support: best
    SEO: best
    hosting: needs server technology
    UX: standard web browsing
--- 

Server-side rendered applications return the full HTML page of your application ready to be rendered. They make any necessary API calls beforehand and pass all the necessary data in the initial request. This means your web browser has everything it needs to render the application right away and has a faster first interaction time for your users.

Server-side rendering is the traditional method for creating websites. The traditional disadvantage of server-side rendering was having to make server roundtrips as you navigate around the site. However, with tools like NextJS, we can create applications that offer the best of both worlds. By offering the first load with Server-Side rendering, and client-side routing afterwards.

## Advantages of Server-Side Rendering

1. They load faster
Server-side rendered applications load faster than equivalent client-side rendered applications. And since the server takes care of the heavy lifting, they also load quickly on less performant devices.

2. They have good SEO
The SEO benefits of server-side rendering are well documented. Google rewards websites that load faster with higher page rankings. Google and other search engine crawlers will have no problems indexing your server-side rendered websites.

## Disadvantages of Server-Side Rendering

1. They are expensive to host
Compared to client-side rendered applications, server-side rendered applications are expensive to host. For every request to your server, your server will need to make API calls, and then render your HTML before passing it to the client.

2. They are more complicated to develop (with JS frameworks)
Setting up server-side rendering on your own with React can be a daunting task. However, this is made much easier by working with an established framework like NextJS.

