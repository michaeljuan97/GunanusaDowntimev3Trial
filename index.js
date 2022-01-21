// import express
import express from "express";
// import cors
import cors from "cors";

// import routes
import Router from "./backend/routes/router.js"
 
// init express
const app = express();
 
// use express json
app.use(express.json());

var corsOptions = {
    origin: "*"
  };
// use cors
app.use(cors(corsOptions));
 
// use router
app.use(Router);
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));