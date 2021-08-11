"use strict";

require("dotenv").config();

let port = process.env.PORT || 3000;
let http = require("http");

let request = require("@root/request");
let express = require("express");

let app = require("@root/async-router").Router();
let server = express()
    .use("/api", app)
    .use("/", express.static(__dirname + "/public"));

// Handle GitHub Sign In OAuth Flow
// See https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#web-application-flow
app.get("/webhooks/oauth2/github", async function (req, res) {
    console.log("Granted or denied?");
    console.log(req.query);
  
    let clientId = process.env.GITHUB_CLIENT_ID;
    let clientSecret = process.env.GITHUB_CLIENT_SECRET;
    let code = req.query.code;
    //let state = req.query.state;
    let resp = await request({
        method: "POST",
        url: "https://github.com/login/oauth/access_token",
        // send as application/x-www-form-urlencoded
        form: {
            client_id: clientId,
            client_secret: clientSecret,
            code: code,
            //redirect_uri: "https://beyondcode.duckdns.org/api/webhooks/oauth2/github",
        },
    });
    console.log("Token or error?");
    console.log(resp.toJSON().body);
  
    // parse as application/x-www-form-urlencoded
    var url = new URL("https://example.com?" + resp.toJSON().body);
    var token = url.searchParams.get("access_token");

    // Get GitHub user profile
    // See https://docs.github.com/en/rest/reference/users
    let resp2 = await request({
        url: "https://api.github.com/user",
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: "Token " + token,
        },
        json: true,
    });
  
    // Pretty-print JSON profile
    res.end(JSON.stringify(resp2.body, null, 2));
});

let httpServer = http.createServer(server);
httpServer.listen(port, function () {
    console.info("Listening on", httpServer.address());
});
