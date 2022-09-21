import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import categoriesRoute from './Routes/categoriesRoute.js';

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(
    cors({ 
        Origin: 'http://localhost:8100', 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: [
            'Content-Type', 
            'Authorization', 
            'Origin', 
            'x-access-token', 
            'XSRF-TOKEN'
        ], 
        preflightContinue: false
    })
  );

app.use('/', categoriesRoute);

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.yf65c.mongodb.net/cda-eval-categorie?retryWrites=true&w=majority';
const PORT = 2000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));


        // hhhhddddddsssdzadzasss
export default app;