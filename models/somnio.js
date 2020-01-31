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

    let userPage = (data) => {
      let query = 'SELECT users.id, users.name, users.username FROM users INNER JOIN dream_log ON (users.id = dream_log.user_id) WHERE users.id = $1;'
      let values = [data.id];
      console.log("user valueszx", values);
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
          console.log("inside dbpool", queryResult.rows[0]);
        }
      });
    };

    let createUser = (data, callback) => {
      let query = 'INSERT INTO users (username, name, password) VALUES ($1,$2,$3) RETURNING *';
      let values = [data.username, data.name, data.password];
      console.log(data);
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          callback(error, queryResult.rows[0]);
          console.log("inside dbpool", queryResult.rows[0]);
        }
      });
    }
    
    return {
        homepage,
        createEntry,
        createUser,
        userPage
    };
  };
  