--- 
title: Single-Page Applications
description: The server sends static HTML and JavaScript files to the client. Then the client makes any API calls necessary to get initial data, and then it renders the application.
img: spa.png
alt: Diagram of a SPA
order: 2
references: [https://medium.com/frontend-digest/client-side-rendering-vs-server-side-rendering-vs-static-site-generation-2a0702cbb08d]

features:
    loading: slow (first time)
    browser support: variable (good on modern browsers)
    SEO: poor
    hosting: very cheap (processing at browser)
    UX: depends on implementation
--- 

Client-side rendering was made popular with the advent of the Single Page Application (or SPA). JavaScript Frameworks like AngularJS, ReactJS, BackBone.JS and many more use this approach. With Client-Side-Rendered Applications, the server sends static HTML and JavaScript files to the client. Then the client makes any API calls necessary to get initial data, and then it renders the application.

## Advantages of client-side rendering

1. They are cheap and easy to host
For client-side rendered applications, you don’t need a web server. You can simply host your application on any CDN or static file host like Amazon S3. There are lots of ways to host your client-side rendered application for free.

2. No full page reload required
Users can navigate between your pages without having to make a server roundtrip. This makes your website feel fast, almost like a native application.

## Disadvantages of client-side rendering

1. They have poor SEO
Client-side rendered applications often struggle with SEO. While Google claims they will crawl JavaScript rendered websites, they tend to rank poorly. If your website takes too long to load, it can end up being indexed as an empty page.

2. Poor user experience on slower devices
Leaving rendering to the client-side can add seconds of load time on slower laptops and mobile devices. This can lead to users getting frustrated and leaving your website before it finishes loading.

3. They load slower
A client-side rendered application needs to make an additional round-trip to your API server to render. This means your website will always load slower than an equivalent server-side rendered or static application.
