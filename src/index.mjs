import express from "express";

const app = express();

//Middleware

app.use(express.json()); //Parse incoming requests with JSON payloads

//Route

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

app.get("/", (request, response) => {
  response.status(201).send({ msg: "hello" });
});
app.get("/api/users/", (request, response) => {
  console.log(request.query);
  const {
    query: { filter, value },
  } = request;
  if (filter && value) {
    return response.send(
      mockUsers.filter((user) => user[filter].includes(value))
    );
  }
  return response.send(mockUsers);
});

app.post("/api/users", (request, response) => {
  console.log(request.body);
  const { body } = request;
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
  mockUsers.push(newUser);
  return response.status(201).send(newUser);
});

app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
  const parsedID = parseInt(request.params.id);
  if (isNaN(parsedID)) {
    return response.status(400).send({ msg: "Bad Request. Invalid ID" });
  }

  const findUser = mockUsers.find((user) => user.id === parsedID);
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
});

app.get("/api/products", (request, response) => {
  const products = [{ id: 1, name: "Chicken Breast", price: 12.99 }];

  response.send(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
