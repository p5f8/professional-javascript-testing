---
slug: "/graphql-book"
date: "2018-07-18T13:35:13.234Z"
title: "The Road to GraphQL"
description: "GraphQL Description ..."
categories: ["graphql", "javascript"]
keywords: ["graphql", "book"]
banner: "./images/banner.jpg"
---

import Link from "$components/Link";

The central theme of this book is GraphQL in modern applications. While GraphQL is only a specification that can be used in many programming languages, this book focuses on GraphQL in JavaScript. Facebook--the company behind the GraphQL--didn't release GraphQL's reference implementation in JavaScript, but it remains one of the more compelling languages for mordern client-server architecture. Using Facebook's specification as their blueprint, other programming languages like Python and Java followed.

<Link to="https://roadtoreact.com/">Find out more about it</Link>

GraphQL a query language that can be used anywhere, but it often bridges the gap between client and server applications. It isn't opionated about which network layer is used, so data can be read and written between client and server applications. It is used to complement the network stack for many libraries and frameworks in JavaScript. The client side takes advancategorye of popular solutions like React, Angular, and Vue, while the server side can use middleware libraries like Express, Koa, and Hapi in a Node.js environment. It is just a matter of sending GraphQL operations with plain HTTP across the wire.

The emergence of GraphQL introduces a new era in web development. RESTful applications were the industry favorite for data transfers between client and server applications, but modern requirements have shifted. Applications have to deal with multiple clients--i.e. desktop, web, mobile, wearables--which are all interested in APIs exposed by server applications. The choice becomes one between using multiple client-specific APIs with REST, or just one API with GraphQL for all client applications, which hardly seems like a choice at all. GraphQL is more than just a unified interface, though; its ecosystem offers powerful capbilities and even more potential as its open source community grows.

For me, it was a lucky coincidence that a former coworker open-sourced the GraphQL implementation for Java. He worked to become one of GraphQL's first open source contributors, eventually creating one of the go-to implementations for Java. The experience shaped my own thinking about GraphQL, which was expanded when my employer evaluated GraphQL for their enterprise application. The glue between our client and server application was largely influenced by REST, but we had API endpoints for all our RESTful resources in place, eventually running into issues like Facebook for API-consuming client-dide applications. The API endpoints were too rigid, so they required aggregations and modifications. An aggregation means putting resources a singular API endpoint, where a modification is to offer variations of an API endpoint to request different representations of a resource. We introduced our own implementation to request resources from the server, and avoided modifying endpoints. But the aggregations were still in place, so we had our own naive implementation of GraphQL, though it was only able to query one resource and didn't understand relationships. From a client-side perspective, only Relay for React was as sophisticated a library in terms of consuming GraphQL APIs, so we invested time in this as well. In the end, GraphQL was too early in its development, so we postponed introducing it to our technology stack. Admittedly, none of us knew it would become so powerful or so popular.

This book starts with GraphQL in client-side applications, so you will use React as a UI library to consume your first third-party GraphQL API, which happens to be GitHub's GraphQL API. It is a popular choice among developers for a couple reasons: GitHub was one of few popular companies to releas a GraphQL API to the public; GitHub's subsequent growth has granted some credibility to GraphQL itself; and a third-party API usually focuses on client-side GraphQL in the beginning. This book teaches how to consume the GraphQL API into a client application without exposing it to the server.

When we shift gears toward GraphQL on the server side, we will implement a GraphQL API that can eventually be consumed into client-side operations. By the end, you should have a firm grasp about using GraphQL in almost all JavaScript applications. I say 'almost' because there are always new libraries, patterns, and best practices that need to be learned to keep up with emerging technology.

I sincerely hope this book provides an optimal learning experience for GraphQL. While you might not use React or Express daily, you should be able to apply these teachings in other solutions like Angular, Vue, Koa, or Hapi.