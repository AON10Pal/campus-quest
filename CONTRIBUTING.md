# Contribute to Campus Quest

You are contributing through your own fork. The teacher reviews and merges changes into the original repository. Be kind, explain your choices, and ask specific questions when stuck.

## Before coding

1. Read the numbered learning issue and its acceptance checks.
2. Comment with your intended approach. The teacher may assign issues; students without permissions can simply comment.
3. Start from an up-to-date `main`, then create a descriptive branch such as `feat/search-and-category` or `fix/empty-schedule`.
4. Keep each PR focused. Use fictional content and original or appropriately licensed assets.

## Set up the upstream remote once

Run `git remote -v`. `origin` should be your fork. If `upstream` is missing, add it:

```sh
git remote add upstream https://github.com/Mishael-2584/campus-quest.git
git remote -v
```

If upstream already exists, inspect its URL instead of running the add command again.

## Update after a PR is merged

Save and commit your current work before switching branches. If `git status` shows unfinished edits, finish them or ask your teacher how to set them aside first.

```sh
git fetch upstream
git switch main
git merge --ff-only upstream/main
git push origin main
git switch -c feat/next-feature
```

Replace `feat/next-feature` with a new branch name. If `--ff-only` fails, stop and ask the teacher to inspect the history; do not reset or force-push to make it disappear. These commands are intended for the lesson workflow where you keep your own `main` free of direct edits.

If another student is working on the same class repository, agree on who owns each issue and avoid editing the same function at the same time. This is a shared teaching repo: the teacher should decide how to handle multiple students' versions before merging competing feature implementations.

## Open and update a PR

Follow the README's GitHub loop. Target `Mishael-2584/campus-quest:main` from your fork's feature branch. Fill the PR template; link the relevant original issue using `Closes #NUMBER`. Check Files changed for unrelated edits or private information.

When feedback arrives, edit on that **same branch**, run relevant checks, commit, and push:

```sh
git status
git diff
# Stage the specific files you edited, then:
git commit -m "Address review feedback"
git push
```

The comment above is a reminder: run `git add` with your actual edited filenames before the commit. Reply to the reviewer with what changed and the repeated check. The original owner decides whether to merge. A feature issue closes automatically when a PR using a valid closing keyword is merged into the original default branch.

## Review a classmate's work

- Read the linked issue and the diff.
- Ask them to demonstrate the feature or test it together.
- Leave one concrete observation and, where useful, one actionable suggestion.
- Explain the reason: “The input needs a label so keyboard and screen-reader users can identify it” is more useful than “Fix HTML.”
- Do not approve work you have not read. If no classmate is available, ask the teacher to review yours.

## If there is a merge conflict

Conflicts mean Git needs help combining edits; they do not mean your work is lost. With a clean working tree on your feature branch, the teacher may guide you through:

```sh
git fetch upstream
git merge upstream/main
```

If Git reports conflicts, use your editor to inspect both versions. Agree on the intended result, remove conflict markers, save, preview, stage the resolved files, and commit the merge before pushing. To stop an unresolved merge and return to the pre-merge state, use `git merge --abort`. Ask before choosing a side you do not understand. Never force-push shared branches for this lesson.

## When reporting a bug

Use the bug issue template. Include repeatable steps, expected result, actual result, browser, and relevant console messages. Remove private details from screenshots. An improvement idea should describe the visitor benefit and acceptance checks before implementation.
