import nodemailer from "nodemailer";
export const submitResponse = (req, res)=>{
    const {email, name, subject, message} = req.body;
    try{
        console.log(email,name, subject,message);
        if(!email || !name || !subject || !message) return res.status(403).send("Required all fields")

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465, // SSL port for Gmail
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.PORTAL_EMAIL, // replace with your email
                pass: process.env.PORTAL_PASS // replace with your email password
            }
        });
    
        let mailOptions = {
            from: email,
            to: process.env.PORTAL_EMAIL, // replace with your email
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Message sent successfully!');
        });

    }catch(err){
        res.status(500).send({
            status: false,
            message: err.message
        })
    }
}