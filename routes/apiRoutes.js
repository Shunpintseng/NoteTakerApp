//set up a const to define the data sorce saved in data folder
var fs = require("fs");


//create functions for adding, deleting and show notes
function createNote (providedTitle, providedText, providedID){
    let newNote = {title: providedTitle, text: providedText,isDeleted:false, id: providedID}
    return newNote
}

var dbfile = "../note_db2.json"

function addNote (title, text, id){
    let note = createNote(title, text,myDb.entries.length)
    myDb.entries.push (note);
    fs.writeFile(dbfile, JSON.stringify(myDb), function(err){console.log(err)})
    return note
}

function deleteNote (id) {
    myDb.entries[id].isDeleted = true
}

function currentNotes () {
    return myDb.entries.filter(function(elem){return elem.isDeleted === false});
}

function loadDb (){
    let fileContent = fs.readFile(dbfile, function(err){});
    console.log(fileContent);
    if(fileContent!=undefined){
        return JSON.parse(fileContent).entries;
    }
    return {entries:[]}
}

var myDb = loadDb()

//Routing
module.exports = function(app) {

//GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON
app.get("/api/notes", function(req, res) {
    let curNotes = currentNotes();
    res.json(curNotes);
  });

//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function(req, res) {
    let createdNote = addNote(req.body.title, req.body.text);
    res.send()
})




//DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

app.delete("/api/notes/:id", function(req, res){
    deleteNote(req.params.id)  
    res.send()  
})


};





