import db from './index';

const createCampaignTable = `CREATE TABLE IF NOT EXISTS
      campaign(
        id UUID PRIMARY KEY,
        location TEXT NOT NULL,
        Author TEXT NOT NULL,
        receiver_email VARCHAR(128) NOT NULL,
        sender_id INTEGER NOT NULL,
        created_date TIMESTAMP,
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