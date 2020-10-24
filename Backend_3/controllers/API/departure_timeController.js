const departureTimeModel = require('../../model/departure_timeModel')
const { success, failed, successWithMeta } = require('../../helper/response')

const departureTimeController = {
    getAll: (req, res) => {
        const search = !req.query.search?'' : req.query.search
        const sort = !req.query.sort?'id_departure_time' : req.query.sort
        const type = !req.query.sort?'ASC' : req.query.type
        const limit = !req.query.limit? 9 : parseInt(req.query.limit)
        const page = !req.query.page? 1 : parseInt(req.query.page)
        const offset = page===1? 0 : (page-1)*limit
        departureTimeModel.getAll(search, sort, type, limit, offset)
        .then((result) => {

            const totalRow = result[0].count
            const meta = {
                totalRow: totalRow,
                totalPage: Math.ceil(totalRow/limit),
                limit,
                page
            }
            successWithMeta(res, result, meta, 'Get all depature_time success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    getDetail: (req, res) => {
        const id = req.params.id
        departureTimeModel.getDetail(id)
        .then((result) => {
            success(res, result, 'Get Detail depature_time success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    insert: (req, res) => {
        const body = req.body
        departureTimeModel.insert(body)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Add new depature_time success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    update: (req, res) => {
        const id = req.params.id
        const body = req.body
        departureTimeModel.update(body, id)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Update depature_time success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    destroy: (req, res) => {
        const id =  req.params.id
        departureTimeModel.destroy(id)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Delete depature_time success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    }
}

module.exports = departureTimeController