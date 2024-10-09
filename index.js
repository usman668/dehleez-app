import express from "express";
import dotenv from "dotenv";
import { bannerRoutes } from "./routes/banner_routes.js";
import {userRoute} from "./routes/register_routes.js";
import { businessRoutes } from "./routes/business_routes.js";
import { dbConnection } from "./db/db.js";
import { initSocket } from "./socket/initilization.js";
import http from "http";
import { departmentRoute } from "./routes/department_routes.js";
dotenv.config();
const app = express();

const server = http.createServer(app);

dbConnection()
  .then(() => {
    console.log(`Server is connected`);
  })
  .catch((error) => {
    console.log(`ERROR OCCURS: `, error.message);
  });

app.use(express.json());

// User Routes:-
app.use("/register", userRoute)

// Banner Routes:-
app.use("/banner", bannerRoutes);

// Department Routes:-
app.use("/department", departmentRoute)

// Business Routes:-
app.use("/business", businessRoutes)


initSocket(server);
server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
