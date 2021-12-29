const path = require('path')

// import .env variables
require('dotenv').config({ path: path.join(__dirname, '../../.env') })

module.exports = {
  PORT: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongodb: {
    ipAddress: process.env.MONGO_IPADDRESS,
  },
}
