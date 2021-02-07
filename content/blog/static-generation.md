--- 
title: 'Another approach: Static-Site Generation'
description: Static site generators work by generating all of your websites HTML files at build time.The server only needs to return the pre-rendered HTML file.
img: static-generation.png
alt: Diagram of web static generation
createdAt: 2021-02-02
references: [https://medium.com/frontend-digest/client-side-rendering-vs-server-side-rendering-vs-static-site-generation-2a0702cbb08d#6834]
--- 

Static site generators work by generating all of your websites HTML files at build time. The server makes your API calls and generates static HTML files for every and every page of your website. This means that when a client requests one of your webpages, the server doesn’t need to make any API calls, or render any HTML, it only needs to return the pre-rendered HTML file.

Let’s say you are building a blog, and you have written ten blog posts. When your static site builds, it will generate one HTML file for each of your blog posts. 

When you write another post, you need to rebuild your application and deploy the updated static assets.

## Advantages of Static-Site Generation

1. They load fast
Since the HTML is already compiled and ready to go, static site’s load faster than both client-side rendered sites, and server-side rendered sites. You can

2. They are cheap to host
Since your website is just made up of a bunch of different HTML files, you can host your site on any static file hosting service like S3, or use a CDN.

## Disadvantages of Static-Site Generation

1. They don’t scale that well
As your site grows, so will the build time of your static site. This can cause builds of websites with large amounts of posts to slow down to a crawl. Static sites work best for sites with data that doesn’t change that often, like blogs, and not so well for sites with ever-changing data, like shops.
