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
        response.redirect('/dreamers/'+userID);
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
          response.redirect('/dreamers/'+userID);
        }
      });
    }

    // loading user's profile page
    let userPage = (request, response) => {

      // let currentUserID = request.cookies.userID;
      // let followUser = request.params.id;
      // let data = {
      //   userid: currentUserID, // current user who is following
      //   followid: followUser // who follows this user
      // }

      let userID = request.params.id;
      const currentUserID = request.cookies.userID;
      const data = {
        id: userID
      }
      // console.log('userid', userID);
      db.somnio.userDreamsPage(data, (error,results) => {
        const currentUser = request.cookies.username;
        const currentUserID = request.cookies.userID;
        let data = {
          currentuser: currentUser,
          userid: currentUserID,
          followid: results.queryResult.userid,
          dreams: results.result,
          userinfo: results.queryResult,
        }
        db.somnio.checkFollow(data, (error, result) => {
          console.log("check follow results", result)
          if (result !== undefined) {
            let data = {
              following: true,
              currentuser: currentUser,
              userid: currentUserID,
              followid: results.queryResult.userid,
              dreams: results.result,
              userinfo: results.queryResult,
              loggedIn: true
            }
            console.log("print results::", data);
            response.render('public-profile', data)
          } else {
            let data = {
              following: false,
              currentuser: currentUser,
              userid: currentUserID,
              followid: results.queryResult.userid,
              dreams: results.result,
              userinfo: results.queryResult,
              loggedIn: true
            }
            console.log("not followed::", data)
            response.render('public-profile', data)
          }
          // console.log("PRINTING THIS to my page", data)
        })
      })
    }

    // loading dreamss profile page
    let dreamsPage = (request, response) => {
      const userID = request.cookies.userID;
      const hashedLogin = request.cookies.loggedIn;
      if (hashedLogin === sha256(SALT + userID)) {
        let dreamId = request.params.id;
        const data = {
          id: dreamId
        }
        console.log('dreamid', data);
        db.somnio.dreamsPage(data, (error,result) => {
          const currentUser = request.cookies.username;
          let data = {
            currentuser: currentUser,
            dreams: result[0],
            loggedIn: true
          }
          console.log("controller", data)
          response.render('single-dream', data)
        })
      } else {
        response.redirect('login');
      }
    }

    // loading ALL DREAMS
    let allDreamsPage = (request, response) => {
      db.somnio.allDreamsPage((error, result) => {
        let data = {
          dreams: result,
          loggedIn: true,
        }
        console.log("data in alldreams", data);
        response.render('dreams', data)
      })
    }

    // render LOGIN form
    let login = (request, response) => {
      const userID = request.cookies.userID;
      const hashedLogin = request.cookies.loggedIn;
      if (hashedLogin === sha256(SALT + request.cookies.userID)) {
        console.log("user logged in verified");
        response.redirect('/dreamers/'+userID);
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
          // console.log(result)
          response.cookie('userID', userID);
          response.cookie('username', username);
          response.cookie("loggedIn", hashedLogin);
          response.redirect('/dreamers/'+userID);
        }
      });
    }

    let logoutUser = (request, response) => {
      const hashedLogin = request.cookies.loggedIn;
      const username = request.cookies.username;
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
      if (hashedLogin === sha256(SALT + userID)) {
        const userID = request.cookies.userID;
        const username = request.cookies.username;
        const data = {
          id: userID,
          username: username,
          loggedIn: true
        }
        console.log(username, userID)
        response.render('create-entry', data);
      } else {
        response.redirect('login');
      }
    }

    // function of CREATING dream entry
    let createDreams = (request, response) => {
      const hashedLogin = request.cookies.loggedIn;
      if (hashedLogin === sha256(SALT + request.cookies.userID)) {
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
          date: entry_date,
          loggedIn: true
        }
        db.somnio.createEntry(data, (error, result) => {
          console.log(data)
          const userID = request.cookies.userID;
          response.redirect('/dreamers/'+userID);
        });
      } else {
        response.render('login');
      }

      
    }

    // editing dreams
    let editDreams = (request, response) => {
      
    }

    // delete dreams
    let deleteDreams = (request, response) => {
      const data = {
        dreamid: request.params.id,
      };
      db.somnio.deleteEntry(data, (error, result) => {
        // let data = {
        //   user_id: result.user_id,
        //   loggedIn: true
        // }
        console.log("result", result);
        response.redirect('/dreamers/'+result.user_id);
      })
    }

    // follow users
    let followUser = (request, response) => {
      const userID = request.cookies.userID;
      const hashedLogin = request.cookies.loggedIn;
      if (hashedLogin === sha256(SALT + userID)) {
        let currentUserID = request.cookies.userID;
        let followUser = request.params.id;
        let data = {
          userid: currentUserID, // current user who is following
          followid: followUser // who follows this user
        }
        console.log(currentUserID, followUser);
        db.somnio.followUser(data, (error, result) => {
          let data = {
            user_id: result.user_id,
            loggedIn: true
          }
          console.log("result", data);
          // response.redirect('/dreamers/'+result.user_id);
        })
      } else {
        response.redirect("/login");
      }
    }
    
    // unfollow 
    let unfollowUser = (request, response) => {
      let currentUserID = request.cookies.userID;
      let followUser = request.params.id;
      let data = {
        userid: currentUserID, // current user who is following
        followid: followUser, // who follows this user
        loggedIn: true
      }
      db.somnio.unfollowUser(data, (error, result) => {
        let data = {
          following: false,
          loggedIn: true
        }
        response.redirect('/dreamers/'+userID);
        console.log("result", data);
      })
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
        allDreamsPage,
        followUser,
        unfollowUser,
        deleteDreams
    };
  
  }
  