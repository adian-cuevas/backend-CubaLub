module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "adiancuevasmartinez@gmail.com",
          pass: "yucwknsfuvlvmnbt",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "hello@example.com",
        defaultReplyTo: "hello2@example.com",
      },
    },
  },
  // ...
});
