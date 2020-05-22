module.exports = function(sequelize, DataTypes){
    var users = sequelize.define("user_tb", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    });
    return users;
  };
  