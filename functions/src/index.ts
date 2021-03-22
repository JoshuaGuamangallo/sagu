import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp()

require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendEmailNotification=functions.firestore.document('submissions/{docId}')
.onCreate((snap,ctx)=>{
    const data=snap.data();
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:SENDER_EMAIL,
            pass:SENDER_PASSWORD
        }
    });
authData.sendMail({
from :'info.truly@makethatapp.com',
to:`${data.email}`,
subject:'Your submission Info',
text:`${data.email}`,

}).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});
