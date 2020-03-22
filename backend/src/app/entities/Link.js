module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    originalUrl: DataTypes.STRING,
    shortenedUrl: DataTypes.STRING,
  });

  return Link;
};
