const express = require('express')
const app = express()
const departureModel = require('../../model/departure_cityModel')
const countryModel = require('../../model/Country')

module.exports = {
    viewDashbord: (req,res) => {
        res.render('admin/dashboard/viewDashboard')
    },
    viewDeparture: async (req,res) => {
        const departure = await  departureModel.getAllModeljoin()
        const country = await countryModel.getAll()
        res.render('admin/departureCity/viewDeparture', {
            departure,
            country
        })
    },
    addDeparture: async (req,res) => {
        try {
            const data = req.body
             await departureModel.InsertModel(data)
             res.redirect('/admin/departure  ')
        } catch (error) {
            res.sen(error.message)
            
        }
    },
    deleteDeparture:  async (req, res) => {
        try {
        const {id} = req.params
         await departureModel.deleteModel(id)
         res.redirect('admin/departure')
        } catch (error) {
            res.send(error.message)
            res.redirect('admin/departure')
        }
    }
}