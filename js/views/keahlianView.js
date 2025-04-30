function keahlianView(data) {
    return `
      <h2>Keahlian</h2>
      <ul>
        ${data.keahlian.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    `;
  }
  