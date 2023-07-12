import sequelize from 'sequelize';
import database from '../db.js';
const schema = "dbo";

class Status extends sequelize.Model { }

Status.init(
    {
        IDSTATUS:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        DESCRICAO:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        // RECCREATEDBY:
        // {
        //     type: sequelize.STRING,
        //     allowNull: true,
        // },
        // RECCREATEDON:
        // {
        //     type: sequelize.DATE,
        //     allowNull: true,
        // },
        // RECMODIFIEDBY:
        // {
        //     type: sequelize.STRING,
        //     allowNull: true,
        // },
        // RECMODIFIEDON:
        // {
        //     type: sequelize.DATE,
        //     allowNull: true,
        // },
    },
    {
        sequelize: database, modelName: 'MSTATUS', schema
    }
)

export default Status;