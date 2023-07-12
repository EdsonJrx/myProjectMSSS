import { INTEGER, STRING, DATE } from 'sequelize';
import database from '../db';
const schema = "";

Produto.init(
    {
        Codigo:
        {
            type: INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Descricao:
        {
            type: STRING,
            allowNull: true,
        },
        DataCriacao:
        {
            type: DATE,
            allowNull: false,
        },
        DataAtualizacao:
        {
            type: DATE,
            allowNull: true,
        }
    },
    {
        sequelize: database, modelName: 'tbProduto', schema
    }
)

export default Produto;