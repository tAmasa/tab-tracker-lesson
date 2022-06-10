const {Song} = require('../models')


module.exports ={
    async index (req, res) {
        try {
            const songs = await Song.findAll({
                limit: 25
            })
            res.status(202).send(songs)
        } catch (err) {
            res.status(404).send({
                error: 'Error when trying to fetch all songs'
            })
        }
    },
    async post (req,res) {
        try{
            const song = await Song.create(req.body)
            console.log('we are here')
            res.send(song)
        } catch (err) {
            //Email exists
            res.status(400).send({
                error: 'Invalid information given to make song'
            })
        } 
    }
}