import { createUser, findUserByEmail } from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = (req, res) => {
  const { name, email, password, role } = req.body; //tested in thunderclient, usually from view na ilalagay thru req.body

  if (!name || !email || !password || !role) {
    //validation - return error if any field is missing to view
    return res.status(400).json({ error: "All fields are required" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10); //encrypt password - 10 rounds of encryption

  createUser(name, email, hashedPassword, role, (err, result) => {
    //callback in model
    if (err) return res.status(500).json({ error: "Registration failed" });

    const userId = result.insertId; //get id of newly created user

    //Generate token after successful registration
    const token = jwt.sign({ id: userId, email }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(201).json({ token });
  });
};

export const loginUser = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const { email, password } = req.body;

  findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: "Login failed" });
    if (results.length === 0) {
      return res.status(401).json({ error: "User not found" }); // because model expects result so if there is no data, there is no such user
    }

    const user = results[0]; //get the first user, safety because email is unique
    const passwordMatch = bcrypt.compareSync(password, user.password); //decrypt and compare plain password and hashed password
    if (!passwordMatch)
      //shorthand of if statement
      return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({ token });
  });
};
