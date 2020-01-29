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

    let createEntry = (data, callback) => {
      // let query = 'INSERT into dream_log (name, description, user_id, category, private) VALUES ($1,$2,$3,$4,$5) WHERE user_id=$1 RETURNING *';
      let values = [data];
      console.log("does this print", values);
      // dbPoolInstance.query(query, values, (error, queryResult) => {
      //   if (error) {
      //     // invoke callback function with results after query has executed
      //     callback(error, null);
      //   } else {
      //     callback(error, queryResult.rows[0]);
      //     console.log(queryResult.rows);
      //   }
      // });
    };

    return {
        homepage,
        createEntry
    };
  };
  