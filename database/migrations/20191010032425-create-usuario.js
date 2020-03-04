'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      cd_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nm_usuario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nm_login: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      nm_email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      nm_senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url_foto_usuario: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      qt_atividade_meta: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      qt_dias_meta: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      qt_ponto: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      ic_mediador: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      cd_mediador_usuario: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "usuarios",
          key: "cd_usuario",
          onDelete: "cascade"
        }
      },
      cd_nivel: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "niveis",
          key: "cd_nivel",
          onDelete: "cascade"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};