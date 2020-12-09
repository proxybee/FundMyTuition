import db from './index';
//userTypes Fellow, Organization, Institution

const queryText = `CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        email VARCHAR(128) UNIQUE NOT NULL,
        username VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL
      )`;
(() => {
  db.query(queryText)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
    });
})();