'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('conquistas', {
      cd_conquista: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nm_conquista: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ds_conquista: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      qt_afazeres_conquista: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cd_tipo_conquista: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "tipo_conquistas",
          key: "cd_tipo_conquista",
          onDelete: "cascade"
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('conquistas');
  }
};