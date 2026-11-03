# Test your quest

These are **final-project** checks. Missing features are expected in the starter. Repeat the checks relevant to each PR and run the complete list before the final demonstration. There are no test packages to install.

## First preview: starter smoke check

Open the site using either README setup path. Confirm the hero, six cards, six-event count, working Explore anchor, and no Console errors. At this point only one card column is expected. Search, schedule, storage, and a form do not exist yet.

## Final feature checks

| Check | Action | Expected result |
| --- | --- | --- |
| Data and layout | Open the finished site | At least eight events in four categories; no missing text or Console errors. |
| Case-insensitive search | Search `robot`, then `ROBOT` | Robot Rally appears both times. |
| Search scope | Search a word that appears only in one description | Its event appears. |
| Combined filters | Search `robot`, then select Arts | No results; helpful empty state and count zero. |
| Reset | Clear search and choose All categories | All events return. |
| Save and totals | Save Robot Rally and Colour the Campus | Two unique selections; total 35. |
| Duplicate prevention | Use save/remove repeatedly | Each id appears at most once; labels match state. |
| Filter independence | Save an event, hide it with a filter, then reset | The event remains saved. |
| Remove | Remove Robot Rally, leaving Colour the Campus | One event; total 15. |
| Empty schedule | Remove everything | Empty message, total zero, no error. |
| Persistence | Save a starter event and refresh the same preview URL | Selection and total are restored. |
| Clear | Clear the schedule and refresh | Schedule remains empty. |
| Bad storage | Set your own schedule storage key to `not-json` in developer tools, then reload | Site runs; invalid data is ignored/recovered. |
| Wrong storage shape | Try `null`, `{}`, and an array with duplicates/unknown ids under that same key | No crash; only known unique event ids survive. |
| Unavailable storage | If your browser allows it, block site storage and reload | Current-page interactions still work; persistence failure is handled. |
| Required fields | Submit an empty form | Helpful validation; no event added. |
| Whitespace | Enter spaces for the title/location | Rejected after trimming. |
| Bounds | Try text beyond your documented maximum lengths | Blocked or clearly rejected; layout stays usable. |
| Valid event | Submit valid fictional values | One new card, fixed 10 points, no reload, clear success feedback. |
| Filters and new events | Add an event that does not match current filters | Feedback explains filters; clear them to find the event. |
| New event interactions | Search, filter, and save the new event | Features work with newly added data. |
| Safe text | Use `<b>My Event</b>` as a title | Literal characters appear; no bold HTML is created. |
| Custom event refresh | Refresh after saving a session-only custom event | Custom event disappears as documented; unknown selection id is safely discarded. |

When manipulating storage, change only this project's key. Do not clear unrelated browser data. Record anything you could not test rather than claiming it passed.

## Layout and accessibility checks

- Test near 375px and 1280px viewport widths; check a long event title and a long location. No unintended horizontal scroll.
- Zoom to 200%; check text, controls, and navigation still work.
- Use Tab, Shift+Tab, Enter, Space, and the select's arrow keys. Every control is reachable, focus is visible, and there is no keyboard trap.
- Use the Skip to events link. Confirm it takes you to the main content.
- Verify every input has a visible, associated label. Placeholder text alone is not a label.
- Confirm saved state and validation are understandable without relying only on colour.
- Check success, error, and result-count messages are in appropriate accessible status regions. Try a screen reader if one is available; record if this was not tested.
- Check text contrast with your browser's accessibility tools. Inspect the final page after each palette change.
- Ask another person to perform three actions without guidance. Record where they hesitate.

## Record evidence

Create `docs/TEST_RESULTS.md` and use this template. Add rows as needed.

```md
# Test results

Date:
Browser/version:
Preview method and screen widths:
Branch or commit tested:

| Check | Exact input/actions | Expected | Actual | Pass/fail/not tested |
| --- | --- | --- | --- | --- |
| Combined filters | robot + Arts | Empty state, count 0 | ... | ... |

## Bugs and retests
- Issue link:
- Fix:
- Repeated check and result:

## Known limitations / untested areas
- ...
```

Screenshots support visual checks but do not prove that interactions work. Write the actual steps and results too.
