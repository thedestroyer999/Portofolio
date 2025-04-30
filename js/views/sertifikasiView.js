function sertifikasiView(data) {
    return `
      <h2>Sertifikasi</h2>
      <p>${data.sertifikasi.nama}</p>
      
      <h2>Media Sosial</h2>
      <p><a href="${data.sertifikasi.github}" target="_blank">GitHub</a></p>
    `;
  }
  