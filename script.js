// ---------- 1. Select elements ----------
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const list = document.querySelector("#notes-list");
const count = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

const MAX_LENGTH = 200;

// ---------- 2. Data ----------
let notes = [];

// ---------- 3. Helpers ----------
function countMessage() {
  if (notes.length === 0) return "You have no notes yet.";
  if (notes.length === 1) return "You have 1 note.";
  return `You have ${notes.length} notes.`;
}

function showError(message) {
  errorMessage.textContent = message;
}

// ---------- 4. Draw the notes ----------
function render() {
  list.replaceChildren();

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.classList.add("note", `category-${note.category}`);

    const body = document.createElement("div");
    body.classList.add("note-body");

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const meta = document.createElement("div");
    meta.classList.add("note-meta");

    const label = document.createElement("span");
    label.classList.add("category-label");
    label.textContent =
      note.category.charAt(0).toUpperCase() + note.category.slice(1);

    const date = document.createElement("span");
    date.textContent = note.createdAt;

    const del = document.createElement("button");
    del.type = "button";
    del.classList.add("delete-btn");
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteNote(note.id));

    meta.append(label, date);
    body.append(text, meta);
    li.append(body, del);
    list.appendChild(li);
  });

  count.textContent = countMessage();
}

// ---------- 5. Add and delete ----------
function addNote(text, category) {
  notes.push({
    id: Date.now(),
    text: text,
    category: category,
    createdAt: new Date().toLocaleString(),
  });
  render();
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  render();
}

// ---------- 6. Form with validation ----------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (text === "") {
    showError("Please type a note first.");
    return;
  }
  if (text.length > MAX_LENGTH) {
    showError("Notes must be 200 characters or fewer.");
    return;
  }

  showError("");
  addNote(text, categorySelect.value);
  input.value = "";
  input.focus();
});

render();