import { Sequelize } from "sequelize";

//nama db, nama user, password
const db = new Sequelize("tugascc_notes","root","akbar",{
    host: "34.136.132.0",
    dialect: "mysql"
})

export default db
