# The hint ladder

Try the first clue, experiment, and explain what changed before reading the next. These are directions to investigate, not complete feature solutions. Keep browser Console open and fix the first error before chasing later ones.

## Reading the starter

1. Find the `event-grid` id in HTML and the selector that reads it in JavaScript.
2. Follow one event object from `events.js` into `createEventCard`.
3. Change one card's title in the data, save, and refresh. Then change `.event-card` padding in CSS. Which file controls content, and which controls appearance?

## Responsive layout

1. A narrow screen should be your starting layout. Stretch the browser slowly and notice when cards have room to sit beside each other.
2. CSS Grid can create columns. Investigate `grid-template-columns` and media queries, or `repeat`, `auto-fit`, and `minmax`.
3. Long event titles and form values should wrap rather than stretch the whole page. Check widths and `overflow-wrap` before hiding overflow.

## Search and categories

1. Use `input` for typing and `change` for a select. Confirm each listener fires with a temporary console message.
2. Think of two yes/no questions per event: does it match the search, and does it match the category? Keep it only when both are true.
3. Normalize both query and searchable text with `.toLowerCase()`. What should an empty query match? What should All categories match?
4. Keep `allEvents` separate from the filtered result. Later, the form should add to `allEvents`, and the same filter function should run again.

## Schedule and points

1. The selected ids are application **state**. The schedule HTML is a view of that state.
2. `includes`, `filter`, `find`, and `reduce` are useful array methods. A `Set` can prevent duplicate ids, but convert it to an array before JSON storage.
3. Derive total points from known selected events; do not repeatedly increment a total each time you render. Rendering should not change the selection.
4. Define one update path for buttons, schedule, and points. Test selecting an event, hiding it with a filter, then showing it again.
5. Button labels should reflect saved state. A toggle button can use `aria-pressed` too; keep that value consistent with the state.

## localStorage

1. Try storing and reading one harmless string in the browser Console. Use your own project key so other sites' data is not affected.
2. Serialize an array before saving and parse it when loading. Wrap reading, parsing, and writing in error handling.
3. Parsed data can be `null`, a number, an object, or an array with invalid elements. Validate the shape, allow only known ids, and deduplicate.
4. Load once before the first render; save after a selection changes. Do not reset storage to an empty array before loading it.
5. If storage fails, the planner should still work for the current page. A short non-blocking message can explain that selections cannot be remembered.
6. Custom events are session-only in the required version. Discard their unknown saved ids after reload. Optional persistence of custom events requires validating stored event objects too.

## Event form

1. Start with a labelled title input and a submit button. Use a real `<form>` and listen for `submit`, not only a button click.
2. `preventDefault()` prevents navigation/reload. Native constraints help, but a string of spaces can pass `required`; trim before accepting.
3. Choose limits and make them clear, such as title 60 characters, location 60, and description 200. Use the same rules in HTML and JavaScript.
4. A time should be a valid `HH:MM` value and a category must be from the approved list. Do not trust manipulated control values.
5. Create a unique id using a collision-resistant approach, or a checked counter. Do not use the title alone because two events may have the same title.
6. Keep points fixed at 10 for custom events. Use `createElement` and `textContent` for user text; do not concatenate it into HTML.
7. Refresh the current filtered results and announce success. If the new event does not match current filters, tell the visitor to clear them to see it.
8. Use a status region for success and a clear error message connected to the relevant field. Move focus to the invalid field when appropriate.

## Debugging

1. Reproduce the problem with the fewest actions possible.
2. Read the first Console error and open its file/line link.
3. Log the values going into a function. Are you expecting an array but receiving a string?
4. Change one thing, repeat the exact same check, then remove temporary logging.
5. If a recent change broke a working feature, inspect `git diff`. Do not delete random files or reset the repository.

## GitHub

1. A local commit is not uploaded until you push. A push to your fork is not a merge into the original.
2. Check the PR's base repository and compare branch before submitting.
3. A review fix is another commit on the same branch; pushing updates the open PR.
4. Link real issue numbers, not the day number unless those happen to be identical. Wait for a merge before expecting `Closes #NUMBER` to close an issue.

## Reference shelf

Use these as references, then explain your own solution rather than pasting code without understanding it.

- [MDN: Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [MDN: CSS layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout)
- [MDN: DOM scripting](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)
- [MDN: Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
