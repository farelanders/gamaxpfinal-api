const Yup = require('yup');
const knex = require('../database/index');



exports.getUsuario = (req, res) => {
    knex('usuario').then((produtos) => {
        return res.status(200).json(produtos);
    })
};



exports.createUsuario = async (req, res) => {

    const { nome, email } = req.body;
    const data = { nome, email };

    const validar = await Yup.object().shape({
        nome: Yup.string().strict(true).required(),
        email: Yup.string().required().email(),
    })
    if (!(await validar.isValid(req.body))) {
        return res.status(400).json({
            message: 'Falha ao cadastrar o usuário, verifique os dados informados e tente novamente!'
        })
    }

    knex.insert(data).into('usuario').then(dataResponse => {
        return res.status(201).json({ message: 'Usuário inserido com sucesso na base de dados.', data });

    }).catch(err => {
        console.log(err);
    });
};
