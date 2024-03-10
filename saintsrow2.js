// Load missions data from JSON file
function loadMissions() {
  fetch('./data2.json')
    .then(response => response.json())
    .then(data => {
      // Container for missions div
      const missionsContainer = document.querySelector('#missions');
      // Container for sidebar
      const sidebarList = document.querySelector('.sidebar ul');
      // List each mission
      data.missions.forEach(mission => {
        // Create mission content
        const missionElement = document.createElement('div');
        // Assign class name for CSS
        missionElement.className = 'mission';
        missionElement.innerHTML = `
          <h3 id="${mission.id}" class="clickable" onclick="updateRating('${mission.id}'); scrollToRating();">${mission.name}</h3>
          <img src="${mission.image}" alt="${mission.name}" class="mission-image">
          <p>${mission.description}</p>
        `;
        // Add to DOM
        missionsContainer.appendChild(missionElement);
        // Create sidebar link
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        // Add tags
        link.href = `#${mission.id}`;
        link.textContent = mission.name;
        // Add to DOM
        listItem.appendChild(link);
        sidebarList.appendChild(listItem);
      });
    })
    .catch(error => console.log('Error loading the missions:', error));
}

// Function to update the ratings based on the mission selected
function updateRating(missionId) {
  // Ratings for website
  var ratings = {
    mission1: { Difficulty: "★★★★☆", Creativity: "★★★★★", Engagement: "★★★☆☆", Replayability: "★★★★☆" },
    mission2: { Difficulty: "★★★★☆", Creativity: "★★★☆☆", Engagement: "★★★☆☆", Replayability: "★★★★★" },
    mission3: { Difficulty: "★★★★★", Creativity: "★★★★★", Engagement: "★★★☆☆", Replayability: "★★★☆☆" }
  };
  
  // Assign ratings
  var ratingSection = document.getElementById('rating');
  ratingSection.innerHTML = `<h2>Fans Rating</h2>
    <p>Difficulty: <span class="stars">${ratings[missionId].Difficulty}</span></p>
    <p>Creativity: <span class="stars">${ratings[missionId].Creativity}</span></p>
    <p>Engagement: <span class="stars">${ratings[missionId].Engagement}</span></p>
    <p>Replayability: <span class="stars">${ratings[missionId].Replayability}</span></p>`;
}

// Scroll to rating if link is clicked
function scrollToRating() {
  const ratingSection = document.getElementById('rating');
  window.scrollTo({ top: ratingSection.offsetTop, behavior: 'smooth' });
}

