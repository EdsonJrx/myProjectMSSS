import Status from '../models/status.js';

export async function List(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    try {
        const data = await Status.findAll();
        return res.json(data);

    } catch (erro) {
        return console.error("Erro na List : ", erro);
    }
}
export async function GetOne(req, res) {
    try {

        const data = await Status.findByPk(req.body.IDSTATUS);

        return res.json(data);

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
        const data = await Create(
            {
                //IDSTATUS: req.body.IDSTATUS, // Comentado para gerar automatico
                DESCRICAO: req.body.DESCRICAO,
            }
        );
        return res.json(data);

    } catch (erro) {
        return console.error("Erro na Create : ", erro);
    }
}//NÃO TESTEI
export async function Update(req, res) {
    try {
        const data = await findByPk(req.body.IDSTATUS);
        if (data) {
            data.DESCRICAO = req.body.DESCRICAO;
            await data.save();
        }
        return res.json(data);

    } catch (erro) {
        return console.error("Erro na Update : ", erro);
    }
}//NÃO TESTEI
export async function Delete(req, res) {
    try {

        const data = await findByPk(req.body.IDSTATUS);
        await data.destroy();
        return res.json(data);

    } catch (erro) {
        return console.error("Erro na Update : ", erro);
    }
}//NÃO TESTEI