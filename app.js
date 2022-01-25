var express = require('express');
app = express();

require('dotenv').config();
const port =  process.env.Port || 3000;

/* ROUTE HANDLERS */
const authRouter = require("./routes/auth");

// Setup all the routes
app.use("api/auth", authRouter);

app.listen(port, () => {
    console.log("Server is listening on port:",port);
});
