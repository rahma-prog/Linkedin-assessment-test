import express from "express";
import { surveyController } from "../controllers/index.js";

export const surveyRouter = express.Router();

surveyRouter.get("/surveys/:id", surveyController.getById);
surveyRouter.get("/surveys", surveyController.getAll);
