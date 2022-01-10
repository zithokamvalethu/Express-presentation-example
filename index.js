const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

const users = [
  { id: "1", name: "smith", surname: "dkjfsdkfj", numbers: "04593459435" },
  { id: "2", name: "thato", surname: "dkfjdskfj", numbers: "04593459435" },
];

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send(users);
});

app.delete("/:id", (req, res) => {
  var newUsers = [];
  for (var i in users) {
    if (users[i].id !== req.params.id) {
      newUsers.push(users[i]);
    }
  }
  res.send(newUsers);
});

app.post("/", (req, res) => {
  const body = req.body;
  users.push(body);
  res.send(200);
});

app.put("/:id", (req, res) => {
    var body = req.body
    var editedRecords = users.map((user) => {
    if (user.id == req.params.id) {
      return { ...user, name: body.name };
    }
    return user;
  });
  res.send(editedRecords);
});

app.listen(port, () => {
  console.log(`server running on port ${port} `);
});
