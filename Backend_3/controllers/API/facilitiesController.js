const facilitiesModel = require('../../model/facilitiesModel')
const { success, failed, successWithMeta } = require('../../helper/response')

const facilitiesController = {
    getAll: (req, res) => {
        const search = !req.query.search?'' : req.query.search
        const sort = !req.query.sort?'id_facilities' : req.query.sort
        const type = !req.query.sort?'ASC' : req.query.type
        const limit = !req.query.limit? 9 : parseInt(req.query.limit)
        const page = !req.query.page? 1 : parseInt(req.query.page)
        const offset = page===1? 0 : (page-1)*limit
        facilitiesModel.getAll(search, sort, type, limit, offset)
        .then((result) => {

            // redisClient.set('category', JSON.stringify(result)) // <-- save data ke redis

            const totalRow = result[0].count
            const meta = {
                totalRow: totalRow,
                totalPage: Math.ceil(totalRow/limit),
                limit,
                page
            }
            successWithMeta(res, result, meta, 'Get all facilities success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    getDetail: (req, res) => {
        const id = req.params.id
        facilitiesModel.getDetail(id)
        .then((result) => {
            success(res, result, 'Get Detail facilities success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    insert: (req, res) => {
        const body = req.body
        facilitiesModel.insert(body)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Add new facilities success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    update: (req, res) => {
        const id = req.params.id
        const body = req.body
        facilitiesModel.update(body, id)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Update facilities success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    destroy: (req, res) => {
        const id =  req.params.id
        facilitiesModel.destroy(id)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Delete facilities success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    }
}

module.exports = facilitiesController