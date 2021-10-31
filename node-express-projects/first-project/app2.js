const express = require("express");
const app = express();
let { people } = require("./data");

//static assets
app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//http get method
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (!name) {
    return res.status(400).json({ success: false, msg: "please enter a name" });
  } else {
    res.status(201).json({ success: true, person: name });
  }
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please enter a name" });
  } else {
    res.status(201).json({ success: true, data: [...people, name] });
  }
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send("heyyyyyyy");
  } else {
    res.status(404).send("bbbbeyyyyyy");
  }
  res.send("post");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(400).json({ success: false, msg: "no person found" });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, dtat: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(400).json({ success: false, msg: "no person found" });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server is litening.....");
});
