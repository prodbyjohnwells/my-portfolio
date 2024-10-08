document.addEventListener('DOMContentLoaded', () => {
    // Load default section
    loadSection('home');
});

function loadSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
}

// Adding the HTML content dynamically
const sections = {
    'home': `
        <div id="home" class="section active">
            <div class="headshot">
                <img src="path/to/your-headshot.jpg" alt="Headshot">
            </div>
            <div class="about-me">
                <h1>About Me</h1>
                <p>Welcome to my professional portfolio. Here is some information about me...</p>
            </div>
        </div>
    `,
    'data-analytics': `
        <div id="data-analytics" class="section">
            <h1>Data Analytics</h1>
            <p>Information and projects related to data analytics will go here.</p>
        </div>
    `,
    'programming': `
        <div id="programming" class="section">
            <h1>Programming</h1>
            <p>Information and projects related to programming will go here.</p>
        </div>
    `,
    'music': `
        <div id="music" class="section">
            <h1>Music</h1>
            <p>Information and projects related to music will go here.</p>
        </div>
    `,
    'contact': `
        <div id="contact" class="section">
            <h1>Contact</h1>
            <p>Contact details and form will go here.</p>
        </div>
    `
};

// Load the section content dynamically
function loadSection(sectionId) {
    document.getElementById('content').innerHTML = sections[sectionId];
    // Update active class on navigation
    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === sectionId);
    });
}
