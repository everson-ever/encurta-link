module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    originalUrl: DataTypes.STRING,
    shortenedUrl: DataTypes.STRING,
    saved: DataTypes.BOOLEAN,
    views: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  });

  Link.associate = function(models) {
    Link.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Link;
};
