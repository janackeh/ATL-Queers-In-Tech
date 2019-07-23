/*
 * Place all functions, classes, and/or DB schemas here for a single
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require("./connection.js");

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database.
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */

/* Step 2
 *
 * TODO: create model schema
 * NOTE: skip this if you are not using mongoose
 *
 */
const MeetupSchema = new mongoose.Schema({
  name: String,
  description: String
});

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const MeetupCollection = mongoose.model("Meetup", MeetupSchema);

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllMeetups() {
  return MeetupCollection.find();
}

function getMeetup(meetupId) {
  return MeetupCollection.findById(meetupId);
}

function addNewMeetup(meetupObject) {
  return MeetupCollection.create(meetupObject);
}

function updateMeetup(meetupId, updatedMeetup) {
  return MeetupCollection.findByIdAndUpdate(meetupId, updatedMeetup, {
    new: true
  });
}

function deleteMeetup(meetupId) {
  return MeetupCollection.findByIdAndDelete(meetupId);
}
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllMeetups,
  getMeetup,
  addNewMeetup,
  updateMeetup,
  deleteMeetup
};
