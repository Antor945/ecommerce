const nodemailer = require("nodemailer");

async function sendemail(email, subject, emailTemplate) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "antorgamer945@gmail.com",
                pass: "dxrffsrdklaqezgu",
            },
        });

        const info = await transporter.sendMail({
            from: '"Oliba 👻" <antorgamer945@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: subject, // plain text body
            html: emailTemplate, // html body
        });

    } catch (error) {
        console.log(error);
    }
}
module.exports = sendemail;

//dxrffsrdklaqezgu