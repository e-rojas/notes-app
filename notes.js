const fs = require("fs");
const chalk = require("chalk");
//Get notes function
const getNotes = function() {
  return "Your Notes...";
};

//adding a note function
const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.black.bgYellow("New Note Added"));
  } else {
    console.log(chalk.bgRed.bold("Note title taken!!!!"));
  }
};
//loadNotes function
const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//saveNotes function
const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//removeNote function
const removeNote = function(title) {
  //load notes
  let notes = loadNotes();
  //note to be removed faulsy
  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });
  if (notesToKeep.length === notes.length) {
    console.log(chalk.green("No note found with title: " + title));
  } else {
    //save notes to file system
    saveNotes(notesToKeep);
    console.log(chalk.bgRed.bold(`Note removed from DB with title: ${title}`));
  }
};
const listNotes = ()=>{
    let notes = loadNotes()
    console.log(chalk.inverse.bgCyan(' Your Notes: \n'));
  notes.forEach(note => {
    console.log(`Title: ${chalk.magentaBright(note.title)}\n Body: ${chalk.yellow(note.body)} \n **************`);  
  });
 
}
//export functions
module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes
};
