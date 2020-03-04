const { Usuario, Nivel } = require('../models');
const Op = require('Sequelize').Op;

module.exports = {

    async index(req, res) {
        await Usuario.count().then(count => {
            Usuario.findAll().then(data => {
                res.status(200).json([count, data])
            })
        }).catch(err => {
            res.status(400).json(err)
        })
    },

    async show(req, res) {
        await Usuario.findByPk(req.query.id, {
            include: [{
                model: Nivel,
                as: 'Nivel_cd_nivel',
                attributes: ['nm_nivel', 'ds_nivel']
            }]
        }).then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
    },

    async register(req, res) {
        await Usuario.create(req.body).then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
    },

    async update(req, res) {
        await Usuario.update(req.body, {
            where: { cd_usuario: req.params.id }
        }).then(
            res.status(200).json(true)
        ).catch(err => {
            res.status(400).json(err)
        })
    },

    async mediador(req, res) {
        await Usuario.findAll({
            where: {
                cd_mediador_usuario: req.query.id
            },
            attributes: ['cd_usuario', 'nm_usuario']
        }).then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
    }
}

//https://sequelize.org/master/manual/models-usage.html
//https://stackoverflow.com/questions/15772394/how-to-upload-display-and-save-images-using-node-js-and-express