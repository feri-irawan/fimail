const nodemailer = require('nodemailer')

const HOST = process.env.HOST
const AUTH_EMAIL = process.env.AUTH_EMAIL
const AUTH_PASS = process.env.AUTH_PASS

/**
 * @description Mengirim email
 * @param {object} options Info email
 * @param {object} options.from Infromasi pengirim
 * @param {string} options.from.name Nama pengirim
 * @param {string} options.from.address Email pengirim
 * @param {string|object|array} options.to Email penerima
 * @param {string|object|array} options.cc Email penerima (CC)
 * @param {string|object|array} options.bcc Email penerima (BCC)
 * @param {string} options.subject Subjek email
 * @param {string|object} options.contents Konten email
 * @param {object|array} options.attachments File-file yang akan dikirim
 * @param {string} options.attachments.filename Nama file
 * @param {string} options.attachments.path Lokasi file, seperti path, URL
 */
async function mail(
  options = {
    from,
    to,
    cc,
    bcc,
    subject,
    contents,
    attachments
  }
) {
  // Membuat transporter
  const transporter = nodemailer.createTransport({
    host: HOST,
    port: 587,
    auth: {
      user: AUTH_EMAIL,
      pass: AUTH_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  try {
    // Mengirim email
    await transporter.sendMail({
      ...options,
      html: options.contents
    })

    // Jika berhasil mengirim email
    return options
  } catch (error) {
    // Jika gagal mengirim email
    console.log(error)
    throw Error('Gagal mengirim pesan, segera beritahu pengembang!')
  }
}

module.exports = mail
