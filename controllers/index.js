const mail = require('../utils/mail')

// Index
exports.index = (req, rep) => {
  return {
    statusCode: 200,
    message: 'Welcome to Fimail'
  }
}

// Send mail
exports.sendMail = async (req, rep) => {
  const { from, to, cc, bcc, subject, contents, attachments } = req.body
  const message = { from, to, cc, bcc, subject, contents, attachments }

  try {
    // Mengirim email
    await mail(message)

    return {
      statusCode: 200,
      message: 'Berhasil mengirim email.',
      data: message
    }
  } catch (error) {
    throw error
  }
}
