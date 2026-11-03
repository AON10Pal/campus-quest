# Campus Quest: teacher guide

## Scope and preparation

This is a two-week learning project with ten sessions of 60–90 minutes. The starter deliberately contains only a working event gallery. The student builds the interactive planner. Review the README with them and adjust pacing if JavaScript is new; reduce stretch goals before cutting core practice.

The student uses a different GitHub account and forks the public repository. Both local development and Codespaces are supported. Check local Git installation or Codespaces eligibility/usage before class. The static site requires no account system, API key, database, package installation, or student deployment.

The repository is intended for one student's contribution sequence. For several students, use separate exercise originals or explicitly coordinate feature ownership. Merging one student's complete implementation into main changes what later students receive. Preserve the `starter-v1` tag as the original baseline; create a fresh exercise repository from it if needed.

## Review rhythm

- Day 1: ask the student to trace data → renderer → HTML → CSS. Review the small setup PR quickly.
- Days 2–3: check content, semantics, labels, and narrow-screen layout before complex interactions.
- Days 4–5: review search composition and id-based schedule state; ask the student to predict an edge case.
- Days 6–7: inspect storage recovery and safe form rendering. Test invalid saved data and whitespace-only input.
- Days 8–9: give at least one specific, achievable review request. Have the student respond with a new commit and test evidence.
- Day 10: watch the demo, review the handover PR, and choose a finished version for hosting.

Merge dependent feature PRs in order so the student can sync main before creating the next branch. If a review is delayed, agree that related follow-up work can stay on the existing PR branch. Do not tell a beginner to start a dependent feature from stale main.

Use the numbered issues as milestones, not a demand for ten simultaneous branches. The project can use roughly six to ten small PRs; a cohesive PR may close multiple related issues when all acceptance checks pass. Request changes constructively and do not merge without the student's explanation and evidence.

## Assessment rubric (100 points)

| Area | Points | Evidence |
| --- | ---: | --- |
| HTML and content | 15 | Semantic sections, eight events, labels, navigation, meaningful copy. |
| CSS and usability | 15 | Consistent design, responsive layout, readable text, focus visibility. |
| JavaScript interactions | 25 | Combined filters, schedule state, correct totals, shared render logic. |
| Persistence and validation | 15 | Storage recovery, correct refresh behaviour, validated form, safe text rendering. |
| GitHub collaboration | 20 | Fork/branch workflow, useful commits, linked issues/PRs, review response, sync. |
| Evidence and explanation | 10 | Real test results, screenshots, reflection, demo, known limitations. |

Give credit for understood, working features. A student who can explain a small original solution has stronger evidence of learning than one who cannot explain a copied finished app. Encourage references, hints, and help; ask them to describe how they adapted what they learned.

## Questions for the demonstration

1. Which HTML element does the renderer update, and how does CSS find a card?
2. Why keep the full event array separate from filtered results?
3. Why save ids rather than copied card HTML?
4. What happens to the points total when an event is removed?
5. What is localStorage's scope, and what happens if its content is invalid?
6. Why use textContent for visitor-provided text?
7. How does a submit listener avoid a full page reload?
8. What is the difference between the fork, local clone, origin, and upstream?
9. How did review feedback change the code?
10. Which test exposed a bug, and how did the student confirm the fix?

## Hosting handover

After review, host the finished static project using `index.html`, `styles.css`, and `js/` with their relative paths intact. No build step or server-side secrets are needed. Add a live URL to the finished README when available. Check storage on the hosted origin; local preview selections do not transfer there.

Use fictional data only. The form is a browser-only demonstration and does not submit proposals to staff or store them in a shared database. Preserve that explanation in the finished site. Required custom events reset on refresh; only schedule ids persist. If the student implements custom-event persistence as a stretch goal, require validation of those stored objects as well.

## Suggested review comment

“The filter works for lowercase text. Please also try ROBOT and combine it with Arts. Add the results to your testing record, then explain how one function applies both control values.”

This is specific, testable, and invites understanding without supplying the whole solution.
