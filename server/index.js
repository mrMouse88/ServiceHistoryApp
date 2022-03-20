const express = require('express')
const app = express()

const db = require('./models')

//Routers
const entryRouter = require('./routes/Entries')
app.use("/entries", entryRouter)

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log('Server running on port 3001')
    })
})

