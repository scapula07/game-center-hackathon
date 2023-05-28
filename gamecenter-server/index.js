
const dotenv = require('dotenv');
const http = require('http');

dotenv.config({ path: 'config.env' });
const app = require('./app');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{  cors: {
  origin: "*",
} });

const PORT = process.env.PORT || 5003;


io.on("connection", (socket) => {
  console.log("a user connected.");

  socket.on('place bet', (msg) => {
    console.log('message: ' + msg);
    io.emit('place bet', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


