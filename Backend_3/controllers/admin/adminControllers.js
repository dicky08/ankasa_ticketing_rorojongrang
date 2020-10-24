const express = require('express')
const app = express()
const departureModel = require('../../model/departure_cityModel')
const destinationCityModel = require('../../model/destination_cityModel')
const facilitiesModel = require('../../model/facilitiesModel')
const countryModel = require('../../model/Country')
const airlineClassModel = require('../../model/airlines_class')
const usersModel = require('../../model/usersModel')
const bcrypt = require('bcrypt')

module.exports = {
    viewlogin: (req,res) => {
        try {
           if (req.session.user == null || req.session.user == undefined) {
             res.render("index", {
             });
           } else {
             res.redirect("/admin/dashboard");
           }
        } catch (error) {
            res.send(error.message)
        }
    },
    actionLogin: async (req,res) => {
        try {
            const {email, password} = req.body
            const findByemail = await usersModel.getEmail(email)
            const id = findByemail[0].id
            const emails =  findByemail[0].email
            const haspassword = findByemail[0].password
            const isMatcch = await bcrypt.compare(password, haspassword)
            if(!isMatcch ) {
                res.redirect('/admin/signin')
            }
            req.session.user = {
              id: id,
              email: emails,
            };
            res.redirect('/admin/dashboard')
            
        } catch (error) {
            res.send(error.message)
        }
    },
    logout: (req,res) =>{
        try {
            req.session.destroy();
            res.redirect('/admin/signin')
        } catch (error) {
            res.redirect('/admin/dashboard')
        }
    },
    viewDashbord: (req,res) => {
        res.render("admin/dashboard/viewDashboard", {
          user: req.session.user,
        });
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
            res.send(error.message)
            
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
    },
    updateDeaparture: async (req,res) => {
        try {
            // const { id, code_departure_city, name_departure_city, id_country } = req.body;
            const data = req.body;
            const {id} =  req.body
            await departureModel.updateModel(data, id)
            res.redirect('/admin/departure')
        } catch (error) {
            res.send(error.message)
            
        }
    },
    viewDestinationCity: async (req,res, next) => {
        const destinationCity = await destinationCityModel.getAllModel()
        const country = await countryModel.getAll()
        res.render('admin/destinationCity/viewDestinationCity', {
            destinationCity,
            country
        })
    },
    addDestinationCity: async (req,res) => {
        try {
            const data = req.body;
            await destinationCityModel.InsertModel(data);
        } catch (error) {
            res.send(error.message)
        }
    },
    deleteDestination: async (req, res) => {
        try {
            const { id } = req.params;
            await destinationCityModel.deleteModel(id)
            res.redirect('/admin/destinationCity')
        } catch (error) {
            res.send(error.message)
        }
        
    },
    updateDestination: async (req,res) => {
        try {
            const data = req.body
            const {id} = req.body
           await destinationCityModel.updateModel(data, id)
           res.redirect('/admin/destinationCity')
        } catch (error) {
            
        }
    },

    viewFacilities: async (req,res, next) => {
        const facilities = await facilitiesModel.gettAllData()
        res.render("admin/facilities/viewFacilities", {
          facilities,
        });
    },
    addFacilities: async (req, res) => {
        try {
            const data  = req.body;
            await facilitiesModel.insert(data);
            res.redirect('/admin/facility')
        } catch (error) {
            res.send(error.message)
        }
    },
    deleteFacility: async (req,res) => {
        try {
            const {id} = req.params
            await facilitiesModel.destroy(id)
            res.redirect('/admin/facility')
        } catch (error) {
            res.send(error.message)
        }
    },
    updateFaciity: async (req, res) => {
        try {
            const { id, name_facilities } = req.body;
            await facilitiesModel.updateAdmin(name_facilities, id)
            res.redirect('/admin/facility')
        } catch (error) {
            res.send(error.message)
        }
    },
    viewAirlineClass: async (req,res) => {
        const airlineclass = await airlineClassModel.getAll()
        res.render('admin/airlineClass/viewAirlineClass', {
            airlineclass
        })
    },
    addAilineClass: async(req, res) => {
        try {
            const data = req.body
            await airlineClassModel.add(data)
            res.redirect('/admin/airlineclass')
        } catch (error) {
            
        }
    },
    deleteairlineclass: async (req,res) => {
        try {
            const {id} = req.params
            await airlineClassModel.delete(id)
            res.redirect("/admin/airlineclass");
        } catch (error) {
            res.send(error.message)
        }
    },
    updateairlineClass: async (req,res)=> {
        try {
            const {id} = req.body
            const data = req.body
            await airlineClassModel.update(data,id)
            res.redirect('/admin/airlineclass')
        } catch (error) {
            res.send(error.message)
        }
    },
    viewCountry: async(req,res)=> {
        try {
            const country = await countryModel.getAll()
            res.render('admin/country/viewCountry', {
                country
            })
        } catch (error) {
            res.redirect('/admin')
        }
    },
    addCountry: async(req,res) => {
        try {
            const data = req.body
            await countryModel.add(data)
            res.redirect('/admin/country')
        } catch (error) {
            res.send(error.message)
        }
    },
    deleteCountry: async (req,res) => {
        try {
            const {id} = req.params
            await countryModel.delete(id)
            res.redirect("/admin/country");
        } catch (error) {
            res.send(error.message)
        }
    }
}