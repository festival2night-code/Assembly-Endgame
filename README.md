# Assembly: Endgame

A word-guessing game built with React and Vite. Guess the hidden word before you run out of attempts and Assembly takes over the programming world.

---

##  Features

- **Random Word** – Each round selects a word from the game's word list.
- **Interactive Keyboard** – Guess letters using the on-screen alphabet.
- **Limited Attempts** – Incorrect guesses remove programming languages from the status display.
- **Win and Loss States** – Reveal the word to win; the hidden word is revealed when attempts run out.
- **New Game** – Start another round after a game ends.
- **Win Celebration** – Confetti appears when you win.
- **Accessible Status** – Game updates and remaining attempts are announced to screen readers.

---

##  Tech Stack

- React 18
- JavaScript (JSX)
- Vite 8
- `@vitejs/plugin-react` (JSX transform + Fast Refresh)
- `clsx` for conditional CSS classes
- `react-confetti` for the win celebration
- CSS Flexbox

---

##  Getting Started

Requires Node.js 20.19+ or 22.12+.

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open Browser

Visit http://localhost:5173

---

##  Build for Production

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

---

##  Project Structure

```text
.
├── App.jsx           # Game state, rendering, and win/loss handling
├── index.css         # Game layout and styles
├── index.html        # HTML entry point and page metadata
├── index.jsx         # React entry point
├── languages.js      # Programming language status chips
├── package.json      # Scripts and dependencies
├── package-lock.json # Locked dependency versions
├── utils.js          # Random word and farewell message helpers
├── vite.config.js    # Vite and React plugin configuration
└── words.js          # Word list used for each round
```

---

##  What I Learned

- Managing interactive game state with React hooks
- Rendering dynamic content from arrays with `map()` and stable keys
- Passing event handlers and data through component props
- Supporting screen readers with accessible labels and live status updates
- Organizing game data and helper functions separately from UI components

---

##   Author

Leung

##   License

No license is currently specified for this project.
