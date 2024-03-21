import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "jdoe", name: "John Doe" },
  { id: 2, username: "smith", name: "Jane Smith" },
  { id: 3, username: "adam", name: "Jane Smith" }, //add 4 more user    objects here
  { id: 4, username: "EmilyBrown", name: "Emily Brown" },
  { id: 5, username: "jhodan", name: "Joe Hodan" },
  { id: 6, username: "bjack", name: "Black Jack" },
  { id: 7, username: "clee", name: "Chun Lee" },
];

//REQUESTS

app.get("/", (req, res) => {
  res.status(201).send({ msg: "hello" });
});

app.get("/api/users/", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;

  if (!filter && !value) return response.send(mockUsers);
  res.send(mockUsers);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parsedID = parseInt(req.params.id);
  if (isNaN(parsedID)) {
    return res.status(400).send({ msg: "Bad Request. Invalid ID" });
  }

  const findUser = mockUsers.find((user) => user.id === parsedID);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

app.get("/api/products", (req, res) => {
  const products = [{ id: 1, name: "Chicken Breast", price: 12.99 }];

  res.send(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
