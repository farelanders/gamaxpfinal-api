// const emailPage = require('../routes/email');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = async (req, res) => {
    const { emailUser, emailNome } = req.body

    const msg = {
        to: emailUser,
        from: "italosport110@hotmail.com",
        subject: "Olá",
        text: "tudo bem?",
        html: `<h1>Obrigado por se cadastra na nossa newsletters ${emailNome}</h1>
                <h2>Novidades em breve!!!</h2>`
    }
    

    await sgMail.send(msg)
    .then(() => {
        console.log('Email sent')
        res.json(req.body)
    })
    .catch((error) => {
    console.error(error)
    })
    
}
