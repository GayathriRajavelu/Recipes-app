import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Database/dbConfig.js";
import recipeRouter from "./Routers/recipeRouter.js";
//Dotenv configuration

dotenv.config();

//Express Initialization

const app = express();

//default middleware

app.use(express.json());
app.use(cors());

//Database connection

connectDB();

//Default route

app.get("/", (req, res) => {
    res.status(200).send("welcome to the API");
});

//custom routes

app.use("/api/recipes", recipeRouter);

//Port

const port = process.env.PORT || 5000;


//server starting logic

app.listen(port,() =>{
    console.log("server started");
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON format in request body"
    });
  }
  next();
});