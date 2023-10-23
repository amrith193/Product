const { param } = require("../Router/Registerroute");
const ProductSchema = require("../Modal/RegisterSchema");
const RegisterSchema = require("../Modal/RegisterSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "amrith";

const Register = async (req, res) => {
  // console.log(req.file);

  try {
    const { name, email, passward } = req.body;
    const image =  req.file.filename
    let admin = await RegisterSchema.findOne({ email });
    if (admin) {
      return res.json({ error: "Email already exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(passward, salt);

      const data = await new RegisterSchema({ name, email, passward: hashedPassword ,image});
      const saveRegister = await data.save();

      console.log("Inserted successfully");
      res.json({ "inserted successfully": true, saveRegister });
    }
  } catch (error) {
    console.error("Internal server error: " + error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const Login = async (req, res) => {
  const { email, passward } = req.body;
  console.log(email);
  console.log(passward);
  try {
    let admin = await RegisterSchema.findOne({ email });
    if (!admin) {
      return res.json({ error: "invalid email" });
    }
    const passwardCompare = await bcrypt.compare(passward, admin.passward);
    if (!passwardCompare) {
      const success = false;
      return res.json({ success, error: "invalid pass" });
    }
    const data = admin.id;
    console.log(admin.id);
    const authtoken = jwt.sign(data, JWT_SECRET);
    const success = true;
    res.json({ success, authtoken, admin });
  } catch (error) {
    console.log(error);
    console.error(error.message);
    res.send("internal some error");
  }
};

module.exports = { Register, Login };
