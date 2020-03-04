'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resposta = sequelize.define('Resposta', {
    cd_resposta: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ds_resposta: DataTypes.TEXT
  }, {
    timestamps: false,
    tableName: "respostas"
  });
  Resposta.associate = function (models) {
    Resposta.belongsToMany(models.Exercicio,
      {
        through: models.RespostaExercicio,
        as: 'RespostaExercicio_cd_resposta',
        foreignKey: 'cd_resposta'
      })
  };
  Resposta.removeAttribute('id');
  return Resposta;
};