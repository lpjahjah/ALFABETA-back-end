'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nivel = sequelize.define('Nivel', {
    cd_nivel: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nm_nivel: DataTypes.STRING,
    ds_nivel: DataTypes.TEXT
  }, {
    timestamps: false,
    tableName: "niveis"
  });
  Nivel.associate = function (models) {
    Nivel.hasMany(models.Atividade, { foreignKey: "cd_nivel", as: "Atividade_cd_nivel" })
    Nivel.hasMany(models.Usuario, { foreignKey: "cd_nivel", as: "Usuario_cd_nivel" })
  };
  Nivel.removeAttribute('id');
  return Nivel;
};