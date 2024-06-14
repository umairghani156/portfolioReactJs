import express from "express";
import { submitResponse } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/sendemail",submitResponse);

export default userRoute;