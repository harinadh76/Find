import express from 'express';
import loginRouter from './routes/login';
import cors from 'cors';
import 'dotenv/config'
require('./db')

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/auth', loginRouter);
// app.use('/auth', loginRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
