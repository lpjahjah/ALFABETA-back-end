'use strict';
module.exports = (sequelize, DataTypes) => {
  const RespostaExercicio = sequelize.define('RespostaExercicio', {
    cd_resposta: {
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
    },
    cd_peso: DataTypes.INTEGER,
    ic_certo: DataTypes.BOOLEAN
  }, {
    timestamps: false,
    tableName: 'resposta_exercicios'
  });
  RespostaExercicio.associate = function (models) {
    RespostaExercicio.belongsTo(models.Resposta, { foreignKey: 'cd_resposta', as: 'Resposta_cd_resposta' })
    RespostaExercicio.belongsTo(models.Exercicio, { foreignKey: 'cd_exercicio', as: 'Exercicio_cd_exercicio' })
    RespostaExercicio.belongsTo(models.Exercicio, { foreignKey: 'cd_atividade', as: 'Exercicio_cd_atividade' })
    RespostaExercicio.belongsTo(models.Exercicio, { foreignKey: 'cd_nivel', as: 'Exercicio_cd_nivel' })
  };
  RespostaExercicio.removeAttribute('id');
  return RespostaExercicio;
};