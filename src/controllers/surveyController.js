import Joi from "joi";
import { surveyService } from "../services/surveyService.js";

async function getById(req, res) {
  const validationSchema = Joi.object({
    id: Joi.number().required(),
  });

  try {
    await validationSchema.validateAsync(req.params);
  } catch (err) {
    res.status(400).send(err);
    return;
  }

  const foundSurvey = surveyService.findById(Number.parseInt(req.params.id));
  if (foundSurvey) {
    res.json(foundSurvey);
    return;
  }
  res.status(404).send({ message: "Not found" });
}

function getAll(req, res) {
  const { title } = req.query;

  res.send(surveyService.findByTitle({ title }));
}

export const surveyController = {
  getById,
  getAll,
};
