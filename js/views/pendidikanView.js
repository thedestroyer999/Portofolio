function pendidikanView(data) {
    // Mendapatkan data pendidikan dan pengalaman dari objek data
    const pendidikan = data.skills?.pendidikan || {};
    const pengalaman = data.skills?.pengalaman || {};
  
    // Membuat HTML untuk pendidikan dan pengalaman
    return `
      <h2>Pendidikan</h2>
      <ul>
        <li><strong>SD:</strong> ${pendidikan?.SD?.namaSekolah || "Data tidak tersedia"} (${pendidikan?.SD?.tahunMulai || "Tahun tidak tersedia"} - ${pendidikan?.SD?.tahunSelesai || "Tahun tidak tersedia"})</li>
        <li><strong>SMP:</strong> ${pendidikan?.SMP?.namaSekolah || "Data tidak tersedia"} (${pendidikan?.SMP?.tahunMulai || "Tahun tidak tersedia"} - ${pendidikan?.SMP?.tahunSelesai || "Tahun tidak tersedia"})</li>
        <li><strong>SMK:</strong> ${pendidikan?.SMK?.namaSekolah || "Data tidak tersedia"} - ${pendidikan?.SMK?.jurusan || "Jurusan tidak tersedia"} (${pendidikan?.SMK?.tahunMulai || "Tahun tidak tersedia"} - ${pendidikan?.SMK?.tahunSelesai || "Tahun tidak tersedia"})</li>
        <li><strong>Kuliah:</strong> ${pendidikan?.Kuliah?.namaUniversitas || "Data tidak tersedia"} - ${pendidikan?.Kuliah?.jurusan || "Jurusan tidak tersedia"} (${pendidikan?.Kuliah?.tahunMulai || "Tahun tidak tersedia"} - ${pendidikan?.Kuliah?.tahunSekarang || "Tahun tidak tersedia"})</li>
      </ul>
  
      <h2>Pengalaman Kerja</h2>
      <p><strong>${pengalaman?.posisi || "Posisi tidak tersedia"}</strong></p>
      <p>${pengalaman?.deskripsi || "Deskripsi tidak tersedia"}</p>
    `;
  }
  