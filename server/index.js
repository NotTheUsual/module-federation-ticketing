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
  { id: '1', title: 'Do something', completed: false },
  { id: '2', title: 'Learn about module federation', completed: false },
  { id: '3', title: 'Write a demo app', completed: false },
  { id: '4', title: 'Pretend youre not doing ticketing', completed: true },
  { id: '5', title: 'Write some fake tickets', completed: true },
  { id: '6', title: 'Fill out the space some more', completed: false },
];

app.param('ticketId', (req, res, next, ticketId) => {
  const ticket = tickets.find(ticket => ticket.id === ticketId);
  
  if (ticket) {
    req.ticket = ticket;
    next();
  } else {
    const error = new Error('no such ticket');
    error.status = 404;
    next(error);
  }
});

app.get('/api/tickets', function(req, res) {
  res.send(tickets);
});

app.put('/api/tickets/:ticketId/toggle', function(req, res) {
  req.ticket.completed = !req.ticket.completed;
  res.send(202);
});

const docs = [
  { id: '1', title: 'What’s going on with Module Federation?' },
  { id: '2', title: 'Why JavaScript is so great' },
  { id: '3', title: 'I really don’t know what to put here' },
  { id: '4', title: 'Being good at coming up with fake titles' }
];

app.get('/api/docs', function(req, res) {
  res.send(docs);
});

app.listen(port, () =>
  console.log(`Ticeting service listening at http://localhost:${port}`)
);
