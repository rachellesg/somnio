const sha256 = require("js-sha256");
const SALT = 'supersecret';

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homepage = (request, response) => {
      db.somnio.homepage((error, result) => {
        response.render('index');
      });
    }

    // render register page
    let register = (request, response) => {
      response.render('register');
    }

    // create users
    let createUser = (request, response) => {
      let name = request.body.name;
      let username = request.body.username;
      let password = sha256(request.body.password);
      const data = {
        name: name,
        username: username,
        password: password
      }
      db.somnio.createUser(data, (error, result) => {
        if (error) {
          console.log(error)
          response.send('404')
        } else {
          const userID = result.id;
          const username = result.username;
          response.cookie("userID", userID);
          response.cookie("username", username);
          response.render('user', data)
        }
      });
    }

    // loading user's profile page
    let userPage = (request, response) => {
      let userID = request.params.id;
      const data = {
        id: userID
      }
      db.somnio.userPage(data, (error,result) => {
        let info = {
          name: result.name,
          username: result.username,
          dreamname: result.dreamname,
          description: result.dreamdescription,
          dreamcategory: result.dreamcategory,
          privacy: result.dreamprivacy
        }
        response.render('user', info)
      })
    }

    // render LOGIN form
    let login = (request, response) => {
      response.render('login');
    }

    let loginUser = (request, response) => {
      let username = request.body.username;
      let password = sha256(request.body.password);
      console.log("user: ", username);
      console.log("password: ", password);
      db.somnio.loginUser(username, password, (error, result) => {
        if (error) {
          console.log(error)
          response.send('404')
        } else {
          const userID = result.id;
          const username = result.username;
          response.cookie('userID', userID);
          response.cookie('username', username);
          response.render('user', result);
        }
      });
    }

    // render CREATE dream entry page
    let addDreams = (request,response) => {
      const userID = request.cookies.userID;
      const username = request.cookies.username;
      const data = {
        id: userID,
        username: username
      }
      response.render('create-entry', data);
    }

    // function of CREATING dream entry
    let createDreams = (request, response) => {
      let title = request.body.title;
      let description = request.body.description;
      let visibility = request.body.private;
      let category = request.body.category;
      let user_id = request.body.id;
      const data = {
        title: title, 
        description: description,
        user_id: user_id,
        visibility: visibility,
        category: category
      }
      db.somnio.createEntry(data, (error, result) => {
        response.redirect('/');
      });
    }

    let editDreams = (request, response) => {
      
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        homepage,
        addDreams,
        createDreams,
        register,
        createUser,
        userPage,
        login,
        loginUser
    };
  
  }
  