const sha256 = require("js-sha256");
const SALT = 'supersecret';

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homepage = (request, response) => {
      const userID = request.cookies.userID;
      const hashedLogin = request.cookies.loggedIn;
      console.log("controller user id", userID);
      if (hashedLogin === sha256(SALT + request.cookies.userID)) {
        console.log("user logged in verified");
        response.redirect('dreamers/'+userID);
      } else {
        response.render('index');
      }
    }

    // render register page
    let register = (request, response) => {
      const userID = request.cookies.userID;
      const hashedLogin = request.cookies.loggedIn;
      console.log("controller user id", userID);
      if (hashedLogin === sha256(SALT + request.cookies.userID)) {
        console.log("user logged in verified");
        response.redirect('dreamers/'+userID);
      } else {
        response.render('register');
      }
    }

    // create users
    let createUser = (request, response) => {
      const data = {
        username: request.body.username,
        password: request.body.password
      }
      db.somnio.createUser(data, (error, result) => {
        if (error) {
          console.log(error)
          response.send('404')
        } else {
          const userID = result.id;
          const username = result.username;
          const hashedLogin = sha256(SALT + result.id);
          let data = {
            username: result.username
          }
          console.log("print", result.username)
          response.cookie("userID", userID);
          response.cookie("username", username);
          response.cookie("loggedIn", hashedLogin);
          response.redirect('dreamers/'+userID);
        }
      });
    }

    // loading user's profile page
    let userPage = (request, response) => {
      let userID = request.params.id;
      const data = {
        id: userID
      }
      // console.log('userid', userID);
      db.somnio.userDreamsPage(data, (error,results) => {
        const currentUser = request.cookies.username;
        let data = {
          currentuser: currentUser,
          dreams: results.result,
          userinfo: results.queryResult
        }
        console.log("controller", data)
        response.render('public-profile', data)
      })
    }

    // loading dreamss profile page
    let dreamsPage = (request, response) => {
      let dreamId = request.params.id;
      const data = {
        id: dreamId
      }
      console.log('dreamid', data);
      db.somnio.dreamsPage(data, (error,result) => {
        const currentUser = request.cookies.username;
        let data = {
          currentuser: currentUser,
          dreams: result[0]
        }
        console.log("controller", data)
        response.render('single-dream', data)
      })
    }

    // render LOGIN form
    let login = (request, response) => {
      const userID = request.cookies.userID;
      const hashedLogin = request.cookies.loggedIn;
      if (hashedLogin === sha256(SALT + request.cookies.userID)) {
        console.log("user logged in verified");
        response.redirect('dreamers/'+userID);
      } else {
        response.render('login');
      }
    }

    let loginUser = (request, response) => {
      let data = {
        username: request.body.username,
        password: sha256(request.body.password + SALT)
    }
      console.log("logged in user: ", data);
      db.somnio.loginUser(data, (error, result) => {
        if (error) {
          console.log(error)
          response.send('404')
        } else {
          const userID = result.id;
          const username = result.username;
          const hashedLogin = sha256(SALT + result.id);
          console.log(result)
          response.cookie('userID', userID);
          response.cookie('username', username);
          response.cookie("loggedIn", hashedLogin);
          response.redirect('dreamers/'+userID);
        }
      });
    }

    let logoutUser = (request, response) => {
      const hashedLogin = request.cookies.loggedIn;
      const userID = request.cookies.userID;
      if (hashedLogin === undefined) {
        console.log('not logged in');
        response.redirect("/login");
      } else {
        response.clearCookie('userID');
        response.clearCookie('username');
        response.clearCookie("loggedIn");
        console.log(userID, username, hashedLogin)
        response.redirect("/");
      }
    };

    // render CREATE dream entry page
    let addDreams = (request,response) => {
      const userID = request.cookies.userID;
      const hashedLogin = request.cookies.loggedIn;
      if (hashedLogin === sha256(SALT + request.cookies.userID)) {
        const userID = request.cookies.userID;
        const username = request.cookies.username;
        const data = {
          id: userID,
          username: username
        }
        console.log(username, userID)
        response.render('create-entry', data);
      } else {
        response.redirect('login');
      }
    }

    // function of CREATING dream entry
    let createDreams = (request, response) => {
      let title = request.body.title;
      let description = request.body.description;
      let visibility = request.body.private;
      let category = request.body.category;
      let user_id = request.cookies.userID;
      let entry_date = new Date();
      const data = {
        title: title, 
        description: description,
        user_id: user_id,
        visibility: visibility,
        category: category,
        date: entry_date
      }
      db.somnio.createEntry(data, (error, result) => {
        console.log(data)
        const userID = request.cookies.userID;
        response.redirect('/dreamers/'+userID);
      });
    }

    // editing dreams
    let editDreams = (request, response) => {
      
    }

    // delete dreams

    // follow users
    let followUser = (request, response) => {
      let currentUser = request.cookies.username;
      let followUser = request.params.id;
      let data = {
        userid: currentUser, // current user who is following
        followid: followUser // who follows this user
      }
      console.log(currentUser, followUser);
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
        loginUser,
        logoutUser,
        dreamsPage,
        followUser
    };
  
  }
  