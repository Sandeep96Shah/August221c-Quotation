const express = require('express');
const port = 7001;
const app = express();

// api
app.get('/', (req, res) => {
    return res.send("Hello August!");
})

// start the server
app.listen(port, (error) => {
    if(error) {
        console.log("Error while running the server at port: ", port);
        return;
    }
    console.log("Server is up and running on port: ", port);
})