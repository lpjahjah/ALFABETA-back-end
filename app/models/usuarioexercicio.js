'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuarioExercicio = sequelize.define('UsuarioExercicio', {
    cd_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cd_exercicio: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cd_atividade: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cd_nivel: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    updatedAt: false,
    tableName: 'usuario_exercicios'
  });
  UsuarioExercicio.associate = function (models) {
    UsuarioExercicio.belongsTo(models.Usuario, { foreignKey: 'cd_usuario', as: 'Usuario_cd_usuario' })
    UsuarioExercicio.belongsTo(models.Exercicio, { foreignKey: 'cd_exercicio', as: 'Exercicio_cd_exercicio' })
    UsuarioExercicio.belongsTo(models.Exercicio, { foreignKey: 'cd_atividade', as: 'Exercicio_cd_atividade' })
    UsuarioExercicio.belongsTo(models.Exercicio, { foreignKey: 'cd_nivel', as: 'Exercicio_cd_nivel' })
  };
  UsuarioExercicio.removeAttribute('id');
  return UsuarioExercicio;
};