exports.sendMail = {
  schema: {
    headers: {
      type: 'object',
      properties: {
        'Content-Type': { type: 'string', default: 'application/json' }
      },
      required: ['Content-Type']
    },
    body: {
      type: 'object',
      properties: {
        from: {
          type: ['string', 'object'],
          properties: {
            name: { type: 'string' },
            address: { type: 'string', format: 'email' }
          },
          required: ['address']
        },
        to: {
          type: ['string', 'object', 'array'],
          properties: {
            name: { type: 'string' },
            address: { type: 'string', format: 'email' }
          },
          required: ['address']
        },
        cc: {
          type: ['string', 'object', 'array'],
          properties: {
            name: { type: 'string' },
            address: { type: 'string', format: 'email' }
          },
          required: ['address']
        },
        bcc: {
          type: ['string', 'object', 'array'],
          properties: {
            name: { type: 'string' },
            address: { type: 'string', format: 'email' }
          },
          required: ['address']
        },
        subject: { type: 'string' },
        contents: { type: ['string', 'object'] },
        attachment: {
          type: ['object', 'array'],
          properties: {
            filename: { type: 'string' },
            content: { type: 'string' },
            path: { type: 'string' }
          }
        }
      },
      required: ['from', 'to', 'subject', 'contents']
    }
  }
}
