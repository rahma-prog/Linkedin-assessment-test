const SURVEYS = [
  { id: 1, title: "survey1", description: "this is survey1 " },
  { id: 2, title: "survey2", description: "this is survey2 " },
  { id: 3, title: "survey3", description: "this is survey3 " },
];

function findById(id) {
  return SURVEYS.find((survey) => survey.id === id);
}

function deleteById(id) {
  return SURVEYS.splice(
    SURVEYS.findIndex((survey) => survey.id === id),
    1
  );
}

function searchByTitle(title) {
  return SURVEYS.filter((survey) =>
    survey.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  );
}

function findAll() {
  return SURVEYS;
}

export const surveyModel = {
  findById,
  deleteById,
  searchByTitle,
  findAll,
};
