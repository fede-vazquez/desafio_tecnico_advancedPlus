module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Roles",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      rol: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
    },
    {
      tableName: "roles",
    }
  );

  model.associate = (db) => {
    model.hasMany(db.Users, {
      as: "users",
      foreignKey: "rol_id",
    });
  };

  return model;
};
