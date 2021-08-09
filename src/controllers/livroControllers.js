const Yup = require('yup');
const knex = require('../database/index');



exports.getAll = (req, res) => {
  let data = {}
  let count = {}
  knex('livros').count()
  .then((livros) => {
    count = livros;
  })
  knex('livros').then((livros) => {
    data = livros
    return res.status(200).json({
      data,
      count
    });
  })
}



exports.getFaixaEtaria = (req, res) => {
  knex('livros').then((livros) => {

    let faixaEtaria = req.params.faixaetaria.split("-")
    let retorno = []
    for (i = 0; i < livros.length; i++) {
      let faixaEtariaCompara = livros[i].idade.split("-")
      if (faixaEtaria[0] >= faixaEtariaCompara[0] && faixaEtaria[0] <= faixaEtariaCompara[1] || faixaEtaria[1] >= faixaEtariaCompara[0] && faixaEtaria[1] <= faixaEtariaCompara[1])
        retorno.push(livros[i])
    }
    if (retorno[0] == null) {
      return res.status(400).json({ message: "Nenhum livro encontrado para esta faixa etária" });
    }
    return res.status(200).json(retorno);
  })
}



exports.delete = (req, res) => {
  knex('livros').where('id', req.params.id).del().then((livro) => {
    if (livro == 0) {
      return res.status(400).json({ message: "Livro não encontrado em nosso banco de dados!" });
    }
    return res.status(200).json({ message: "Livro removido com sucesso" });
  })
}



exports.update = async (req, res) => {
  const { id } = req.params
  const { titulo, descricao, idade, destaque, idAutor, idCategoria, idEditora, imagem } = req.body

  const validar = await Yup.object().shape({
    titulo: Yup.string().strict(true).required(),
    descricao: Yup.string().strict(true).required(),
    idade: Yup.string().strict(true).required(),
    destaque: Yup.string().strict(true).min(3).max(3).required(),
    idAutor: Yup.number().required().positive().integer(),
    idCategoria: Yup.number().required().positive().integer(),
    idEditora: Yup.number().required().positive().integer(),
    imagem: Yup.string().url(),
  })
  if (!(await validar.isValid(req.body))) {
    return res.status(400).json({
      message: 'Falha ao cadastrar o produto, verifique os dados informados e tente novamente!'
    })
  }
  
  knex('livros').where({ id: id }).update({ titulo: titulo, descricao: descricao, idade: idade, destaque: destaque, idAutor: idAutor, idCategoria: idCategoria, idEditora: idEditora, imagem: imagem }).then((livro) => {
    if (livro == 0) {
      return res.status(400).json({ message: "Livro não encontrado em nosso banco de dados!" });
    }
    return res.status(200).json({ message: "Livro alterado com sucesso" });
  })
}



exports.createLivros = async (req, res) => {

  const { titulo, descricao, idade, destaque, idAutor, idCategoria, idEditora, imagem } = req.body;
  const data = { titulo, descricao, idade, destaque, idAutor, idCategoria, idEditora, imagem };

  const validar = await Yup.object().shape({
    titulo: Yup.string().strict(true).required(),
    descricao: Yup.string().strict(true).required(),
    idade: Yup.string().strict(true).required(),
    destaque: Yup.string().strict(true).min(3).max(3).required(),
    idAutor: Yup.number().required().positive().integer(),
    idCategoria: Yup.number().required().positive().integer(),
    idEditora: Yup.number().required().positive().integer(),
    imagem: Yup.string().url(),
  })
  if (!(await validar.isValid(req.body))) {
    return res.status(400).json({
      message: 'Falha ao cadastrar o produto, verifique os dados informados e tente novamente!'
    })
  }

  knex.insert(data).into('livros').then(dataResponse => {
    return res.status(201).json({ message: 'Produto inserido com sucesso na base de dados.', data })

  }).catch(err => {
    console.log(err);
  });
}


 exports.getOneId = (req, res, next) => {
   const {id} = req.params;
   knex.where({id : id}).table("livros").then(data => {
     return res.status(201).json(data)
   }).catch(err =>{
     return res.status(400).json(err)
});
}
