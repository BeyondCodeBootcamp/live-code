# Building GitHub Sign In, Live

See [youtu.be/_ou51bLeT3Q](https://www.youtube.com/watch?v=_ou51bLeT3Q).

# Demo

See <https://beyondcode.duckdns.org/github/>.

# Try it yourself

Install Node via [webinstall.dev/node](https://webinstall.dev/node):

```bash
curl -sS https://webinstall.dev/node@16 | bash
```

Clone and enter the repo:

```bash
git clone https://github.com/BeyondCodeBootcamp/live-code
pushd ./live-code/node-github-sign-in
```

Start the demo:

```bash
npm install
npm start
```

To make it work correctly you'll need to create a `.env` with your own
`GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` specified.
