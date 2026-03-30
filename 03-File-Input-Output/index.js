import {
  newNote,
  getAllNotes,
  findNotes,
  removeNotes,
  removeAllNotes,
} from "./src/notes.js";

const main = async () => {
  await newNote("This is my first note", ["personal", "important"]);
  await newNote("This is my second note", ["work"]);

  console.log(await getAllNotes());
  console.log(await findNotes("first"));
  console.log(await removeNotes(1774864294792));
  console.log(await getAllNotes());
  //   await removeAllNotes();
};

main();
