
const dotenv = require('dotenv');
const http = require('http');
const admin = require("firebase-admin");
const serviceAccount=require("./firebase/serviceAccount.json")


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  
  });



dotenv.config({ path: 'config.env' });
const app = require('./app');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { json } = require('express');
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
  socket.on('live chat', (msg) => {
    console.log('message: ' + msg);
    io.emit('live chat', msg);
  });

  socket.on('create stream', (msg) => {
    console.log('message: ' + msg);
    io.emit('create stream', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


