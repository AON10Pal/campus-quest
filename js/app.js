"use strict";

// STARTER: This code connects data → JavaScript → HTML → CSS.
// Read it before adding features. README.md explains each project milestone.
const eventGrid = document.querySelector("#event-grid");
const resultCount = document.querySelector("#result-count");

function createEventCard(event) {
  const card = document.createElement("article");
  card.className = "event-card";

  const category = document.createElement("span");
  category.className = "category";
  category.textContent = event.category;

  const title = document.createElement("h3");
  title.textContent = event.title;

  const description = document.createElement("p");
  description.textContent = event.description;

  const details = document.createElement("p");
  details.className = "event-details";
  details.textContent = `${event.time} · ${event.location} · ${event.points} quest points`;

  card.append(category, title, description, details);
  // TASK: Add a real button to save/remove this event using its stable id.
  return card;
}

function renderEvents(events) {
  eventGrid.replaceChildren();
  events.forEach((event) => eventGrid.append(createEventCard(event)));
  resultCount.textContent = `${events.length} events to explore`;
  // TASK: Provide a helpful empty state when events.length is zero.
}

renderEvents(starterEvents);

// YOUR MISSIONS (see README.md for hints and acceptance checks):
// 1. Search + category filtering, working together.
// 2. Save/remove event ids and render My Schedule + total quest points.
// 3. Persist the schedule with localStorage and handle invalid saved data.
// 4. Validate an event form and add a new event without reloading the page.
// Never insert user form values into innerHTML. Follow the textContent pattern.
