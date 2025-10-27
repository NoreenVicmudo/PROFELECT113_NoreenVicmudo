//express - framework of js
//cors - cross origin resource sharing to connect front end
//dotenv - dito iistore credentials, it is a secret, cannot be seen in code, not included when importing at github
//auth controller - users - storing passwords encrypt, login - generate token
//db.js - connect in database
//middleware - to verify token, and can be reused, usually used first before going to the function

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "100mb" })); //to parse json data from request body

app.use("/api/auth", authRoutes); //prefix for auth routes // localhost:3000/api/auth/register

app.listen(process.env.PORT, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
});

//ANGULAR, VUE, REACT - FRONT END NEW
//JQUERY - OLD FRONT END
//REACT - library, collection of codes created by developer - unlike vue and react
/* single page applications
fb started react
offers interactive ways for virtual dom - bawat elements may properties innertext, innerhtml 
//copies the dom coded and makes it virtual / a copy of the dom
// vanilla javascript - classic
// react - component based, separated combobox, textbox and then combine on another page, for reusability
virtual dom - copy of real dom 
- it renders faster
- cycle 
1. initial rendering - create virtual dom
2. state or props change - load and attach data on the virtual dom
3. diffing - compare previous state of component and new state of component, does not move when there is no change
4. update - apply changes without affecing old state

set up vite for react
1. create react app - old version used by fb before
2. vite - new version 


*/
