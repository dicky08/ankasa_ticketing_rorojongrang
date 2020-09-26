const timeArrivedModel = require('../../model/time_arrivedModel')
const { success, failed, successWithMeta } = require('../../helper/response')

const time_arrivedController = {
    getAll: (req, res) => {
        const search = !req.query.search?'' : req.query.search
        const sort = !req.query.sort?'id_time_arrived' : req.query.sort
        const type = !req.query.sort?'ASC' : req.query.type
        const limit = !req.query.limit? 9 : parseInt(req.query.limit)
        const page = !req.query.page? 1 : parseInt(req.query.page)
        const offset = page===1? 0 : (page-1)*limit
        timeArrivedModel.getAll(search, sort, type, limit, offset)
        .then((result) => {

            // redisClient.set('category', JSON.stringify(result)) // <-- save data ke redis

            const totalRow = result[0].count
            const meta = {
                totalRow: totalRow,
                totalPage: Math.ceil(totalRow/limit),
                limit,
                page
            }
            successWithMeta(res, result, meta, 'Get all time_arrived success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    getDetail: (req, res) => {
        const id = req.params.id
        timeArrivedModel.getDetail(id)
        .then((result) => {
            success(res, result, 'Get Detail time_arrived success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    insert: (req, res) => {
        const body = req.body
        timeArrivedModel.insert(body)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Add new time_arrived success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    update: (req, res) => {
        const id = req.params.id
        const body = req.body
        timeArrivedModel.update(body, id)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Update time_arrived success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    destroy: (req, res) => {
        const id =  req.params.id
        timeArrivedModel.destroy(id)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Delete time_arrived success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    }
}

module.exports = time_arrivedController