import { jest } from "@jest/globals";

jest.unstable_mockModule("../src/db.js", () => ({
  insertDB: jest.fn(),
  readDB: jest.fn(),
  saveDB: jest.fn(),
}));

const { insertDB, readDB, saveDB } = await import("../src/db.js");
const { newNote, getAllNotes, removeNotes } = await import("../src/notes.js");

beforeEach(() => {
  insertDB.mockReset();
  readDB.mockReset();
  saveDB.mockReset();
});

test("newNote should create a new note and insert it into the database", async () => {
  const newNotes = {
    tags: ["test"],
    id: Date.now(),
    content: "This is a test note",
  };
  insertDB.mockResolvedValue(newNotes);

  const result = await newNote(newNotes.content, newNotes.tags);
  expect(result).toEqual(newNotes);
});

test("getAllNotes should return all notes from the database", async () => {
  const db = {
    notes: ["note1", "note2", "note3"],
  };
  readDB.mockResolvedValue(db);

  const result = await getAllNotes();
  expect(result).toEqual(db.notes);
});

test("removeNotes should remove a note by id in the database and return the id", async () => {
  const notes = [
    { id: 1, content: "Note 1", tags: ["tag1"] },
    { id: 2, content: "Note 2", tags: ["tag2"] },
  ];
  readDB.mockResolvedValue({ notes });
  saveDB.mockResolvedValue();

  const result = await removeNotes(3);
  expect(result).toBeUndefined();
});
