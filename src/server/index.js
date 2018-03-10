import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, ServerRouter, matchPath } from "react-router-dom"
// import serialize from "serialize-javascript"
import Index from '../shared/index'
import routes from '../shared/routes'

const serverApp = express()

serverApp.use(cors())
serverApp.use(express.static("public"))

serverApp.get("*", (req, res, next) => {
  // const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
  //
  // const promise = activeRoute.fetchInitialData
  //   ? activeRoute.fetchInitialData(req.path)
  //   : Promise.resolve()
  //
  // promise.then((data) => {
    const context = { data }

    const markup = renderToString(
      <ServerRouter location={req.url} context={context}>
        <Index />
      </ServerRouter>
    )

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
  // }).catch(next)
})

serverApp.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/
