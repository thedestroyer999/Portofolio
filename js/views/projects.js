function renderProjects() {
    const html = cvData.projects.map(p => `
      <div class="card" style="margin-bottom: 20px; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="images-container" style="display: flex; overflow-x: auto; gap: 10px; padding-bottom: 10px;">
          ${Array.isArray(p.image) ? p.image.map(img => `<img src="${img}" alt="${p.title}" style="max-width: 100%; border-radius:8px; height: auto;" />`).join('') : `<img src="${p.image}" alt="${p.title}" style="max-width: 100%; border-radius:8px; height: auto;" />`}
        </div>
        <p><strong>Job:</strong> ${p.job}</p>
      </div>
    `).join("");
    document.getElementById("app-view").innerHTML = html;
  }
  