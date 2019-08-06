var env = process.env.NODE_ENV || 'development';
var HOST = "https://pulseapidev.herokuapp.com";

if (env === 'development') {
    HOST = "";
}

module.exports = {HOST}; 
