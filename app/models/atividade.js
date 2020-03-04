'use strict';
module.exports = (sequelize, DataTypes) => {
  const Atividade = sequelize.define('Atividade', {
    cd_atividade: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cd_nivel: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nm_atividade: DataTypes.STRING,
    ds_atividade: DataTypes.TEXT
  }, {
    timestamps: false,
    tableName: "atividades"
  });
  Atividade.associate = function (models) {
    Atividade.belongsTo(models.Nivel, { foreignKey: "cd_nivel", as: "Nivel_cd_nivel" })
    Atividade.hasMany(models.Exercicio, { foreignKey: "cd_atividade", as: 'Exercicio_cd_atividade' })
    Atividade.hasMany(models.Exercicio, { foreignKey: "cd_nivel", as: 'Exercicio_cd_nivel' })
  };
  Atividade.removeAttribute('id');
  return Atividade;
};