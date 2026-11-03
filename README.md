# Campus Quest: Build Your School Festival

**Your mission:** build a festival planner that a classmate would actually enjoy using. Discover fictional events, search for your interests, save a personal schedule, earn quest points, and propose your own activity. Finish with a website you can demonstrate and a GitHub contribution history you can explain.

**Duration:** two weeks · **Pace:** ten sessions of 60–90 minutes · **Level:** high school beginner with basic HTML/CSS exposure. Allow extra time if JavaScript is new. Use the weekend for catching up, not extra required features.

**Original repository:** [Mishael-2584/campus-quest](https://github.com/Mishael-2584/campus-quest)

## 1. What you are building

Imagine your school is planning a one-day festival. A poster cannot help you filter activities or remember your favourites. Your website will!

By the final demonstration, a visitor should be able to:

- Browse at least eight fictional festival events across at least four categories.
- Search events and filter by category at the same time.
- Save and remove events in **My Schedule**, with a total of their quest points.
- Refresh the page and keep their saved schedule in the same browser.
- Add a fictional event using a validated form, with helpful feedback.
- Use the site on a phone-sized screen and navigate it using a keyboard.

This is a static HTML/CSS/JavaScript project. It has no login, database, booking, payment, or public submission service. Form entries stay in the current page unless you implement the optional persistence challenge. The teacher will handle hosting after the project; deployment is not a student requirement.

### What already works, and what you must build

The starter displays **six event cards**, a hero section, basic styling, and a result count. JavaScript already reads an array and creates HTML elements safely. Your job is to understand that connection, expand the content, and build the interactive features. Search, category controls, save buttons, My Schedule, storage, and the form are intentionally missing.

| Topic | What you will do |
| --- | --- |
| HTML | Structure sections, labelled controls, a form, navigation, and accessible feedback. |
| CSS | Create a visual identity, responsive cards, clear saved states, and focus styles. |
| JavaScript | Work with arrays, objects, functions, events, the DOM, validation, and localStorage. |
| Git/GitHub | Fork, clone, branch, commit, push, link issues, open PRs, review, and sync. |

### How the pieces connect

```text
js/events.js supplies event objects
        ↓
js/app.js reads data and builds elements inside index.html
        ↓
styles.css styles those elements using their classes
        ↓
Visitor types, clicks, or submits a form
        ↓
JavaScript updates state and renders the new view
        ↓
localStorage remembers saved event ids between visits

Git commits record your work → push to your fork → PR proposes it to the original
```

## 2. Before you start

You need your own GitHub account, a modern browser, and internet for GitHub. Your account must be different from the original repository owner's account so you can practise forking. Use fictional event details and no student names, contact details, passwords, or API keys. No paid tools, external APIs, or frameworks are required.

Pick **one** setup option below. Both lead to the same project tasks and PR workflow. Work inside the repository folder whenever you run Git commands.

## 3. Fork the original repository

1. Sign in to your student GitHub account.
2. Open [the original repository](https://github.com/Mishael-2584/campus-quest).
3. Click **Fork**, choose your own account, and keep the name `campus-quest`.
4. Open your fork and check that its address starts with your GitHub username.

Your fork is your GitHub copy. It does not give you permission to push to the teacher's original repository. Do not create a brand-new unrelated repository or download a ZIP for this lesson; the fork relationship and Git history are needed.

## 4. Choose your development environment

### Option A — Local computer: clone manually

1. Install Git if needed, then open a **new** terminal and run `git --version`.
2. Use a text editor such as Visual Studio Code. A normal browser is enough to preview this project.
3. In **your fork**, click **Code → Local → HTTPS** and copy the URL.
4. In your terminal, move to the parent folder where you keep school projects. Run the following commands **one line at a time**. Replace `YOUR-USERNAME` with your GitHub username; if you renamed your fork, use the copied URL and resulting folder name instead.

```sh
git clone https://github.com/YOUR-USERNAME/campus-quest.git
cd campus-quest
git remote -v
```

5. Confirm `origin` points to **your fork**. Open the cloned folder in your editor with **File → Open Folder**. If the VS Code command is installed, `code .` does this too.
6. Set your commit identity for this repository, replacing both example values. You can use your GitHub private commit email from your GitHub email settings.

```sh
git config user.name "Your Name"
git config user.email "YOUR-COMMIT-EMAIL"
```

7. Open `index.html` in your browser. You should see six event cards. Save edits in your editor, then refresh the browser to see them.

**Optional local server:** if Python is installed, run `py -m http.server 8000` on Windows or `python3 -m http.server 8000` on macOS/Linux. Open `http://localhost:8000`. If neither command is available, use the direct-file preview for now; you do not need Python to build the site. A local HTTP server is recommended for predictable localStorage behaviour because browsers can treat `file:` URLs differently. Stop a running server with Ctrl+C.

### Option B — GitHub Codespaces

1. In **your fork**, choose **Code → Codespaces → Create codespace on main**.
2. Wait for setup, then find the files in Explorer and open the integrated terminal.
3. Run `git remote -v` and confirm `origin` points to your fork.
4. Run:

```sh
python3 -m http.server 8000
```

5. Open the **Ports** panel and open port **8000** in the browser. Keep the forwarded port private. You should see six event cards.
6. Leave the server running during previews. Use a second terminal for Git commands, or stop the server with Ctrl+C first.

Check your account's allowance and billing settings before creating a Codespace. See [GitHub's Codespaces billing documentation](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces). Choose a small machine if available. Stop your Codespace when finished; closing the browser alone is not a reliable way to stop it. Delete it when no longer needed after pushing your work, since stored Codespaces can consume storage allowance.

### Preview and storage rules for both options

Use the same browser and preview address when checking persistence. A direct file, `localhost:8000`, and a Codespaces URL have separate storage. Private browsing, browser settings, and cleared browser data can affect persistence. localStorage stores data on that browser; it does not sync between people or devices.

## 5. Explore the files before editing

```text
campus-quest/
├── index.html                 Page structure and containers for your features
├── styles.css                 Colours, cards, spacing, and future responsive rules
├── js/
│   ├── events.js              Six fictional event objects
│   └── app.js                 Starter renderer and feature TODOs
├── docs/
│   ├── HINTS.md               Graduated clues, without complete feature solutions
│   ├── TESTING.md             Manual checks and a results template
│   └── TEACHER_GUIDE.md       Review checkpoints and assessment
├── .devcontainer/             Optional Codespaces environment
├── .github/                   Issue and PR templates
├── .gitignore                 Files that should stay out of Git
├── CONTRIBUTING.md            Branch, PR, review, and synchronisation guide
└── LICENSE                    MIT licence
```

Open browser developer tools and find **Console**. Open `app.js` and locate `renderEvents(starterEvents)`. Trace how `createEventCard` gives a card its class and how `.event-card` in CSS changes its appearance. Explain this to your teacher before adding more code. The two scripts use `defer` and load in order: event data first, then application code.

## 6. Your two-week route

Use the [numbered learning issues](https://github.com/Mishael-2584/campus-quest/issues) in order. Their titles start with **Day 01** through **Day 10**. Before starting, comment on the relevant issue saying what you plan to do. Each issue has checkable success criteria. Refer to an issue in your PR using `Closes #NUMBER`, with its actual number from GitHub.

| Session | Mission | Evidence / suggested PR |
| --- | --- | --- |
| Week 1, Day 1 | Fork, run, trace the starter, and make a plan | Setup note and first small PR |
| Day 2 | Add content and semantic HTML | At least eight events; meaningful page structure |
| Day 3 | Design the responsive layout | Phone and desktop screenshots; design PR |
| Day 4 | Add JavaScript search and category filtering | Filters work together; feature PR |
| Day 5 | Build My Schedule and quest points | Add/remove without duplicates; feature PR |
| Week 2, Day 6 | Remember the schedule with localStorage | Refresh test and recovery check; feature PR |
| Day 7 | Create a validated event proposal form | Invalid input rejected; valid card appears; feature PR |
| Day 8 | Test accessibility and fix bugs | Recorded checks and a bug-fix PR |
| Day 9 | Review, revise, and synchronise | Review conversation and follow-up commit |
| Day 10 | Polish the portfolio and demonstrate | Final README, screenshots, and handover PR |

Aim for a small, working improvement each session. If you get stuck, write down what you expected, what happened, and what you tried. Spend 15–20 minutes investigating, then ask your teacher with that information. Finish the required features before stretch challenges.

## 7. Mission instructions and success checks

### Day 1: Launch your quest

- Complete either setup path and create a branch using section 8.
- Create `docs/MY_PLAN.md`: describe your festival theme, three visitors' needs, the ten-session plan, and which files connect HTML, CSS, and JavaScript.
- Verify six cards appear and the console has no errors. Make one small copy change in the hero to practise the edit/save/refresh cycle.
- Open your first PR with your setup method and what you learned. Do not include local paths containing private details in screenshots.

**Hint:** a visitor's need is a behaviour such as “I want to find sports activities quickly.” It should help you decide what to build.

### Day 2: Give your festival a personality (HTML + data)

- Choose a fictional festival name and update the title, hero copy, and description.
- Add at least two event objects in `js/events.js`. Keep each `id` unique, use one of the four existing categories, and keep `points` a positive number.
- Add semantic sections for My Schedule and event proposals, using headings and placeholder text. Add real labelled search and category controls ready for Day 4.
- Keep exactly one main heading, preserve the skip link, and make navigation point to real section ids.

**Done when:** eight cards render, navigation works, controls have associated labels, and each section has a meaningful heading.

**Hint:** text typed into `events.js` is JavaScript data. Each object needs commas between properties, and each array item needs a separating comma. Match the existing data shape.

### Day 3: Design a festival people want to explore (CSS)

- Pick a consistent colour palette and adjust CSS custom properties.
- Design cards and labelled controls with comfortable spacing.
- Use one column on a narrow screen and multiple columns when there is space. Avoid fixed card widths that force horizontal scrolling.
- Add visible hover and keyboard focus states, and readable text contrast. Do not use colour alone to indicate saved events.

**Done when:** the site works at about 375px and 1280px wide, text stays readable at 200% zoom, and there is no unintended horizontal scrolling.

**Hint:** explore CSS Grid, `gap`, and a media query. Start with the one-column rule already present. Keep the existing reduced-motion support.

### Day 4: Find your next adventure (JavaScript + DOM)

- Listen for typing in the search input and changes to the category select.
- Search titles and descriptions without case sensitivity; trim accidental spaces.
- Include an **All categories** option. Search and category must work together, not overwrite one another.
- Render the filtered list, update the result count, and show a helpful “no events found” message when needed. Clearing both controls must restore every event.

**Done when:** `robot` finds Robot Rally, `ROBOT` works too, selecting Arts while searching `robot` gives an empty state, and resetting controls restores all cards.

**Hint:** keep a master array of all events. Read both control values inside one filtering function, use `.filter()`, then call the existing renderer. Do not permanently replace your master array with search results.

### Day 5: Build My Schedule (state + functions)

- Add a Save/Remove button to every card and a My Schedule section.
- Store selected **event ids**, not copied titles or card HTML. Prevent duplicates.
- Let a visitor remove an event from the schedule. Update card button text and the schedule after every change, including after filtering.
- Calculate the total quest points of selected events. These are fun planning points, not evidence of attendance.
- Provide an empty schedule message and a text indication of saved state.

**Done when:** saving Robot Rally and Colour the Campus gives 35 points; saving an already selected event cannot add a duplicate; removing Robot Rally leaves 15 points. Saved state survives changing filters within the page.

**Hint:** use an array or `Set` of ids. Derive schedule cards and totals by looking up those ids in your event data. Re-rendering a card removes its old listeners, so attach listeners when creating new buttons or use delegation.

### Day 6: Remember the adventure (localStorage)

- Save the selected ids under a unique key such as `campusQuest.schedule.v1`.
- Load them once when the application starts, before the first schedule render.
- Recover gracefully if storage is blocked, missing, invalid JSON, or contains the wrong data shape. Validate ids against known events and remove duplicates.
- Provide a **Clear schedule** action that updates the interface and saved data.

**Done when:** the same preview address remembers selections after refresh; clearing remains cleared after refresh; setting the storage value to `not-json` in developer tools and reloading does not crash the page.

**Hint:** localStorage stores strings. Investigate `JSON.stringify`, `JSON.parse`, `try...catch`, and `Array.isArray`. Validate parsed values; a successfully parsed object is not necessarily an array of valid event ids. Storage writes can fail too.

### Day 7: Let visitors propose an event (HTML form + JavaScript)

- Add fields for title, description, category, time, and location. Give every field a visible label. Choose sensible length limits and use a select for category and a time input.
- Use fixed **10 quest points** for user-created events so visitors cannot inflate the total through a points input.
- Prevent page reload on submit. Trim text and reject blank or whitespace-only values, invalid category/time, and overlong text. Explain what the visitor needs to correct.
- Create a unique id for each accepted event, add it to the master array, and update the visible cards, category results, and count. Announce success and explain that active filters can hide a newly added event.
- Render submitted text with `textContent`, following the starter pattern. A title like `<b>My Event</b>` must appear as text, never injected HTML.
- Tell visitors that custom events reset on refresh in the required version.

**Done when:** invalid entries are rejected with clear feedback; valid input adds exactly one event without a reload; the event can be searched, filtered, and saved during that session; HTML-like text is displayed literally.

**Hint:** start with one field and one submit listener. Browser constraints such as `required` help, but whitespace-only strings need a trimmed-value check. Call your shared render/update functions instead of duplicating their logic. When a custom event disappears after refresh, safely discard its unknown id from the saved schedule.

### Day 8: Be your own quality team

- Use [docs/TESTING.md](docs/TESTING.md) to test keyboard access, responsive layout, search, schedule, storage, and forms.
- Record actual results in `docs/TEST_RESULTS.md`, including browser, date, and preview method.
- Open at least one useful bug issue using the repository's bug template. If nothing fails, ask your teacher for an edge case to investigate; do not invent a bug.
- Fix an observed bug or accessibility problem in a small PR and repeat the relevant check.

**Hint:** test empty input, no matches, repeated clicks, very long text, refresh, and cleared storage. These reveal bugs that the happy path misses.

### Day 9: Collaborate like a contributor

- Ask the teacher or a classmate to review an open PR; do not merge your own upstream PR.
- Review one contribution if a peer is available. Explain one thing that works and one specific improvement; otherwise the teacher can provide review feedback on your PR.
- Make a follow-up commit on the same PR branch to address feedback. Reply explaining what changed.
- After the teacher merges your PR, update your fork and local `main` using [CONTRIBUTING.md](CONTRIBUTING.md). Record the commands you used in your plan.

**Done when:** a reviewer can see a review discussion, your follow-up commit, and a clear response. Closing and reopening a PR is not needed to update it.

### Day 10: Make it showcase-ready

- Fix remaining required issues, remove the visible starter-status notice, and check every user-facing control works.
- Add a **My finished project** section at the top of your README with a short introduction, feature list, setup instructions, two screenshots in `docs/images/`, and known limitations. Keep the original lesson guide below it for future learners.
- Write `docs/REFLECTION.md`: explain one HTML/CSS/JS connection, one bug and its fix, one review improvement, and one future idea.
- Give a 3–5 minute demo: find an event, save it, show points, refresh, add a fictional event, and show one issue linked to a PR. Explain a piece of your own code.
- Open the handover PR. The teacher can host the static files after review; no hosting account or deployment workflow is needed from you.

## 8. The GitHub loop: repeat for each contribution

See [CONTRIBUTING.md](CONTRIBUTING.md) for synchronising and review details. For your first contribution, start with:

```sh
git switch main
git switch -c feat/day-01-project-plan
```

Make your changes, save, preview, and inspect them:

```sh
git status
git diff
git add docs/MY_PLAN.md index.html
git diff --cached --check
git diff --cached
git commit -m "Plan Campus Quest and personalise the introduction"
git push -u origin feat/day-01-project-plan
```

For later tasks, choose a descriptive new branch and stage only files you actually changed, such as `styles.css` or `js/app.js`. Do not reuse the Day 1 file list blindly. If Git requests sign-in when pushing, complete its browser or credential-manager flow; your GitHub account password is not an HTTPS Git password.

On GitHub, open **your fork**, then **Contribute → Open pull request** (or **Compare & pull request**). Check all four selections:

| Setting | Value |
| --- | --- |
| Base repository | `Mishael-2584/campus-quest` |
| Base branch | `main` |
| Head repository | `YOUR-USERNAME/campus-quest` |
| Compare branch | Your contribution branch |

Fill in the PR template with a useful title, explanation, exact test results, and `Closes #NUMBER` using the related **original repository** issue. A link alone does not mean an issue is complete: satisfy its acceptance checks. Wait for teacher review. Push feedback fixes to the same branch to update the PR automatically.

Prefer getting one dependent feature merged before starting the next branch. If review is delayed, keep related work on the current branch and tell the teacher which issues it covers; do not start a dependent branch from an out-of-date `main` or copy files between repositories.

## 9. Practise .gitignore safely

Create `private-notes.txt` with fictional notes and `.env` with `DEMO_VALUE=not-a-secret`. Then run:

```sh
git status
git check-ignore -v .env private-notes.txt
```

The files should be ignored. Do not commit them. Explain the matching rules to your teacher. This website needs no credentials and does not load `.env`. Ignore rules do not remove already committed files or protect exposed secrets. Review every staged diff before committing.

## 10. If something goes wrong

| Problem | Try this |
| --- | --- |
| `git` is not recognised | Install Git, restart the terminal, then run `git --version`. |
| `not a git repository` | Change into the cloned `campus-quest` folder. |
| Push permission denied | Check `git remote -v`: origin must be your fork. Confirm you signed in as its owner. |
| `code` is not recognised | Use your editor's File → Open Folder instead. |
| Page has no cards | Open Console, fix the first error, check script paths and data commas, then refresh. |
| Changes do not appear | Save the file, confirm you edited the previewed folder, and refresh. |
| Port 8000 already in use | Use `8001` in the server command and open the matching port/address. |
| Server fills the terminal | Use a second terminal for Git, or stop the server with Ctrl+C. |
| localStorage seems empty | Use the same browser and address; try a local server and check storage settings. |
| Push rejected after updates | Read CONTRIBUTING.md and ask for help if histories diverge; do not force-push. |
| Merge conflict | Stop, read the conflict section in CONTRIBUTING.md, and ask the teacher if unsure. |

## 11. Completion checklist and optional challenges

- [ ] Eight or more events, four or more categories, and a personalised theme.
- [ ] Responsive layout, semantic sections, labelled inputs, and keyboard support.
- [ ] Search and category work together with a count and empty state.
- [ ] Schedule saves/removes without duplicates and calculates points correctly.
- [ ] Saved schedule survives refresh and invalid storage does not crash the site.
- [ ] Event form validates input and renders text safely.
- [ ] Testing record, screenshots, reflection, and clear running instructions.
- [ ] Issues linked to PRs, review feedback addressed, and no private files committed.
- [ ] Teacher receives a working static site ready to review for hosting.

**Stretch goals — choose only after the checklist passes:** a light/dark theme; sort by time; warn about events at the same time; persist validated custom events; export a text schedule; or a clear-schedule confirmation. Propose a feature issue first. Avoid collecting personal data or adding a backend for this assignment.

Need a clue? Open [graduated hints](docs/HINTS.md). Teachers: use the [review guide and rubric](docs/TEACHER_GUIDE.md). Contributions use the [MIT licence](LICENSE).
