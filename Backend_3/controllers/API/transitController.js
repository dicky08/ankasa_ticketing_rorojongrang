const transitModel = require('../../model/transitModel')
const { success, failed, successWithMeta } = require('../../helper/response')

const transitController = {
    getAll: (req, res) => {
        const search = !req.query.search?'' : req.query.search
        const sort = !req.query.sort?'id_transit' : req.query.sort
        const type = !req.query.sort?'ASC' : req.query.type
        const limit = !req.query.limit? 9 : parseInt(req.query.limit)
        const page = !req.query.page? 1 : parseInt(req.query.page)
        const offset = page===1? 0 : (page-1)*limit
        transitModel.getAll(search, sort, type, limit, offset)
        .then((result) => {

            const totalRow = result[0].count
            const meta = {
                totalRow: totalRow,
                totalPage: Math.ceil(totalRow/limit),
                limit,
                page
            }
            successWithMeta(res, result, meta, 'Get all transit success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    getDetail: (req, res) => {
        const id = req.params.id
        transitModel.getDetail(id)
        .then((result) => {
            success(res, result, 'Get Detail transit success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    insert: (req, res) => {
        const body = req.body
        transitModel.insert(body)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Add new transit success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    update: (req, res) => {
        const id = req.params.id
        const body = req.body
        transitModel.update(body, id)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Update transit success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    },
    destroy: (req, res) => {
        const id =  req.params.id
        transitModel.destroy(id)
        .then((result) => {
            // redisClient.del('category')
            success(res, result, 'Delete transit success')
        })
        .catch((err) => {
            failed(res, [], err.message)
        })
    }
}

module.exports = transitController