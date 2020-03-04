'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConquistaUsuario = sequelize.define('ConquistaUsuario', {
    cd_conquista: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cd_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    updatedAt: false,
    tableName: 'conquista_usuarios'
  });
  ConquistaUsuario.associate = function (models) {
    ConquistaUsuario.belongsTo(models.Conquista, { foreignKey: 'cd_conquista', as: 'Conquista_cd_conquista' })
    ConquistaUsuario.belongsTo(models.Usuario, { foreignKey: 'cd_usuario', as: 'Usuario_cd_usuairo' })
  };
  ConquistaUsuario.removeAttribute('id');
  return ConquistaUsuario;
};