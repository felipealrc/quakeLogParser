const consign = require('consign');
const express = require('express');

const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();
    app.use(bodyParser.json());
    
    consign()
        .include('controllers')
        .into(app)
    return app;

}