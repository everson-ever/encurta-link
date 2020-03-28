'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface
        .addColumn('links', 'userId', {
          type: Sequelize.INTEGER,
          allowNull: false,
        })
        .then(() => {
          return Promise.all([
            queryInterface.addConstraint('links', ['userId'], {
              type: 'foreign key',
              name: 'custom_fkey_userId',
              references: {
                table: 'users',
                field: 'id',
              },
              onDelete: 'cascade',
              onUpdate: 'cascade',
            }),
          ]);
        }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('links', 'userId');
  },
};
