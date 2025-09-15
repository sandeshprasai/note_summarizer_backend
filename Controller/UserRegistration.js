const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const UserModel = require("../Model/UserSchema");

const RegisterUser = async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    newUser.Password = await bcrypt.hash(newUser.Password, 10);
    await newUser.save();

    const signedToken = jwt.sign(
      {
        UserName: newUser.UserName,
        Email: newUser.Email,
      },
      process.env.ACCESS_TOKEN_SECRET, // ✅ secret
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY } // ✅ options
    );

    return res.status(201).json({
      message: "User Registration Successful",
      SignedToken: signedToken,
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ message: `${field} already exists` });
    }
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { RegisterUser };
