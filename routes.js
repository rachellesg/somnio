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
    app.post('/dreamers', somnioControllers.loginUser);
    app.get('/dreamers', somnioControllers.userPage);
    app.get('/dreamers/:id', somnioControllers.userPage);
    app.get('/dreamers/:id/follow', somnioControllers.followUser);
    app.get('/dreams/:id', somnioControllers.dreamsPage);
  };
  