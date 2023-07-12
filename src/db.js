import sequelize from 'sequelize';

const database = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PSW,
    {
        dialect: process.env.DB_DIALECT, host: process.env.DB_HOST, port: process.env.DB_PORT,
        define: {
            freezeTableName: true,
            timestamps: false
        },
    },
    );

database.sync();

export default database;
