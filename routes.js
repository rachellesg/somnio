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
    app.get('/add', somnioControllers.addDreams);
    app.post('/add', somnioControllers.createDreams);
    app.get('/register', somnioControllers.register);
    app.post('/register', somnioControllers.createUser);

    app.get('/login', somnioControllers.login);
    app.get('/logout', somnioControllers.logoutUser);
    app.get('/profile', somnioControllers.userPage);
    app.post('/profile', somnioControllers.loginUser);
    app.get('/profile/:id', somnioControllers.userPage);
  };
  