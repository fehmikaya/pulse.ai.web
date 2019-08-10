var HOST = "https://pulseapidev.herokuapp.com";

if (process.env.NODE_ENV === 'development') {
    HOST = " http://localhost:3001";
}

module.exports = {HOST}; 
