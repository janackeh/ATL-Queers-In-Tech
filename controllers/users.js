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
const usersApi = require("../models/users.js");

/* Step 3
 *
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const usersRouter = express.Router();

/* Step 4
 * 
 * TODO: Put all request handlers here

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */

usersRouter.get("/", (req, res) => {
usersApi.getAllUsers().then(users => {
    res.json(users);
  });
});

usersRouter.get("/:usersId", (req, res) => {
  usersApi
    .getUser(req.params.usersId)
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err);
    });
});

usersRouter.post("/", (req, res) => {
  usersApi
    .addNewUser(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

usersRouter.put("/:usersId", (req, res) => {
  usersApi
    .updateUsers(req.params.usersId, req.body)
    .then(updatedUsers => {
      res.json(updatedUsers);
    })
    .catch(err => {
      console.log(err);
    });
});

usersRouter.delete("/:usersId", (req, res) => {
  usersApi
    .deleteUsers(req.params.usersId)
    .then(users => {
      res.json(users);
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
  usersRouter
};