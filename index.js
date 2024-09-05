const express = require("express");
let cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());
app.set("port", process.env.PORT || 5000);

app.get("/", (req, res, next) => {
  res.send("<h1>Hello world<h1>");
});
app.post("/", (req, res, next) => {
	
  res.json({data:req.body,message:"get successful"});
  res.end()
})
app.get("/:anand", (req, res, next) => {
	res.send(`Hello ${req.params.anand}!`);
	res.end()
});

app.listen(app.get("port"), () => {
  console.info(`Server listen on port ${app.get("port")}`);
});