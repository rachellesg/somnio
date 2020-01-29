module.exports = (app, allModels) => {
    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR POKEMON CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */
  
    // require the controller
    const somnioControllers = require('./controllers/somnio')(allModels);
  
    app.get('/', somnioControllers.homepage);
  };
  