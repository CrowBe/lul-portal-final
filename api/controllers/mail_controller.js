import nodemailer from 'nodemailer';

const mailHandler = (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "lookinguplandscapes.com.au",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: "admin@lookinguplandscapes.com.au",
          pass: process.env.EMAIL_PASS
        }
    });

    const { name, number, time, message }  = req.body;

    const messageString = `Website Request: \n
    ${name} has requested you contact them at ${time} on ${number}.\n
    They sent this message: ${message}`;

    const mailOptions = {
        from: 'admin@lookinguplandscapes.com.au', // sender address
        to: 'office@lookinguplandscapes.com.au', // list of receivers
        subject: 'Website Request', // Subject line
        text: messageString, // plaintext body
        // html: // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({mailed: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({mailed: info.response});
        };
    });
}

export default mailHandler;