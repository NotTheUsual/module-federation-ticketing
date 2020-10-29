const express = require("express");
const app = express();
const port = 7001;

app.use(require("body-parser").json());
app.use(require("cors")());

const user = {
  id: '1234abc',
  name: 'James Hunter',
  email: 'james.hunter@me.com'
};

app.get('/api/user', function(req, res) {
  res.send(user);
});

const tickets = [
  { id: 1, title: 'Do something' }
];

app.get('/api/tickets', function(req, res) {
  res.send(tickets);
});

app.listen(port, () =>
  console.log(`Ticeting service listening at http://localhost:${port}`)
);

// app.post("/api/checkout", function (req, res) {
//   cart.items = [];
//   res.send(cart);
// });

// app.post("/api/add", function (req, res) {
//   const pokemon = req.body.pokemon;
//   let found = false;
//   cart.items.forEach((item) => {
//     if (item.pokemon.name.english === pokemon.name.english) {
//       item.count += 1;
//       found = true;
//     }
//   });
//   if (!found) {
//     cart.items.push({
//       pokemon,
//       count: 1,
//     });
//   }
//   res.send(cart);
// });

// app.get("/api/cart", function (req, res) {
//   res.send(cart);
// });
