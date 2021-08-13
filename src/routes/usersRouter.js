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

routes.get('/livro/faixaetaria/:faixaetaria', livroController.getFaixaEtaria);
routes.get('/livro/:id', livroController.getOneId);
routes.get('/livro', livroController.getAll);
routes.get('/usuario', usuarioController.getUsuario);

routes.post('/send',emailControllers.sendEmail);
routes.post('/livro', livroController.createLivros);
routes.post('/autor', autorController.createAutor);
routes.post('/editora',editoraController.createEditora);
routes.post('/usuario',usuarioController.createUsuario);

routes.put('/livro/:id', livroController.update);//PRONTO

routes.delete('/livro/:id', livroController.delete);//PRONTO

module.exports = routes;

 