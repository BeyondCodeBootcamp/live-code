# Building GitHub Sign In, Live

See [youtu.be/_ou51bLeT3Q](https://www.youtube.com/watch?v=_ou51bLeT3Q).

# Demo

See <https://beyondcode.duckdns.org/github/>.

# Try it yourself

1. Install Node via [webinstall.dev/node](https://webinstall.dev/node):
   ```bash
   curl -sS https://webinstall.dev/node@16 | bash
   ```
2. Clone and enter the repo:
   ```bash
   git clone https://github.com/BeyondCodeBootcamp/live-code
   pushd ./live-code/node-github-sign-in
   ```
3. Configure:
   ```bash
   rsync -avhP example.env .env
   ```
   _Note_: To make it work correctly you'll need to create a `.env` with your own 
   `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`, and you'll also need to edit the
   `client_id` and `redirect_uri` in [./public/github/index.html](/public/github/index.html).
4. Start the demo:
   ```bash
   npm install
   npm start
   ```
