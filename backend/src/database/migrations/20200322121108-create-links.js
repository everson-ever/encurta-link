'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const linksTable = queryInterface.createTable('Links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      originalUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      shortenedUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });

    return linksTable;
  },

  down: queryInterface => queryInterface.dropTable('Links'),
};
