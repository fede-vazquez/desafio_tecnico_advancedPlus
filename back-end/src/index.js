const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes");

const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor prendido en el puerto ${port}`);
});

app.use("/", mainRoutes);
