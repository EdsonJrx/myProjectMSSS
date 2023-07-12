import { findAll, create, findByPk } from '../models/produto';

export async function List(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    try {
        const produtos = await findAll();
        return res.json(produtos);

    } catch (erro) {
        return console.error("Erro na List : ", erro);
    }
}
export async function GetOne(req, res) {
    try {

        const prod = await findByPk(req.body.Codigo);

        return res.json(prod);

    } catch (erro) {
        return console.error("Erro na Update : ", erro);
    }
}
export async function Create(req, res) {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

    try {
        const produtos = await create(
            {
                //Codigo: req.body.Codigo, // Comentado para gerar automatico
                Descricao: req.body.Descricao,
                DataCriacao: req.body.DataCriacao,
                DataAtualizacao: null
            }
        );
        return res.json(produtos);

    } catch (erro) {
        return console.error("Erro na Create : ", erro);
    }
}
export async function Update(req, res) {
    try {

        const prod = await findByPk(req.body.Codigo);
        if (prod) {
            prod.Descricao = req.body.Descricao;
            prod.DataAtualizacao = new Date();
            await prod.save();
        }

        return res.json(prod);

    } catch (erro) {
        return console.error("Erro na Update : ", erro);
    }
}
export async function Delete(req, res) {
    try {

        const prod = await findByPk(req.body.Codigo);
        await prod.destroy();
        return res.json(prod);

    } catch (erro) {
        return console.error("Erro na Update : ", erro);
    }
}