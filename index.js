const express = require('express')
const socket = require('socket.io')
const app = express()

app.use('/', express.static('public', { index: "index.html" } ));
app.use(express.json());
app.use((err, req, res, next) => {
    if (err) {
      console.log('Invalid Request data')
      res.send('Invalid Request data')
    } else {
      next()
    }
  })

//Accepting CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

const io = socket(server);
io.on('connection', (socket) => {
    app.post('/push', (req, res) => {
        res.sendStatus(200);
        io.sockets.emit('push', req.body);
    });
})