// const sha256 = require("js-sha256");

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homepage = (request, response) => {
      db.somnio.homepage((error, result) => {
        response.render('index', result);
      });
    }

    let addDreams = (request,response) => {
      // add-dreams
      response.render('create-entry');
    }

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

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        homepage,
        addDreams,
        createDreams
    };
  
  }
  