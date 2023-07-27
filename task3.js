var nodemailer=require('nodemailer');
var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'vamsibarre676@gmail.con',
        pass:'yiwkhdgtojvwhgqx',
    }

    });
    var mailOptions={
        from:'praneeth1198@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending mail from 20A21A1232 ',
        text:'Exam',
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }
        else{
            console.log('email sent :'+info.response);
        }
    })