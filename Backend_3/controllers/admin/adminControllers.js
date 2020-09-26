const express = require('express')
const app = express()

module.exports = {
    viewDashbord: (req,res) => {
        res.render('admin/dashboard/viewDashboard')
    }
}