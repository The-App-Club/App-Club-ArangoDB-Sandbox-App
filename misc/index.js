const { Database, aql } = require("arangojs");
const dotenv = require("dotenv");

dotenv.config();

const db = new Database({
  url: process.env.ENDPOINT_URL,
  databaseName: process.env.DATABASE_NAME,
  auth: { username: process.env.USERNAME, password: process.env.PASSWORD },
});

const Users = db.collection("users");

async function main() {
  try {
    const users = await db.query(aql`
      FOR user IN ${Users}
        FILTER user.name == "Alexander"
        RETURN user
    `);
    for await (const user of users) {
      console.log(user);
    }
  } catch (err) {
    console.error(err.message);
  }
}

main();
