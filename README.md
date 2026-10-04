# QuickNotes

QuickNotes is a note-taking web app built with HTML, CSS and JavaScript. You can write short notes, sort them into categories, search through them, and they are saved in your browser so they are still there after a refresh.

## Features

- Add notes with a category (Personal, Work or Study)
- Validation: empty notes and notes over 200 characters are rejected with an error message
- Delete individual notes
- Live search that ignores upper and lower case
- Note count that handles zero, one and many notes
- Notes saved with localStorage
- Responsive layout for phones and laptops

## How to run locally

1. Clone the repository: `git clone https://github.com/Gachi707/quicknotes-app.git`
2. Open the folder in VS Code.
3. Right-click `index.html` and choose "Open with Live Server" (or just open `index.html` in a browser).

## What I learned

- How the data, save and render pattern keeps the screen in sync with the notes array.
- Why textContent is safer than innerHTML for user text.
- How localStorage needs JSON.stringify and JSON.parse to store an array of objects.
- How I fixed Git problems,such as pushing to the wrong repo and nested folders.