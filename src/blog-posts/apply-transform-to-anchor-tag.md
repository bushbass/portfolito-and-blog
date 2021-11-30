---
title: "CSS transform doesn't work on <a> tag and how I fixed it"
date: "2021-10-26"
type: "blog"
---

**_TL:DR_
Apply inline-block style to anchor tag to use transform. Transform does not work on inline elements**

I wanted to have some link text move just a pixel or two on hover, but when I applied the usual pseudo selector to the <a> tag nothing happened.

```
ERROR #11321  PLUGIN
"gatsby-source-graphql" threw an error while running the sourceNodes lifecycle:
warn The gatsby-source-graphql plugin has generated no Gatsby nodes. Do you need it?

```
