/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    let homepage = (callback) => {
      let query = 'SELECT * FROM users';
      dbPoolInstance.query(query, (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          callback(error, queryResult.rows);
          console.log(queryResult.rows);
        }
      });
    };

    return {
        homepage
    };
  };
  