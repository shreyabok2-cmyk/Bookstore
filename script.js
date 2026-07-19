function logAnalytics(action) {
    console.log(`[Analytics] User interacted with Independent Bookstore Events Page - ${action}`);
}


const searchBtn = document.querySelector(".search-section button");
const searchInput = document.querySelector(".search-section input");

searchBtn.addEventListener("click", () => {
    const searchText = searchInput.value.toLowerCase().trim();
    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        
        card.style.display = title.includes(searchText) ? "block" : "none";
    });
    logAnalytics("Search");
});


const form = document.querySelector("form");
const eventsSection = document.querySelector(".events");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputs=eventForm.querySelectorAll("inputs");
    const name=input[0].value;
    const date=input[1].value;
    const location=input[2].value;

    const eventName = form.querySelector('input[placeholder="Event Name"]').value;
    const eventDate = form.querySelector('input[type="date"]').value;
    const eventLocation = form.querySelector('input[placeholder="Location"]').value;

    
    const newCard = document.createElement("div");
    newCard.classList.add("event-card");
    newCard.innerHTML = `
        <h3>${eventName}</h3>
        <p><strong>Date:</strong> ${eventDate}</p>
        <p><strong>Location:</strong> ${eventLocation}</p>
        <button>View Details</button>
    `;

    eventsSection.appendChild(newCard);
    form.reset(); 
    logAnalytics("Add Event");
});


document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.textContent === "View Details") {
        const card = e.target.closest(".event-card");
        const title = card.querySelector("h3").textContent;
        alert(`Viewing details for: ${title}`);
        logAnalytics("View Details");
    }
});



