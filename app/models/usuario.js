'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    cd_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nm_usuario: DataTypes.STRING,
    nm_login: DataTypes.STRING,
    nm_email: DataTypes.STRING,
    nm_senha: DataTypes.STRING,
    url_foto_usuario: DataTypes.STRING,
    qt_atividade_meta: DataTypes.INTEGER,
    qt_dias_meta: DataTypes.INTEGER,
    qt_ponto: DataTypes.INTEGER,
    ic_mediador: DataTypes.BOOLEAN,
    cd_mediador_usuario: DataTypes.INTEGER,
    cd_nivel: DataTypes.INTEGER
  }, {
    updatedAt: false,
    tableName: "usuarios"
  });
  Usuario.associate = function (models) {
    Usuario.hasMany(models.Usuario, { foreignKey: "cd_usuario", as: "usuarios" })
    Usuario.belongsTo(models.Usuario, { foreignKey: "cd_usuario", as: "mediador" })
    Usuario.belongsTo(models.Nivel, { foreignKey: "cd_nivel", as: "Nivel_cd_nivel" })

    //join usuarioExercicio
    Usuario.belongsToMany(models.Exercicio, {
      through: models.UsuarioExercicio,
      as: 'UsuarioExercicio_cd_usuario',
      foreignKey: 'cd_usuario'
    })

    //join conquistaUsuario
    Usuario.belongsToMany(models.Conquista, {
      through: models.ConquistaUsuario,
      as: 'ConquistaUsuario_cd_usuario',
      foreignKey: 'cd_usuario'
    })
  };
  Usuario.removeAttribute('id');
  return Usuario;
};