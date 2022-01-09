const { index, sendMail } = require('../controllers')
const schemas = require('../controllers/schemas')

module.exports = (app, options, next) => {
  // Index
  app.get('/', index)
  // Mengirim email
  app.post('/send', schemas.sendMail, sendMail)

  next()
}
