const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

io.on("connection", (socket) => {
    console.log("User connected: " + socket.id);

    socket.on("placeBid", (bidData) => {
        io.emit("updateBids", bidData);
    });

    socket.on("disconnect", () => console.log("User disconnected: " + socket.id));
});

server.listen(process.env.PORT || 5000, () => console.log("Server running..."));
