const Yup = require('yup');
const knex = require('../database/index');



exports.createEditora = async (req, res) => {

    const { nome } = req.body;
    const data = { nome };

    const validar = await Yup.object().shape({
        nome: Yup.string().strict(true).required(),
    })
    if (!(await validar.isValid(req.body))) {
        return res.status(400).json({
            message: 'Falha ao cadastrar a editora, verifique os dados informados e tente novamente!'
        })
    }

    knex.insert(data).into('editora').then(dataResponse => {
        return res.status(201).json({ message: 'Editora inserida com sucesso na base de dados.', data });

    }).catch(err => {
        console.log(err);
    });
}
