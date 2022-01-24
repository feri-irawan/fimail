require('dotenv').config()

const fastify = require('fastify')

// App
const app = fastify({ logger: true })

// Cors
app.register(require('fastify-cors'))

// Routes
app.register(require('./routes'))

// Start server
module.exports = (async () => {
  try {
    await app.listen(process.env.PORT || 3000)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
})()
