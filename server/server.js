const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const port = 4000;
const user = require("./models/user");
const { authSchema } = require("./Auth/auth");

dotenv.config({ path: "./config/config.env" });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
   .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
   })
   .then((res) => {
      console.log("connected to the mongodb successfully......");
   })
   .catch((err) => {
      console.error(err);
      process.exit(1); //this will stop the nodejs process if unable to connect with mongodb
   });

app.get("/", (req, res) => {
   res.send("sucess");
});

app.get("/reg", async (req, res) => {
   try {
      let users = await user.find();
      res.status(200).json(users);
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: error.message,
      });
   }
});

app.get("/reg/:id", async (req, res) => {
   try {
      let userId = req.params.id;
      let users = await user.findById(userId);
      res.status(200).json(users);
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: error.message,
      });
   }
});

app.post("/reg", async (req, res) => {
   try {
      let newuser = await authSchema.validateAsync(req.body);
      // user is exists or not
      let users = await user.findOne({
         name: newuser.name,
      });
      if (users) {
         return res.status(401).json({
            msg: "user is already exits",
         });
      }
      users = new user(newuser);
      users = await users.save(); //insert the user to database
      res.status(200).json({
         result: "user is created successfully",
         register: users,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: error.message,
      });
   }
});

app.listen(port, () => {
   console.log(`listing on port no ${port}`);
});
