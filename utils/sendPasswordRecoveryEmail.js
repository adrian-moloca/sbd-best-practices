import 'dotenv/config';
import nodemailer from 'nodemailer';

const sendPasswordRecoveryEmail = (recoveryCode, account, res) => {
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
        subject: 'Fotbalist App Password Recovery',
        text: 'Your recovery code for Fotbalist account ' + account + ' is: ' + recoveryCode + '\nIt expires in 5 minutes.'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return res.status(500).json({
                error: 'Email failed.'
            })
        } else {
            return res.status(200).json({
                message: 'Email sent.',
                recoveryCode: recoveryCode
            })
        }
    });
};

export default sendPasswordRecoveryEmail;
