function homeView(data) {
    return `
      <h2>${data.profile.name}</h2>
      <h4>${data.profile.title}</h4>
      <p>${data.profile.description}</p>
      <h3>Proyek yang Pernah Dikerjakan</h3>
      ${data.profile.projects.map(p => `
        <div class="project">
          <strong>${p.title}</strong>
          <p>${p.description}</p>
        </div>
      `).join('')}
    `;
  }
  