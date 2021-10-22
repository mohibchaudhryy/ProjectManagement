import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import userRouter from './routes/uroutes.js';
import projectRouter from './routes/proutes.js';

const app = express();

app.use(bodyParser.urlencoded({ limit: '30mb',extended: false }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/admin/projects", projectRouter);
app.use("/ruser",projectRouter)


app.get('/', (req, res) => {
    res.send("makestr(50)");
  });

const CONNECTION_URL = 'mongodb+srv://mohibkb:mongokik@cluster0.c96oz.mongodb.net/PMS?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, () => console.log(`Server running at Port: http://localhost:${PORT}`)))
.catch((error)=> console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);