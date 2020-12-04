
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
      },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author:DataTypes.STRING
  }, {
     indexes: [
        { fields: [ 'title' ] }
      ],
    timestamps: false
  })
  return Books
}