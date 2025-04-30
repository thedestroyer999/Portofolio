// Render profile
const profileSection = document.getElementById('profile');
profileSection.innerHTML = `
  <img src="${cvData.profile.photo}" alt="Foto Profil" class="profile-photo" />
  <h1>${cvData.profile.name}</h1>
  <h3>${cvData.profile.title}</h3>
  <p>${cvData.profile.bio}</p>
`;

// Render projects
const projectsSection = document.getElementById('projects');
projectsSection.innerHTML = `<h2>Proyek yang Pernah Dikerjakan</h2>`;
cvData.projects.forEach(project => {
  const projectDiv = document.createElement('div');
  projectDiv.className = 'project';
  projectDiv.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    ${Array.isArray(project.image)
      ? project.image.map(img => `<img src="${img}" alt="Project Image">`).join('')
      : `<img src="${project.image}" alt="Project Image">`}
    <p><strong>Job:</strong> ${project.job}</p>
  `;
  projectsSection.appendChild(projectDiv);
});

// Skills
const skillsSection = document.createElement('section');
skillsSection.innerHTML = `<h2>Keahlian</h2><ul>${cvData.skills.keahlian.map(skill => `<li>${skill}</li>`).join('')}</ul>`;
document.body.appendChild(skillsSection);

// Education
const edu = cvData.skills.pendidikan;
const eduSection = document.createElement('section');
eduSection.innerHTML = `
  <h2>Pendidikan</h2>
  <p><strong>${edu.sekolah}</strong></p>
  <p>${edu.jurusan}</p>
`;
document.body.appendChild(eduSection);

// Experience
const expSection = document.createElement('section');
expSection.innerHTML = `<h2>Pengalaman Kerja</h2>` + 
  `<p><strong>${cvData.skills.pengalaman.posisi}</strong></p>` +
  `<p>${cvData.skills.pengalaman.deskripsi}</p>`;
document.body.appendChild(expSection);

// Certifications
const certSection = document.createElement('section');
certSection.innerHTML = `<h2>Sertifikasi</h2>`;
cvData.skills.sertifikasi.forEach(cert => {
  const certDiv = document.createElement('div');
  certDiv.className = 'certification';
  certDiv.innerHTML = `
    <p><strong>${cert.judul}</strong></p>
    <img src="${cert.foto}" alt="Sertifikat ${cert.judul}" style="max-width: 300px;">
  `;
  certSection.appendChild(certDiv);
});
document.body.appendChild(certSection);

// Social
const socialSection = document.createElement('section');
socialSection.innerHTML = `<h2>Media Sosial</h2>`;
cvData.skills.sosial.forEach(sosmed => {
  socialSection.innerHTML += `<p><a href="${sosmed.url}" target="_blank">${sosmed.platform}</a></p>`;
});
document.body.appendChild(socialSection);
