module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    originalUrl: DataTypes.STRING,
    shortenedUrl: DataTypes.STRING,
    saved: DataTypes.BOOLEAN,
    views: DataTypes.INTEGER,
  });

  return Link;
};
