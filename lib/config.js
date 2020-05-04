const SENDMAIL_TRANSPORT = {
  // This transport uses the local sendmail installation.
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
};

const SMTP_TRANSPORT = {
     service: 'gmail', // no need to set host or port etc.
     auth: {
         user: 'openmealsf@gmail.com',
         pass: 'OpenMeal124!'
     }
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: '"Jane Doe" <jane.doe@example.com>',
  },
  debugEnabled: false,
};
