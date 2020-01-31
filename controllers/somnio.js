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
      const data = {
        username: request.body.username,
        name: request.body.name,
        password: request.body.password
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
        let data = {
          dreams: result,
          dream: result[0]
        }
        console.log("controller", data)
        response.render('user', data)
      })
    }

    // render LOGIN form
    let login = (request, response) => {
      response.render('login');
    }

    let loginUser = (request, response) => {
      let data = {
        username: request.body.username,
        password: sha256(request.body.password + SALT)
    }
      console.log("user: ", data);
      db.somnio.loginUser(data, (error, result) => {
        if (error) {
          console.log(error)
          response.send('404')
        } else {
          const userID = result.id;
          const username = result.username;
          let data = {
            dreams: result
          }
          response.cookie('userID', userID);
          response.cookie('username', username);
          response.render('user', data);
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
  