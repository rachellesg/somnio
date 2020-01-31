// const sha256 = require("js-sha256");

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homepage = (request, response) => {
      db.somnio.homepage(data, (error, result) => {
        const data = {
          data: data
        }
        response.render('index', data);
      });
    }

    // render register page
    let register = (request, response) => {
      response.render('register');
    }

    let createUser = (request, response) => {
      let name = request.body.name;
      let username = request.body.username;
      let userpassword = request.body.password;
      const data = {
        name: name,
        username: username,
        password: userpassword
      }
      db.somnio.createUser(data, (error, result) => {
        response.render('user', data)
      });
    }

    let userPage = (request, response) => {
      db.somnio.userPage(data, (error,result) => {
        response.render('user', data)
      })
    }

    // render CREATE dream entry page
    let addDreams = (request,response) => {
      response.render('create-entry');
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
        userPage
    };
  
  }
  