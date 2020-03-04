'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conquista = sequelize.define('Conquista', {
    cd_conquista: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nm_conquista: DataTypes.STRING,
    ds_conquista: DataTypes.TEXT,
    qt_afazeres_conquista: DataTypes.INTEGER,
    cd_tipo_conquista: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: "conquistas"
  });
  Conquista.associate = function (models) {
    Conquista.belongsTo(models.TipoConquista, { foreignKey: "cd_tipo_conquista", as: "TipoConquista_cd_tipo_conquista" })

    //join conquistaUsuario
    Conquista.belongsToMany(models.Usuario, {
      through: models.ConquistaUsuario,
      as: 'Usuario_cd_conquista',
      foreignKey: 'cd_conquista'
    })
  };
  Conquista.removeAttribute('id');
  return Conquista;
};