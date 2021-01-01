---
title: "My Gatsby site stopped working, and how I fixed it"
date: "2021-01-01"
type: "blog"
---

TL:DR
Enable Public Introspection should be checked in WordPress plugin administration

My blog is running on Gatsby with Wordpress as a headless CMS for my old blog posts. I recently went to update a few things, just fixing typos in blogs, no code changes, and the darn thing would suddenly not compile!

I kept getting

```
ERROR #11321  PLUGIN
"gatsby-source-graphql" threw an error while running the sourceNodes lifecycle:
warn The gatsby-source-graphql plugin has generated no Gatsby nodes. Do you need it?

```

and

```
ERROR #85923 GRAPHQL
There was an error in your GraphQL query:
Cannot query field "wpgraphql" on type "Query".

```

I went back to the egghead.io training I used to help me learn how to build the site and realized the WP GraphQL plugin used in the video was on version 0.7.0 and I apparently updated at some point to version 1.0.5. In the GraphQL settings on the left side of the Wordpress administration page, down at the bottom there is a field called 'Enable Public Introspection' which was not clicked. It basically says by default, queries need to be authenticated unless this box is checked. So I checked it, meaning you don't need authentication to hit the wordpress API anymore. Well, it worked. Presumably, you can send some auth info in your query if you need to keep it private but for me just posting blogs I'm not worried about it.
