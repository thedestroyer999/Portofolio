document.getElementById("navbar").innerHTML = `
  <a href="#profile" class="nav-link" id="nav-profile">Profil</a>
  <a href="#projects" class="nav-link" id="nav-projects">Proyek</a>
  <a href="#skills" class="nav-link" id="nav-skills">Keahlian</a>
  <a href="#contact" class="nav-link" id="nav-contact">Kontak</a>
`;


function highlightNav(route) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + route);
  });
}
