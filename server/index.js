const express = require('express');
const app = express();
const port = 7001;

const request = require('request');
const crypto = require('crypto');

const md5Hash = (string) => {
  const md5Sum = crypto.createHash('md5');
  md5Sum.update(string);
  return md5Sum.digest('hex');
}

app.use(require("body-parser").json());
app.use(require("cors")());

const user = {
  id: '1234abc',
  name: 'James Hunter',
  email: 'james.hunter@starlingbank.com'
};

app.get('/api/user', function(req, res) {
  res.send(user);
});

app.get('/api/user/profile-image', function(req, res) {
  const emailHash = md5Hash(user.email);
  const imageUrl = `https://www.gravatar.com/avatar/${emailHash}.jpg`;
  console.log(`Proxying request to ${imageUrl}`);
  request.get(imageUrl).pipe(res);
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
