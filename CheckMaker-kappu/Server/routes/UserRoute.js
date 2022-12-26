import UserData from "../models/UserData.js";
import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import auth from "../routes/Auth.js";

router.post("/register", async (req, res) => {
  const { username, email, password, mobile } = req.body;
  console.log(username);

  const userExist = await UserData.findOne({ email: email });
  if (userExist) {
    res.status(500).json({ message: "User already exists", status: false });
  }

  try {
    const data = new UserData({
      username,
      email,
      password,
      mobile,
    });

    const dataRegister = await data.save();
    res.status(201).json({ message: "Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", function (req, res, next) {
  var username = req.body.username;

  UserData.find({ username: username })
    .exec()
    .then((user) => {
      console.log(user);
      if (user.length < 1) {
        res.status(404).json({
          message: "Auth Failed",
        });
      } else {
        bcrypt.compare(
          req.body.password,
          user[0].password,
          function (err, result) {
            if (err) {
              res.json({
                message: "Auth Failed",
              });
            }
            if (result) {
              var token = jwt.sign(
                {
                  username: user[0].username,
                  id: user[0]._id,
                },
                "secret",
                {
                  expiresIn: "8h",
                }
              );
              return res.status(200).json({
                message: "User Found",
                token: token,
                username: username,
                // id : id,
                status: true,
              });
            } else {
              res.json({
                message: "Auth Failed",
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      res.json({
        error: err,
      });
    });
});

router.get("/get", auth, async (req, res) => {
  // const userDatas = await UserData.find();
  // res.status(200).json({
  // success: true,
  // userDatas,
  // });
  console.log("kkkk", req.userId);
  res.json({ status: true });
});

export default router;
