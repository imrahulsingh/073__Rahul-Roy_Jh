const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());
const { adduser , selectAllUser} = require("./user.js")

const cors = require("cors");
app.use(cors());

app.post("/us", async (req, res) => {


    const user = req.body;
    await adduser(user);
    res.json({ message: "User Added Successfully" });

   

});

app.get("/users", async (req, res) => {
    const list = await selectAllUser();
    res.json(list);
  });

app.listen(4000, () => console.log("server started"));