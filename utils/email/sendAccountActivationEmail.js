import 'dotenv/config';
import nodemailer from 'nodemailer';

const sendAccountActivationEmail = async (form, account) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GOOGLE_SEND_EMAIL_USERNAME,
                pass: process.env.GOOGLE_SEND_EMAIL_PASSWORD
            }
        })
    
        const mailOptions = {
            from: process.env.GOOGLE_SEND_EMAIL_USERNAME,
            to: account,
            subject: 'Fotbalist Account Activation',
            html: form
        };
        
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                resolve(false)
            } else {
                resolve(true)
            }
        });
    })
};

export default sendAccountActivationEmail;
