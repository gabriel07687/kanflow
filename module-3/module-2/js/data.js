const columns = [
  { id: "todo", title: "To Do", dot: "dot-todo" },
  { id: "inprogress", title: "In Progress", dot: "dot-inprogress" },
  { id: "review", title: "Review", dot: "dot-review" },
  { id: "done", title: "Done", dot: "dot-done" },

  // NEW COLUMN (Task 2 example)
  { id: "testing", title: "Testing", dot: "dot-testing" }
];

const cards = [
  { id: 1, title: "Research event-driven patterns", column: "inprogress", tag: "Research", done: false },
  { id: 2, title: "Set up project folder structure", column: "todo", tag: "Setup", done: false },
  { id: 3, title: "Write HTML skeleton", column: "todo", tag: "HTML", done: false },
  { id: 4, title: "Style the board layout with CSS", column: "inprogress", tag: "CSS", done: false },
  { id: 5, title: "Link JS files to index.html", column: "inprogress", tag: "JS", done: false },
  { id: 6, title: "Plan Kanban board modules", column: "done", tag: "Planning", done: true },

  // NEW CARD (Task 1 example)
  { id: 7, title: "Finish Module 2 Tasks", column: "todo", tag: "JS", done: false }
];