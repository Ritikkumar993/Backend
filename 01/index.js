require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT

const githubdata =
{
  "login": "Ritikkumar993",
  "id": 113612796,
  "node_id": "U_kgDOBsWX_A",
  "avatar_url": "https://avatars.githubusercontent.com/u/113612796?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Ritikkumar993",
  "html_url": "https://github.com/Ritikkumar993",
  "followers_url": "https://api.github.com/users/Ritikkumar993/followers",
  "following_url": "https://api.github.com/users/Ritikkumar993/following{/other_user}",
  "gists_url": "https://api.github.com/users/Ritikkumar993/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Ritikkumar993/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Ritikkumar993/subscriptions",
  "organizations_url": "https://api.github.com/users/Ritikkumar993/orgs",
  "repos_url": "https://api.github.com/users/Ritikkumar993/repos",
  "events_url": "https://api.github.com/users/Ritikkumar993/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Ritikkumar993/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "RITIK kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 31,
  "public_gists": 0,
  "followers": 2,
  "following": 7,
  "created_at": "2022-09-15T13:46:04Z",
  "updated_at": "2025-02-06T16:22:48Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
  res.send('twitter.com')
})

app.get('/login', (req,res) => {
  res.send("<h1>Please login</h1>")
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>Chai Aur Code</h2>");
})

app.get('/github', (req,res) => {
  res.json(githubdata)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
   