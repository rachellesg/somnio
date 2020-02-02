const sha256 = require("js-sha256");
const SALT = 'supersecret';

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = (dbPoolInstance) => {

    let createUser = (data, callback) => {
      let query = 'INSERT INTO users (username, password) VALUES ($1,$2) RETURNING *';
      let password = sha256(data.password + SALT);
      let values = [data.username, password];
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

    let userDreamsPage = (data, callback) => {
      let query = 'SELECT users.id AS userID, users.username AS username, dream_log.name AS dreamname, dream_log.description AS dreamdescription, dream_log.category AS dreamcategory, dream_log.private AS dreamprivacy, dream_categories.image AS dreamImage FROM users INNER JOIN dream_log ON (users.id = dream_log.user_id) INNER JOIN dream_categories ON (dream_log.category = dream_categories.name) WHERE users.id=$1;'
      // let query = 'SELECT * FROM dream_log WHERE user_id=$1'
      let values = [data.id];
      console.log("user values:", values);
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          // console.log("dreamlog where user = $1", queryResult.rows);
          callback(error, queryResult.rows);
          // console.log("inside dbpool", queryResult.rows[0]);
        }
      });
    }
    
    let dreamsPage = (data, callback) => {
      let query = 'SELECT users.id AS userID, users.username as username, dream_log.id as dreamid, dream_log.name AS dreamname, dream_log.description AS dreamdescription, dream_log.category AS dreamcategory, dream_log.private AS dreamprivacy, dream_categories.image AS dreamImage FROM dream_log INNER JOIN dream_categories ON (dream_log.category = dream_categories.name) INNER JOIN users ON (users.id = dream_log.user_id) WHERE dream_log.id=$1;'
      // let query = 'SELECT * FROM dream_log WHERE id=$1'
      let values = [data.id];
      console.log("user values:", values);
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          // console.log("dreamlog where user = $1", queryResult.rows);
          callback(error, queryResult.rows);
          console.log("inside dbpool", queryResult.rows);
        }
      });
    }

    let createEntry = (data, callback) => {
      let query = 'INSERT INTO dream_log (name, description, user_id, category, private, created_at) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';
      let values = [data.title, data.description, data.user_id, data.category, data.visibility, data.date];
      // console.log("does this print", values);
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
        createEntry,
        createUser,
        loginUser,
        userDreamsPage,
        dreamsPage
    };
  };
  