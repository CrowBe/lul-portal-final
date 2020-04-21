import { Base64 } from 'js-base64';
import { google } from 'googleapis';
const key = require('../gmail-keyfile.json');

const mailHandler = async (req, res) => {
    const { name, number, time, message} = req.body;
    const base64EncodedEmail = Base64.encode(
        "From: admin@lookinguplandscapes.com.au\r\n" +
        "To: bennycrow91@gmail.com\r\n" +
        "Subject: Website Request\r\n\r\n" +
      
        `${name} would like to be contacted on ${number}\r\n` +
        `They are available ${time} and left this message:\r\n` +
        `${message}` // name, number, time, message
    ).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const scopes = 'https://www.googleapis.com/auth/gmail.send';
    const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes);
    jwt.authorize()
    .then(data => {
        google.gmail({
            version: "v1",
            auth: jwt
        }).users.messages.send({
            'userId': "admin@lookinguplandscapes.com.au",
            'resource': {
            'raw': base64EncodedEmail
            }
        });
    })
    .catch(err => {
            console.log(err);
    });
}

export default mailHandler;