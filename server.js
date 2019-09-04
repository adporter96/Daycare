const app = require("express")();
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

app.use(cors({ credentials: true, origin: "http://localhost:3000" })); /// this is the proxy

//connect to SQL database
massive(
  "postgresql://andrewporter:ljFNYMwC5RKcDqm-Yo-AgROmo6fj33jB@localhost/andrewporter"
).then(db => {
  app.set("db", db);
});

app.use(
  session({
    secret: "keyboard cat", // decrypt the cookie and trade it for a user session
    resave: true,
    saveUninitialized: true
  })
);
app.use(bodyParser.json());

app.use("/loggedIn", (req, res) => {
  if (!req.session.user) {
    res.send("no");
  } else {
    res.send(req.session.user);
  }
});

// create a new user
app.post("/signup", (req, res) => {
  const db = req.app.get("db");

  //encrypt password with hash
  bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      // insert new user to the database
      return db.user1.insert({
        // insert the name of the sql table and columns here
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: hash /// set password to the hash
      });
    })
    .then(newUser => {
      // delete the users password so it does not show in the sql server once created
      delete newUser.password;
      return res.send(newUser);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

/// LOGIN
app.post("/login", async (req, res) => {
  // try catch is similar to if else statement.

  try {
    // get the database
    const db = req.app.get("db");

    // if email matches to what is on file - log in
    const [user1] = await db.user1.find({ email: req.body.email });
    // if not - send this status                           vv
    if (!user1)
      return res.status(400).send("please enter a valid email or password");

    // if authenticated
    const authenticated = await bcrypt.compare(
      req.body.password,
      user1.password
    );
    if (!authenticated)
      return res.status(400).send("please enter a valid email or password");

    delete user1.password;
    req.session.user = user1;

    return res.send(user1);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});

//LOGOUT
app.post("/logout", (req, res) => {
  req.session.destroy(err => res.send("successfully logged out!"));
});

app.get("/users", (req, res) => {
  // if user inputs incorrect info
  if (!req.session.user) return res.status(401).send("please log in");

  // if user inputs correct info - send the user
  return res.send(req.session.user);
});

app.get("/allusers", async (req, res) => {
  const db = req.app.get("db");
  const users = await db.user1.find();

  res.send(users);
});

app.post("/reports/create/:id", async (req, res) => {
  try {
    const db = req.app.get("db");
    await db.query(`INSERT INTO reports (date, title, description, user_id)
    VALUES
    ('${req.body.title}',
    '${req.body.date}',
    '${req.body.description}',
    ${req.params.id})`);
    res.send("Success");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.put('/updateUser/firstName/:id', async(req, res) => {
  const db = req.app.get('db')
  await db.query(`UPDATE user1
    SET first_name = '${req.body.first_name}'
    WHERE id = ${req.params.id} `)

    const users = await db.user1.find();
    res.send(users)
}
)
app.put('/updateUser/lastName/:id', async(req, res) => {
  const db = req.app.get('db')
  await db.query(`UPDATE user1
    SET last_name = '${req.body.last_name}'
    WHERE id = ${req.params.id} `)

    const users = await db.user1.find();
    res.send(users)
}
)
app.put('/updateUser/email/:id', async(req, res) => {
  const db = req.app.get('db')
  console.log(req.body)
  console.log(req.params)
  await db.query(`UPDATE user1
    SET email = '${req.body.email}'
    WHERE id = ${req.params.id} `)

    const users = await db.user1.find();
    res.send(users)
}
)

app.get('/allReports', async (req, res) => {
  const db = req.app.get("db");
  const foundUser = await db.query(
    `SELECT * FROM reports`
  );
  res.send(foundUser);
})


app.get("/reports", async (req, res) => {
  const db = req.app.get("db");
  const foundUser = await db.query(
    `SELECT * FROM reports WHERE user_id = ${
      req.session.user.id
    }`
  );
  res.send(foundUser);
});

//DELETE

app.delete("/users/:id", async (req, res) => {
  try {
    const db = req.app.get("db");
    // how to use SQL queries in server
    await db.query(`DELETE FROM user1 WHERE id=${req.params.id}`);
    res.send("removed user");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(8080, () => console.log("Listen!"));
