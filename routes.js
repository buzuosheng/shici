const routes = require('next-routes')

module.exports = routes()
  .add('phrases', '/phrases')
  .add('poems', '/poems')
  .add('phrase', '/poems/:id/phrase/:phraseId', 'poem')
  .add('register', '/register', 'login')
  .add('login', '/login', 'login')
  .add('profile', '/users/:userId/:tag')