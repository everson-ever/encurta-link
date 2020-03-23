'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('links', 'saved', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }),

      queryInterface.addColumn('links', 'views', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('links', 'saved'),
      queryInterface.removeColumn('links', 'views'),
    ]);
  },
};
