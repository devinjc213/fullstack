//objects for table columns

module.exports = (sequelize, DataTypes) => {
  const Climbs = sequelize.define("Climbs", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rope: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Climbs;
};
