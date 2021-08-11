const Router = require('express'); 
const livroController = require('../controllers/livroControllers') ;
const usuarioController = require('../controllers/usuarioControllers');
const autorController = require('../controllers/autorControllers');
const editoraController = require('../controllers/editoraControllers');
const emailControllers = require('../controllers/emailControllers')


const routes = Router(); 

routes.get('/', (req, res) => {
    res.send('API Gamaxpfinal!')
})

routes.post('/send',emailControllers.sendEmail);

routes.get('/livro/faixaetaria/:faixaetaria', livroController.getFaixaEtaria);

routes.get('/livro/:id', livroController.getOneId);

routes.get('/livro', livroController.getAll);

routes.get('/usuario', usuarioController.getUsuario);


routes.post('/livro', livroController.createLivros);
routes.post('/autor', autorController.createAutor);
routes.post('/editora',editoraController.createEditora);
routes.post('/usuario',usuarioController.createUsuario);





routes.put('/livro/:id', livroController.update);//PRONTO


routes.delete('/livro/:id', livroController.delete);//PRONTO




module.exports = routes;

 // const transporte = nodemailer.createTransport({
    //   host:"smtp.sendgrid.net",
    //   port: 587,
    //   auth:{ User , Pass}
    // }) 

    // transporte.sendMail({
    //   from: "italosport110@hotmail.com",
    //   to: "italosport110@hotmail.com",
    //   replyTo: 'italosport110@hotmail.com',
    //   subject: 'Deu certo inhoggg!!!',
    //   text: 'Oi, tudo bem?',
    //   html: '<p>Oi, tudo bem?</p>'
      
    // }).then((info) => {
    //   res.send(info)
    // }).catch(error => {
    //   res.send(error)
    // })