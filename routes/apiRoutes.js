//set up a const to define the data sorce saved in data folder
var fs = require("fs");
var notes = require("../data/note_db");


//create functions for adding, deleting and show notes
function createNote (providedTitle, providedText, providedID){
    let newNote = {title: providedTitle, text: providedText,isDeleted:false, id: providedID}
    return newNote
}

function addNote (title, text, id){
    let note = createNote(title, text,myDb.entries.length)
    myDb.entries.push (note);
    return note
}

function deleteNote (id) {
    myDb.entries[id].isDeleted === true
}

function currentNotes () {
    return myDb.entries.filter(function(elem){return elem.isDeleted === false});
}

function createDb (){
    return {entries:[]}
}

var myDb = createDb()

//Routing
module.exports = function(app) {

//GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON
app.get("/api/notes", function(req, res) {
    console.log("someone requestd datat")
    let curNotes = currentNotes();
    console.log("printing current notes")
    console.log(curNotes)
    res.json(curNotes);
  });

//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function(req, res) {
    console.log("hello");
    let createdNote = addNote(req.body.title, req.body.text);
    console.log(myDb)
    res.send()
})




//DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

app.post("/api/clear", function(req, res){
    console.log("deleting something")
    deleteNote(req.body.id)    
})


};





