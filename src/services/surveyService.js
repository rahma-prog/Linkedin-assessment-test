import { surveyModel } from "../models/index.js";

function findByTitle({ title }) {
  if (title !== undefined) {
    return surveyModel.searchByTitle(title);
  }

  return surveyModel.findAll();
}

function findById(id) {
  return surveyModel.findById(id);
}

export const surveyService = {
  findByTitle,
  findById,
};
