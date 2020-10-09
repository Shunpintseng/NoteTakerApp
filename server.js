//initial Dependencies set up. 
const express = require("express");
const app = express();
const fs = require("fs");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require(".routes/htmlRoutes")(app);


//server listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

  //set up a const to define the data sorce saved in data folder

const notes = require("../data/db")

//Routing

module.exports = function(app) {

//GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON
app.get("/api/notes", function(req, res) {
    res.json(notes);
});

//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function(reg, res) {
    notes.push(req.body);
})
};

//DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

app.post("/api/clear", function(req, res){

    
})

const path = require("path");


module.exports = function (app){

//GET `/notes` - Should return the `notes.html` file
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__durname, "../public/notes.html"));
});

//GET `*` - Should return the `index.html` file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

}