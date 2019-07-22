/* Step 1 import express
 *
 */
const express = require("express");

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the
 * controller you need.
 *
 */
const meetupApi = require("../models/meetup.js");

/* Step 3
 *
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const meetupRouter = express.Router();

/* Step 4
 * 
 * TODO: Put all request handlers here

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */

meetupRouter.get("/", (req, res) => {
  meetupApi.getAllMeetups().then(meetups => {
    res.json(meetups);
  });
});

meetupRouter.get("/:meetupId", (req, res) => {
  meetupApi
    .getMeetup(req.params.meetupId)
    .then(meetup => {
      res.json(meetup);
    })
    .catch(err => {
      console.log(err);
    });
});

meetupRouter.post("/", (req, res) => {
  meetupApi
    .addNewMeetup(req.body)
    .then(meetup => {
      res.json(meetup);
    })
    .catch(err => {
      console.log(err);
    });
});

meetupRouter.put("/:meetupId", (req, res) => {
  meetupApi
    .updateMeetup(req.params.meetupId, req.body)
    .then(updatedMeetup => {
      res.json(updatedMeetup);
    })
    .catch(err => {
      console.log(err);
    });
});

meetupRouter.delete("/:meetupId", (req, res) => {
  meetupApi
    .deleteMeetup(req.params.meetupId)
    .then(meetup => {
      res.json(meetup);
    })
    .catch(err => {
      console.log(err);
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  meetupRouter
};
