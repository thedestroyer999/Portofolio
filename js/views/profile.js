function renderProfile() {
    const { name, title, bio, photo } = cvData.profile;
    document.getElementById("app-view").innerHTML = `
      <div class="card" style="text-align:center">
        <img src="${photo}" class="profile-photo" alt="Foto Profil" />
        <h2>${name}</h2>
        <p><strong>${title}</strong></p>
        <p>${bio}</p>
      </div>
    `;
  }
  