'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercicio = sequelize.define('Exercicio', {
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
    nm_enunciado: DataTypes.STRING,
    ds_exercicio: DataTypes.TEXT,
    cd_tipo_exercicio: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: "exercicios"
  });
  Exercicio.associate = function (models) {
    Exercicio.belongsTo(models.Atividade, { foreignKey: 'cd_atividade', as: 'Atividade_cd_atividade' })
    Exercicio.belongsTo(models.Atividade, { foreignKey: 'cd_nivel', as: 'Atividade_cd_nivel' })
    Exercicio.belongsTo(models.TipoExercicio, { foreignKey: 'cd_tipo_exercicio', as: 'TipoExercicio_cd_tipo_exercicio' })
    Exercicio.hasMany(models.Mensagem, { foreignKey: 'cd_exercicio', as: 'Mensagem_cd_exercicio' })
    Exercicio.hasMany(models.Mensagem, { foreignKey: 'cd_atividade', as: 'Mensagem_cd_atividade' })
    Exercicio.hasMany(models.Mensagem, { foreignKey: 'cd_nivel', as: 'Mensagem_cd_nivel' })

    //join resostaExercicio
    Exercicio.belongsToMany(models.Resposta, {
      through: models.RespostaExercicio,
      as: 'RespostaExercicio_cd_exercicio',
      foreignKey: 'cd_exercicio'
    })
    Exercicio.belongsToMany(models.Resposta, {
      through: models.RespostaExercicio,
      as: 'RespostaExercicio_cd_atividade',
      foreignKey: 'cd_atividade'
    })
    Exercicio.belongsToMany(models.Resposta, {
      through: models.RespostaExercicio,
      as: 'RespostaExercicio_cd_nivel',
      foreignKey: 'cd_nivel'
    })

    //join usuarioExercicio
    Exercicio.belongsToMany(models.Usuario, {
      through: models.UsuarioExercicio,
      as: 'UsuarioExercicio_cd_exercicio',
      foreignKey: 'cd_exercicio'
    })
    Exercicio.belongsToMany(models.Usuario, {
      through: models.UsuarioExercicio,
      as: 'UsuarioExercicio_cd_atividade',
      foreignKey: 'cd_atividade'
    })
    Exercicio.belongsToMany(models.Usuario, {
      through: models.UsuarioExercicio,
      as: 'UsuarioExercicio_cd_nivel',
      foreignKey: 'cd_nivel'
    })
  };
  Exercicio.removeAttribute('id');
  return Exercicio;
};