Module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      first_name: {
        allowNull: false,
        Type: DataTypes.STRING(100),
      },
      last_name: {
        allowNull: false,
        Type: DataTypes.STRING(100),
      },
      email: {
        allowNull: false,
        Type: DataTypes.STRING(100),
      },
      password: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      rol_id: {
        allowNull: false,
        Type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "users",
    }
  );
  return Users;
};
