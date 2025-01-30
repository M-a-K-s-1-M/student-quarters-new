const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errorMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

app.use(cors({
    origin: '*', // Разрешает запросы со всех доменов
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные HTTP методы
    allowedHeaders: ['Content-Type', 'Authorization'] // Разрешенные заголовки
}));

app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

// Всегда последний
app.use(errorMiddleware);


server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})