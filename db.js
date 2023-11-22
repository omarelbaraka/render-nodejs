const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://db_rendernodejs_user:pt7XuAZpeWNa1YppL0nhXqyzsXlYWwkq@dpg-clesg553qkas73b05ssg-a.frankfurt-postgres.render.com/db_rendernodejs',
    {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
