import db from './index';


const queryText = `CREATE TABLE IF NOT EXISTS
      usersProfile(
        FOREIGN KEY REFERENCES users (id) ON DELETE CASCADE
        firstName VARCHAR(128) UNIQUE NOT NULL,
        lastName VARCHAR(128) NOT NULL,
        skills VARCHAR(128) NOT NULL,
        image VARCHAR,
        socialMedia VARCHAR(128) UNIQUE NOT NULL,
        position VARCHAR(128) UNIQUE NOT NULL,
        organization VARCHAR(128) UNIQUE NOT NULL,
        fromDate VARCHAR(128) UNIQUE NOT NULL,
        endDate VARCHAR(128) UNIQUE NOT NULL,
        description VARCHAR(128) UNIQUE NOT NULL,
        institution VARCHAR(128) UNIQUE NOT NULL,
        course VARCHAR(128) UNIQUE NOT NULL,
        instFromDate VARCHAR(128) UNIQUE NOT NULL,
        instEndDate VARCHAR(128) UNIQUE NOT NULL,
      )`;
(() => {
  db.query(queryText)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
    });
})();