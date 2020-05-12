const express = require("express"),
  mc = require("./controllers/messages_controller"),
  messagesBaseUrl = "/api/messages",
  app = express(),
  port = 3001;

app.use(express.json());
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
