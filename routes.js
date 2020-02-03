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
    app.get('/register', somnioControllers.register);
    app.post('/register', somnioControllers.createUser);

    app.get('/login', somnioControllers.login);
    app.get('/logout', somnioControllers.logoutUser);
    app.post('/dreamers', somnioControllers.loginUser);
    app.get('/dreamers', somnioControllers.userPage);
    app.get('/dreamers/:id', somnioControllers.userPage);
    app.get('/dreamers/:id/follow', somnioControllers.followUser);
    app.delete('/dreamers/:id/unfollow', somnioControllers.unfollowUser);

    app.get('/dreams', somnioControllers.allDreamsPage);
    app.get('/dreams/add', somnioControllers.addDreams);
    app.post('/dreams/add', somnioControllers.createDreams);
    app.get('/dreams/:id', somnioControllers.dreamsPage);
    app.delete('/dreams/:id', somnioControllers.deleteDreams);
  };
  