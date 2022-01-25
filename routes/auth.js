// Import dependencies
const jwt = require("jsonwebtoken");
const express = require("express");
//const bcrypt = require("bcrypt");

// Setup the express server router
const router = express.Router();

// On post (Login)
router.post("/", async (req, res) => {
    // Users
    const users = [
        { email: "abdelmounaimabderrezak@gmail.com", password: "123"},
        { email: "test@gmail.com", password: "5556@BDFT"},
        { email: "data@gmail.com", password: "Hello world"}
    ];

    // Check user if exist
    let user = users.find(u => u.email === req.body.email);
    if (!user) throw new Error("Invalid email.");

    // Compare the password 
    if (user.password!=req.body.password) throw new Error("Invalid password.");

    const token = jwt.sign({
        id: user._id,
        roles: user.roles,
    }, "jwtAUthBasicPrivateKey@H", { expiresIn: "30m" });

    res.send({
        ok: true,
        token: token
    });
});


// Export the router
module.exports = router;