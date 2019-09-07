const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
//Create add command
/* 
Challenge
1. Load existing notes
2. Use array filter to remove the matching not if any?
3. Save the newly created array
4. Test your work with a title that exist and title that doesn't
*/
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOptions: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
    // console.log((chalk.keyword('orange')('Title: ',argv.title,'Body: ',argv.body)));
  }
});
//Create remove command
yargs.command({
  command: "remove",
  decribe: "remove a note",
  builder: {
    title: {
      describe: "Note title to remove",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
      notes.removeNote(argv.title)
    //console.log(notes.removeNote(argv.title));
    //console.log((chalk.keyword('orange')('Title: of note to be removed => ',argv.title)));
    //console.log('removing the note');
  }
});
//Create a list command
yargs.command({
  command: "list",
  describe: "listing the notes",
  handler: function() {
    console.log("listing all notes");
  }
});
//Create a read commmand
yargs.command({
  command: "read",
  describe: "reading all notes",
  handler: function() {
    console.log("reading all notes");
  }
});
//console.log(yargs.argv);
yargs.parse();
