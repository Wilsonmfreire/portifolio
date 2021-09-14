const Sequelize = require('seguelize')
//construtor
const sequelize = new Sequelize('crud', 'root', 'wilson', {
    dialect: 'mysql',
    host: 'localhost',
    port: 33006
})

module.exports = sequelize

