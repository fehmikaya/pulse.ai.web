var ENV = process.env.PROJ_ENV || 'development';
var HOST = "https://pulseapidev.herokuapp.com";

if (ENV === 'development') {
    HOST = "";
}

module.exports = {HOST}; 
