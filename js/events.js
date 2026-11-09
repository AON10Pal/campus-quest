// Fictional festival data. Keep ids unique and stable when saving a schedule.
// Scripts are intentionally plain JavaScript: no packages or build tools needed.
const starterEvents = [
  { id: "robot-rally", title: "Robot Rally", category: "Tech", time: "09:00", location: "Innovation Lab", points: 20, description: "Build a cardboard robot concept and pitch its superpower." },
  { id: "street-art", title: "Colour the Campus", category: "Arts", time: "10:00", location: "Art Courtyard", points: 15, description: "Design a paper mural celebrating your dream school." },
  { id: "hoop-heroes", title: "Hoop Heroes", category: "Sports", time: "11:00", location: "Sports Court", points: 20, description: "Team up for a friendly basketball skills challenge." },
  { id: "open-mic", title: "Open Mic Orbit", category: "Arts", time: "12:00", location: "Main Stage", points: 15, description: "Share a poem, an acoustic tune, or a short comedy set." },
  { id: "eco-sprint", title: "Eco Sprint", category: "Community", time: "13:00", location: "School Garden", points: 25, description: "Invent a practical way to reduce waste at school." },
  { id: "code-breakers", title: "Code Breakers", category: "Tech", time: "14:00", location: "Computer Room", points: 25, description: "Solve a team puzzle trail using logic and curiosity." },
  { id: "diwali-lights", title: "Festival of Lights", category: "Arts", time: "15:00", location: "Culture Courtyard", points: 20, description: "Explore Diwali traditions through rangoli patterns and cultural displays." },
  { id: "global-dance", title: "Dance Around the World", category: "Arts", time: "16:00", location: "Main Stage", points: 25, description: "Discover traditional dances from different countries in a cultural showcase." }
];