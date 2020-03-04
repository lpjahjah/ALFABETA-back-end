'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipoExercicio = sequelize.define('TipoExercicio', {
    cd_tipo_exercicio: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nm_tipo_exercicio: DataTypes.STRING,
    ds_tipo_exercicio: DataTypes.TEXT,
    nm_link_tutorial_tipo_exercicio: DataTypes.TEXT
  }, {
    tableName: "tipo_exercicios",
    timestamps: false
  });
  TipoExercicio.associate = function (models) {
    TipoExercicio.hasMany(models.Exercicio, { foreignKey: "cd_tipo_exercicio", as: 'Exercicio_cd_tipo_exercicio' })
  };
  TipoExercicio.removeAttribute('id');
  return TipoExercicio;
};