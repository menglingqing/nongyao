const express = require("express")

const app = express()

app.set('secret', 'i2u34')

app.use(require('cors')())
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
    console.log('App listening on port 3000')
})