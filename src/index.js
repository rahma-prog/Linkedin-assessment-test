// const http =  require('http');

import express from "express";
import { surveyRouter } from "./routes/index.js";
const app = express();
// const Joi = require("joi");

app.use(express.json());
app.use(surveyRouter);

// const surveys = [
//   { id: 1, title: "survey1", description: "this is survey1 " },
//   { id: 2, title: "survey2", description: "this is survey2 " },
//   { id: 3, title: "survey3", description: "this is survey3 " },
// ];

// app.get("/api/surveys/", (req, res) => {
//   res.send(surveys);
// });

// app.get("/api/surveys/:id", (req, res) => {
//   const survey = surveys.find((s) => s.id === parseInt(req.params.id));
//   if (!surveys) res.status(404).send("the survey is not found..");
//   res.send(survey);
// });

// app.post("/api/surveys/", (req, res) => {
//   const schema = {
//     title: Joi.string().min(4).required(),
//   };
//   const result = Joi.validate((req.body, schema));

//   if (result.error) {
//     res.status(400).send(result.error);
//     return;
//   }

//   const survey = {
//     id: surveys.length + 1,
//     title: req.body.title,
//     description: req.body.description,
//   };

//   surveys.push(survey);
//   res.send(survey);
// });

// app.post('/api/surveys/', (req, res) => {
//     const survey = {
//         id: surveys.length + 1 ,
//         title: req.body.title ,
//         description: req.body.description
//     };
//     surveys.push(survey);
//     res.send(survey);
// })

// app.put("/api/surveys/"),
//   (req, res) => {
//     const survey = {
//       id: surveys.length + 1,
//       title: req.body.title,
//       description: req.body.description,
//     };

//     res.send(survey);
//   };

// const surveyQuestion = [
//     {id:1, title: 'Question1' , content : '', order : 1 ,maximum_duration : 30},
//     {id:2, title: 'Question2' , content : '', order : 2 ,maximum_duration : 30},
//     {id:3, title: 'Question3' , content : '', order : 3 ,maximum_duration : 30},
// ]

// app.get('/api/surveyQuestion/',(req , res) => {
//     res.send(surveyQuestion);
// } )

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// app.get()
// app.put()
// app.post()
// app.delete()
