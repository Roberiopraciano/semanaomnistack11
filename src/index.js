const express = require('express');
const cors = require('cors');
const routers = require('./routes.js');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);

app.listen(3333);


// quere