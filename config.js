const dotenv = require('dotenv');
dotenv.config();

const appConfig = {
    PORT: process.env.APP_PORT
}

module.exports = appConfig;