import db from './index';

const createBlogTable = `CREATE TABLE IF NOT EXISTS
      blogs(
        id serial PRIMARY KEY,
        location TEXT NOT NULL,
        author TEXT NOT NULL,
        author_email VARCHAR(128) NOT NULL,
        title TEXT NOT NULL,
        post TEXT NOT NULL,
        FOREIGN KEY REFERENCES users (id) ON DELETE CASCADE
      )`;
setTimeout(() => {
  db.query(createBlogTable)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
    });
}, 50);