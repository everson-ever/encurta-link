require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: false,
    underscoredAll: false,
  },
};
