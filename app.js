import express from "express";
const app = express();
const port = 4000;

app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/",(req,res)=>{
  res.render("home");
})
app.listen(port,()=>{
  console.log(`server listening on url http://localhost:${port}`);
})