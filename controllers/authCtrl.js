const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authCtrl={
    register: async (req, res) =>{
        try{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            //tao user
            const newUser = new Users({
                fullname: req.body.fullname,
                username: req.body.username,
                email: req.body.email,
                mobile: req.body.mobile,
                password: hashedPassword,
              });
              //save
              const user = await newUser.save();
              res.status(200).json(user);
            } catch (err) {
              res.status(500).json(err)
            }
    },
    //login
    login: async (req, res) =>{
        try{
            const user = await User.findOne({ email: req.body.email });
            !user && res.status(404).json("user not found");

            
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            !validPassword && res.status(400).json("wrong password")

            res.status(200).json(user)
          } catch (err) {
           res.status(500).json(err)
          }
        },
        //logout
        logout: async (req, res) =>{
            try{
    
            }catch(err){
                return res.status(500).json({msg:err.message})
            }
        }
    }
module.exports = authCtrl;