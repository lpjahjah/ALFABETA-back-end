'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mensagem = sequelize.define('Mensagem', {
    cd_mensagem: {
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
    ds_mensagem: DataTypes.TEXT
  }, {
    timestamps: false,
    tableName: 'mensagens'
  });
  Mensagem.associate = function (models) {
    Mensagem.belongsTo(models.Exercicio, { foreignKey: 'cd_exercicio', as: 'Exercicio_cd_exercicio' })
    Mensagem.belongsTo(models.Exercicio, { foreignKey: 'cd_atividade', as: 'Exercicio_cd_atividade' })
    Mensagem.belongsTo(models.Exercicio, { foreignKey: 'cd_nivel', as: 'Exercicio_cd_nivel' })
  };
  Mensagem.removeAttribute('id');
  return Mensagem;
};