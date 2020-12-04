const fs = require("fs"),
     path = require("path");
     Sequelize = require("sequelize"),
     basename = path.basename(__filename),
     env = process.env.NODE_ENV || "development",
     config = require(__dirname + "/../config/config.json")[env],
     db = {}

  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
sequelize.authenticate().then(() => {
  console.log('Connected DB.')
}).catch(err => {
  console.error('Unable to connect to the database:', err.message)
}).finally(() => {
  //sequelize.close()
})
//console.log(sequelize)
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  console.log(db);
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize

module.exports = db