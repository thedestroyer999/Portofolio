function loadRoute() {
    const hash = window.location.hash.replace("#", "") || "profile";
    highlightNav(hash);
  
    switch (hash) {
      case "profile":
        renderProfile();
        break;
      case "projects":
        renderProjects();
        break;
      case "skills":
        renderSkills();
        break;
        case "contact":
            renderContact();
            break;
      default:
        renderProfile();
    }
  }
  
  window.addEventListener("hashchange", loadRoute);
  window.addEventListener("load", loadRoute);
  