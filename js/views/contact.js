function renderContact() {
    const contact = window.cvData.contact;
  
    document.getElementById("app-view").innerHTML = `
      <section data-aos="fade-up">
        <h2>Kontak</h2>
        <p><strong>Nama:</strong> ${contact.nama}</p>
        <p><strong>Email Pribadi:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
        <p><strong>Email Kampus:</strong> <a href="mailto:${contact.emailKampus}">${contact.emailKampus}</a></p>
        <p><strong>No. HP:</strong> <a href="tel:${contact.noHp}">${contact.noHp}</a></p>
        <p><strong>Alamat:</strong> <a href="${contact.mapsLink}" target="_blank">${contact.alamat}</a></p>
        
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7911.125096106183!2d112.082419!3d-7.51344605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78384ff10fd631%3A0xbbf72555e5ea0248!2sSawahan%2C%20Kec.%20Lengkong%2C%20Kabupaten%20Nganjuk%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1746009849471!5m2!1sid!2sid" 
            width="100%" 
            height="350" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    `;
  }
  