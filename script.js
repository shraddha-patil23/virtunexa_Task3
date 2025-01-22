const eventForm = document.getElementById('event-form');
const timeline = document.getElementById('timeline');
const rsvpForm = document.getElementById('rsvp-form');
const rsvpFeedback = document.getElementById('rsvp-feedback');

eventForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const description = document.getElementById('event-description').value;

    // Create a new event item
    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');

    // Add content to the event item
    eventItem.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>${description}</p>
    `;

    // Add the event item to the timeline
    timeline.appendChild(eventItem);

    // Reset the form
    eventForm.reset();
});

// RSVP handling
rsvpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get RSVP form values
    const name = document.getElementById('rsvp-name').value;
    const option = document.getElementById('rsvp-option').value;

    // Display feedback
    rsvpFeedback.innerHTML = `<p><strong>${name}</strong>, your RSVP has been recorded as: <strong>${option}</strong></p>`;

    // Reset the form
    rsvpForm.reset();
});
