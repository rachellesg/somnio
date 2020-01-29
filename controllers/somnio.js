const sha256 = require("js-sha256");

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homepage = (request, response) => {
        response.send('You are home');
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        homepage
    };
  
  }
  