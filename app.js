import express from "express"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/getmyapi", (req,res)=>{
  req.send({
    "message": "The success api fetch"
    "data":[]
  }
});

app.listen(4033, ()=>{
  console.log("Server is running on the port 4033");
})
