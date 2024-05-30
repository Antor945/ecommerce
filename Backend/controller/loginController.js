const userList = require('../model/userSchema');
const bcrypt = require('bcrypt');

async function loginController(req, res) {

    try {
        const { email, password } = req.body;

        if (!email) {
            return res.send({ error: 'Email is requied' })
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return res.send({ error: 'You have entered an invalid email address!' })
            }
        }
        if (!password) {
            return res.send({ error: 'Password is requied' })
        }

        const existingUser = await userList.findOne({ email });
        if (existingUser) {
            bcrypt.compare(password, existingUser.password, function (err, result) {
                if (result) {
                    return res.send({
                        success: "Login successful",
                        data: existingUser.email,
                        role: existingUser.userType

                    });

                } else {
                    return res.send({ error: "Login Failed: Incorrect password" });
                }
            });
        } else {
            return res.send({ error: "Login Failed: User not found" });
        }

    } catch (error) {

    }
}
module.exports = loginController;

