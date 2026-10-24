# Assembly: Endgame (TypeScript)

A word-guessing game built with React, TypeScript, and Vite. Guess the hidden word before you run out of attempts and Assembly takes over the programming world.

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

- React 19
- TypeScript (TSX)
- Vite 6
- `@vitejs/plugin-react` (JSX transform + Fast Refresh)
- `clsx` for conditional CSS classes
- `react-confetti` for the win celebration
- CSS Flexbox

---

##  Getting Started

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
npm run build     # type-checks and outputs to dist/
npm run preview   # preview the production build locally
```

Run `npm run lint` to check the source code.

---

##  Project Structure

```text
.
├── src/
│   ├── components/
│   │   ├── AriaLiveStatus.tsx  # Screen-reader game announcements
│   │   ├── ConfettiContainer.tsx
│   │   ├── GameStatus.tsx      # Win, loss, and farewell messages
│   │   ├── Header.tsx
│   │   ├── Keyboard.tsx        # Letter selection controls
│   │   ├── LanguageChips.tsx
│   │   ├── NewGameButton.tsx
│   │   └── WordLetters.tsx
│   ├── App.tsx                 # Game state and game flow
│   ├── index.css               # Game layout and styles
│   ├── languages.ts            # Programming language status chips
│   ├── main.tsx                # React entry point
│   └── utils.ts                # Random word and farewell helpers
├── index.html                  # HTML entry point and page metadata
├── package.json                # Scripts and dependencies
├── package-lock.json           # Locked dependency versions
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts              # Vite and React plugin configuration
```

---

##  What I Learned

- Managing interactive game state with React hooks and TypeScript
- Building reusable typed React components
- Rendering dynamic content from arrays with `map()` and stable keys
- Supporting screen readers with accessible labels and live status updates
- Separating game data, helper functions, and interface components

---

##   Author

Leung

##   License

No license is currently specified for this project.
