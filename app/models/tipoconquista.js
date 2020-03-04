'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipoConquista = sequelize.define('TipoConquista', {
    cd_tipo_conquista: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nm_tipo_conquista: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: "tipo_conquistas"
  });
  TipoConquista.associate = function (models) {
    TipoConquista.hasMany(models.Conquista, { foreignKey: "cd_tipo_conquista", as: "Conquista_cd_tipo_conquista" })
  };
  TipoConquista.removeAttribute('id');
  return TipoConquista;
};