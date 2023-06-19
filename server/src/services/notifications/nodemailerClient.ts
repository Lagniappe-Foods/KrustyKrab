import nodemailer from 'nodemailer';

// TODO: change this email and put in ENV variables. Explore sendgrid options

// Create nodemailer client to use in different services
const NodeMailer = nodemailer.createTransport({
  host: 'smtp.siteprotect.com',
  port: 465,
  auth: {
    user: 'order@lagniappefoods.com',
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default NodeMailer;
