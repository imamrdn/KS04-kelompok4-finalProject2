const express = require("express");
const app = express();
const user = require("./routes/User");
const PORT = 3000;

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(user);

app.listen(PORT, () => {
  console.log(`Berjalan pada port ${PORT}`);
});
