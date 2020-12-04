
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
      },
    title: DataTypes.STRING,
    author:DataTypes.STRING

  })
  return Books
}