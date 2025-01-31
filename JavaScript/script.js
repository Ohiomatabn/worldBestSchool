import { dashboard } from "./dashboard.js";


//Rendering the dashboard HTML
let dashboardHTml = '';

dashboard.forEach((dashboard) => {
  dashboardHTml += `
    <a href="${dashboard.url}"
      <div class="card">
        <h3>${dashboard.name}</h3>
        <img src="Icons/${dashboard.image}" alt="MY Profile" />
      </div>
    </a>
  `
});

document.querySelector('.js-dashboard-container').innerHTML = dashboardHTml;