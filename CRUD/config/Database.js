import { Sequelize } from "sequelize";

const db = new Sequelize('db_contohimport','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;