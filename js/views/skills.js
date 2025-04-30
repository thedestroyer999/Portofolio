function renderSkills() {
    const { keahlian, pendidikan, pengalaman, sertifikasi, sosial } = cvData.skills;
    document.getElementById("app-view").innerHTML = `
      <div class="card">
        <h3>Keahlian</h3>
        <ul>${keahlian.map(k => `<li>${k}</li>`).join("")}</ul>
      </div>
      <div class="card">
        <h3>Pendidikan</h3>
        <p>${pendidikan.sekolah}</p>
        <p>${pendidikan.jurusan}</p>
      </div>
      <div class="card">
        <h3>Pengalaman Kerja</h3>
        <p><strong>${pengalaman.posisi}</strong></p>
        <p>${pengalaman.deskripsi}</p>
      </div>
      <div class="card">
        <h3>Sertifikasi</h3>
        <ul>${sertifikasi.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>
      <div class="card">
        <h3>Media Sosial</h3>
        ${sosial.map(s => `<a href="${s.url}" target="_blank">${s.platform}</a>`).join("<br>")}
      </div>
    `;
  }
  