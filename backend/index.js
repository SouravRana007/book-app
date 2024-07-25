import express from "express";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import { connectDB } from "./database/db.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
// connect to mongo db
connectDB()
  .then(() => {
    app.on("Error", (error) => {
      console.error("Error : ", error);
      throw error;
    });

    console.log("Port: ", PORT);

    app.listen(PORT, () => {
      console.log(`Server is listening at : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO_DB Connection Failed : ", err);
  });
//   defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
// app.use("/");
