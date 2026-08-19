# Qixi Love Story (modified)

This is a lightly modified version of the original project. I added a central data file so you can edit all personal content in one place.

Edit personal content here:

- `src/data/loveStory.js` — change names, dates, photos, timeline entries, letters, and the final letter.

Photos:

- Put your images in `static/photos/` and reference them from `loveStory.js` (examples already use `/static/photos/...`).

Music:

- Place `background.mp3` in `static/music/` if you want background music; the player is wired in the markdown/generation logic and will wait for user interaction.

Run the app (original project uses custom build tools):

```powershell
cd app
npm install
npm run dev
```

If your environment rejects the original build scripts, you can use a modern Vite scaffold instead — ask me and I can migrate the project.
