const SENDMAIL_TRANSPORT = {
  // This transport uses the local sendmail installation.
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
};

const SMTP_TRANSPORT = {
  host: "email-smtp.us-east-1.amazonaws.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "AKIA5UMLXCH5DHNKYQ6P",
    pass: "BJMlpIIj5rRa5EdeqSQk0oSPJ34aFALPINHQkAM8MGVE"
  },
      tls:{
        ciphers:'SSLv3'
    }
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: '"Arpan From OpenMeal" <axb172331@utdallas.edu>',
  },
  debugEnabled: false,
};
