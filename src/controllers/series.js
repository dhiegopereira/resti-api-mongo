
const Serie = require('../models/serie')

const get = async (req, res) => {
    const series = await Serie.find({})
    res.send(series)
}

const getOne = async (req, res) => {
    const _id = req.params.id
    const serie = await Serie.findById(_id)

    if (!serie) return res.status(404).send('Serie not found')

    res.send(serie)
}

const create = async (req, res) => {
    const serie = new Serie(req.body)
    try {
        await serie.save()
        res.send(serie)
    } catch (error) {
        res.status(400).send(error)
    }
}

const del = async (req, res) => {
    try {
        await Serie.findByIdAndRemove(req.params.id)
        res.send({
            message: 'Serie deleted'
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

const update = async (req, res) => {
    const serie = await Serie.findById(req.params.id)
    serie.name = req.body.name
    serie.status = req.body.status

    try {
        await serie.save()
        res.send(serie)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    get,
    getOne,
    create,
    del,
    update
}