const sha256 = require("js-sha256");
const SALT = 'supersecret';

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    let homepage = (callback) => {
      let query = 'SELECT * FROM dream_log WHERE user_id=1';
      dbPoolInstance.query(query, (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          callback(error, queryResult.rows[0]);
          console.log(queryResult.rows);
        }
      });
    };

    let createUser = (data, callback) => {
      let query = 'INSERT INTO users (username, name, password) VALUES ($1,$2,$3) RETURNING *';
      let password = sha256(data.password + SALT);
      let values = [data.username, data.name, password];
      // console.log(data);
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          callback(error, queryResult.rows[0]);
          // console.log(queryResult.rows[0].password);
        }
      });
    }

    let loginUser = (data, callback) => {
      let query = 'SELECT * FROM users WHERE username=$1';
      let values = [data.username];
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          if (queryResult.rows[0] === undefined) {
            callback("User doesn't exist!");
        } else {
            if (queryResult.rows[0].password === data.password) {
              callback(error, queryResult.rows[0]);
            } else {
              callback("Wrong password!");
            }
          }
        }
      });
    }

    let userPage = (data, callback) => {
      let query = 'SELECT users.id, users.name AS name, users.username AS username, dream_log.name AS dreamname, dream_log.description AS dreamdescription, dream_log.category AS dreamcategory, dream_log.private AS dreamprivacy FROM users INNER JOIN dream_log ON (users.id = dream_log.user_id) WHERE users.id=$1;'
      let values = [data.id];
      console.log("user valueszx", values);
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          console.log(queryResult.rows);
          callback(error, queryResult.rows);
          // console.log("inside dbpool", queryResult.rows[0]);
        }
      });
    }

    let createEntry = (data, callback) => {
      let query = 'INSERT INTO dream_log (name, description, user_id, category, private) VALUES ($1,$2,$3,$4,$5) RETURNING *';
      let values = [data.title, data.description, data.user_id, data.category, data.visibility];
      console.log("does this print", values);
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          callback(error, queryResult.rows[0]);
          // console.log("inside dbpool", queryResult.rows[0]);
        }
      });
    };
    
    return {
        homepage,
        createEntry,
        createUser,
        userPage,
        loginUser
    };
  };
  