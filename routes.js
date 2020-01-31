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

    // actual routes
    app.get('/', somnioControllers.homepage);
    app.get('/add-dreams', somnioControllers.addDreams);
    app.post('/add-dreams', somnioControllers.createDreams);
    app.get('/register', somnioControllers.register);
    app.post('/register', somnioControllers.createUser);

    app.get('/profile/:id', somnioControllers.userPage)
  };
  