module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Users",
    {
      id: {
        primaryKey: true,
        type: DataTypes.TEXT,
      },
      first_name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dni: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      birth_date: {
        allowNull: false,
        type: DataTypes.STRING(),
      },
      rol_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      avatar: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "users",
    }
  );

  model.associate = (db) => {
    model.belongsTo(db.Roles, {
      as: "rol",
      foreignKey: "rol_id",
    });
  };

  return model;
};
