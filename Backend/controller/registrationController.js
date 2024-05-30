const emailTemplate = require("../helper/emailTemplate");
const sendemail = require("../helper/sendEmail");
const userList = require("../model/userSchema");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

async function registration(req, res) {

    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        addressOne,
        addressTwo,
        city,
        devision,
        postCode,
        distict
    } = req.body

    // validation.....................
    if (!firstName) {
        return res.send({error:"First Name is requied"})
    } else if (!lastName) {
        return res.send({error:'Last name is requied'})
    } else if (!phone) {
        return res.send({error:'Phone is requied'})
    }
    //  else if (!addressOne) {
    //     return res.send(`addressOne is requied`)
    // } else if (!addressTwo) {
    //     return res.send(`addressTwo is requied`)
    // } else if (!city) {
    //     return res.send(`city is requied`)
    // } else if (!devision) {
    //     return res.send(`devision is requied`)
    // } else if (!postCode) {
    //     return res.send(`postCode is requied`)
    // } else if (!distict) {
    //     return res.send(`distict is requied`)
    // };
    if (!email) {
        return res.send({error:'Email is requied'})
    } else {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return res.send({error:'You have entered an invalid email address!'})
        };
    }
    if (!password) {
        return res.send({error:'Password is requied'})
    } else if (!/(?=.*[a-z])/.test(password)) {
        return res.send({error:"1 lowercase alphabetical character"})
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
        return res.send({error:"1 uppercase alphabetical character"})
    } else if (!/(?=.*[0-9])/.test(password)) {
        return res.send({error:" 1 numeric character"})
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
        return res.send({error:"  at least one special character"})
    } else if (!/(?=.{8,})/.test(password)) {
        return res.send({error:"The string must be eight characters or longer"})
    };




    if (firstName && lastName && email && phone && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        && /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password)) {

        const existingEmail = await userList.findOne({ email });

        if (existingEmail) {
            return res.send({error:"email already used"})
        } else {
            bcrypt.hash(password, 10, function (err, hash) {
                const users = new userList({
                    firstName,
                    lastName,
                    email,
                    phone,
                    password: hash,
                    addressOne,
                    addressTwo,
                    city,
                    devision,
                    postCode,
                    distict
                })
                users.save()
                return res.send("registration successfuly done please verify email")
            });
        }
    }
    var token = jwt.sign({ email }, 'antorkhan');
    sendemail(email, "oliba", emailTemplate(token));

}

module.exports = registration;