const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5000

const server = app => {
    mongoose.connect(process.env.DB_ATLAS).then(() => {
        console.log('database connected');
    });

    app.get('/', (req, res) => {
        res.send("Hellow from Server")
    })

    app.listen(PORT, () => {
        console.log(`server is running at port http://localhost:${PORT}`);
    })

}

module.exports = server;