import express from "express"
const app = express()
import { ExpressAuth } from "@auth/express"
import Credentials from "@auth/express/providers/credentials"
import "./polyfill.cts"

app.use(
  "/api/auth/*",
  ExpressAuth({
    secret: "secret",
    providers: [
      Credentials({
        credentials: {
          name: {
            placeholder: "Try Steve or Jane",
          },
        },
        authorize: (credentials) => ({
          id: credentials.name as string,
          name: credentials.name as string,
        }),
      }),
    ],
  })
)
app.get("/*", (req, res) => {
  res.send("Hello World!")
})
app.listen(3000)
